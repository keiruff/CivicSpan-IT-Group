'use client'

import Hero from '@/components/Hero'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        alert('Message sent successfully! We\'ll be in touch soon.')
        setFormData({ name: '', email: '', company: '', subject: '', message: '' })
      }
    } catch (error) {
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Hero
        title="Get In Touch"
        description="Let's discuss how we can help transform your IT infrastructure."
      />

      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-dark-secondary border border-green-500/15 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-neutral-light font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark/50 border border-green-500/20 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-neutral-light font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark/50 border border-green-500/20 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-neutral-light font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-dark/50 border border-green-500/20 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-neutral-light font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark/50 border border-green-500/20 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-neutral-light font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-dark/50 border border-green-500/20 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 resize-none"
                    placeholder="Tell us more..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-dark font-bold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                <p className="text-neutral-light mb-6">
                  Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-dark-secondary/50 border border-green-500/15 rounded-lg p-6">
                  <h4 className="text-primary font-semibold mb-2">Email</h4>
                  <a href="mailto:info@civicspanitgroup.com" className="text-neutral-light hover:text-primary transition-colors">
                    info@civicspanitgroup.com
                  </a>
                </div>

                <div className="bg-dark-secondary/50 border border-green-500/15 rounded-lg p-6">
                  <h4 className="text-primary font-semibold mb-2">Location</h4>
                  <p className="text-neutral-light">Virginia, USA</p>
                </div>

                <div className="bg-dark-secondary/50 border border-green-500/15 rounded-lg p-6">
                  <h4 className="text-primary font-semibold mb-2">Response Time</h4>
                  <p className="text-neutral-light">Usually within 24 hours during business hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
