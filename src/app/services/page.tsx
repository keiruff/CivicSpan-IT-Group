import Hero from '@/components/Hero'

const services = [
  {
    id: 1,
    anchorId: 'consulting',
    icon: '⚙️',
    title: 'Engineering Technology Support',
    overview: 'Practical support for infrastructure, transportation, and engineering technology environments.',
    details: [
      'Bentley ProjectWise user support',
      'Workspace and configuration troubleshooting',
      'Engineering software assistance',
      'CADD support coordination',
      'User onboarding and access support',
      'Technical issue documentation and reporting',
    ],
  },
  {
    id: 2,
    anchorId: 'it-support',
    icon: '🖥️',
    title: 'IT Support & Help Desk Services',
    overview: 'Responsive technical support for everyday systems, users, and operational blockers.',
    details: [
      'End-user technical support',
      'Software installation assistance',
      'Account and access troubleshooting',
      'Ticket triage and documentation',
      'Remote support coordination',
      'Knowledge base and support workflow improvement',
    ],
  },
  {
    id: 3,
    anchorId: 'cloud-support',
    icon: '☁️',
    title: 'Microsoft 365 & Cloud Support',
    overview: 'Support for modern collaboration, cloud-based workflows, and organized digital workspaces.',
    details: [
      'Microsoft 365 support',
      'SharePoint organization and cleanup',
      'Teams and OneDrive support',
      'Cloud storage structure planning',
      'User permissions and access review',
      'Basic Azure and cloud environment assistance',
    ],
  },
  {
    id: 4,
    anchorId: 'workflow-automation',
    icon: '🔁',
    title: 'Workflow Automation & Process Improvement',
    overview: 'Cleaner workflows, repeatable processes, and automation that reduces manual effort.',
    details: [
      'PowerShell scripting support',
      'Process mapping and cleanup',
      'Manual task reduction',
      'Reporting workflow improvement',
      'Data organization and file structure cleanup',
      'Operational handoff documentation',
    ],
  },
  {
    id: 5,
    anchorId: 'training',
    icon: '📚',
    title: 'Documentation, Training & Knowledge Management',
    overview: 'Clear documentation and training materials that help teams work with less confusion.',
    details: [
      'Standard Operating Procedures',
      'User guides and job aids',
      'Technical walkthroughs',
      'Training materials and onboarding guides',
      'Runbooks and troubleshooting notes',
      'Knowledge base development',
    ],
  },
  {
    id: 6,
    anchorId: 'digital-solutions',
    icon: '🌐',
    title: 'Digital & Web Services',
    overview: 'Right-sized digital support for small businesses, nonprofits, and public-facing teams.',
    details: [
      'Website updates and maintenance',
      'Basic web content organization',
      'Form and intake workflow setup',
      'Digital presence cleanup',
      'Business email and contact flow support',
      'Small business technology setup assistance',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Services"
        description="Practical IT support, engineering technology assistance, documentation, automation, and digital solutions for infrastructure-focused teams."
      />

      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.anchorId}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start scroll-mt-28"
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <p className="text-primary font-semibold uppercase text-sm tracking-widest mb-3">
                    Service {String(service.id).padStart(2, '0')}
                  </p>

                  <h2 className="text-4xl font-bold text-white mb-4">
                    {service.title}
                  </h2>

                  <p className="text-lg text-neutral-light mb-6">
                    {service.overview}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-primary font-semibold uppercase text-sm tracking-widest">
                      Key Features
                    </h3>

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

                <div
                  className={`bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl p-12 border border-green-500/20 flex items-center justify-center min-h-96 ${
                    index % 2 === 1 ? 'md:order-1' : ''
                  }`}
                >
                  <div className="text-7xl opacity-25">{service.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
