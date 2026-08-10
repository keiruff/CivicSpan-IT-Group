import Hero from '@/components/Hero'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authorized Vendor Partnerships for Procurement | CivicSpan IT Group',
  description:
    'CivicSpan IT Group is an authorized partner across Dell, Epson, Cisco, Ergotron, and TD SYNNEX, giving engineering, government-adjacent, and small business clients procurement, deployment, and support under one accountable vendor of record.',
}

type Partnership = {
  icon: string
  title: string
  body: string
  badge?: {
    src: string
    alt: string
    className?: string
  }
}

const partnerships: Partnership[] = [
  {
    icon: '🖥️',
    badge: {
      src: '/dell-technologies-authorized-partner.svg',
      alt: 'Dell Technologies Authorized Partner badge',
      className: 'w-40 sm:w-52',
    },
    title: 'Dell Technologies Partner',
    body: 'Endpoint procurement, deployment, and lifecycle management for workstations, laptops, and infrastructure hardware, sized for engineering workflows and government-adjacent compliance requirements.',
  },
  {
    icon: '🖨️',
    badge: {
      src: '/epson-logo.svg',
      alt: 'Epson logo',
      className: 'w-32 sm:w-40 px-4 py-3',
    },
    title: 'Epson Authorized Partner',
    body: 'Print, scan, and imaging hardware procurement and support, including large-format and production-grade equipment for engineering and design workflows.',
  },
  {
    icon: '🌐',
    title: 'Cisco Partner',
    body: 'Networking and infrastructure hardware to support secure, reliable connectivity, from office deployments to engineering environments with demanding uptime needs.',
  },
  {
    icon: '🧍',
    title: 'Ergotron Partner',
    body: 'Ergonomic carts, mounts, monitor arms, and sit-stand workspace equipment for healthcare, education, office, and technical environments.',
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

const partnerServicePackages = [
  {
    title: 'Dell Endpoint Deployment Package',
    partner: 'Dell Technologies',
    href: 'https://www.dell.com/en-us/lp/business-solutions',
    summary: 'Business laptops, workstations, docks, monitors, warranty planning, deployment preparation, and asset documentation.',
    includes: ['Latitude and Precision hardware scoping', 'Warranty and lifecycle guidance', 'Endpoint setup and handoff documentation'],
  },
  {
    title: 'Cisco Network Readiness Package',
    partner: 'Cisco',
    href: 'https://www.cisco.com/site/us/en/products/index.html',
    summary: 'Network hardware planning for secure offices, segmented environments, refresh projects, and reliable connectivity.',
    includes: ['Switching, routing, and wireless scoping', 'Small office and engineering network planning', 'Configuration documentation and rollout support'],
  },
  {
    title: 'Epson Print & Imaging Package',
    partner: 'Epson',
    href: 'https://epson.com/For-Work',
    summary: 'Business print, scan, imaging, and large-format equipment planning for offices, engineering teams, and public-sector workflows.',
    includes: ['Printer and scanner requirement review', 'Large-format workflow support', 'Deployment and user handoff planning'],
  },
  {
    title: 'Ergotron Workspace Package',
    partner: 'Ergotron',
    href: 'https://www.ergotron.com/en-us/products',
    summary: 'Ergonomic monitor arms, carts, mounts, and sit-stand workspace equipment planning for modern work environments.',
    includes: ['Workspace and mounting requirement review', 'Healthcare, education, and office fit planning', 'Deployment coordination and asset records'],
  },
  {
    title: 'Complete Partner Procurement Bundle',
    partner: 'Dell, Cisco, Epson, Ergotron, and TD SYNNEX',
    href: 'https://h1bg1p-j7.myshopify.com/',
    summary: 'A bundled procurement and deployment package for teams that need endpoint hardware, networking, print/imaging, ergonomic equipment, and documentation through one vendor of record.',
    includes: ['Multi-vendor hardware and licensing scoping', 'Quote coordination and deployment planning', 'Asset, warranty, and support documentation'],
    featured: true,
  },
]

export default function PartnersPage() {
  return (
    <>
      <Hero
        title="Authorized Vendor Partnerships for Procurement"
        description="One vendor of record. Multiple authorized supply chains."
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
                    {partner.badge ? (
                      <Image
                        src={partner.badge.src}
                        alt={partner.badge.alt}
                        width={240}
                        height={70}
                        className={`${partner.badge.className ?? 'w-40 sm:w-52'} flex-shrink-0 rounded-sm bg-white object-contain`}
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

          <div className="mb-20">
            <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-3">Partner Service Packages</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Procurement packages built around authorized partner lines</h2>
            <p className="text-neutral-light max-w-4xl mb-10 leading-relaxed">
              Start with a focused partner package or combine the partner lines into one scoped procurement and deployment bundle. Each package keeps vendor product research, quoting, deployment planning, and documentation connected through CivicSpan.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {partnerServicePackages.map((pkg) => (
                <article
                  key={pkg.title}
                  className={`rounded-2xl border p-7 transition-colors ${
                    pkg.featured
                      ? 'border-primary/40 bg-primary/10 lg:col-span-2'
                      : 'border-green-500/15 bg-dark-secondary/70 hover:border-primary/40'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                    <div>
                      <p className="text-primary text-xs font-extrabold uppercase tracking-[0.16em] mb-2">{pkg.partner}</p>
                      <h3 className="text-2xl font-extrabold text-white">{pkg.title}</h3>
                    </div>
                    <a
                      href={pkg.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center justify-center rounded-lg border border-primary/40 px-4 py-2 text-sm font-bold text-primary hover:bg-primary/10 transition-colors"
                    >
                      View Partner Products ↗
                    </a>
                  </div>

                  <p className="text-neutral-light leading-relaxed mb-5">{pkg.summary}</p>

                  <ul className="grid gap-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-neutral-muted leading-6">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
