import Hero from '@/components/Hero'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authorized Vendor Partnerships for Procurement | CivicSpan IT Group',
  description:
    'CivicSpan IT Group is an authorized partner across Dell, Epson, Cisco, and TD SYNNEX, giving engineering, government-adjacent, and small business clients procurement, deployment, and support under one accountable vendor of record.',
}

const partnerships = [
  {
    icon: '🖥️',
    badgeSrc: '/dell-technologies-authorized-partner.svg',
    badgeAlt: 'Dell Technologies Authorized Partner badge',
    title: 'Dell Technologies Partner',
    body: 'Endpoint procurement, deployment, and lifecycle management for workstations, laptops, and infrastructure hardware, sized for engineering workflows and government-adjacent compliance requirements.',
  },
  {
    icon: '🖨️',
    title: 'Epson Authorized Partner',
    body: 'Print, scan, and imaging hardware procurement and support, including large-format and production-grade equipment for engineering and design workflows.',
  },
  {
    icon: '🌐',
    title: 'Cisco Partner',
    body: 'Networking and infrastructure hardware to support secure, reliable connectivity, from office deployments to engineering environments with demanding uptime needs.',
  },
  {
    icon: '📦',
    title: 'TD SYNNEX Authorized Reseller',
    body: 'Broad-line distribution access across thousands of manufacturers, giving CivicSpan the reach to source and fulfill hardware needs beyond our core partner lines, without adding vendors to your accounts payable list.',
  },
]

const reasons = [
  {
    icon: '⚡',
    title: 'Fewer Vendors, Less Overhead',
    body: 'Consolidate hardware procurement, deployment, and support under one accountable point of contact instead of managing multiple reseller relationships.',
  },
  {
    icon: '🏛️',
    title: 'Built for eVA & SAM.gov Environments',
    body: 'As a Virginia SWaM-certified, eVA Registered, and SAM.gov Registered vendor, CivicSpan fits directly into government and government-adjacent procurement processes.',
  },
  {
    icon: '📋',
    title: 'Documentation Included',
    body: 'Every hardware deployment comes with the same documentation standard CivicSpan applies across all engagements, asset records, configuration notes, and handoff-ready runbooks.',
  },
  {
    icon: '🤝',
    title: 'Right-Sized for Small Teams',
    body: "No minimum order thresholds or enterprise-only account requirements, CivicSpan brings authorized procurement access to engineering firms, nonprofits, and small businesses that don't have in-house purchasing power.",
  },
]

const procurementSteps = [
  { step: 'Assess', body: 'We understand your hardware needs, budget, and timeline.' },
  { step: 'Source', body: 'We quote through the right authorized channel, Dell, Epson, Cisco, or TD SYNNEX, for the best fit.' },
  { step: 'Deploy', body: 'Hardware arrives configured, imaged, and ready for your environment.' },
  { step: 'Document', body: 'You receive clear asset records and configuration documentation.' },
]

export default function PartnersPage() {
  return (
    <>
      <Hero
        title="Authorized Vendor Partnerships for Procurement"
        description="One vendor of record. Four authorized supply chains."
      />

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16">
            <p className="text-neutral-light text-base sm:text-lg leading-relaxed">
              CivicSpan is directly authorized across the manufacturers and distributors that infrastructure, engineering, and government-adjacent teams already depend on. That means procurement, deployment, and support don&apos;t get scattered across resellers, they stay with one accountable, SWaM-certified vendor who understands your environment.
            </p>
          </div>

          <div className="mb-20">
            <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-3">Our Partnerships</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10">Authorized procurement channels</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerships.map((partner) => (
                <article
                  key={partner.title}
                  className="h-full rounded-2xl border border-green-500/15 bg-dark-secondary/70 p-7 hover:border-primary/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {partner.badgeSrc ? (
                      <Image
                        src={partner.badgeSrc}
                        alt={partner.badgeAlt ?? partner.title}
                        width={240}
                        height={70}
                        className="w-40 sm:w-52 flex-shrink-0 rounded-sm bg-white"
                      />
                    ) : (
                      <span className="text-3xl flex-shrink-0">{partner.icon}</span>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{partner.title}</h3>
                      <p className="text-neutral-muted leading-relaxed">{partner.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mb-20 rounded-3xl border border-green-500/15 bg-dark-secondary/60 p-8 sm:p-12">
            <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-3">Why This Matters for Your Organization</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10">Procurement without reseller sprawl</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{reason.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-base mb-2">{reason.title}</h3>
                    <p className="text-neutral-muted leading-relaxed">{reason.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-3">How Procurement Works With CivicSpan</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10">A documented path from need to handoff</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {procurementSteps.map((item, index) => (
                <article
                  key={item.step}
                  className="rounded-2xl border border-green-500/15 bg-dark-secondary/70 p-6 hover:border-primary/40 transition-colors"
                >
                  <span className="text-primary font-extrabold text-xs tracking-[0.18em] uppercase">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-xl font-bold text-white mt-4 mb-3">{item.step}</h3>
                  <p className="text-neutral-muted text-sm leading-relaxed">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-green-500/20 bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Start a Procurement Conversation</h2>
            <p className="text-neutral-light max-w-2xl mx-auto mb-8 leading-relaxed">
              Tell us what you need to source, deploy, or standardize, and CivicSpan will help route the procurement through the right authorized channel.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary hover:bg-primary-dark text-dark rounded-lg font-bold transition-all duration-300 hover:-translate-y-0.5"
            >
              Start a Procurement Conversation →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
