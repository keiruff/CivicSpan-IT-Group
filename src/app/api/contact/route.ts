import sgMail from '@sendgrid/mail'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, subject, message } = body

    // Server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields (name, email, subject, message).' },
        { status: 400 }
      )
    }

    // Accept either an email address or phone number for low-friction inquiries.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^[+\d][\d\s().-]{6,}$/
    const isEmail = emailRegex.test(email)
    const isPhone = phoneRegex.test(email)
    if (!isEmail && !isPhone) {
      return NextResponse.json(
        { success: false, error: 'Enter a valid email address or phone number.' },
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
        console.error('Error sending via SendGrid:', err)
        return NextResponse.json(
          { success: false, error: 'Failed to send message via email provider.' },
          { status: 502 }
        )
      }
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
