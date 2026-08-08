import { Metadata } from 'next'
import Image from 'next/image'
import ProductCart from '@/components/ProductCart'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'Bulk Hardware & Licensing Collection | CivicSpan IT Group',
  description: 'Review CivicSpan bulk hardware, licensing, and deployment quote paths for business laptops, workstations, monitors, docks, and networking hardware.',
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
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center text-left">
          <div className="text-center lg:text-left">
            <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.18em] uppercase mb-4">Bulk Hardware &amp; Licensing Collection</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Request quotes for bulk hardware, licensing, and deployment support.
            </h1>
            <p className="text-blue-100 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto lg:mx-0">
              Enterprise technology, licensing, and deployment support available by quote. Contact CivicSpan to discuss quantities, public-sector requirements, and rollout needs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={shopifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary bg-primary px-8 py-3.5 text-dark font-bold shadow-lg shadow-green-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Browse Recommended Products ↗
              </a>
              <a href={generalQuoteHref} className="px-8 py-3 border border-primary/40 text-primary hover:bg-primary/10 font-bold rounded-lg transition-all duration-300 text-center">
                Request a Custom Quote
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-lg rounded-[2rem] border border-green-500/20 bg-white/[0.03] p-4 shadow-2xl shadow-green-500/10">
            <Image
              src="/civicspan-recommended-badge.svg"
              alt="CivicSpan Recommended badge: trusted, tested, deployed"
              width={1200}
              height={760}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 pb-24 space-y-20">
        <section className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
          <div>
            <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-4">
              Hardware Scoping
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Plan the bundle before pricing the parts.
            </h2>
            <p className="text-neutral-light text-sm sm:text-base leading-relaxed">
              Business hardware quotes should account for the user role, lifecycle, warranty, deployment work, and support plan,not just the device model.
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
