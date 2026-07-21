import Link from 'next/link'
import { Metadata } from 'next'
import { faqItems, siteUrl } from '@/data/seoContent'

export const metadata: Metadata = {
  title: 'IT Support FAQ | CivicSpan IT Group',
  description: 'Answers to common questions about Microsoft 365 migration, ProjectWise, Dell laptop deployment, municipalities, and CivicSpan consulting services.',
  alternates: { canonical: `${siteUrl}/faq` },
}

export default function FAQPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${siteUrl}/faq` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqJsonLd, breadcrumb]) }} />
      <section className="relative overflow-hidden px-6 py-20 sm:py-28 text-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(34,197,94,0.16),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.18em] uppercase mb-4">FAQ</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">Common IT Support Questions</h1>
          <p className="text-blue-100 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Answers to common questions about Microsoft 365 migrations, ProjectWise support, Dell laptop deployment, and public-sector technology support.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 pb-24 space-y-5">
        {faqItems.map((item) => (
          <article key={item.question} className="rounded-3xl border border-green-500/15 bg-dark-secondary/80 p-8 backdrop-blur">
            <h2 className="text-2xl font-extrabold text-white mb-3">{item.question}</h2>
            <p className="text-neutral-light leading-7 mb-4">{item.answer}</p>
            <Link href={item.href} className="text-primary font-bold text-sm hover:underline">
              Learn more →
            </Link>
          </article>
        ))}
      </main>
    </>
  )
}
