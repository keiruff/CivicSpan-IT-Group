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

    // Mock processing the email / logging the contact form lead
    console.log('--- NEW CONTACT INQUIRY ---')
    console.log(`Date: ${new Date().toISOString()}`)
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Company: ${company || 'N/A'}`)
    console.log(`Subject: ${subject}`)
    console.log(`Message: ${message}`)
    console.log('---------------------------')

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
