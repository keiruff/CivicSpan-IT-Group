import { Metadata } from 'next'
import Link from 'next/link'
import ProductCart from '@/components/ProductCart'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'Products | CivicSpan Merchandise, Digital Downloads & Hardware',
  description: 'Shop CivicSpan products including branded merchandise, digital downloads, IT accessories, and business hardware recommendations with a request cart.',
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
    body: 'Use curated hardware and accessory categories to standardize purchases instead of buying one-off devices with no lifecycle plan.',
  },
]

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 py-20 sm:py-28 text-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(34,197,94,0.16),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.18em] uppercase mb-4">Products</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            CivicSpan Products, Templates, and Curated Technology
          </h1>
          <p className="text-blue-100 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Add branded merchandise, digital downloads, IT accessories, and business hardware to a cart, then request checkout details when you are ready.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#products-cart" className="btn">
              Start Shopping
            </Link>
            <Link
              href="/pillars/technology-lifecycle-management"
              className="px-8 py-3 border border-primary/40 text-primary hover:bg-primary/10 font-bold rounded-lg transition-all duration-300"
            >
              View Lifecycle Framework
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 pb-24 space-y-20">
        <section className="rounded-[28px] border border-green-500/15 bg-dark-secondary/80 p-8 sm:p-10">
          <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-4">
            Phase 1 Product Strategy
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            A real cart now. Provider checkout can connect next.
          </h2>
          <p className="text-neutral-light text-sm sm:text-base leading-relaxed max-w-4xl">
            This version creates a working request cart with product image slots, quantities, cart persistence, and checkout handoff. Once a print-on-demand, payment, affiliate, or digital-download provider is selected, the same product structure can connect to live checkout and delivery.
          </p>
        </section>

        <section id="products-cart">
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
            Ready for live checkout later?
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            The cart is ready for provider integration. Next steps can include print-on-demand fulfillment, Stripe checkout, affiliate links, or protected digital-download delivery.
          </p>
          <Link href="/contact" className="btn mt-8">
            Plan Checkout Integration
          </Link>
        </section>
      </main>
    </>
  )
}
