import Link from 'next/link'
import Hero from '@/components/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Office IT Setup & Network Installation | CivicSpan IT Group',
  description: 'Complete IT infrastructure setup for new offices, relocations, and expansions. Structured cabling, secure Wi-Fi, printer installation, and network configuration.',
}

export default function NewOfficeITSetupPackage() {
  const perfectFor = [
    'Businesses relocating to a new office space',
    'Expanding teams opening a second or satellite location',
    'Organizations building out a new workspace from scratch',
    'Retail or service locations needing reliable, secure connectivity',
  ]

  const includes = [
    'Network infrastructure assessment and topology planning',
    'Business-grade router and firewall configuration',
    'Secure Wi-Fi deployment with SSID segmentation (staff vs. guest)',
    'Network switch installation and VLAN configuration',
    'Structured cabling coordination and cable management',
    'Network printer and MFD installation and configuration',
    'Workstation and device IP addressing and network enrollment',
    'Internet service provider coordination and modem setup',
    'Network diagram documentation delivered at project close',
  ]

  return (
    <>
      <Hero
        title="New Office IT Setup"
        description="Complete network infrastructure and technology deployment for office relocations, expansions, and new locations."
      />

      <main className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(rgba(34,197,94,0.01)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Main Info Column */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Move In Connected, Not Scrambling
              </h2>
              <p className="text-blue-100 leading-7 text-[1.05rem]">
                A new office without proper IT infrastructure isn&apos;t a fresh start — it&apos;s a liability. Consumer routers, unmanaged switches, and ad-hoc cable runs create security gaps and reliability problems that compound over time.
              </p>
              <p className="text-blue-100 leading-7 mt-4 text-[1.05rem]">
                CivicSpan IT Group designs and deploys business-grade network infrastructure for your new space — before your team arrives. From structured cabling and firewall configuration to Wi-Fi segmentation and printer setup, we ensure your new office is connected, secure, and fully documented from day one.
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
                Infrastructure
              </span>

              <p className="text-neutral-muted uppercase tracking-[0.16em] text-xs font-extrabold mb-1">
                Flat-Rate Solution
              </p>
              <h3 className="text-4xl font-black text-white mb-4">From $2,500</h3>
              <p className="text-xs text-neutral-muted leading-relaxed mb-6">
                *Final pricing depends on square footage, number of drops, and hardware requirements.
              </p>

              <div className="border-t border-white/5 pt-6 mb-6">
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

              <div className="border-t border-white/5 pt-6 mb-8">
                <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-3">What Happens Next</h4>
                <ol className="space-y-3">
                  {["Request a quote & describe your needs", "We schedule a discovery call", "Scope confirmed — we get to work"].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-slate-300">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 border border-primary/30 text-primary font-bold text-[10px] flex items-center justify-center">{i + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <Link
                href="/contact?package=new-office-it-setup"
                className="w-full text-center block px-6 py-3.5 bg-primary hover:bg-primary-dark text-dark font-bold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="text-center rounded-[28px] border border-slate-400/15 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.15),transparent_40%),rgba(15,23,42,0.85)] p-10 sm:p-12 shadow-xl backdrop-blur mt-20 relative z-10">
          <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-3">
            Complex Build-Out?
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Multi-floor, multi-site, or specialized infrastructure needs?
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            We scope custom infrastructure projects including server room builds, SD-WAN deployments, and multi-site network unification for organizations with complex requirements.
          </p>
          <Link href="/contact" className="btn mt-6">
            Request a Custom Quote
          </Link>
        </section>
      </main>
    </>
  )
}
