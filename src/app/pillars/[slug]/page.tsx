import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findPillar, pillarPages } from '@/data/pillarContent'

const siteUrl = 'https://civicspanitgroup.com'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return pillarPages.map((page) => ({ slug: page.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const page = findPillar(params.slug)
  if (!page) return {}

  return {
    title: `${page.title} | CivicSpan IT Group`,
    description: page.description,
    alternates: { canonical: `${siteUrl}/pillars/${page.slug}` },
  }
}

export default function PillarPage({ params }: Props) {
  const page = findPillar(params.slug)
  if (!page) notFound()

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Pillars', item: `${siteUrl}/pillars` },
      { '@type': 'ListItem', position: 3, name: page.title, item: `${siteUrl}/pillars/${page.slug}` },
    ],
  }

  const groupedLinks = page.supporting.reduce<Record<string, typeof page.supporting>>((groups, item) => {
    groups[item.group] = groups[item.group] || []
    groups[item.group].push(item)
    return groups
  }, {})

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="relative overflow-hidden px-6 py-20 sm:py-28 text-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(34,197,94,0.16),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.18em] uppercase mb-4">
            Pillar / {page.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {page.title}
          </h1>
          <p className="text-blue-100 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            {page.intro}
          </p>
          <Link href="/contact" className="btn mt-8">
            Talk to CivicSpan
          </Link>
        </div>
      </section>

      <main className="relative max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8 lg:gap-12">
          <article className="space-y-8">
            <section className="rounded-3xl border border-green-500/15 bg-dark-secondary/80 p-8 sm:p-10 backdrop-blur">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Business outcome</h2>
              <p className="text-neutral-light leading-7">{page.outcome}</p>
            </section>

            {page.sections.map((section) => (
              <section key={section.heading} className="rounded-3xl border border-green-500/15 bg-dark-secondary/80 p-8 sm:p-10 backdrop-blur">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">{section.heading}</h2>
                <p className="text-neutral-light leading-7">{section.body}</p>
                {section.bullets?.length ? (
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="rounded-3xl border border-green-500/15 bg-slate-950/80 p-8 sm:p-10 backdrop-blur">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Supporting content cluster</h2>
              <p className="text-neutral-light leading-7 mb-6">
                This pillar connects related CivicSpan topics, blog posts, solutions, locations, FAQ entries, and service pages so the full expertise area is easier to navigate.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {Object.entries(groupedLinks).map(([group, links]) => (
                  <div key={group} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <h3 className="text-primary font-bold uppercase tracking-[0.16em] text-xs mb-4">{group}</h3>
                    <nav className="space-y-3" aria-label={`${group} links`}>
                      {links.map((link) => (
                        <Link key={link.href} href={link.href} className="block text-sm font-semibold text-slate-100 hover:text-primary hover:underline">
                          {link.label} →
                        </Link>
                      ))}
                    </nav>
                  </div>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 self-start">
            <div className="rounded-3xl border border-green-500/20 bg-slate-950/90 p-7 shadow-xl">
              <p className="text-primary uppercase tracking-[0.16em] text-xs font-extrabold mb-3">Pillar Pages</p>
              <nav className="space-y-3" aria-label="Pillar pages">
                {pillarPages.map((pillar) => (
                  <Link key={pillar.slug} href={`/pillars/${pillar.slug}`} className={`block rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${pillar.slug === page.slug ? 'border-primary bg-primary/10 text-primary' : 'border-white/10 bg-white/[0.03] text-slate-100 hover:border-primary hover:text-primary'}`}>
                    {pillar.title}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="rounded-3xl border border-green-500/20 bg-primary/10 p-7">
              <h2 className="text-xl font-extrabold text-white mb-3">Need help with this pillar?</h2>
              <p className="text-sm text-slate-200 leading-6 mb-5">
                Share the environment, risk, or modernization goal and CivicSpan can recommend a practical next step.
              </p>
              <Link href="/contact" className="inline-block px-5 py-3 bg-primary hover:bg-primary-dark text-dark font-bold rounded-lg transition-colors">
                Contact CivicSpan
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}
