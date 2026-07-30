import { Metadata } from 'next'
import Link from 'next/link'
import ProductCart from '@/components/ProductCart'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'Shop | Templates, Merchandise & Hardware Guidance | CivicSpan IT Group',
  description: 'Shop CivicSpan digital SOP templates and Printful merchandise through Shopify, or request custom-scoped Dell hardware solutions for business teams.',
}

const digitalProductUseCases = [
  {
    title: 'Readiness planning',
    body: 'Use checklists to identify gaps before a Windows 11 rollout, Microsoft 365 cleanup, endpoint refresh, or cloud migration.',
  },
  {
    title: 'Operational documentation',
    body: 'Use templates to document SOPs, onboarding steps, asset inventories, and disaster recovery information before it becomes urgent.',
  },
  {
    title: 'Procurement support',
    body: 'Use curated hardware and accessory categories to standardize purchases, then request a custom bundle quote before devices are priced or ordered.',
  },
]

const workstationBundle = [
  'Dell Precision workstation',
  '32GB RAM',
  '2TB NVMe SSD',
  'NVIDIA RTX graphics',
  '27" UltraSharp monitor',
  'Docking station',
  'Mechanical keyboard',
  'Custom quote and spec review',
]

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 py-20 sm:py-28 text-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(34,197,94,0.16),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.18em] uppercase mb-4">CivicSpan Recommendations</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Shop Templates, Merchandise, and Supported Hardware.
          </h1>
          <p className="text-blue-100 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Start here for CivicSpan digital SOP templates, Printful print-on-demand merchandise, and hardware recommendations. Shopify handles checkout and downloads; CivicSpan scopes Dell business hardware separately.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://h1bg1p-j7.myshopify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Open Shopify Checkout ↗
            </a>
            <Link href="#products-cart" className="px-8 py-3 border border-primary/40 text-primary hover:bg-primary/10 font-bold rounded-lg transition-all duration-300">
              Browse Shop Categories
            </Link>
            <Link
              href="/pillars/technology-lifecycle-management"
              className="px-8 py-3 border border-white/20 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-300"
            >
              View Lifecycle Framework
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 pb-24 space-y-20">
        <section className="rounded-[28px] border border-green-500/15 bg-dark-secondary/80 p-8 sm:p-10">
          <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-4">
            One clear shop path
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Services stay separate. Purchasable items live here.
          </h2>
          <p className="text-neutral-light text-sm sm:text-base leading-relaxed max-w-4xl mb-4">
            The Services page explains CivicSpan consulting and support work. This Shop page points customers to digital SOP templates, Printful merchandise, and curated hardware recommendations without creating a second competing destination. Shopify remains the checkout and file-delivery system.
          </p>
          <p className="text-primary text-lg sm:text-xl font-extrabold leading-relaxed max-w-4xl">
            If it is a paid download or product, it belongs in the shop flow. If it is consulting, it belongs on Services.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
          <div>
            <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-4">
              Recommended Bundle
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Building an Engineering Workstation
            </h2>
            <p className="text-neutral-light text-sm sm:text-base leading-relaxed">
              Need a workstation capable of handling Bentley OpenRoads Designer, ProjectWise Explorer, CAD, GIS, and large infrastructure datasets? Start with a spec review, then quote the hardware with onboarding and support attached.
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
              <p className="text-primary uppercase tracking-[0.16em] text-xs font-extrabold mb-2">B2B Solutions &amp; Custom Scoping</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Looking for enterprise hardware for your team?</h2>
              <p className="text-neutral-light text-sm sm:text-base leading-relaxed">
                We scope, register, and deploy Dell hardware directly for business clients.
              </p>
            </div>
            <Link href="/contact" className="btn shrink-0">
              Request a Custom Quote
            </Link>
          </div>
          <ProductCart products={products} />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
          <div>
            <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-4">
              Digital Products
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Templates that support operations, not just downloads.
            </h2>
            <p className="text-neutral-light text-sm sm:text-base leading-relaxed">
              Digital products reinforce CivicSpan&apos;s larger positioning: operational resilience, lifecycle management, documentation, governance, and readiness for modernization.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {digitalProductUseCases.map((item) => (
              <article key={item.title} className="rounded-2xl border border-green-500/15 bg-dark-secondary/80 p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-neutral-light text-sm leading-6">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="text-center rounded-[28px] border border-slate-400/15 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.15),transparent_40%),rgba(15,23,42,0.85)] p-10 sm:p-14 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Ready to buy or download?
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Explore curated tech accessories, business products, and official merchandise on our online storefront. For enterprise hardware and custom deployments, request a spec review.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://h1bg1p-j7.myshopify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Continue to Shopify Checkout ↗
            </a>
            <Link href="/contact" className="px-8 py-3 border border-primary/40 text-primary hover:bg-primary/10 font-bold rounded-lg transition-all duration-300">
              Request a Spec Review
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
