import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Capabilities Statement for IT Support, Security, and Procurement | CivicSpan IT Group',
  description: 'Review CivicSpan IT Group capabilities for engineering technology support, cybersecurity, modernization, governance, and authorized procurement through Dell, Epson, Cisco, and TD SYNNEX.',
}

const companyHighlights = [
  {
    label: 'UEI',
    value: 'PMVWGHNEZYK4',
  },
  {
    label: 'CAGE Code',
    value: '20NK8',
  },
  {
    label: 'SWaM ID',
    value: '845315',
  },
  {
    label: 'SBA Certs',
    value: 'WOSB & EDWOSB',
  },
  {
    label: 'eVA Vendor Code',
    value: 'SUP356399',
  },
  {
    label: 'PA Supplier',
    value: 'Supplier ID: 0000570359\nSAP #: 570359',
  },
  {
    label: 'PA Turnpike Vendor',
    value: 'Vendor Code: 10662',
  },
]

const procurementPartners = [
  {
    icon: '🖥️',
    title: 'Dell Technologies Partner',
    body: 'Endpoint procurement, deployment, and lifecycle management for laptops, workstations, and infrastructure hardware sized for engineering workflows.',
  },
  {
    icon: '🖨️',
    title: 'Epson Authorized Partner',
    body: 'Print, scan, and imaging hardware procurement and support, including production-grade equipment for engineering and design environments.',
  },
  {
    icon: '🌐',
    title: 'Cisco Partner',
    body: 'Networking and infrastructure hardware for secure office deployments, segmented networks, and reliable connectivity across demanding environments.',
  },
  {
    icon: '📦',
    title: 'TD SYNNEX Authorized Reseller',
    body: 'Broad-line distribution access across thousands of manufacturers so clients can source more technology through one accountable vendor of record.',
  },
]

const advancedCapabilities = [
  {
    title: 'Heavy-Duty Cybersecurity',
    subtitle: 'Engineering IP Protection & Zero-Trust CAD Environments',
    description:
      'Protection for the core assets of infrastructure firms: multi-agency collaboration spaces, zero-trust identity controls around engineering repositories, and strict data-loss prevention for proprietary CAD models and BIM data.',
  },
  {
    title: 'Defensive Network Architecture',
    subtitle: 'High-Availability Edge Operations for Heavy Database Streams',
    description:
      'Encrypted SD-WAN routing pipelines and segmented networks that isolate production ProjectWise and SQL traffic while supporting fast synchronization for remote and on-site engineering teams.',
  },
  {
    title: 'Enterprise-Scale Modernization',
    subtitle: 'Cloud Migration Pipelines for Complex Engineering Apps',
    description:
      'Secure migration of legacy database servers and heavy applications into unified hybrid cloud environments, with Windows 11 readiness and workspace path configuration handled as part of the transition.',
  },
  {
    title: 'Strategic Risk Management',
    subtitle: 'Information Governance, CMDB Auditing & Business Continuity',
    description:
      'Configuration management, data-audit trails, access-history verification, and resilient backup planning for firms carrying records, continuity, and public works liability.',
  },
]

const coreCapabilities = [
  {
    number: '01',
    title: 'Engineering Technology Operations',
    description:
      'ProjectWise, Bentley, CAD, GIS, permissions, onboarding, and production workflow support for teams that cannot afford tool downtime.',
  },
  {
    number: '02',
    title: 'Cybersecurity & Identity Controls',
    description:
      'Security hardening, access review, zero-trust planning, and data-loss prevention around engineering files and collaboration spaces.',
  },
  {
    number: '03',
    title: 'Network & Infrastructure Architecture',
    description:
      'Segmented networks, SD-WAN planning, reliable connectivity, and infrastructure designs that protect production data streams.',
  },
  {
    number: '04',
    title: 'Cloud & Systems Modernization',
    description:
      'Microsoft 365, Azure, hybrid cloud, Windows 11 readiness, server migration, and workspace modernization for complex environments.',
  },
  {
    number: '05',
    title: 'Governance, Documentation & Continuity',
    description:
      'SOPs, runbooks, CMDB planning, audit trails, backup readiness, and business-continuity documentation that survives turnover.',
  },
  {
    number: '06',
    title: 'Authorized Procurement & Deployment',
    description:
      'Dell, Epson, Cisco, and TD SYNNEX sourcing with deployment, asset records, and support kept under one accountable vendor of record.',
  },
]

