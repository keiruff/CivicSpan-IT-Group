'use client'

import { useState, type FormEvent } from 'react'
import { deploymentOptions, hardwareVendors, procurementOptions } from '@/lib/hardware-quote'

const contactFields = [
  { name: 'name', label: 'Full name', type: 'text', autoComplete: 'name', required: true },
  { name: 'role', label: 'Job title or procurement role', type: 'text', autoComplete: 'organization-title', required: false },
  { name: 'company', label: 'Company or agency', type: 'text', autoComplete: 'organization', required: true },
  { name: 'email', label: 'Work email', type: 'email', autoComplete: 'email', required: true },
  { name: 'phone', label: 'Direct phone', type: 'tel', autoComplete: 'tel', required: false },
  { name: 'zip', label: 'Delivery or installation ZIP code', type: 'text', autoComplete: 'postal-code', required: true },
] as const

const inputClass = 'mt-2 w-full rounded-lg border border-white/20 bg-dark px-3 py-2 text-white focus:ring-2 focus:ring-primary'
const legendClass = 'mb-4 text-lg font-bold text-white'

export default function HardwareQuoteForm() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState<{ confirmationAccepted: boolean } | null>(null)
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setError('')
    const form = new FormData(event.currentTarget)
    const payload = { ...Object.fromEntries(form), vendors: form.getAll('vendors'), kind: 'hardware-quote' }

    try {
      const response = await fetch('/api/hardware-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json()
      if (!response.ok || !result.success) {
        setError(result.error || 'The request could not be sent. Please try again.')
        return
      }
      setSubmitted({ confirmationAccepted: result.confirmationAccepted === true })
    } catch {
      setError('The request could not be sent. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <div role="status">
        {submitted && <p className="rounded-xl border border-primary/30 bg-primary/10 p-6 text-white">
          <strong>Quote request received.</strong> CivicSpan will review your specifications and follow up at your work email.
          {!submitted.confirmationAccepted && ' We couldn’t send the automatic confirmation email.'}
        </p>}
      </div>
      {!submitted && <form onSubmit={handleSubmit} aria-busy={submitting} className="space-y-8 rounded-2xl border border-white/15 bg-dark-secondary p-5 text-neutral-light sm:p-8">
        <fieldset>
          <legend className={legendClass}>Organization and contact</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactFields.map(({ name, label, type, autoComplete, required }) => (
              <label key={name} className="block text-sm font-semibold">
                {label}{required ? ' *' : ' (optional)'}
                <input name={name} type={type} autoComplete={autoComplete} required={required} pattern={name === 'zip' ? '[0-9]{5}(?:-[0-9]{4})?' : undefined} maxLength={name === 'zip' ? 10 : 254} className={inputClass} />
              </label>
            ))}
          </div>
        </fieldset>

        <label className="block text-sm font-semibold">
          <span className={legendClass}>Procurement designation *</span>
          <select name="procurement" defaultValue="" required className={inputClass}>
            <option value="" disabled>Select a project type</option>
            {procurementOptions.map(option => <option key={option}>{option}</option>)}
          </select>
        </label>

        <fieldset>
          <legend className={legendClass}>Hardware vendors</legend>
          <p className="mb-3 text-sm">Select any that apply, or leave blank if you need help choosing.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {hardwareVendors.map(({ name, details }) => (
              <label key={name} className="flex items-start gap-3 rounded-lg border border-white/15 p-3">
                <input type="checkbox" name="vendors" value={name} className="mt-1 accent-primary" />
                <span><strong className="block text-white">{name}</strong><span className="text-sm">{details}</span></span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="space-y-4">
          <legend className={legendClass}>Volume and specifications</legend>
          <label className="block text-sm font-semibold">
            Estimated unit quantities *
            <input name="quantity" required maxLength={254} placeholder="25 laptops, 4 switches" className={inputClass} />
          </label>
          <label className="block text-sm font-semibold">
            Technical requirements and configuration notes *
            <textarea name="specifications" required rows={5} maxLength={4000} placeholder="Model numbers, processor preferences, memory and storage, networking, and deployment requirements" className={inputClass} />
          </label>
        </fieldset>

        <fieldset className="space-y-2">
          <legend className={legendClass}>Deployment timeline *</legend>
          {deploymentOptions.map(option => (
            <label key={option} className="flex items-center gap-3 text-sm">
              <input name="timeline" type="radio" value={option} required className="accent-primary" />
              {option}
            </label>
          ))}
        </fieldset>

        {error && <p role="alert" className="text-red-200">{error}</p>}
        <button type="submit" disabled={submitting} className="btn w-full disabled:cursor-wait disabled:opacity-60">
          {submitting ? 'Sending request…' : 'Submit Hardware Quote Request'}
        </button>
      </form>}
    </>
  )
}
