import Link from 'next/link'
import Hero from '@/components/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Employee Technology Package | CivicSpan IT Group',
  description: 'Get new hires productive on Day One with a fully configured laptop, business email, Microsoft 365 accounts, security policies, and onboarding support.',
}

export default function NewEmployeeTechnologyPackage() {
  const perfectFor = [
    'Growing small businesses bringing on new staff',
    'Remote or hybrid teams needing consistent onboarding',
    'Organizations with turnover requiring fast hardware redeployment',
    'Managers who need new hires operational without IT delays',
  ]

  const includes = [
    'Laptop imaging with standard business OS configuration',
    'Microsoft 365 account creation and license assignment',
    'Professional business email setup (name@yourdomain.com)',
    'OneDrive for Business personal drive provisioning',
    'Microsoft Teams enrollment and channel access',
    'Security policy application (BitLocker, screen lock, password policy)',
    'Domain join or Azure AD registration',
    'Standard business application installation (Office suite, PDF tools, etc.)',
    'Employee onboarding checklist and quick-start guide',
  ]

  return (
    <>
      <Hero
        title="New Employee Technology Package"
        description="Onboard new hires with a fully configured, secure workstation — ready to work on Day One."
      />

      <main className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(rgba(34,197,94,0.01)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Main Info Column */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Stop Losing the First Week to IT Setup
              </h2>
              <p className="text-blue-100 leading-7 text-[1.05rem]">
                A new hire&apos;s first week sets the tone for their entire experience. Nothing undermines confidence faster than spending it waiting on a laptop that won&apos;t connect, accounts that aren&apos;t active, or emails that don&apos;t work.
              </p>
              <p className="text-blue-100 leading-7 mt-4 text-[1.05rem]">
                CivicSpan IT Group delivers a turnkey onboarding package — hardware configured, accounts provisioned, security policies applied, and applications installed — so your new employee walks in ready to contribute on Day One.
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
                Onboarding
              </span>

              <p className="text-neutral-muted uppercase tracking-[0.16em] text-xs font-extrabold mb-1">
                Flat-Rate Solution
              </p>
              <h3 className="text-4xl font-black text-white mb-4">From $695</h3>
              <p className="text-xs text-neutral-muted leading-relaxed mb-6">
                *Per employee. Volume pricing available for 3+ simultaneous onboards.
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
                href="/contact?package=new-employee-technology"
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
            Scaling Your Team?
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Need a repeatable onboarding process for your organization?
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            We build standardized onboarding templates and deployment playbooks so every new hire gets the same consistent, secure setup every time.
          </p>
          <Link href="/contact" className="btn mt-6">
            Request a Custom Quote
          </Link>
        </section>
      </main>
    </>
  )
}
