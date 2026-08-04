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

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address format.' },
        { status: 400 }
      )
    }

    // If SENDGRID is configured, send via SendGrid. Otherwise fallback to console logging.
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
    const SENDGRID_FROM = process.env.SENDGRID_FROM
    const SENDGRID_TO = process.env.SENDGRID_TO || process.env.SENDGRID_FROM

    if (SENDGRID_API_KEY && SENDGRID_FROM && SENDGRID_TO) {
      try {
        const payload = {
          personalizations: [
            {
              to: [{ email: SENDGRID_TO }],
              subject: `Website Contact: ${subject}`,
            },
          ],
          from: { email: SENDGRID_FROM, name: 'CivicSpan Website' },
          content: [
            {
              type: 'text/plain',
              value: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`,
            },
          ],
        }

        const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${SENDGRID_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })

        if (!res.ok) {
          const text = await res.text()
          console.error('SendGrid error:', res.status, text)
          return NextResponse.json(
            { success: false, error: 'Failed to send message via email provider.' },
            { status: 502 }
          )
        }
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
