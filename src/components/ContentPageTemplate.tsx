import Link from 'next/link'
import type { ContentPage } from '@/data/seoContent'

type Props = {
  page: ContentPage
  category: 'Topic' | 'Location' | 'Guide'
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

export default function ContentPageTemplate({ page, category, jsonLd }: Props) {
  const schema = jsonLd ? JSON.stringify(jsonLd) : null
  const serviceLinks =
    category === 'Topic'
      ? [
          { label: 'infrastructure managed services', href: '/services' },
          { label: 'Microsoft 365 and cloud support', href: '/services#cloud-support' },
          { label: 'engineering technology support', href: '/services#consulting' },
        ]
      : category === 'Location'
        ? [
            { label: 'regional IT consulting', href: '/services' },
            { label: 'local IT support and help desk services', href: '/services#it-support' },
            { label: 'infrastructure managed services', href: '/services#consulting' },
          ]
        : []

  return (
    <>
      {schema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} /> : null}
      <section className="relative overflow-hidden px-6 py-20 sm:py-28 text-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(34,197,94,0.16),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.18em] uppercase mb-4">
            {category} / {page.eyebrow}
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
            {page.sections.map((section) => (
              <section
                key={section.heading}
                className="rounded-3xl border border-green-500/15 bg-dark-secondary/80 p-8 sm:p-10 backdrop-blur"
              >
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

            {serviceLinks.length ? (
              <section className="rounded-3xl border border-green-500/15 bg-slate-950/80 p-8 sm:p-10 backdrop-blur">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Related CivicSpan services</h2>
                <p className="text-neutral-light leading-7 mb-5">
                  Connect this page to CivicSpan&apos;s core service offerings for practical next steps.
                </p>
                <div className="flex flex-wrap gap-3">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex rounded-full border border-green-500/25 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary hover:border-primary hover:bg-primary hover:text-dark transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            {page.faqs?.length ? (
              <section className="rounded-3xl border border-green-500/15 bg-slate-950/80 p-8 sm:p-10 backdrop-blur">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-5">
                  {page.faqs.map((faq) => (
                    <div key={faq.question} className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                      <h3 className="text-lg font-bold text-primary mb-2">{faq.question}</h3>
                      <p className="text-neutral-light leading-7">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 self-start">
            <div className="rounded-3xl border border-green-500/20 bg-slate-950/90 p-7 shadow-xl">
              <p className="text-primary uppercase tracking-[0.16em] text-xs font-extrabold mb-3">Related Pages</p>
              <nav className="space-y-3" aria-label="Related pages">
                {page.related.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-100 hover:border-primary hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="rounded-3xl border border-green-500/20 bg-primary/10 p-7">
              <h2 className="text-xl font-extrabold text-white mb-3">Need help with this?</h2>
              <p className="text-sm text-slate-200 leading-6 mb-5">
                Share what is happening in your environment and CivicSpan can recommend a practical next step.
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
