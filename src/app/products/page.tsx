import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Products | CivicSpan Merchandise, Digital Downloads & Hardware',
  description: 'Curated CivicSpan products including branded merchandise, digital downloads, IT accessories, and business hardware recommendations.',
}

const productCategories = [
  {
    title: 'CivicSpan Merchandise',
    eyebrow: 'Print-on-demand',
    description:
      'Branded merchandise can be fulfilled through a print-on-demand provider so CivicSpan does not need to hold inventory.',
    items: ['Polo shirts', 'T-shirts', 'Hoodies', 'Hats', 'Mugs', 'Mousepads', 'Stickers', 'Notebooks', 'Tumblers'],
    cta: 'Ask about branded merchandise',
  },
  {
    title: 'Digital Products',
    eyebrow: 'Downloads',
    description:
      'Practical checklists, templates, and assessment guides that support better technology operations and documentation.',
    items: [
      'Windows 11 Readiness Checklist',
      'Microsoft 365 Security Checklist',
      'IT Asset Inventory Template',
      'SOP Templates',
      'Disaster Recovery Template',
      'Employee IT Onboarding Checklist',
    ],
    cta: 'Request a digital template',
  },
  {
    title: 'IT Accessories',
    eyebrow: 'Curated equipment',
    description:
      'Everyday accessories that support reliable workstations, mobile setups, and cleaner technology deployments.',
    items: ['Keyboards', 'Mice', 'Docking Stations', 'USB-C Hubs', 'Ethernet Cables', 'HDMI Cables'],
    cta: 'Request accessory guidance',
  },
  {
    title: 'Business Hardware',
    eyebrow: 'Dell-focused',
    description:
      'Business-class hardware recommendations aligned with deployment, lifecycle planning, and operational support.',
    items: ['Dell Laptops', 'Dell Monitors', 'Dell Workstations', 'Docking Stations'],
    cta: 'Discuss business hardware',
  },
]

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
            A curated products section for branded merchandise, digital downloads, IT accessories, and business hardware that supports better technology operations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn">
              Request Product Info
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
            Start with a curated catalog. Add checkout integration later.
          </h2>
          <p className="text-neutral-light text-sm sm:text-base leading-relaxed max-w-4xl">
            This first version creates the product structure without forcing inventory, fulfillment, or payment decisions. Merchandise can connect to a print-on-demand provider, digital products can become downloadable assets, and hardware categories can support consultative recommendations or future affiliate/vendor workflows.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {productCategories.map((category) => (
            <article key={category.title} className="rounded-3xl border border-green-500/15 bg-dark-secondary/80 p-8 h-full flex flex-col">
              <p className="text-primary uppercase tracking-[0.16em] text-xs font-extrabold mb-3">{category.eyebrow}</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">{category.title}</h2>
              <p className="text-neutral-light text-sm leading-6 mb-6">{category.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-auto text-primary font-bold text-sm hover:underline">
                {category.cta} →
              </Link>
            </article>
          ))}
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
              Digital products should reinforce CivicSpan&apos;s larger positioning: operational resilience, lifecycle management, documentation, governance, and readiness for modernization.
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
            Want to start with digital downloads or merchandise first?
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            CivicSpan can launch this as a simple catalog now, then connect print-on-demand, payment, or download delivery once the product list and fulfillment path are finalized.
          </p>
          <Link href="/contact" className="btn mt-8">
            Plan the Product Launch
          </Link>
        </section>
      </main>
    </>
  )
}
