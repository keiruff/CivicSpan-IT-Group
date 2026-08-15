'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { FormEvent, Suspense, useState } from 'react'

const needs = [
  'Your Wi-Fi, email, or Microsoft 365 keeps acting up and you do not have an IT person.',
  'You are setting up a home office and want it done right the first time.',
  'You need new computers, printers, or hardware and do not know what to buy.',
  'Your small business needs ongoing tech support without hiring a full-time IT team.',
  'You want your systems documented so you are not the only one who knows how anything works.',
]

const services = {
  'For individuals & home offices': [
    'Home office setup and tech shopping guidance',
    'Computer, printer, and Wi-Fi troubleshooting',
    'Device setup and account help for Microsoft 365, email, and cloud storage',
  ],
  'For small businesses': [
    'Ongoing IT support with no long-term contract required',
    'Microsoft 365 setup, security, and management',
    'New computer and hardware purchasing from authorized Dell, Epson, and Cisco partners',
    'Simple documentation so your team is not stuck if something breaks',
  ],
}

function GetStartedContent() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const source = searchParams.get('src')?.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 80) || 'direct'

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.contact,
          subject: `Everyday IT Help inquiry (${source})`,
          message: formData.message,
        }),
      })

      if (!response.ok) throw new Error('Submission failed')

      setFormData({ name: '', contact: '', message: '' })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="relative overflow-hidden px-4 py-16 sm:py-24">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(34,197,94,0.16),transparent)]" />
        <div className="relative max-w-4xl mx-auto text-left">
          <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-4">Everyday IT Help</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white mb-5">Real IT Help, Without the Runaround</h1>
          <p className="text-lg sm:text-xl text-neutral-light leading-relaxed mb-8 max-w-3xl">
            From setting up your home office to fixing the tech headaches slowing your small business down, CivicSpan IT Group is a real person you can actually reach, not a ticket queue.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-start">
            <a href="#get-help" className="px-7 py-3.5 rounded-lg bg-primary hover:bg-primary-dark text-dark font-bold shadow-lg shadow-green-500/25 transition-all hover:-translate-y-0.5">Get Help Now</a>
            <a href="#what-we-do" className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border-2 border-white bg-dark-secondary/95 text-white font-bold shadow-lg shadow-black/30 hover:border-primary hover:bg-dark-secondary transition-all hover:-translate-y-0.5">See What We Do</a>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 border-y border-white/10 bg-dark-secondary/90">
        <div className="max-w-4xl mx-auto">
          <p className="mb-4 text-center text-xs font-bold tracking-wider uppercase text-neutral-muted">Trusted credentials</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="inline-flex h-12 w-40 items-center justify-center rounded-lg border border-green-500/30 bg-dark px-3 text-center text-xs font-semibold text-neutral-light">Woman-Owned Small Business</span>
            <span className="inline-flex h-12 w-40 items-center justify-center rounded-lg border border-green-500/30 bg-dark px-3"><img src="/virginia-swam-certified-business-logo.jpg" alt="Virginia SWaM Certified" className="max-h-9 max-w-full object-contain" /></span>
            <span className="inline-flex h-12 w-40 items-center justify-center rounded-lg border border-green-500/30 bg-dark px-3"><img src="/dell-technologies-authorized-partner.svg" alt="Dell Technologies Authorized Partner" className="max-h-8 max-w-full object-contain" /></span>
            <span className="inline-flex h-12 w-40 items-center justify-center rounded-lg border border-white/70 bg-white px-3 shadow-sm"><img src="/epson-logo.svg" alt="Epson Authorized Partner" className="max-h-8 max-w-full object-contain" /></span>
            <span className="inline-flex h-12 w-40 items-center justify-center rounded-lg border border-white/70 bg-white px-3 shadow-sm"><img src="/cisco-partner-logo.svg" alt="Cisco Partner" className="max-h-8 max-w-full object-contain" /></span>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 border-y border-white/10 bg-dark/70">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white text-center mb-8">You might need us if...</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {needs.map((need) => (
              <li key={need} className="flex gap-3 rounded-xl border border-slate-700 bg-dark-secondary/85 p-5 text-neutral-light leading-relaxed transition-colors hover:border-primary/50 hover:bg-dark-secondary">
                <span className="text-primary font-bold" aria-hidden="true">✓</span><span>{need}</span>
              </li>
            ))}
          </ul>
          <div className="text-center mt-8"><a href="#get-help" className="text-primary font-bold hover:underline">Tell us what&apos;s going on →</a></div>
        </div>
      </section>

      <section id="what-we-do" className="px-4 py-14 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10"><p className="text-primary font-bold text-xs uppercase tracking-wider mb-2">Plain-language support</p><h2 className="text-3xl font-extrabold text-white">What we actually do</h2></div>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(services).map(([heading, items]) => (
              <article key={heading} className="rounded-2xl border border-green-500/15 bg-dark-secondary/75 p-7">
                <h3 className="text-xl font-bold text-white mb-5">{heading}</h3>
                <ul className="space-y-4 text-neutral-light">
                  {items.map((item) => <li key={item} className="flex gap-3"><span className="text-primary">•</span><span>{item}</span></li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="text-center text-neutral-light mt-8">Need something bigger, like network infrastructure, engineering software support, or government contract work? <Link href="/services" className="text-primary font-bold hover:underline">See our full services →</Link></p>
        </div>
      </section>

      <section className="px-4 py-12 bg-dark/35 border-y border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Why CivicSpan</h2>
          <p className="text-neutral-light leading-relaxed">CivicSpan is a Virginia-based, woman-owned small business. We started because too many small businesses and individuals get stuck between figuring it out themselves and hiring an expensive enterprise IT firm. We are the option in between: real help, fast, without the runaround.</p>
          <p className="mt-6 text-sm font-semibold text-primary">Woman-Owned Small Business · Virginia SWaM Certified · Authorized Dell, Epson & Cisco Partner</p>
        </div>
      </section>

      <section id="get-help" className="px-4 py-14 sm:py-20">
        <div className="max-w-2xl mx-auto rounded-2xl border border-green-500/20 bg-dark-secondary/85 p-6 sm:p-9">
          <div className="text-center mb-7"><h2 className="text-3xl font-extrabold text-white mb-3">Tell us what you need</h2><p className="text-neutral-light">We&apos;ll get back to you fast.</p></div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm font-medium text-neutral-light">Name<input required name="name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} className="mt-2 w-full rounded-lg border border-green-500/20 bg-dark/50 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/40" autoComplete="name" /></label>
            <label className="block text-sm font-medium text-neutral-light">Email or phone<input required name="contact" value={formData.contact} onChange={(event) => setFormData({ ...formData, contact: event.target.value })} className="mt-2 w-full rounded-lg border border-green-500/20 bg-dark/50 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/40" autoComplete="email" placeholder="you@example.com or (540) 760-2020" /></label>
            <label className="block text-sm font-medium text-neutral-light">What do you need help with?<textarea required name="message" value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} rows={4} className="mt-2 w-full resize-none rounded-lg border border-green-500/20 bg-dark/50 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/40" /></label>
            <button type="submit" disabled={status === 'submitting'} className="w-full rounded-lg border-2 border-primary bg-primary px-6 py-3.5 font-bold text-dark shadow-lg shadow-green-500/30 transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:border-primary-dark disabled:cursor-not-allowed disabled:opacity-60">{status === 'submitting' ? 'Sending...' : 'Get Help Now'}</button>
          </form>
          {status === 'success' && <p className="mt-4 text-center text-primary" role="status">Thanks. Your message is on its way.</p>}
          {status === 'error' && <p className="mt-4 text-center text-red-300" role="alert">We could not send that. Please call (540) 760-2020 or email info@civicspanitgroup.com.</p>}
          <p className="mt-7 text-center text-sm text-neutral-light">Or reach us directly: <a href="tel:+15407602020" className="text-primary font-bold hover:underline">(540) 760-2020</a> · <a href="mailto:info@civicspanitgroup.com" className="text-primary font-bold hover:underline">info@civicspanitgroup.com</a></p>
        </div>
      </section>

      <p className="px-4 pb-3 text-center text-sm text-neutral-muted">Also selling tech accessories and gear? <a href="https://shop.civicspanitgroup.com" className="text-primary hover:underline">Check out our shop →</a></p>
    </>
  )
}

export default function GetStartedPage() {
  return (
    <Suspense fallback={<div className="min-h-[50vh]" />}>
      <GetStartedContent />
    </Suspense>
  )
}
