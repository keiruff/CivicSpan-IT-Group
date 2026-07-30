import Link from 'next/link'

const lifecycleSteps = [
  { step: 'Plan', service: 'Assessments & Roadmaps', href: '/services#infrastructure-technology-operations' },
  { step: 'Procure', service: 'Dell Procurement & Deployment', href: '/topics/dell' },
  { step: 'Deploy', service: 'Microsoft 365, Endpoint Deployment', href: '/services#managed-infrastructure-services' },
  { step: 'Secure', service: 'Identity, Cloud Security', href: '/topics/entra-id-consulting' },
  { step: 'Document', service: 'SOPs, Runbooks, Knowledge Bases', href: '/services#training' },
  { step: 'Operate', service: 'Managed Services', href: '/services#managed-infrastructure-services' },
  { step: 'Modernize', service: 'Windows 11, Azure, Cloud Migration', href: '/blog/how-to-prepare-for-a-windows-11-upgrade' },
  { step: 'Repeat', service: 'Continuous improvement', href: '/infrastructure-technology-operations' },
]

const outcomeCards = [
  {
    title: 'Modern Workplace Deployment',
    body: 'Microsoft 365, endpoint deployment, identity, security baselines, and user-ready documentation.',
    href: '/services#managed-infrastructure-services',
  },
  {
    title: 'Engineering Technology Operations',
    body: 'ProjectWise, Bentley, CAD, GIS, workstations, permissions, and production engineering workflows.',
    href: '/topics/projectwise',
  },
  {
    title: 'Infrastructure Modernization',
    body: 'Windows 11 readiness, Azure migration planning, cloud support, technology refreshes, and roadmaps.',
    href: '/services#infrastructure-technology-operations',
  },
  {
    title: 'Knowledge Management',
    body: 'SOPs, runbooks, onboarding guides, knowledge bases, CMDB planning, and recovery documentation.',
    href: '/services#training',
  },
  {
    title: 'Managed Infrastructure',
    body: 'Monitoring, lifecycle management, patch planning, documentation, and long-term operational support.',
    href: '/services#managed-infrastructure-services',
  },
  {
    title: 'Technology Lifecycle Management',
    body: 'Plan, procure, deploy, secure, document, operate, modernize, and repeat with fewer surprises.',
    href: '/pillars/technology-lifecycle-management',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[560px] flex flex-col justify-center items-center text-center px-4 py-20 md:py-36 bg-transparent overflow-hidden">
        {/* Radial glow behind hero text */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(34,197,94,0.12),transparent)]" />
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-4 animate-fade-in">
            Infrastructure &amp; Technology Operations
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-5xl tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
            Technology Operations for Organizations That Can&apos;t Afford Downtime
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-primary font-extrabold max-w-3xl leading-relaxed mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            Build. Modernize. Secure. Document. Support.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-neutral-light max-w-3xl leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            CivicSpan helps infrastructure, engineering, government, nonprofit, and small business teams improve the technology they rely on every day — from deployment and modernization to documentation and long-term operational support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-dark font-bold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25 w-full sm:w-auto text-center"
            >
              Discuss Your Needs
            </Link>
            <Link
              href="/infrastructure-technology-operations"
              className="px-8 py-3.5 bg-transparent border-2 border-primary hover:bg-primary/10 text-primary rounded-lg font-bold transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              Explore the Framework
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-white/5 bg-dark/30 py-8 px-4">
        <p className="text-neutral-light max-w-4xl mx-auto text-sm sm:text-base font-medium text-center mb-6">
          CivicSpan helps organizations operate and modernize the technology that keeps their business running.
        </p>
        <p className="text-neutral-muted text-xs sm:text-sm text-center mb-6">
          Headquartered in Fredericksburg, Virginia — serving clients across the Mid-Atlantic region.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          {[
            'Woman-Owned Small Business',
            'Virginia SWaM Certified',
            'eVA Registered Vendor',
            'SAM.gov Registered',
            'Dell Technologies Partner',
          ].map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center px-4 py-2 rounded-full border border-green-500/25 bg-dark-secondary text-neutral-light text-xs sm:text-sm font-semibold"
            >
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-14 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '8', label: 'Lifecycle Stages' },
            { value: '6', label: 'Operations Pillars' },
            { value: 'Mid-Atlantic', label: 'Regional Coverage' },
            { value: '3', label: 'Core Engagement Models' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-green-500/15 bg-dark-secondary/60 py-8 px-4 hover:border-primary/40 transition-colors duration-300"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-primary mb-1">{stat.value}</p>
              <p className="text-xs sm:text-sm text-neutral-muted font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CivicSpan Technology Lifecycle */}
      <section id="technology-lifecycle" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-2">Signature Framework</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">The CivicSpan Technology Lifecycle</h2>
          <p className="text-neutral-muted text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            We focus on understanding the environment, solving immediate issues, documenting what matters, and improving the system over time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {lifecycleSteps.map((item, index) => (
            <Link key={item.step} href={item.href} className="group h-full">
              <article className="h-full rounded-2xl border border-green-500/15 bg-dark-secondary/80 p-6 hover:border-primary hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-primary font-extrabold text-xs tracking-[0.18em] uppercase">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-neutral-muted text-xl">{index < lifecycleSteps.length - 1 ? '↓' : '↻'}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-primary transition-colors">{item.step}</h3>
                <p className="text-neutral-muted text-sm leading-6">{item.service}</p>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-green-500/20 bg-dark-secondary/70 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] border-b border-white/8 text-left">
            <div className="px-6 py-4 text-primary font-bold uppercase tracking-wider text-xs">Lifecycle</div>
            <div className="px-6 py-4 text-primary font-bold uppercase tracking-wider text-xs border-t md:border-t-0 md:border-l border-white/8">CivicSpan Service</div>
          </div>
          {lifecycleSteps.map((item) => (
            <Link key={item.step} href={item.href} className="grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] border-b border-white/5 last:border-b-0 hover:bg-white/[0.03] transition-colors">
              <div className="px-6 py-4 text-white font-semibold">{item.step}</div>
              <div className="px-6 py-4 text-neutral-light md:border-l border-white/8">{item.service}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section id="outcomes" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-12">
          <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-2">Business Outcomes</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">People buy outcomes, not generic IT support.</h2>
          <p className="text-neutral-muted text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mt-4">
            CivicSpan organizes services around operational resilience: reliable workplaces, managed infrastructure, documented knowledge, and technology that improves over time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomeCards.map((card) => (
            <Link key={card.title} href={card.href} className="group">
              <article className="h-full rounded-2xl border border-green-500/15 bg-dark-secondary/80 p-8 hover:border-primary hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-neutral-muted text-sm leading-6">{card.body}</p>
                <span className="text-primary font-bold text-sm mt-5 inline-block">Explore outcome →</span>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO Topic Clusters */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-12">
          <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-2">Helpful IT Resources</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Find support by problem, platform, or location.</h2>
          <p className="text-neutral-muted text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mt-4">
            Explore practical guides for Microsoft 365, Dell deployment, ProjectWise troubleshooting, and Mid-Atlantic service areas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: 'Expertise Pillars', body: 'Hubs for Infrastructure Modernization, Microsoft 365, Engineering Technology, Cloud Operations, IT Documentation, and Technology Lifecycle Management.', href: '/pillars' },
            { title: 'Product Shop', body: 'Downloads and merchandise only. Consulting, support, and hardware deployment stay in Services.', href: '/products' },
            { title: 'Microsoft, Dell & ProjectWise Topics', body: 'Deep pages for high-intent Microsoft 365, SharePoint, Intune, Dell, and ProjectWise searches.', href: '/topics' },
            { title: 'Location-Based IT Support', body: 'Useful regional pages for Fredericksburg, Richmond, Northern Virginia, Maryland, Pennsylvania, and ProjectWise support.', href: '/locations' },
            { title: 'Problem-Led IT Guides', body: 'Guides for email access issues, slow ProjectWise, laptop deployments, Microsoft 365 security, and Windows 11 upgrades.', href: '/blog' },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="group">
              <article className="h-full rounded-2xl border border-green-500/15 bg-dark-secondary/80 p-8 hover:border-primary hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-neutral-muted text-sm leading-6">{item.body}</p>
                <span className="text-primary font-bold text-sm mt-5 inline-block">Explore pages →</span>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* AI Readiness */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="rounded-[28px] border border-green-500/15 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.12),transparent_40%),rgba(15,23,42,0.85)] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-3">AI Readiness</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">AI starts with good infrastructure.</h2>
              <p className="text-neutral-light text-sm sm:text-base leading-relaxed mb-6">
                Organizations get the most from AI when Microsoft 365 is organized, identities and permissions are secure, documentation is clean, infrastructure is reliable, and data is managed well. CivicSpan helps build that foundation before teams invest in AI.
              </p>
              <Link href="/services#ai-readiness-foundations" className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:underline">
                Explore AI readiness foundations <span>&rarr;</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Organized Microsoft 365 environments',
                'Secure identities and permissions',
                'Clean documentation and runbooks',
                'Reliable infrastructure and endpoints',
                'Well-managed data and knowledge',
                'Governance that reduces operational risk',
              ].map((item) => (
                <div key={item} className="rounded-xl border border-green-500/15 bg-dark-secondary/80 p-4 text-neutral-light text-sm flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Process Flow */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-2">
              How We Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              A clear, repeatable approach to technology operations.
            </h2>
            <p className="text-neutral-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              We focus on understanding the environment, solving immediate issues, documenting what matters, and improving the system over time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { num: '01', title: 'Assess', body: 'Understand your systems, workflows, users, and where friction is slowing things down.' },
              { num: '02', title: 'Support', body: 'Stabilize the technical issues affecting day-to-day work and operational continuity.' },
              { num: '03', title: 'Document', body: 'Create clear records, instructions, and handoffs so knowledge stays with the organization.' },
              { num: '04', title: 'Improve', body: 'Refine workflows, reduce repeat issues, and make support easier to manage over time.' },
            ].map((step) => (
              <article key={step.num} className="bg-dark-secondary/60 border border-green-500/15 rounded-xl p-8 text-center hover:border-primary/50 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1.5 transition-all duration-300">
                <span className="block font-extrabold text-primary text-3xl sm:text-4xl mb-4">{step.num}</span>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-neutral-muted text-sm sm:text-base leading-relaxed">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why CivicSpan — enriched 2-column */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="rounded-3xl border border-green-500/15 bg-dark-secondary/60 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left column — headline */}
            <div className="p-10 sm:p-14 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-center">
              <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-3">
                Why CivicSpan
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                An operations partner, not a commodity help desk.
              </h2>
              <p className="text-neutral-light text-sm sm:text-base leading-relaxed">
                CivicSpan is built for organizations that need operational continuity, lifecycle management, governance, documentation, modernization, and accountable technology support.
              </p>
            </div>

            {/* Right column — differentiators */}
            <div className="p-10 sm:p-14 space-y-6">
              {[
                { icon: '⚡', title: 'Fast, Direct Communication', body: 'No ticket maze. You reach a real person who understands your environment.' },
                { icon: '🏛️', title: 'Government & Engineering Aware', body: 'We understand eVA, SAM.gov, Bentley tools, and infrastructure workflows.' },
                { icon: '📋', title: 'Documentation Included', body: 'Every engagement produces clear records your team actually keeps and uses.' },
                { icon: '🛡️', title: 'A Vendor of Record, Not a Chatbot', body: 'SWaM-certified, accountable support that can work inside the systems AI can only describe.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-neutral-muted text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Support — enriched cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center border-t border-white/5">
        <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-2">Clients</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Who We Support
        </h2>
        <p className="text-neutral-muted text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-12">
          CivicSpan leads with engineering environments where access, permissions, procurement requirements, and accountability matter — then supports the surrounding digital operations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-left">
          {[
            {
              icon: '⚙️',
              title: 'Engineering Environments',
              body: 'Infrastructure, transportation, and civil engineering firms running ProjectWise, Bentley, GIS, and CAD workflows.',
              href: '/who-we-support',
            },
            {
              icon: '🏛️',
              title: 'Government-Adjacent Teams',
              body: 'Contractors and vendors operating in eVA, SAM.gov, and government procurement environments.',
              href: '/who-we-support',
            },
            {
              icon: '🏪',
              title: 'Small Businesses',
              body: 'Startups, retail, and service businesses needing professional technology without an in-house IT team.',
              href: '/who-we-support',
            },
            {
              icon: '🤝',
              title: 'Nonprofits',
              body: 'Mission-driven organizations that need reliable, cost-conscious technology to serve their communities.',
              href: '/who-we-support',
            },
          ].map((card) => (
            <Link key={card.title} href={card.href} className="group">
              <div className="bg-white/5 border border-white/8 py-8 px-6 rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 h-full flex flex-col">
                <span className="text-3xl mb-3 block">{card.icon}</span>
                <h3 className="font-bold text-neutral-light text-base mb-2">{card.title}</h3>
                <p className="text-neutral-muted text-sm leading-relaxed flex-1">{card.body}</p>
                <span className="text-primary text-xs font-semibold mt-4 inline-flex items-center gap-1 group-hover:underline">
                  Learn more <span>&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/who-we-support"
          className="inline-block px-8 py-3 bg-transparent border-2 border-primary hover:bg-primary/10 text-primary rounded-lg font-bold transition-all duration-300 hover:-translate-y-0.5"
        >
          View Audience Details
        </Link>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center border-t border-white/5 bg-gradient-to-t from-dark/60 to-transparent">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Ready to improve the technology your organization runs on?
        </h2>
        <p className="text-neutral-light text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
          Start with the environment, the operational risk, or the modernization goal. CivicSpan will help map the path forward.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-dark font-bold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25"
        >
          Discuss Your Needs
        </Link>
      </section>
    </>
  )
}
