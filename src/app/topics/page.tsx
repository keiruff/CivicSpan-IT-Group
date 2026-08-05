import { Metadata } from 'next'
import Link from 'next/link'
import { topicPages } from '@/data/seoContent'
import { pillarPages } from '@/data/pillarContent'

export const metadata: Metadata = {
  title: 'ProjectWise, Microsoft 365, and Dell Topic Clusters | CivicSpan IT Group',
  description: 'Explore CivicSpan topic clusters for ProjectWise support, Microsoft 365 governance, Dell endpoint deployment, and infrastructure operations. Start with the pillar hubs.',
}

const topicClusters = [
  {
    title: 'ProjectWise',
    description: 'Engineering document management, workspace reliability, cache cleanup, performance, and common errors.',
    links: [
      { label: 'What is ProjectWise?', href: '/topics/what-is-bentley-projectwise' },
      { label: 'ProjectWise Workspace Best Practices', href: '/topics/projectwise-workspace-best-practices' },
      { label: 'ProjectWise Cache Cleanup', href: '/topics/how-to-clean-a-projectwise-cache' },
      { label: 'ProjectWise Performance Issues', href: '/topics/projectwise-performance-issues' },
      { label: 'Common ProjectWise Errors', href: '/topics/common-projectwise-errors' },
    ],
  },
  {
    title: 'Microsoft 365',
    description: 'Migration, SharePoint governance, OneDrive usage, Teams structure, Entra ID, and identity operations.',
    links: [
      { label: 'Microsoft 365 Migration', href: '/topics/microsoft-365-migration-services' },
      { label: 'SharePoint Governance', href: '/topics/sharepoint-governance' },
      { label: 'OneDrive Best Practices', href: '/topics/onedrive-best-practices' },
      { label: 'Entra ID Basics', href: '/topics/entra-id-basics' },
      { label: 'Microsoft 365 Security Mistakes', href: '/blog/5-common-microsoft-365-security-mistakes' },
    ],
  },
  {
    title: 'Dell & Endpoint Operations',
    description: 'Business laptop selection, procurement, endpoint deployment, lifecycle planning, and technology refreshes.',
    links: [
      { label: 'Dell Latitude vs Precision', href: '/topics/dell-latitude-vs-precision' },
      { label: 'Business Laptop Buying Guide', href: '/topics/business-laptop-buying-guide' },
      { label: 'Device Lifecycle Planning', href: '/topics/device-lifecycle-planning' },
      { label: 'Dell Laptop Deployment Services', href: '/topics/dell-laptop-deployment-services' },
      { label: 'Need to Deploy 50 New Laptops?', href: '/blog/need-to-deploy-50-new-laptops' },
    ],
  },
]

export default function TopicsPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 py-20 sm:py-28 text-center">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(34,197,94,0.16),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-primary font-bold text-xs sm:text-sm tracking-[0.18em] uppercase mb-4">Topic Clusters</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">ProjectWise, Microsoft 365, and Dell Operations Guides</h1>
          <p className="text-blue-100 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            These guides are organized as clusters so visitors and search engines can understand the full CivicSpan story: reliable infrastructure and technology operations.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 pb-24 space-y-16">
        <section>
          <div className="mb-8">
            <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-2">Pillar Hubs</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Start with the main expertise areas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {pillarPages.map((pillar) => (
              <Link key={pillar.slug} href={`/pillars/${pillar.slug}`} className="group">
                <article className="h-full rounded-3xl border border-green-500/15 bg-dark-secondary/80 p-7 hover:border-primary hover:-translate-y-1 transition-all duration-300">
                  <p className="text-primary uppercase tracking-[0.16em] text-xs font-extrabold mb-3">{pillar.eyebrow}</p>
                  <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-primary transition-colors">{pillar.title}</h3>
                  <p className="text-neutral-light text-sm leading-6">{pillar.description}</p>
                  <span className="text-primary font-bold text-sm mt-5 inline-block">Explore pillar →</span>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {topicClusters.map((cluster) => (
            <article key={cluster.title} className="rounded-3xl border border-green-500/15 bg-dark-secondary/80 p-8 h-full">
              <h2 className="text-2xl font-extrabold text-white mb-3">{cluster.title}</h2>
              <p className="text-neutral-light text-sm leading-6 mb-6">{cluster.description}</p>
              <ul className="space-y-3">
                {cluster.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-primary font-semibold text-sm hover:underline">
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section>
          <div className="mb-8">
            <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-2">All Topic Guides</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Explore the full library</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {topicPages.map((page) => (
              <article key={page.slug} className="rounded-3xl border border-green-500/15 bg-dark-secondary/80 p-7 flex flex-col justify-between backdrop-blur hover:border-primary/60 hover:-translate-y-1 transition-all duration-300">
                <div>
                  <p className="text-primary uppercase tracking-[0.16em] text-xs font-extrabold mb-3">{page.eyebrow}</p>
                  <h3 className="text-2xl font-extrabold text-white mb-3">{page.title}</h3>
                  <p className="text-neutral-light text-sm leading-6">{page.description}</p>
                </div>
                <Link href={`/topics/${page.slug}`} className="mt-6 text-primary font-bold text-sm hover:underline">
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
