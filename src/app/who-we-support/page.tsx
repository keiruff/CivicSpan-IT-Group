import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'IT Support for Engineering and Government-Adjacent Teams | CivicSpan IT Group',
  description: 'CivicSpan supports engineering environments, government-adjacent teams, nonprofits, and small businesses with ProjectWise, Microsoft 365, Dell deployment, and documented IT operations.',
}

const supportTypes = [
  {
    title: 'Engineering Environments',
    description: 'Transportation, civil, infrastructure, GIS, and CAD teams running ProjectWise, Bentley tools, and production engineering workflows.',
    icon: '⚙️',
  },
  {
    title: 'Government-Adjacent Teams',
    description: 'Contractors, vendors, and public-sector partners navigating eVA, SAM.gov, procurement requirements, and accountable technology support.',
    icon: '🏛️',
  },
  {
    title: 'Small Businesses',
    description: 'Organizations that need practical technology setup, responsive support, and a vendor who takes responsibility when systems break.',
    icon: '🏪',
  },
  {
    title: 'Nonprofits',
    description: 'Mission-driven teams that need cost-conscious digital operations, documentation, and reliable day-to-day technology support.',
    icon: '🤝',
  },
  {
    title: 'Infrastructure-Focused Teams',
    description: 'Utilities, municipalities, and project teams where files, workflows, access, and documentation must match the real operating environment.',
    icon: '🛠️',
  },
  {
    title: 'Professional Services',
    description: 'Consulting and operations teams that need clean Microsoft 365, SharePoint, documentation, and support workflows.',
    icon: '💼',
  },
]

export default function WhoWeSupportPage() {
  return (
    <>
      <Hero
        title="IT Support for Engineering and Government-Adjacent Teams"
        description="Support for engineering, government-adjacent, infrastructure, nonprofit, and small-business teams that need accountable technology help."
      />

      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-lg text-neutral-light max-w-3xl mb-8">
              CivicSpan IT Group specializes in the environments where generic help desk answers are not enough: ProjectWise and Bentley workflows, government procurement systems, real folder and permission structures, and the day-to-day technology that keeps teams moving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportTypes.map((type, index) => (
              <div
                key={index}
                className="bg-dark-secondary border border-green-500/15 hover:border-green-500/40 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{type.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {type.title}
                </h3>
                <p className="text-neutral-muted leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-white mb-8">What Our Clients Have In Common</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-primary font-semibold uppercase text-sm tracking-widest mb-4">Operational Focus</h4>
                <ul className="space-y-3 text-neutral-light">
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Depend on ProjectWise, Bentley, CAD, GIS, Microsoft 365, or documented workflows</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Need hands-on access, permission review, and environment-specific troubleshooting</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Value accountable support when engineering systems block production work</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-primary font-semibold uppercase text-sm tracking-widest mb-4">Strategic Focus</h4>
                <ul className="space-y-3 text-neutral-light">
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Want practical fixes without adding a full internal IT department</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Need guidance that fits procurement, access, and engineering workflow constraints</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Seek a vendor of record, not a generic template or chatbot answer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
