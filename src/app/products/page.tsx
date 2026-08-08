import { Metadata } from 'next'
import Image from 'next/image'
import ProductCart from '@/components/ProductCart'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'Shop Packages: SharePoint, Websites, Shopify & Hardware | CivicSpan IT Group',
  description: 'Shop CivicSpan quote packages for SharePoint setup, website creation, Shopify store creation, partner hardware, licensing support, and deployment planning.',
  keywords: ['SharePoint setup package', 'website creation package', 'Shopify store setup', 'business hardware quotes', 'partner procurement packages'],
  alternates: { canonical: 'https://civicspanitgroup.com/products' },
  openGraph: {
    title: 'Shop Packages: SharePoint, Websites, Shopify & Hardware | CivicSpan IT Group',
    description: 'Quote-ready packages for SharePoint setup, website creation, Shopify stores, partner hardware, licensing support, and deployment planning.',
    url: 'https://civicspanitgroup.com/products',
    siteName: 'CivicSpan IT Group',
    images: [
      {
        url: 'https://civicspanitgroup.com/civicspan-logo-mark.svg',
        width: 1024,
        height: 1024,
        alt: 'CivicSpan IT Group logo mark',
      },
    ],
  },
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

const partnerShopPackages = [
  {
    title: 'Dell Endpoint Hardware Package',
    partner: 'Dell Technologies',
    partnerHref: 'https://www.dell.com/en-us/lp/business-solutions',
    description: 'Business laptop, workstation, dock, monitor, warranty, deployment, and support scoping for standardized endpoint rollouts.',
    recommendedFor: ['Laptops', 'Workstations', 'Docks', 'Monitors'],
    includes: ['Hardware standard review', 'Warranty and lifecycle planning', 'Deployment quote support'],
  },
  {
    title: 'Cisco Network Hardware Package',
    partner: 'Cisco',
    partnerHref: 'https://www.cisco.com/site/us/en/products/index.html',
    description: 'Network switching, wireless, routing, and connectivity hardware planning for secure office and infrastructure environments.',
    recommendedFor: ['Switching', 'Wireless', 'Routing', 'Refresh projects'],
    includes: ['Network requirement review', 'Bill-of-materials planning', 'Deployment documentation'],
  },
  {
    title: 'Epson Print & Imaging Package',
    partner: 'Epson',
    partnerHref: 'https://epson.com/For-Work',
    description: 'Printer, scanner, imaging, and large-format device planning for business, engineering, and public-sector workflows.',
    recommendedFor: ['Printers', 'Scanners', 'Large-format', 'Office imaging'],
    includes: ['Device fit review', 'Workflow and volume scoping', 'Setup and handoff planning'],
  },
  {
    title: 'Ergotron Workspace Equipment Package',
    partner: 'Ergotron',
    partnerHref: 'https://www.ergotron.com/en-us/products',
    description: 'Monitor arms, carts, mounts, and sit-stand workspace equipment planning for offices, classrooms, healthcare, and technical teams.',
    recommendedFor: ['Monitor arms', 'Carts', 'Mounts', 'Sit-stand workspaces'],
    includes: ['Workspace fit review', 'Mounting and compatibility planning', 'Rollout coordination'],
  },
  {
    title: 'Complete Partner Shop Bundle',
    partner: 'CivicSpan partner ecosystem',
    partnerHref: shopifyUrl,
    description: 'A combined quote package for teams that need endpoint hardware, networking, print/imaging, workspace equipment, licensing support, deployment planning, and documentation.',
    recommendedFor: ['Multi-vendor procurement', 'Public-sector bids', 'Technology refreshes', 'Deployment support'],
    includes: ['Partner product scoping', 'Bundled quote coordination', 'Asset, warranty, and deployment documentation'],
    featured: true,
  },
]

function partnerPackageQuoteHref(pkg: (typeof partnerShopPackages)[number]) {
  const subject = encodeURIComponent(`Partner package quote request: ${pkg.title}`)
  const body = encodeURIComponent([
    `I would like a quote for: ${pkg.title}`,
    '',
    `Partner line: ${pkg.partner}`,
    '',
    'Products or categories:',
    'Quantity:',
    'Timeline:',
    'Organization:',
    'Deployment/support needs:',
    'Notes:',
  ].join('\n'))

  return `mailto:${quoteEmail}?subject=${subject}&body=${body}`
}

const serviceShopPackages = [
  {
    title: 'SharePoint Setup Package',
    category: 'Microsoft 365',
    platformHref: 'https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration',
    description: 'SharePoint site structure, document libraries, permissions, Teams/OneDrive alignment, and user-ready handoff documentation.',
    recommendedFor: ['Document libraries', 'Permissions', 'Teams sites', 'File cleanup'],
    includes: ['Site and library planning', 'Permission and sharing review', 'User handoff guide'],
  },
  {
    title: 'Website Creation Package',
    category: 'Web Presence',
    platformHref: '/contact',
    description: 'A professional small-business website package covering page structure, copy organization, contact flow, launch readiness, and search-friendly metadata.',
    recommendedFor: ['Small businesses', 'Service pages', 'Contact forms', 'SEO basics'],
    includes: ['Homepage and service page planning', 'Contact form and lead flow setup', 'Metadata and launch checklist'],
  },
  {
    title: 'Shopify Store Creation Package',
    category: 'Shopify',
    platformHref: 'https://www.shopify.com/',
    description: 'Shopify storefront setup for service packages, product collections, quote paths, payment readiness, and customer-facing catalog organization.',
    recommendedFor: ['Online stores', 'Quote packages', 'Collections', 'Service catalogs'],
    includes: ['Storefront and collection setup', 'Product/package page structure', 'Launch and handoff documentation'],
  },
]

