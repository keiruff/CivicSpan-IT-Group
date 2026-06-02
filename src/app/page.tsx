import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex flex-col justify-center items-center text-center px-4 py-20 md:py-32 bg-transparent overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-4 animate-fade-in">
            Infrastructure-Focused IT Support
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
            Technology support built for teams that keep operations moving.
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
      <section className="border-y border-white/5 bg-dark/30 py-6 text-center px-4">
        <p className="text-neutral-light max-w-4xl mx-auto text-sm sm:text-base font-medium">
          Specialized in technical environments, engineering workflows, digital systems, and infrastructure-focused technology solutions.
        </p>
      </section>

      {/* Featured Services Grid */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 justify-center items-stretch">
          <Link href="/services#it-support" className="group h-full">
            <article className="bg-dark-secondary border border-green-500/15 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-green-500/10 rounded-xl p-8 flex flex-col justify-between h-full transition-all duration-300 group-hover:-translate-y-2">
              <div>
                <span className="text-3xl mb-4 block">⚙️</span>
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">IT Support</h2>
                <p className="text-neutral-muted text-sm sm:text-base leading-relaxed">
                  Technical assistance for software issues, user support, troubleshooting, installations, and system access needs.
                </p>
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
            <article className="bg-dark-secondary/60 border border-green-500/15 rounded-xl p-8 text-center hover:border-primary/50 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1.5 transition-all duration-300">
              <span className="block font-extrabold text-primary text-3xl sm:text-4xl mb-4">
                01
              </span>
              <h3 className="text-white font-bold text-lg mb-2">Assess</h3>
              <p className="text-neutral-muted text-sm sm:text-base leading-relaxed">
                Understand your systems, workflows, users, and where friction is slowing things down.
              </p>
            </article>

            <article className="bg-dark-secondary/60 border border-green-500/15 rounded-xl p-8 text-center hover:border-primary/50 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1.5 transition-all duration-300">
              <span className="block font-extrabold text-primary text-3xl sm:text-4xl mb-4">
                02
              </span>
              <h3 className="text-white font-bold text-lg mb-2">Support</h3>
              <p className="text-neutral-muted text-sm sm:text-base leading-relaxed">
                Provide responsive, practical help for the technical issues affecting day-to-day work.
              </p>
            </article>

            <article className="bg-dark-secondary/60 border border-green-500/15 rounded-xl p-8 text-center hover:border-primary/50 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1.5 transition-all duration-300">
              <span className="block font-extrabold text-primary text-3xl sm:text-4xl mb-4">
                03
              </span>
              <h3 className="text-white font-bold text-lg mb-2">Document</h3>
              <p className="text-neutral-muted text-sm sm:text-base leading-relaxed">
                Create clear records, instructions, and handoffs so knowledge stays with the organization.
              </p>
            </article>

            <article className="bg-dark-secondary/60 border border-green-500/15 rounded-xl p-8 text-center hover:border-primary/50 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1.5 transition-all duration-300">
              <span className="block font-extrabold text-primary text-3xl sm:text-4xl mb-4">
                04
              </span>
              <h3 className="text-white font-bold text-lg mb-2">Improve</h3>
              <p className="text-neutral-muted text-sm sm:text-base leading-relaxed">
                Refine workflows, reduce repeat issues, and make support easier to manage over time.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Why CivicSpan Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-2">
            Why CivicSpan
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Practical support without the runaround.
          </h2>
        </div>

        <div className="flex-1 space-y-4">
          <p className="text-neutral-light text-sm sm:text-base leading-relaxed font-medium">
            CivicSpan IT Group is built for organizations that need dependable technical help, clear communication, and support that respects how work actually gets done.
          </p>
          <p className="text-neutral-light text-sm sm:text-base leading-relaxed">
            We understand infrastructure environments, documentation needs, Bentley and ProjectWise-adjacent workflows, and the importance of reducing downtime for busy teams.
          </p>
        </div>
      </section>

      {/* Clients Section (Who We Support) */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center border-t border-white/5">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Who We Support
        </h2>
        <p className="text-neutral-muted text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-12">
          From small businesses to infrastructure-focused teams, CivicSpan IT Group delivers technical support and digital solutions designed to improve efficiency, communication, and day-to-day operations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 border border-white/8 py-8 px-6 rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 font-semibold text-neutral-light">
            Small Businesses
          </div>
          <div className="bg-white/5 border border-white/8 py-8 px-6 rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 font-semibold text-neutral-light">
            Nonprofits
          </div>
          <div className="bg-white/5 border border-white/8 py-8 px-6 rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 font-semibold text-neutral-light">
            Government-Adjacent Teams
          </div>
          <div className="bg-white/5 border border-white/8 py-8 px-6 rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 font-semibold text-neutral-light">
            Engineering & Infrastructure Environments
          </div>
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
          Contact CivicSpan IT Group to discuss your organization's needs.
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
