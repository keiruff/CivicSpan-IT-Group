import Hero from '@/components/Hero'

const services = [
  {
    id: 1,
    title: 'IT Support & Management',
    overview: 'Comprehensive managed IT services designed for enterprise needs.',
    details: [
      'Infrastructure monitoring and management',
      '24/7 technical support and incident response',
      'Security assessment and hardening',
      'Disaster recovery planning',
      'System performance optimization',
      'Backup and business continuity',
    ],
  },
  {
    id: 2,
    title: 'Digital Solutions',
    overview: 'Custom workflows and automation tailored to your operations.',
    details: [
      'Business process automation',
      'Custom workflow development',
      'Integration of disparate systems',
      'API development and management',
      'Data migration and consolidation',
      'Digital transformation consulting',
    ],
  },
  {
    id: 3,
    title: 'Documentation & Knowledge',
    overview: 'Professional documentation for operational excellence.',
    details: [
      'Standard Operating Procedures (SOPs)',
      'Technical runbooks and playbooks',
      'Knowledge base development',
      'Staff training documentation',
      'Systems architecture documentation',
      'Compliance and audit documentation',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Services"
        description="Comprehensive IT solutions built for enterprise operations."
      />
      
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-lg text-neutral-light mb-6">{service.overview}</p>
                  
                  <div className="space-y-3">
                    <h3 className="text-primary font-semibold uppercase text-sm tracking-widest">Key Features</h3>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-neutral-muted">
                          <span className="text-primary font-bold mt-1">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl p-12 border border-green-500/20 flex items-center justify-center min-h-96">
                  <div className="text-6xl opacity-20">{service.id === 1 ? '⚙️' : service.id === 2 ? '💻' : '📚'}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