function servicePackageQuoteHref(pkg: (typeof serviceShopPackages)[number]) {
  const subject = encodeURIComponent(`Service package quote request: ${pkg.title}`)
  const body = encodeURIComponent([
    `I would like a quote for: ${pkg.title}`,
    '',
    `Package category: ${pkg.category}`,
    '',
    'Current website/store/platform:',
    'Timeline:',
    'Organization:',
    'Goals:',
    'Notes:',
  ].join('\n'))

  return `mailto:${quoteEmail}?subject=${subject}&body=${body}`
}

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

          <div className="mx-auto w-full max-w-[260px] sm:max-w-xs lg:max-w-sm rounded-3xl border border-green-500/15 bg-white/[0.025] p-3 shadow-xl shadow-green-500/5">
            <Image
              src="/civicspan-recommended-badge.svg"
              alt="CivicSpan Recommended badge: trusted, tested, deployed"
              width={720}
              height={456}
              priority
              className="h-auto w-full opacity-95"
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
              Business hardware quotes should account for the user role, lifecycle, warranty, deployment work, and support plan, not just the device model.
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

        <section id="service-shop-packages" className="space-y-8">
          <div className="rounded-[28px] border border-green-500/15 bg-dark-secondary/80 p-6 sm:p-8">
            <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-3">
              Service Shop Packages
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Fixed-scope packages for collaboration, websites, and online stores.
            </h2>
            <p className="text-neutral-light text-sm sm:text-base leading-relaxed max-w-3xl">
              Start with a focused package for SharePoint, a professional website, or a Shopify storefront. Each package is scoped for clean setup, launch readiness, and customer-facing handoff documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceShopPackages.map((pkg) => (
              <article key={pkg.title} className="rounded-3xl border border-green-500/15 bg-dark-secondary/80 overflow-hidden flex flex-col h-full">
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-primary uppercase tracking-[0.16em] text-xs font-extrabold mb-3">{pkg.category}</p>
                  <h3 className="text-2xl font-extrabold text-white leading-tight mb-4">{pkg.title}</h3>
                  <p className="text-neutral-light text-sm leading-6 mb-5">{pkg.description}</p>

                  <div className="mb-6 space-y-5">
                    <div>
                      <p className="text-primary uppercase tracking-[0.16em] text-[0.7rem] font-extrabold mb-2">Recommended for</p>
                      <div className="flex flex-wrap gap-2">
                        {pkg.recommendedFor.map((item) => (
                          <span key={item} className="rounded-full border border-green-500/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-primary uppercase tracking-[0.16em] text-[0.7rem] font-extrabold mb-2">Package includes</p>
                      <ul className="space-y-1.5">
                        {pkg.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-neutral-muted leading-5">
                            <span className="text-primary font-bold mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col gap-3">
                    <a
                      href={pkg.platformHref}
                      target={pkg.platformHref.startsWith('http') ? '_blank' : undefined}
                      rel={pkg.platformHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="rounded-lg border border-primary/40 px-4 py-2 text-primary font-bold text-sm hover:bg-primary/10 transition-colors text-center"
                    >
                      {pkg.platformHref.startsWith('http') ? 'View Platform ↗' : 'Discuss Website Package'}
                    </a>
                    <a
                      href={servicePackageQuoteHref(pkg)}
                      className="rounded-lg bg-primary px-4 py-2 text-dark font-bold text-sm hover:bg-primary-dark transition-colors text-center"
                    >
                      Request Package Quote
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="partner-shop-packages" className="space-y-8">
          <div className="rounded-[28px] border border-green-500/15 bg-dark-secondary/80 p-6 sm:p-8">
            <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-3">
              Partner Shop Packages
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Quote-ready partner packages for procurement and deployment.
            </h2>
            <p className="text-neutral-light text-sm sm:text-base leading-relaxed max-w-3xl">
              Use these packages to start a focused quote tied to the partner product line, or choose the complete bundle when a project needs hardware, licensing, rollout planning, and documentation together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerShopPackages.map((pkg) => (
              <article
                key={pkg.title}
                className={`rounded-3xl border overflow-hidden flex flex-col h-full ${
                  pkg.featured
                    ? 'border-primary/35 bg-primary/10 md:col-span-2 lg:col-span-3'
                    : 'border-green-500/15 bg-dark-secondary/80'
                }`}
              >
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-primary uppercase tracking-[0.16em] text-xs font-extrabold mb-3">{pkg.partner}</p>
                  <h3 className="text-2xl font-extrabold text-white leading-tight mb-4">{pkg.title}</h3>
                  <p className="text-neutral-light text-sm leading-6 mb-5">{pkg.description}</p>

                  <div className="mb-6 space-y-5">
                    <div>
                      <p className="text-primary uppercase tracking-[0.16em] text-[0.7rem] font-extrabold mb-2">Recommended for</p>
                      <div className="flex flex-wrap gap-2">
                        {pkg.recommendedFor.map((item) => (
                          <span key={item} className="rounded-full border border-green-500/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-primary uppercase tracking-[0.16em] text-[0.7rem] font-extrabold mb-2">Package includes</p>
                      <ul className="space-y-1.5">
                        {pkg.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-neutral-muted leading-5">
                            <span className="text-primary font-bold mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row sm:items-center gap-3">
                    <a
                      href={pkg.partnerHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-primary/40 px-4 py-2 text-primary font-bold text-sm hover:bg-primary/10 transition-colors text-center"
                    >
                      View Partner Products ↗
                    </a>
                    <a
                      href={partnerPackageQuoteHref(pkg)}
                      className="rounded-lg bg-primary px-4 py-2 text-dark font-bold text-sm hover:bg-primary-dark transition-colors text-center"
                    >
                      Request Package Quote
                    </a>
                  </div>
                </div>
              </article>
            ))}
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