const shopifyUrl = 'https://h1bg1p-j7.myshopify.com/'

const partnerLogoChips = ['Cisco', 'Epson', 'Ergotron']

const naics = [
  { code: '541512', label: 'Computer systems design services' },
  { code: '541511', label: 'Custom computer programming services' },
  { code: '541519', label: 'Other computer related services' },
  { code: '518210', label: 'Data processing, hosting, and related services' },
  { code: '611420', label: 'Computer training' },
]

const areasOfExpertise = [
  'Bentley ProjectWise Administration & Support',
  'Microsoft 365 Administration',
  'SharePoint, Teams, and OneDrive Governance',
  'Azure, Hybrid Cloud, and Windows 11 Readiness',
  'Security Hardening, Identity, and Zero-Trust Planning',
  'Network Segmentation, SD-WAN, and Infrastructure Design',
  'Software Deployment & Endpoint Management',
  'CMDB, Runbooks, Audit Trails, and Business Continuity',
  'Authorized Hardware Procurement and Deployment',
]

export default function CapabilitiesPage() {
  return (
    <>
      <Hero
        title="IT Support and Procurement Capabilities Statement"
        description="Practical IT support, engineering technology assistance, security governance, modernization, and authorized procurement for infrastructure-focused teams."
      />

      <main className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <p className="text-primary uppercase tracking-[0.16em] text-sm font-extrabold mb-5">
                Capabilities Statement
              </p>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8">
                Modern IT support for infrastructure teams that cannot afford downtime.
              </h2>

              <p className="text-blue-100 text-lg leading-8 max-w-3xl">
                CivicSpan IT Group bridges engineering technology, cybersecurity, modernization,
                documentation, procurement, and digital operations so teams can move faster with
                cleaner systems and clearer workflows.
              </p>

              <div className="mt-8 rounded-2xl border border-primary/25 bg-primary/10 p-5">
                <p className="text-primary uppercase tracking-[0.16em] text-xs font-extrabold mb-2">
                  B2B Procurement Path
                </p>
                <p className="text-blue-100 leading-7 mb-4">
                  Need bulk business hardware, licensing, or deployment support for a public-sector bid?
                  Start with CivicSpan&apos;s quote-ready collection so quantities, warranty, deployment, and
                  support needs can be scoped before pricing.
                </p>
                <a
                  href={shopifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-primary hover:text-primary-light font-bold text-sm transition-colors"
                >
                  Open the Bulk Hardware &amp; Licensing Collection →
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a href="/contact" className="btn">
                  Discuss Your Needs
                </a>

                <a
                  href="#core-capabilities"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-400/30 bg-slate-900/60 text-slate-200 font-bold hover:text-primary hover:border-primary transition-all duration-300"
                >
                  Explore Capabilities
                </a>
              </div>
            </div>

            <aside className="min-h-[520px] p-6 rounded-[28px] border border-green-500/25 bg-gradient-to-br from-slate-900/95 to-slate-950/80 shadow-2xl backdrop-blur">
              <div className="flex gap-2 mb-8">
                <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(34,197,94,0.7)]" />
                <span className="w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.6)]" />
                <span className="w-3 h-3 rounded-full bg-slate-200" />
              </div>

              <div className="relative min-h-[290px] rounded-3xl overflow-hidden grid place-items-center bg-[radial-gradient(circle,rgba(34,197,94,0.20),transparent_24%),repeating-radial-gradient(circle,rgba(56,189,248,0.18)_0_1px,transparent_1px_46px)]">
                <div className="absolute w-[220px] h-[220px] rounded-full border border-green-500/30" />
                <div className="absolute w-[310px] h-[310px] rounded-full border border-sky-400/20" />

                <div className="relative z-10 w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-cyan-300 text-slate-950 grid place-items-center text-3xl font-black shadow-[0_0_60px_rgba(34,197,94,0.55)]">
                  IT
                </div>

                <div className="absolute top-11 left-11 z-10 px-3 py-2 rounded-full bg-slate-950/85 border border-slate-400/25 text-slate-200 text-xs font-extrabold">
                  Bentley
                </div>

                <div className="absolute top-24 right-11 z-10 px-3 py-2 rounded-full bg-slate-950/85 border border-slate-400/25 text-slate-200 text-xs font-extrabold">
                  Cloud
                </div>

                <div className="absolute bottom-11 left-1/2 -translate-x-1/2 z-10 px-3 py-2 rounded-full bg-slate-950/85 border border-slate-400/25 text-slate-200 text-xs font-extrabold">
                  Support
                </div>
              </div>

              <div className="grid gap-3 mt-6">
                {[
                  ['Engineering', 'ProjectWise, CAD, and data workflows'],
                  ['Security', 'Identity, governance, and continuity'],
                  ['Procurement', 'Dell, Epson, Cisco, and TD SYNNEX'],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-2 sm:gap-4 items-center p-4 rounded-2xl border border-slate-400/15 bg-slate-900/70"
                  >
                    <strong className="text-white">{title}</strong>
                    <span className="text-slate-400 text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <section className="mb-28" aria-label="About the founder">
            <div className="mb-10">
              <p className="text-primary uppercase tracking-[0.16em] text-sm font-extrabold mb-5">
                About CivicSpan
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Meet the Founder
              </h2>
            </div>

            <div className="rounded-3xl border border-slate-400/15 bg-slate-900/80 p-8 sm:p-10 shadow-xl backdrop-blur mb-5">
              <p className="text-blue-100 text-lg leading-8 mb-6">
                CivicSpan Technologies was founded by Keisha Ruffner, an IT professional with extensive
                experience supporting enterprise technology environments for transportation and
                engineering organizations.
              </p>
              <p className="text-slate-300 leading-7 mb-6">
                Throughout her career, Keisha has specialized in technologies that keep engineering teams
                productive, including Bentley ProjectWise, Microsoft 365, SharePoint, PowerShell
                automation, software deployment, endpoint management, and technical documentation. She has
                worked directly with engineers, designers, CAD professionals, and technical staff to
                resolve complex issues, improve workflows, and support business-critical applications.
              </p>
              <p className="text-slate-300 leading-7 mb-6">
                Recognizing that many organizations need responsive, knowledgeable IT support without the
                overhead of large consulting firms, she founded CivicSpan to deliver practical technology
                solutions backed by clear communication, documentation, and a commitment to long-term
                client success.
              </p>
              <p className="text-slate-300 leading-7">
                Today, CivicSpan partners with government agencies, engineering firms, municipalities,
                utilities, and businesses to provide technology consulting, cloud solutions, engineering
                technology support, secure modernization, authorized procurement, and digital modernization services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-5">
              <div className="rounded-3xl border border-slate-400/15 bg-slate-900/80 p-8 shadow-xl backdrop-blur">
                <h3 className="text-xl font-bold text-white mb-6">Areas of Expertise</h3>
                <ul className="grid gap-3">
                  {areasOfExpertise.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-300 leading-7">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-400/15 bg-gradient-to-br from-emerald-900/60 to-slate-900/90 p-8 shadow-xl backdrop-blur">
                <h3 className="text-xl font-bold text-white mb-4">Why CivicSpan?</h3>
                <p className="text-blue-100 leading-8">
                  CivicSpan combines enterprise-level technical experience with the responsiveness of a
                  small business. Every engagement is guided by practical problem-solving, clear
                  communication, and solutions designed to support your organization&apos;s long-term
                  success.
                </p>
              </div>
            </div>
          </section>

          <section
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4 mb-28"
            aria-label="Company highlights"
          >
            {companyHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-400/15 bg-slate-900/80 p-5 xl:p-4 shadow-xl backdrop-blur"
              >
                <strong className="block text-white text-lg mb-2">{item.label}</strong>
                <span className="block text-slate-400 text-sm sm:text-base leading-6 whitespace-pre-line break-all">
                  {item.value}
                </span>
              </div>
            ))}
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 mb-28">
            <div>
              <p className="text-primary uppercase tracking-[0.16em] text-sm font-extrabold mb-5">
                What We Do
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Technical support with an operator&apos;s mindset.
              </h2>
            </div>

            <p className="text-blue-100 text-lg leading-9">
              CivicSpan IT Group supports transportation, engineering, infrastructure,
              government-adjacent, nonprofit, and small business teams with practical technology services.
              Our work connects day-to-day support, Bentley ecosystem familiarity, cybersecurity,
              network architecture, modernization, authorized procurement, access management, process
              documentation, onboarding, and digital systems improvement.
            </p>
          </section>

          <section id="core-capabilities" className="mb-28">
            <div className="mb-10">
              <p className="text-primary uppercase tracking-[0.16em] text-sm font-extrabold mb-5">
                Core Capabilities
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Built for technical environments.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {coreCapabilities.map((item, index) => (
                <article
                  key={item.title}
                  className={`relative min-h-[260px] rounded-[22px] border border-slate-400/15 bg-slate-900/80 p-7 overflow-hidden shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-green-500/45 hover:shadow-2xl ${
                    index === 0
                      ? 'bg-[radial-gradient(circle_at_25%_20%,rgba(34,197,94,0.22),transparent_36%),rgba(15,23,42,0.86)]'
                      : ''
                  }`}
                >
                  <span className="inline-flex w-12 h-12 items-center justify-center mb-9 rounded-2xl bg-primary text-slate-950 font-black">
                    {item.number}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-300 leading-7">{item.description}</p>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-sky-400 opacity-70" />
                </article>
              ))}
            </div>
          </section>

          <section id="advanced-capabilities" className="mb-28 rounded-3xl border border-green-500/15 bg-slate-900/70 p-8 sm:p-10 shadow-xl backdrop-blur">
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 mb-10">
              <div>
                <p className="text-primary uppercase tracking-[0.16em] text-sm font-extrabold mb-5">
                  Advanced Capabilities
                </p>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                  Enterprise security and governance for engineering environments.
                </h2>
              </div>
              <p className="text-blue-100 text-lg leading-8">
                These capabilities extend the core support model into the higher-risk work that
                infrastructure firms face: protecting proprietary design files, modernizing aging
                systems, segmenting heavy data workflows, and proving operational accountability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {advancedCapabilities.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-400/15 bg-slate-950/45 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/45"
                >
                  <p className="text-primary font-bold text-xs uppercase tracking-[0.16em] mb-3">
                    {item.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 leading-7">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="authorized-partners" className="mb-28">
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 mb-10">
              <div>
                <p className="text-primary uppercase tracking-[0.16em] text-sm font-extrabold mb-5">
                  Authorized Procurement
                </p>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                  Multi-vendor procurement, one accountable point of contact.
                </h2>
              </div>
              <div>
                <p className="text-blue-100 text-lg leading-8 mb-5">
                  CivicSpan is an authorized partner across the vendors engineering and
                  government-adjacent teams already rely on. Procurement, deployment, asset records,
                  and support stay together instead of being scattered across resellers.
                </p>
                <a href="/partners" className="inline-flex text-primary hover:text-primary-light font-bold text-sm transition-colors">
                  View vendor partnerships and procurement authorization →
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {procurementPartners.map((partner) => (
                <article
                  key={partner.title}
                  className="rounded-2xl border border-green-500/15 bg-dark-secondary/70 p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">{partner.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{partner.title}</h3>
                      <p className="text-neutral-muted leading-relaxed">{partner.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="rounded-2xl border border-primary/20 bg-slate-950/50 p-6">
              <p className="text-primary uppercase tracking-[0.16em] text-xs font-extrabold mb-4">
                Authorized OEM Partners
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="rounded-xl bg-white p-3 shadow-lg">
                  <Image
                    src="/dell-technologies-authorized-partner.svg"
                    alt="Dell Technologies Authorized Partner badge"
                    width={220}
                    height={64}
                    className="w-44 sm:w-52 h-auto"
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  {partnerLogoChips.map((partner) => (
                    <span
                      key={partner}
                      className="inline-flex items-center rounded-full border border-slate-200/15 bg-white px-4 py-2 text-slate-950 text-sm font-black shadow-lg"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-5 mb-28">
            <div className="rounded-3xl border border-slate-400/15 bg-slate-900/80 p-8 shadow-xl backdrop-blur">
              <p className="text-primary uppercase tracking-[0.16em] text-sm font-extrabold mb-5">
                Differentiators
              </p>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-8">
                Small-business responsiveness. Enterprise-environment awareness.
              </h2>

              <ul className="grid gap-4">
                {[
                  'Experience supporting transportation and infrastructure technology environments',
                  'Familiarity with Bentley and ProjectWise ecosystems',
                  'Ability to connect technical support, systems assistance, and documentation',
                  'Focused support for infrastructure and engineering organizations',
                  'SBA Certified WOSB & EDWOSB with personalized, responsive support',
                  'Authorized procurement access through Dell, Epson, Cisco, and TD SYNNEX',
                ].map((item) => (
                  <li
                    key={item}
                    className="relative pl-12 pr-5 py-4 rounded-2xl border border-slate-400/10 bg-slate-950/40 text-blue-100 leading-7"
                  >
                    <span className="absolute left-5 top-6 w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(34,197,94,0.75)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-400/15 bg-gradient-to-br from-emerald-900/60 to-slate-900/90 p-8 shadow-xl backdrop-blur">
              <p className="text-primary uppercase tracking-[0.16em] text-sm font-extrabold mb-5">
                Target Clients
              </p>

              <h2 className="text-4xl font-extrabold text-white leading-tight mb-8">
                Where we fit best.
              </h2>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  'Transportation',
                  'Infrastructure',
                  'Engineering Firms',
                  'Government Agencies',
                  'Technology Vendors',
                  'Small Businesses',
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex min-h-11 items-center justify-center px-4 py-2 rounded-full border border-slate-200/15 bg-slate-950/50 text-slate-200 font-bold"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="grid gap-4">
                {[
                  [
                    'High-touch support',
                    'For teams that need clear answers, clean handoffs, and dependable follow-through.',
                  ],
                  [
                    'Technical environments',
                    'For organizations using specialized software, shared systems, and structured workflows.',
                  ],
                  [
                    'Practical modernization',
                    'For groups ready to improve documentation, access, cloud organization, or digital operations.',
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="p-5 rounded-2xl border border-slate-200/15 bg-slate-950/40"
                  >
                    <strong className="block text-white mb-2">{title}</strong>
                    <span className="block text-slate-300 leading-7">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-400/15 bg-gradient-to-br from-emerald-900/60 to-slate-900/90 p-8 sm:p-10 shadow-xl backdrop-blur mb-28">
            <h2 className="text-4xl font-extrabold text-white mb-8">Company Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="grid gap-6">
                <div>
                  <h4 className="text-primary font-bold uppercase text-sm tracking-widest mb-2">
                    Business Type
                  </h4>
                  <ul className="text-slate-300 leading-7">
                    <li>SBA Certified WOSB & EDWOSB</li>
                    <li>Virginia SWaM Certified (Woman-Owned)</li>
                    <li>Virginia Limited Liability Company</li>
                    <li>Public Sector Focus</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-primary font-bold uppercase text-sm tracking-widest mb-2">
                    Location
                  </h4>
                  <p className="text-slate-300">Fredericksburg, Virginia</p>
                </div>

                <div>
                  <h4 className="text-primary font-bold uppercase text-sm tracking-widest mb-2">
                    Services
                  </h4>
                  <ul className="text-slate-300 leading-7">
                    <li>Engineering Technology Support</li>
                    <li>Bentley ProjectWise Support</li>
                    <li>Cybersecurity & Identity Controls</li>
                    <li>Network & Infrastructure Architecture</li>
                    <li>Microsoft 365 & SharePoint</li>
                    <li>Technical Documentation</li>
                    <li>Authorized Procurement & Deployment</li>
                  </ul>
                </div>
              </div>

              <div className="grid gap-6">
                <div>
                  <h4 className="text-primary font-bold uppercase text-sm tracking-widest mb-2">
                    Professional Highlights
                  </h4>
                  <ul className="text-slate-300 leading-8">
                    <li>• Bentley Developer Program Member</li>
                    <li>• Bentley Communities Explorer</li>
                    <li>• Published ProjectWise Workspace Doctor on GitHub</li>
                    <li>• ORCID Researcher Profile Connected</li>
                    <li>• Public Sector Technology Experience</li>
                    <li>• Transportation & Infrastructure Technology Focus</li>
                    <li>• Bentley ProjectWise Experience</li>
                    <li>• Microsoft 365 & SharePoint Experience</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-primary font-bold uppercase text-sm tracking-widest mb-2">
                    Capabilities
                  </h4>
                  <ul className="text-slate-300 leading-8">
                    <li>• Public Sector Experience</li>
                    <li>• Transportation & Infrastructure Technology</li>
                    <li>• Bentley ProjectWise Support</li>
                    <li>• Microsoft 365 & SharePoint Support</li>
                    <li>• Technical Documentation & Training</li>
                    <li>• Workflow Automation & Reporting</li>
                    <li>• Cybersecurity & Governance Planning</li>
                    <li>• Authorized Multi-Vendor Procurement</li>
                    <li>• Business Process Improvement</li>
                  </ul>
                </div>
              </div>

              <div className="grid gap-6">
                <div>
                  <h4 className="text-primary font-bold uppercase text-sm tracking-widest mb-2">
                    Certifications & Partnerships
                  </h4>
                  <ul className="text-slate-300 leading-8 mb-4">
                    <li>• SBA Certified WOSB & EDWOSB</li>
                    <li>• Virginia SWaM Certified (ID: 845315)</li>
                    <li>• eVA Registered Vendor</li>
                    <li>• SAM.gov Registered (UEI: PMVWGHNEZYK4)</li>
                    <li>• Dell Technologies Partner</li>
                    <li>• Epson Authorized Partner</li>
                    <li>• Cisco Partner</li>
                    <li>• TD SYNNEX Authorized Reseller</li>
                  </ul>
                  <div className="flex flex-col gap-4 mt-4">
                    <div className="p-4 bg-white/95 rounded-2xl shadow-xl border border-slate-200/10 inline-block max-w-[200px] hover:scale-105 transition-transform duration-300">
                      <Image
                        src="/virginia-swam-certified-business-logo.jpg"
                        alt="Virginia SWaM Certification Logo"
                        width={200}
                        height={200}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>

                    <div className="space-y-3 w-full max-w-[320px]">
                      <div className="p-4 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-transparent backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                          <span className="text-xs font-extrabold text-white uppercase tracking-wider">SBA Certified WOSB</span>
                        </div>
                        <p className="text-[11px] text-slate-400">Women-Owned Small Business</p>
                        <p className="text-[10px] text-slate-500 mt-1">Entrance: 07/09/2026 • Renewal: 07/08/2029</p>
                      </div>

                      <div className="p-4 rounded-2xl border border-sky-500/20 bg-gradient-to-r from-sky-500/10 to-transparent backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                          <span className="text-xs font-extrabold text-white uppercase tracking-wider">SBA Certified EDWOSB</span>
                        </div>
                        <p className="text-[11px] text-slate-400">Economically-Disadvantaged Women-Owned</p>
                        <p className="text-[10px] text-slate-500 mt-1">Entrance: 07/09/2026 • Renewal: 07/08/2029</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-400/15 bg-slate-900/80 p-8 sm:p-10 shadow-xl backdrop-blur mb-28">
            <div className="mb-8">
              <p className="text-primary uppercase tracking-[0.16em] text-sm font-extrabold mb-5">
                Federal Alignment
              </p>
              <h2 className="text-4xl font-extrabold text-white">NAICS Codes</h2>
              <p className="text-slate-300 leading-7 mt-4 max-w-4xl">
                CivicSpan aligns its IT operations, engineering technology, modernization, and training services with the following federal service categories.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {naics.map((item) => (
                <div
                  key={item.code}
                  className="rounded-2xl border border-slate-200/15 bg-slate-950/50 px-4 py-4"
                >
                  <span className="block text-primary text-xl font-bold tracking-wide mb-2">
                    {item.code}
                  </span>
                  <span className="block text-slate-300 text-sm leading-6">{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center rounded-[28px] border border-slate-400/15 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.22),transparent_36%),rgba(15,23,42,0.82)] p-10 sm:p-14 shadow-xl backdrop-blur">
            <p className="text-primary uppercase tracking-[0.16em] text-sm font-extrabold mb-5">
              Ready When You Are
            </p>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Need a technical partner who understands infrastructure workflows?
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-slate-300 text-lg leading-8">
              Let&apos;s talk through your systems, support needs, and the fastest path to cleaner operations.
            </p>

            <a href="/contact" className="btn mt-8">
              Contact CivicSpan
            </a>
          </section>
        </section>
      </main>
    </>
  )
}
