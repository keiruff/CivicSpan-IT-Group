import Link from 'next/link'
import Hero from '@/components/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dell Business Laptop Setup & Deployment | CivicSpan IT Group',
  description: 'Enterprise Dell laptop provisioning and deployment through our Dell Technologies Partner ecosystem. Security hardening, imaging, and business configuration.',
}

export default function DellBusinessLaptopsPackage() {
  const perfectFor = [
    'Businesses standardizing on Dell Latitude or Vostro hardware',
    'Organizations needing consistent laptop imaging across multiple units',
    'Teams requiring security hardening before devices reach end users',
    'Companies without internal IT staff for hardware procurement and setup',
  ]

  const includes = [
    'Dell Latitude or Vostro business laptop procurement (via Dell Technologies Partner)',
    'Custom OS image deployment with your standard configuration',
    'BitLocker full-disk encryption enablement',
    'Windows Defender and security baseline policy application',
    'Corporate Wi-Fi and VPN profile provisioning',
    'Standard business application suite installation',
    'Asset tagging and device inventory documentation',
    'Azure AD or Active Directory domain enrollment',
    'Ready-to-deploy packaging with end-user documentation',
  ]

  return (
    <>
      <Hero
        title="Dell Business Laptop Setup"
        description="Enterprise-grade Dell laptops provisioned, secured, and deployment-ready through our Dell Technologies Partner ecosystem."
      />

      <main className="relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(rgba(34,197,94,0.01)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Main Info Column */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-4">
                Business-Grade Hardware, Properly Configured
              </h2>
              <p className="text-blue-100 leading-7 text-[1.05rem]">
                Buying a Dell laptop off the shelf and handing it to an employee is not a deployment strategy. Without imaging, hardening, and policy enforcement, that hardware is both insecure and inconsistent with your broader IT environment.
              </p>
              <p className="text-blue-100 leading-7 mt-4 text-[1.05rem]">
                As a Dell Technologies Partner, CivicSpan IT Group can source business-class hardware and deliver fully provisioned, security-hardened laptops to your team. Every device leaves our hands with the same consistent image, the same security baseline, and the same documentation.
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
              <p className="text-xs text-neutral-muted mt-6 p-4 rounded-xl border border-white/5 bg-white/3">
                <strong className="text-neutral-light">Note:</strong> Hardware purchase is separate from the setup service fee. Pricing shown reflects the provisioning and configuration service only.
              </p>
            </div>
          </div>

          {/* Pricing & CTA Column */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-green-500/25 bg-gradient-to-br from-slate-900/95 to-slate-950/80 p-8 shadow-2xl backdrop-blur relative">
              <span className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/20">
                Dell Partner
              </span>

              <p className="text-neutral-muted uppercase tracking-[0.16em] text-xs font-extrabold mb-1">
                Setup Service
              </p>
              <h3 className="text-4xl font-black text-white mb-4">From $495</h3>
              <p className="text-xs text-neutral-muted leading-relaxed mb-6">
                *Per device. Volume pricing available for 3+ units. Hardware cost is separate.
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
                href="/contact?package=dell-business-laptops"
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
            Full Fleet Deployment
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Deploying 10, 20, or 50+ devices?
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            We build automated deployment pipelines using Windows Autopilot and Microsoft Intune to scale hardware rollouts without proportional labor costs.
          </p>
          <Link href="/contact" className="btn mt-6">
            Request a Custom Quote
          </Link>
        </section>
      </main>
    </>
  )
}
