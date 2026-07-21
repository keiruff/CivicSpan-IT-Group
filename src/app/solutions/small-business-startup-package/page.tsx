import Link from 'next/link'
import Hero from '@/components/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Small Business IT Setup & Startup Package | CivicSpan IT Group',
  description: 'Complete flat-rate IT setup service for small business startups. Secure professional business email, cloud file storage, printer installation, security hardening, and high-performance Dell business laptops.',
}

export default function SmallBusinessStartupPackage() {
  const perfectFor = [
    'New businesses launching their operations',
    'Home offices establishing a professional presence',
    'Small offices (1–10 employees) needing structured setup',
    'Teams transitioning from consumer setups to business-grade tech',
  ]

  const includes = [
    'Dell Latitude Business Laptop (enterprise-ready hardware)',
    'Microsoft 365 Business environment provisioning',
    'Professional business email configuration (your-name@your-domain.com)',
    'OneDrive & cloud document storage migration',
    'Office printer, Wi-Fi, and peripheral installation',
    'Security hardening (BitLocker, Windows Defender, strong password policy)',
    'Data transfer from your existing computer to the new workstation',
    'Operating system optimization, updates, and driver installation',
    '30 days of high-touch post-setup support',
  ]

  return (
    <>
      <Hero
        title="Small Business Startup Package"
        description="Everything your business needs to get up and running with secure, professional technology."
      />

      <main className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(rgba(34,197,94,0.01)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Main Info Columns */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Deploy Secure, Professional IT in a Single Step
              </h2>
              <p className="text-blue-100 leading-7 text-[1.05rem]">
                Setting up a new office or launching a startup is complex enough without having to worry about configuring firewalls, setting up email systems, or ordering the right computers.
              </p>
              <p className="text-blue-100 leading-7 mt-4 text-[1.05rem]">
                CivicSpan IT Group provides a flat-rate solution that handles everything from hardware procurement and OS configuration to email systems setup and data migration. We ensure your business-grade hardware is correctly hardened and configured from day one.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">What&apos;s Included</h3>
              <ul className="grid grid-cols-1 gap-3">
                {includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-light leading-relaxed">
                    <span className="text-primary font-bold text-lg mt-0.5">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing & CTA Column */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-green-500/25 bg-gradient-to-br from-slate-900/95 to-slate-950/80 p-8 shadow-2xl backdrop-blur relative">
              <span className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20">
                SEO Package
              </span>

              <p className="text-neutral-muted uppercase tracking-[0.16em] text-xs font-extrabold mb-1">
                Flat-Rate Solution
              </p>
              <h3 className="text-4xl font-black text-white mb-4">From $2,500</h3>
              <p className="text-xs text-neutral-muted leading-relaxed mb-6">
                *Final pricing depends on hardware choices and specific Microsoft licensing requirements.
              </p>

              <div className="border-t border-white/5 pt-6 mb-8">
                <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-3">Perfect For:</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {perfectFor.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/contact?package=small-business-startup"
                className="w-full text-center block px-6 py-3.5 bg-primary hover:bg-primary-dark text-dark font-bold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Custom Quote CTA at bottom */}
        <section className="text-center rounded-[28px] border border-slate-400/15 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.15),transparent_40%),rgba(15,23,42,0.85)] p-10 sm:p-12 shadow-xl backdrop-blur mt-20 relative z-10">
          <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-3">
            Custom Workspaces
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Need a different setup configuration?
          </h2>

          <p className="max-w-2xl mx-auto mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            We customize hardware, software combinations, and support timelines to align with your business workflows.
          </p>

          <Link href="/contact" className="btn mt-6">
            Request a Custom Quote
          </Link>
        </section>
      </main>
    </>
  )
}
