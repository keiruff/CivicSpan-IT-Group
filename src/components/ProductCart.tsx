import Image from 'next/image'
import type { Product } from '@/data/products'

type Props = {
  products: Product[]
}

const requestQuoteEmail = 'info@civicspanitgroup.com'

function quoteHref(product: Product) {
  const subject = encodeURIComponent(`Quote request: ${product.name}`)
  const body = encodeURIComponent([
    `I would like a quote for: ${product.name}`,
    '',
    'Recommended use:',
    ...product.recommendedFor.map((item) => `- ${item}`),
    '',
    'Please include pricing, availability, warranty options, deployment/support options, and next steps.',
    '',
    'Quantity:',
    'Timeline:',
    'Organization:',
    'Notes:',
  ].join('\n'))

  return `mailto:${requestQuoteEmail}?subject=${subject}&body=${body}`
}

export default function ProductCart({ products }: Props) {
  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-green-500/15 bg-dark-secondary/80 p-6 sm:p-8">
        <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-3">
          Recommended Products
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
          Quote-ready hardware and licensing support for public-sector deployments.
        </h2>
        <p className="text-neutral-light text-sm sm:text-base leading-relaxed max-w-3xl">
          These Dell hardware and licensing-related categories stay on this page because they require scoping before purchase. Each quote request opens a pre-filled email so quantities, warranty, deployment, and support needs can be confirmed before pricing.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <article key={product.id} className="rounded-3xl border border-green-500/15 bg-dark-secondary/80 overflow-hidden flex flex-col h-full">
            <div className="relative aspect-[4/3] border-b border-white/8 bg-dark">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-primary uppercase tracking-[0.16em] text-xs font-extrabold mb-2">{product.type}</p>
                <h3 className="text-2xl font-extrabold text-white leading-tight">{product.name}</h3>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <p className="text-neutral-light text-sm leading-6 mb-5">{product.description}</p>

              <div className="mb-6 space-y-5">
                <div>
                  <p className="text-primary uppercase tracking-[0.16em] text-[0.7rem] font-extrabold mb-2">Recommended for</p>
                  <div className="flex flex-wrap gap-2">
                    {product.recommendedFor.map((item) => (
                      <span key={item} className="rounded-full border border-green-500/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-primary uppercase tracking-[0.16em] text-[0.7rem] font-extrabold mb-2">Why CivicSpan recommends it</p>
                  <ul className="space-y-1.5">
                    {product.whyRecommended.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-neutral-muted leading-5">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-neutral-muted text-xs leading-5">{product.fulfillment}</p>
              </div>

              <div className="mt-auto flex items-center justify-between gap-3">
                <span className="text-neutral-muted text-xs">Custom quote required</span>
                <a
                  href={quoteHref(product)}
                  className="rounded-lg bg-primary px-4 py-2 text-dark font-bold text-sm hover:bg-primary-dark transition-colors text-center"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
