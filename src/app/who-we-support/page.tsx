import Hero from '@/components/Hero'

const supportTypes = [
  {
    title: 'Mid-Market Enterprises',
    description: 'Growing companies looking to scale their infrastructure without proportional IT costs.',
    icon: '🏢',
  },
  {
    title: 'Financial Services',
    description: 'Banks, fintech, and investment firms requiring compliance and security.',
    icon: '💰',
  },
  {
    title: 'Government & Public Sector',
    description: 'Agencies and public organizations needing reliable and compliant IT support.',
    icon: '🏛️',
  },
  {
    title: 'Healthcare Organizations',
    description: 'Hospitals and clinics maintaining HIPAA-compliant and secure systems.',
    icon: '🏥',
  },
  {
    title: 'Legal Firms',
    description: 'Law offices requiring secure document management and client confidentiality.',
    icon: '⚖️',
  },
  {
    title: 'Professional Services',
    description: 'Consulting, accounting, and consulting firms needing business continuity.',
    icon: '💼',
  },
]

export default function WhoWeSupportPage() {
  return (
    <>
      <Hero
        title="Who We Support"
        description="Enterprise IT solutions for organizations that demand reliability and expertise."
      />

      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-lg text-neutral-light max-w-3xl mb-8">
              CivicSpan IT Group specializes in supporting organizations across Virginia and beyond that need enterprise-grade IT infrastructure, security, and support. Whether you&apos;re in the financial sector, government, healthcare, or professional services, we have the expertise and experience to meet your specific requirements.
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
                    <span>Require 24/7 IT support and monitoring</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Need compliance and security expertise</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Value business continuity and disaster recovery</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-primary font-semibold uppercase text-sm tracking-widest mb-4">Strategic Focus</h4>
                <ul className="space-y-3 text-neutral-light">
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Want to optimize IT costs without sacrificing reliability</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Need strategic guidance for infrastructure decisions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    <span>Seek a trusted IT partner, not just a vendor</span>
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
