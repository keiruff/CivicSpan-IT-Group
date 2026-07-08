import Hero from '@/components/Hero'
import Image from 'next/image'

const services = [
  {
    id: 1,
    anchorId: 'consulting',
    imageUrl: '/images/services/engineering-support.png',
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
    imageUrl: '/images/services/it-support.png',
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
    imageUrl: '/images/services/cloud-support.png',
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
    imageUrl: '/images/services/workflow-automation.png',
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
    imageUrl: '/images/services/training.png',
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
    imageUrl: '/images/services/digital-solutions.png',
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
          <div className="space-y-28">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.anchorId}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center scroll-mt-28 group"
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <p className="text-primary font-semibold uppercase text-sm tracking-widest mb-3">
                    Service {String(service.id).padStart(2, '0')}
                  </p>

                  <h2 className="text-4xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-primary">
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
                  className={`relative rounded-2xl overflow-hidden border border-green-500/20 aspect-video md:aspect-[4/3] w-full min-h-[280px] sm:min-h-[340px] md:min-h-[380px] shadow-2xl transition-all duration-500 hover:border-primary/50 hover:shadow-primary/5 group-hover:scale-[1.02] ${
                    index % 2 === 1 ? 'md:order-1' : ''
                  }`}
                >
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

