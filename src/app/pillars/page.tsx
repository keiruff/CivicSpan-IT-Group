import { Metadata } from 'next'
import Link from 'next/link'
import { pillarPages } from '@/data/pillarContent'

export const metadata: Metadata = {
  title: 'SEO Pillar Pages | CivicSpan IT Group',
  description: 'Pillar pages connecting CivicSpan topics, blog posts, solutions, locations, FAQ, and services across infrastructure modernization, Microsoft 365, engineering technology, cloud operations, IT documentation, and lifecycle management.',
}

export default function PillarsPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 py-20 sm:py-28 text-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(34,197,94,0.16),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.18em] uppercase mb-4">Pillar Pages</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">CivicSpan Expertise Hubs</h1>
          <p className="text-blue-100 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            These pillars connect topics, blog posts, solutions, locations, FAQ, and services so visitors can understand CivicSpan&apos;s full expertise structure.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillarPages.map((pillar) => (
            <article key={pillar.slug} className="rounded-3xl border border-green-500/15 bg-dark-secondary/80 p-8 flex flex-col justify-between backdrop-blur hover:border-primary/60 hover:-translate-y-1 transition-all duration-300">
              <div>
                <p className="text-primary uppercase tracking-[0.16em] text-xs font-extrabold mb-3">{pillar.eyebrow}</p>
                <h2 className="text-2xl font-extrabold text-white mb-3">{pillar.title}</h2>
                <p className="text-neutral-light text-sm leading-6 mb-5">{pillar.description}</p>
                <p className="text-neutral-muted text-sm leading-6 border-t border-white/8 pt-5">
                  <span className="text-primary font-semibold">Outcome: </span>
                  {pillar.outcome}
                </p>
              </div>
              <Link href={`/pillars/${pillar.slug}`} className="mt-6 text-primary font-bold text-sm hover:underline">
                Explore pillar →
              </Link>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}
