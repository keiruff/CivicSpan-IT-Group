import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[560px] flex flex-col justify-center items-center text-center px-4 py-20 md:py-36 bg-transparent overflow-hidden">
        {/* Radial glow behind hero text */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(34,197,94,0.12),transparent)]" />
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-4 animate-fade-in">
            Infrastructure-Focused IT Support
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
            Keeping Critical Infrastructure Running Through Reliable Technology
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-light max-w-2xl leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            CivicSpan IT Group provides practical IT support, digital solutions, documentation, and workflow assistance for small businesses, nonprofits, and infrastructure-focused teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-dark font-bold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25 w-full sm:w-auto text-center"
            >
              Discuss Your Needs
            </Link>
            <Link
              href="/services"
              className="px-8 py-3.5 bg-transparent border-2 border-primary hover:bg-primary/10 text-primary rounded-lg font-bold transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-white/5 bg-dark/30 py-8 px-4">
        <p className="text-neutral-light max-w-4xl mx-auto text-sm sm:text-base font-medium text-center mb-6">
          Specialized in technical environments, engineering workflows, digital systems, and infrastructure-focused technology solutions.
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
            { value: '7+', label: 'Service Packages' },
            { value: '5+', label: 'Certifications & Partners' },
            { value: 'Mid-Atlantic', label: 'Regional Coverage' },
            { value: '3', label: 'Engagement Models' },
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

      {/* Featured Services Grid */}
      <section id="services" className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-2">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Core Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 justify-center items-stretch">
          <Link href="/services#it-support" className="group h-full">
            <article className="bg-dark-secondary border border-green-500/15 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-green-500/10 rounded-xl p-8 flex flex-col justify-between h-full transition-all duration-300 group-hover:-translate-y-2">
              <div>
                <span className="text-3xl mb-4 block">⚙️</span>
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">IT Support</h2>
                <p className="text-neutral-muted text-sm sm:text-base leading-relaxed">
                  Technical assistance for software issues, user support, troubleshooting, installations, and system access needs.
                </p>
                <ul className="mt-4 space-y-1.5">
                  {['Help desk & troubleshooting', 'Software & account access', 'Remote support'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-xs text-neutral-muted">
                      <span className="text-primary font-bold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="text-primary font-semibold text-sm group-hover:underline mt-6 inline-flex items-center gap-1.5">
                Learn more <span>&rarr;</span>
              </span>
            </article>
          </Link>

          <Link href="/services#digital-solutions" className="group h-full">
            <article className="bg-dark-secondary border border-green-500/15 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-green-500/10 rounded-xl p-8 flex flex-col justify-between h-full transition-all duration-300 group-hover:-translate-y-2">
              <div>
                <span className="text-3xl mb-4 block">💻</span>
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">Digital Solutions</h2>
                <p className="text-neutral-muted text-sm sm:text-base leading-relaxed">
                  Website updates, business technology setup, workflow cleanup, documentation, and process improvement.
                </p>
                <ul className="mt-4 space-y-1.5">
                  {['Website updates & maintenance', 'Workflow automation', 'Business email & setup'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-xs text-neutral-muted">
                      <span className="text-primary font-bold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="text-primary font-semibold text-sm group-hover:underline mt-6 inline-flex items-center gap-1.5">
                Learn more <span>&rarr;</span>
              </span>
            </article>
          </Link>

          <Link href="/services#training" className="group h-full">
            <article className="bg-dark-secondary border border-green-500/15 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-green-500/10 rounded-xl p-8 flex flex-col justify-between h-full transition-all duration-300 group-hover:-translate-y-2">
              <div>
                <span className="text-3xl mb-4 block">📚</span>
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">Training & Documentation</h2>
                <p className="text-neutral-muted text-sm sm:text-base leading-relaxed">
                  Clear guides, user instructions, technical walkthroughs, and support materials for teams and end users.
                </p>
                <ul className="mt-4 space-y-1.5">
                  {['SOPs & user guides', 'Onboarding materials', 'Knowledge base development'].map(item => (
                    <li key={item} className="flex items-center gap-2 text-xs text-neutral-muted">
                      <span className="text-primary font-bold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="text-primary font-semibold text-sm group-hover:underline mt-6 inline-flex items-center gap-1.5">
                Learn more <span>&rarr;</span>
              </span>
            </article>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-dark font-bold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25"
          >
            View Detailed Services
          </Link>
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
              A clear, repeatable approach to better support.
            </h2>
            <p className="text-neutral-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              We focus on understanding the environment, solving immediate issues, documenting what matters, and improving the system over time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { num: '01', title: 'Assess', body: 'Understand your systems, workflows, users, and where friction is slowing things down.' },
              { num: '02', title: 'Support', body: 'Provide responsive, practical help for the technical issues affecting day-to-day work.' },
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
                Practical support without the runaround.
              </h2>
              <p className="text-neutral-light text-sm sm:text-base leading-relaxed">
                CivicSpan IT Group is built for organizations that need dependable technical help, clear communication, and support that respects how work actually gets done.
              </p>
            </div>

            {/* Right column — differentiators */}
            <div className="p-10 sm:p-14 space-y-6">
              {[
                { icon: '⚡', title: 'Fast, Direct Communication', body: 'No ticket maze. You reach a real person who understands your environment.' },
                { icon: '🏛️', title: 'Government & Engineering Aware', body: 'We understand eVA, SAM.gov, Bentley tools, and infrastructure workflows.' },
                { icon: '📋', title: 'Documentation Included', body: 'Every engagement produces clear records your team actually keeps and uses.' },
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
          From small businesses to infrastructure-focused teams, CivicSpan IT Group delivers technical support and digital solutions designed to improve efficiency, communication, and day-to-day operations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-left">
          {[
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
            {
              icon: '🏛️',
              title: 'Government-Adjacent Teams',
              body: 'Contractors and vendors operating in eVA, SAM.gov, and government procurement environments.',
              href: '/who-we-support',
            },
            {
              icon: '⚙️',
              title: 'Engineering Environments',
              body: 'Infrastructure, transportation, and civil engineering firms running Bentley, GIS, and CAD workflows.',
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
          Need Technical Support or Digital Solutions?
        </h2>
        <p className="text-neutral-light text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
          Contact CivicSpan IT Group to discuss your organization&apos;s needs.
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
