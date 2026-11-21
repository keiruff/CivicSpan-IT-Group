import { hardwareQuoteConfirmation } from '@/lib/hardware-quote-confirmation'
import { deploymentOptions, hardwareVendors, procurementOptions } from '@/lib/hardware-quote'
import sgMail from '@sendgrid/mail'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ success: false, error: 'Invalid submission.' }, { status: 400 })
    }

    const isQuote = body.kind === 'hardware-quote'
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

    // If SENDGRID is configured, send via SendGrid. Otherwise fallback to console logging.
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
    const SENDGRID_FROM = process.env.SENDGRID_FROM
    const SENDGRID_TO = process.env.SENDGRID_TO || process.env.SENDGRID_FROM

    if (SENDGRID_API_KEY && SENDGRID_FROM && SENDGRID_TO) {
      try {
        sgMail.setApiKey(SENDGRID_API_KEY)

        await sgMail.send({
          to: SENDGRID_TO,
          from: {
            email: SENDGRID_FROM,
            name: 'CivicSpan Website',
          },
          ...(isEmail ? { replyTo: email } : {}),
          subject: `Website Contact: ${subject}`,
          text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`,
        })
      } catch (err) {
        console.error('Error sending via SendGrid:', err instanceof Error ? err.message : 'Unknown provider error')
        return NextResponse.json(
          { success: false, error: 'Failed to send message via email provider.' },
          { status: 502 }
        )
      }

      if (isQuote) {
        try {
          await sgMail.send({
            to: email,
            from: { email: SENDGRID_FROM, name: 'CivicSpan IT Group' },
            replyTo: SENDGRID_TO,
            ...hardwareQuoteConfirmation,
          })
        } catch {
          // The procurement inbox already received the quote request.
          console.error('SendGrid could not send the hardware quote confirmation.')
        }
      }
    } else if (isQuote) {
      return NextResponse.json(
        { success: false, error: 'Online quote delivery is unavailable. Email info@civicspanitgroup.com to request a quote.' },
        { status: 503 },
      )
    } else {
      // Fallback: log to server console (existing behavior)
      console.log('--- NEW CONTACT INQUIRY (logged only) ---')
      console.log(`Date: ${new Date().toISOString()}`)
      console.log(`Name: ${name}`)
      console.log(`Email: ${email}`)
      console.log(`Company: ${company || 'N/A'}`)
      console.log(`Subject: ${subject}`)
      console.log(`Message: ${message}`)
      console.log('------------------------------------------')
    }

    return NextResponse.json(
      { success: true, message: 'Message received successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error handling contact submission:', error)
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
