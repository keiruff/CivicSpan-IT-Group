import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Infrastructure & Technology Operations | CivicSpan IT Group',
  description: 'CivicSpan’s cornerstone philosophy page for operating, modernizing, securing, documenting, and supporting the technology that keeps organizations running.',
}

const lifecycleSteps = [
  { step: 'Plan', body: 'Assess the environment, identify risk, and create practical roadmaps.' },
  { step: 'Procure', body: 'Standardize Dell hardware, licensing, warranties, and purchasing paths.' },
  { step: 'Deploy', body: 'Roll out Microsoft 365, endpoints, accounts, devices, and user-ready systems.' },
  { step: 'Secure', body: 'Strengthen identity, permissions, cloud security, and baseline controls.' },
  { step: 'Document', body: 'Create SOPs, runbooks, knowledge bases, onboarding notes, and recovery documentation.' },
  { step: 'Operate', body: 'Support, monitor, patch, maintain, and improve the environment over time.' },
  { step: 'Modernize', body: 'Plan Windows 11, Azure, cloud migrations, technology refreshes, and AI readiness.' },
  { step: 'Repeat', body: 'Use what was learned to make the next cycle cleaner, safer, and easier to run.' },
]

const operationsAreas = [
  'Operational continuity',
  'Lifecycle management',
  'Documentation and knowledge transfer',
  'Infrastructure modernization',
  'Security and governance',
  'Engineering technology operations',
  'AI readiness foundations',
]

const aiFoundations = [
  'Organized Microsoft 365 environments',
  'Secure identities and permissions',
  'Clean documentation and runbooks',
  'Reliable infrastructure and endpoints',
  'Well-managed data and knowledge',
]

export default function InfrastructureTechnologyOperationsPage() {
  return (
    <>
      <Hero
        title="Infrastructure & Technology Operations"
        description="Technology is more than fixing computers, answering help desk tickets, or installing software. It is the operating system behind the organization."
      />

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        <section className="rounded-[32px] border border-green-500/15 bg-dark-secondary/80 p-8 sm:p-12">
          <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-5">
            Cornerstone Positioning
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            CivicSpan helps organizations operate and modernize the technology that keeps their business running.
          </h2>
          <p className="text-neutral-light text-sm sm:text-lg leading-relaxed max-w-3xl">
            That means understanding the environment, solving immediate issues, documenting what matters, and improving the system over time. It is not a commodity help desk model. It is an operations partnership.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          <div>
            <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-4">
              What Operations Means
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              The goal is operational resilience.
            </h2>
            <p className="text-neutral-light text-sm sm:text-base leading-relaxed">
              Reliable operations come from lifecycle planning, secure identities, clean documentation, modernization roadmaps, governed cloud tools, and infrastructure that users can trust every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {operationsAreas.map((area) => (
              <div key={area} className="rounded-xl border border-green-500/15 bg-dark-secondary/80 p-5 text-neutral-light text-sm flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>{area}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="text-center mb-12">
            <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-3">
              Signature Framework
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">The CivicSpan Technology Lifecycle</h2>
            <p className="text-neutral-light text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Plan, procure, deploy, secure, document, operate, modernize, and repeat. The lifecycle keeps services connected to business outcomes instead of treating each project as a one-off task.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {lifecycleSteps.map((item, index) => (
              <article key={item.step} className="rounded-2xl border border-green-500/15 bg-dark-secondary/80 p-6 h-full">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-primary font-extrabold text-xs tracking-[0.18em] uppercase">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-neutral-muted text-xl">{index < lifecycleSteps.length - 1 ? '↓' : '↻'}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3">{item.step}</h3>
                <p className="text-neutral-muted text-sm leading-6">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-green-500/15 bg-dark-secondary/80 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-4">
                AI Readiness
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                AI starts with good infrastructure.
              </h2>
              <p className="text-neutral-light text-sm sm:text-base leading-relaxed">
                CivicSpan does not position AI as a magic layer on top of messy systems. Organizations get more value from AI when the foundation is organized, secure, documented, and governable.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aiFoundations.map((item) => (
                <li key={item} className="flex items-start gap-3 text-neutral-muted text-sm">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="text-center rounded-[28px] border border-slate-400/15 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.15),transparent_40%),rgba(15,23,42,0.85)] p-10 sm:p-14 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Move from support tickets to operational resilience.
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Start with the lifecycle stage that needs attention: planning, procurement, deployment, security, documentation, operations, modernization, or AI readiness.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solutions" className="px-8 py-3 bg-primary hover:bg-primary-dark text-dark font-bold rounded-lg transition-all duration-300">
              View Service Packages
            </Link>
            <Link href="/contact" className="px-8 py-3 border border-primary/40 text-primary hover:bg-primary/10 font-bold rounded-lg transition-all duration-300">
              Discuss Your Needs
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
