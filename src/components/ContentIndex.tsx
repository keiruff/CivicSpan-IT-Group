import Link from 'next/link'
import type { ContentPage } from '@/data/seoContent'

type Props = {
  title: string
  description: string
  pages: ContentPage[]
  basePath: string
  eyebrow: string
}

export default function ContentIndex({ title, description, pages, basePath, eyebrow }: Props) {
  return (
    <>
      <section className="relative overflow-hidden px-6 py-20 sm:py-28 text-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(34,197,94,0.16),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.18em] uppercase mb-4">{eyebrow}</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">{title}</h1>
          <p className="text-blue-100 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">{description}</p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pages.map((page) => (
            <article key={page.slug} className="rounded-3xl border border-green-500/15 bg-dark-secondary/80 p-7 flex flex-col justify-between backdrop-blur hover:border-primary/60 hover:-translate-y-1 transition-all duration-300">
              <div>
                <p className="text-primary uppercase tracking-[0.16em] text-xs font-extrabold mb-3">{page.eyebrow}</p>
                <h2 className="text-2xl font-extrabold text-white mb-3">{page.title}</h2>
                <p className="text-neutral-light text-sm leading-6">{page.description}</p>
              </div>
              <Link href={`${basePath}/${page.slug}`} className="mt-6 text-primary font-bold text-sm hover:underline">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}
