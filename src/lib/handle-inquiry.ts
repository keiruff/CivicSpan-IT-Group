import { hardwareQuoteConfirmation } from '@/lib/hardware-quote-confirmation'
import { deploymentOptions, hardwareVendors, procurementOptions } from '@/lib/hardware-quote'
import sgMail from '@sendgrid/mail'
import { NextResponse } from 'next/server'

export async function handleInquiry(request: Request, quoteOnly = false) {
  const body = await request.json().catch(() => null)
  try {
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ success: false, error: 'Invalid submission.' }, { status: 400 })
    }

    const isQuote = quoteOnly || body.kind === 'hardware-quote'
    const { name, email, company, subject, message } = isQuote ? parseHardwareQuote(body) : body

    // Server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: isQuote ? 'Complete the required quote fields and select a valid project type and timeline.' : 'Missing required fields (name, email, subject, message).' },
        { status: 400 }
      )
    }

    // Accept either an email address or phone number for low-friction inquiries.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^[+\d][\d\s().-]{6,}$/
    const isEmail = emailRegex.test(email)
    const isPhone = phoneRegex.test(email)
    if (!isEmail && (isQuote || !isPhone)) {
      return NextResponse.json(
        { success: false, error: isQuote ? 'Enter a valid work email.' : 'Enter a valid email address or phone number.' },
        { status: 400 }
      )
    }

    const { SENDGRID_API_KEY, SENDGRID_FROM, SENDGRID_TO } = process.env
    if (!SENDGRID_API_KEY?.trim() || !SENDGRID_FROM?.trim() || !SENDGRID_TO?.trim()) {
      console.error('Contact email delivery is not configured.')
      return NextResponse.json(
        { success: false, error: 'Online delivery is unavailable. Please email info@civicspanitgroup.com.' },
        { status: 503 }
      )
    }

    try {
      sgMail.setApiKey(SENDGRID_API_KEY)
      await sgMail.send({
        to: SENDGRID_TO,
        from: { email: SENDGRID_FROM, name: 'CivicSpan Website' },
        ...(isEmail ? { replyTo: email } : {}),
        subject: `Website Contact: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`,
      })
    } catch {
      console.error('SendGrid could not accept the website inquiry.')
      return NextResponse.json(
        { success: false, error: 'Failed to send message via email provider.' },
        { status: 502 }
      )
    }

    const response = { success: true, message: 'Message received successfully!' }
    if (!isQuote) return NextResponse.json(response)

    try {
      await sgMail.send({
        to: email,
        from: { email: SENDGRID_FROM, name: 'CivicSpan IT Group' },
        replyTo: SENDGRID_TO,
        ...hardwareQuoteConfirmation(quoteSummary(body)),
      })
      return NextResponse.json({ ...response, confirmationAccepted: true })
    } catch {
      console.error('SendGrid could not accept the hardware quote confirmation.')
      return NextResponse.json({ ...response, confirmationAccepted: false })
    }
  } catch {
    console.error('Error handling contact submission.')
    return NextResponse.json(
      { success: false, error: 'Failed to process submission. Please try again later.' },
      { status: 500 }
    )
  }
}

function parseHardwareQuote(body: Record<string, unknown>) {
  const field = (key: string, limit = 254) => {
    const value = body[key]
    return typeof value === 'string' && value.length <= limit ? value.trim() : ''
  }
  const name = field('name')
  const email = field('email')
  const company = field('company')
  const zip = field('zip')
  const procurement = field('procurement')
  const timeline = field('timeline')
  const quantity = field('quantity')
  const specifications = field('specifications', 4000)
  const allowedVendors = hardwareVendors.map(vendor => vendor.name)
  const vendors = body.vendors
  const valid = company && /^\d{5}(?:-\d{4})?$/.test(zip) && quantity && specifications
    && procurementOptions.some(option => option === procurement)
    && deploymentOptions.some(option => option === timeline)
    && Array.isArray(vendors) && vendors.length <= allowedVendors.length
    && vendors.every(vendor => allowedVendors.some(allowed => allowed === vendor))

  return {
    name,
    email,
    company,
    subject: 'Business Hardware Quote',
    message: valid ? [
      `Procurement role: ${field('role') || 'Not provided'}`,
      `Direct phone: ${field('phone') || 'Not provided'}`,
      `Delivery ZIP: ${zip}`,
      `Procurement designation: ${procurement}`,
      `Hardware vendors: ${vendors.join(', ') || 'Needs guidance'}`,
      `Estimated quantities: ${quantity}`,
      `Deployment timeline: ${timeline}`,
      '',
      'Technical requirements and configuration notes:',
      specifications,
    ].join('\n') : '',
  }
}

function quoteSummary(body: Record<string, unknown>) {
  return {
    name: String(body.name).trim(),
    company: String(body.company).trim(),
    procurement: String(body.procurement).trim(),
    vendors: Array.isArray(body.vendors) ? body.vendors.join(', ') || 'Needs guidance' : 'Needs guidance',
    timeline: String(body.timeline).trim(),
  }
}
