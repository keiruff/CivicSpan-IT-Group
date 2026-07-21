import Link from 'next/link'
import Hero from '@/components/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technology Solutions & Packages | CivicSpan IT Group',
  description: 'Explore our specialized, flat-rate technology packages designed for small businesses, engineering workstations, office moves, and Microsoft 365 migrations.',
}

const packages = [
  {
    slug: 'small-business-startup-package',
    title: 'Small Business Startup Package',
    description: 'Everything your business needs to get up and running with secure, professional technology.',
    pricing: 'Starting at $2,500',
    perfectFor: 'New businesses, home offices, and small offices (1–10 employees).',
    icon: '🚀',
    highlights: ['Dell Latitude Business Laptop', 'Microsoft 365 Setup', 'Security Hardening'],
  },
  {
    slug: 'engineering-workstation-package',
    title: 'Engineering Workstation Package',
    description: 'High-performance workstation configuration and deployment designed for CAD, GIS, and engineering professionals.',
    pricing: 'Starting at $4,500',
    perfectFor: 'CAD designers, GIS coordinators, and engineers needing optimized local power.',
    icon: '⚙️',
    highlights: ['Dell Precision Workstation', 'Bentley Software Install', 'GPU Optimization'],
  },
  {
    slug: 'microsoft-365-migration',
    title: 'Microsoft 365 Migration Package',
    description: 'Moving to Microsoft 365? We handle email migration, SharePoint setup, Teams, and OneDrive integration.',
    pricing: 'Starting at $995',
    perfectFor: 'Organizations upgrading from legacy email servers or basic cloud environments.',
    icon: '📧',
    highlights: ['Email Mailbox Migration', 'SharePoint & Teams Setup', 'DNS Configuration'],
  },
  {
    slug: 'new-employee-technology',
    title: 'New Employee Technology Package',
    description: 'Quickly onboard new staff with a fully configured laptop, business accounts, email, and security policies.',
    pricing: 'Starting at $695',
    perfectFor: 'Growing teams that need new hires ready to work on Day One.',
    icon: '👤',
    highlights: ['Laptop Imaging', 'Microsoft 365 Account', 'Security Policy Enrollment'],
  },
  {
    slug: 'projectwise-health-check',
    title: 'ProjectWise Health Check',
    description: 'Optimize and audit your Bentley ProjectWise local cache, workspace paths, datasources, and log setups.',
    pricing: 'Starting at $1,500',
    perfectFor: 'Engineering firms encountering application lag, file synchronization issues, or workspace errors.',
    icon: '🏥',
    highlights: ['Full Client Audit', 'Cache & Path Cleanup', 'Written Findings Report'],
  },
  {
    slug: 'dell-business-laptops',
    title: 'Dell Business Laptops Setup',
    description: 'Provisioning and deployment of enterprise Dell laptops through our OEM Partner Ecosystem.',
    pricing: 'Starting at $495',
    perfectFor: 'Businesses needing standardized hardware and security hardening (laptop purchase separate).',
    icon: '💻',
    highlights: ['Custom OS Imaging', 'BitLocker Encryption', 'Asset Documentation'],
  },
  {
    slug: 'new-office-it-setup',
    title: 'New Office IT Setup',
    description: 'Comprehensive network setup, secure Wi-Fi, printers, and cabling management for office relocations or expansions.',
    pricing: 'Starting at $2,500',
    perfectFor: 'Expanding offices, new retail locations, or workspace layout redesigns.',
    icon: '🏢',
    highlights: ['Firewall & Router Config', 'Secure Wi-Fi Deployment', 'Network Documentation'],
  },
]

export default function SolutionsPage() {
  return (
    <>
      <Hero
        title="Solutions & Packages"
        description="Structured, flat-rate technology solutions designed to get your business up, running, and secured."
      />

      <main className="relative overflow-hidden py-20 px-6 max-w-7xl mx-auto">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center items-stretch relative z-10">
          {packages.map((pkg) => (
            <article
              key={pkg.slug}
              className="bg-dark-secondary/80 border border-green-500/10 hover:border-primary hover:shadow-xl hover:shadow-green-500/5 rounded-2xl p-8 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-sm"
            >
              <div>
                <span className="text-4xl mb-4 block" role="img" aria-label={pkg.title}>
                  {pkg.icon}
                </span>
                <h2 className="text-2xl font-bold text-white mb-3">{pkg.title}</h2>
                <p className="text-neutral-light text-sm leading-relaxed mb-5">
                  {pkg.description}
                </p>

                {/* Includes preview */}
                <div className="border-t border-white/5 pt-4 mb-4">
                  <p className="text-xs text-neutral-muted uppercase tracking-wider font-semibold mb-3">Includes</p>
                  <ul className="space-y-1.5">
                    {pkg.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-neutral-light">
                        <span className="text-primary font-bold">✔</span>
                        {item}
                      </li>
                    ))}
                    <li className="text-xs text-neutral-muted italic pl-4">+ more inside</li>
                  </ul>
                </div>

                <div className="border-t border-white/5 pt-3">
                  <p className="text-xs text-neutral-muted mb-1">Perfect for:</p>
                  <p className="text-xs text-neutral-light leading-relaxed">{pkg.perfectFor}</p>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-between gap-4">
                <span className="text-primary font-extrabold text-lg">{pkg.pricing}</span>
                <Link
                  href={`/solutions/${pkg.slug}`}
                  className="px-4 py-2 bg-primary/10 hover:bg-primary text-primary hover:text-dark font-semibold text-sm rounded-lg border border-primary/25 transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Custom Solution Call to Action */}
        <section className="text-center rounded-[28px] border border-slate-400/15 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.15),transparent_40%),rgba(15,23,42,0.85)] p-10 sm:p-14 shadow-xl backdrop-blur mt-20 relative z-10">
          <p className="text-primary uppercase tracking-[0.16em] text-xs sm:text-sm font-extrabold mb-5">
            Tailored Just for You
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Need something different?
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            We also create custom technology packages based on your unique workflows, hardware preferences, and licensing requirements.
          </p>

          <Link href="/contact" className="btn mt-8">
            Request a Custom Quote
          </Link>
        </section>
      </main>
    </>
  )
}
