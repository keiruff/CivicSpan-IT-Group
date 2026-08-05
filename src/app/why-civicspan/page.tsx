import { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Why CivicSpan IT Group | Documented IT Operations Support',
  description: 'See how CivicSpan IT Group delivers documented IT operations support for ProjectWise, Microsoft 365, Dell procurement, and infrastructure teams that need accountable help.',
}

const principles = [
  {
    title: 'Build for operations, not novelty',
    body: 'Technology choices should make work easier to support, document, secure, and repeat. The best system is the one people can actually operate after the project is finished.',
  },
  {
    title: 'Modernize without losing control',
    body: 'Cloud, Microsoft 365, Windows 11, Azure, and endpoint changes should reduce risk and confusion, not create another pile of unmanaged tools.',
  },
  {
    title: 'Document what keeps the business running',
    body: 'SOPs, runbooks, onboarding notes, asset records, and recovery documentation turn individual knowledge into organizational capability.',
  },
]

const capabilities = [
  'Infrastructure operations',
  'Endpoint deployment',
  'Dell procurement',
  'Microsoft 365 and cloud support',
  'Infrastructure modernization',
  'Engineering technology',
  'ProjectWise, Bentley, CAD, and GIS support',
  'Managed infrastructure and lifecycle planning',
  'Security, identity, governance, and risk reduction',
  'SOPs, runbooks, CMDB planning, onboarding, and disaster recovery documentation',
]

export default function WhyCivicSpanPage() {
  return (
    <>
      <Hero
        title="Why CivicSpan IT Group"
        description="Technology is not the goal. Reliable operations are."
      />

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        <section className="rounded-[32px] border border-green-500/15 bg-dark-secondary/80 p-8 sm:p-12">
          <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-5">
            The Philosophy
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            CivicSpan helps organizations build, modernize, secure, document, and support the technology that keeps their business running.
          </h2>
          <p className="text-neutral-light text-sm sm:text-lg leading-relaxed max-w-3xl">
            The work is not just hardware, software, migrations, or help desk support. The work is creating dependable infrastructure and technology operations that people can trust every day.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((principle) => (
            <article key={principle.title} className="rounded-2xl border border-green-500/15 bg-dark-secondary/70 p-7 h-full">
              <h2 className="text-xl font-bold text-primary mb-3">{principle.title}</h2>
              <p className="text-neutral-light text-sm leading-6">{principle.body}</p>
            </article>
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
          <div>
            <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-4">
              One Operating Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Separate services become one connected operating model.
            </h2>
            <p className="text-neutral-light text-sm sm:text-base leading-relaxed">
              CivicSpan connects infrastructure, endpoints, cloud platforms, engineering systems, security, governance, and documentation so the environment becomes easier to support over time.
            </p>
          </div>

          <div className="rounded-2xl border border-green-500/15 bg-dark-secondary/80 p-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {capabilities.map((item) => (
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
            Ready to make the environment easier to operate?
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Start with the outcome: stabilize, modernize, secure, document, or support the technology that keeps the organization moving.
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
