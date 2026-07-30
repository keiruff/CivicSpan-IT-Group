import { Metadata } from 'next'
import ProductCart from '@/components/ProductCart'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'Recommended Hardware Quotes | CivicSpan IT Group',
  description: 'Review CivicSpan recommended Dell hardware categories and request scoped quotes for business laptops, workstations, monitors, docks, and networking hardware.',
}

const shopifyUrl = 'https://h1bg1p-j7.myshopify.com/'
const quoteEmail = 'info@civicspanitgroup.com'
const generalQuoteHref = `mailto:${quoteEmail}?subject=${encodeURIComponent('Hardware quote request')}&body=${encodeURIComponent([
  'I would like a quote for recommended business hardware.',
  '',
  'Products or categories:',
  'Quantity:',
  'Timeline:',
  'Organization:',
  'Deployment/support needs:',
  'Notes:',
].join('\n'))}`

const workstationBundle = [
  'Dell Precision workstation',
  'Business laptop or desktop requirements',
  'Monitor and docking needs',
  'Warranty and lifecycle expectations',
  'Deployment and onboarding support',
  'Custom quote and spec review',
]

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 py-20 sm:py-28 text-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(34,197,94,0.16),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.18em] uppercase mb-4">Recommended Hardware</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Request quotes for scoped business hardware.
          </h1>
          <p className="text-blue-100 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            This page is only for products that need CivicSpan review before purchase: Dell laptops, workstations, monitors, docks, and network hardware. Merchandise, templates, accessories, and direct-purchase items stay on Shopify.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={shopifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Browse Recommended Products ↗
            </a>
            <a href={generalQuoteHref} className="px-8 py-3 border border-primary/40 text-primary hover:bg-primary/10 font-bold rounded-lg transition-all duration-300">
              Request a Custom Quote
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 pb-24 space-y-20">
        <section className="rounded-[28px] border border-green-500/15 bg-dark-secondary/80 p-8 sm:p-10">
          <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-4">
            Clear separation
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Shopify handles direct-purchase products. CivicSpan scopes quote-based hardware.
          </h2>
          <p className="text-neutral-light text-sm sm:text-base leading-relaxed max-w-4xl">
            If a product can be purchased directly, it belongs on Shopify. If it needs sizing, warranty review, deployment planning, procurement support, or managed support, it stays here as a quote request.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
          <div>
            <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-4">
              Hardware Scoping
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Plan the bundle before pricing the parts.
            </h2>
            <p className="text-neutral-light text-sm sm:text-base leading-relaxed">
              Business hardware quotes should account for the user role, lifecycle, warranty, deployment work, and support plan—not just the device model.
            </p>
          </div>

          <div className="rounded-3xl border border-green-500/15 bg-dark-secondary/80 p-7">
            <div className="space-y-3">
              {workstationBundle.map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-extrabold text-xs">
                    {index + 1}
                  </span>
                  <span className="text-white font-semibold">{item}</span>
                  {index < workstationBundle.length - 1 ? <span className="ml-auto text-neutral-muted">↓</span> : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products-cart">
          <div className="mb-8 rounded-3xl border border-primary/25 bg-primary/10 p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <p className="text-primary uppercase tracking-[0.16em] text-xs font-extrabold mb-2">Quote Requests</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Need business hardware for your team?</h2>
              <p className="text-neutral-light text-sm sm:text-base leading-relaxed">
                Use a product-specific quote button below, or send one general quote request for a larger bundle.
              </p>
            </div>
            <a href={generalQuoteHref} className="btn shrink-0">
              Request a Custom Quote
            </a>
          </div>
          <ProductCart products={products} />
        </section>
      </main>
    </>
  )
}
