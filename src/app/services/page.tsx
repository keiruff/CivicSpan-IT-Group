import Hero from '@/components/Hero'
import Image from 'next/image'
import Link from 'next/link'

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

const engagementOptions = [
  {
    title: 'Hourly Consulting',
    bestFor: 'Ideal for troubleshooting, technical guidance, and short-term support.',
    examples: [
      'ProjectWise issues',
      'Microsoft 365 administration',
      'Technical documentation',
      'PowerShell automation',
    ],
    pricing: 'Hourly rates based on the expertise required. Contact us for a customized estimate.',
  },
  {
    title: 'Project-Based Services',
    bestFor: 'Fixed-scope engagements with defined deliverables, timelines, and milestones.',
    examples: [
      'Cloud migrations',
      'ProjectWise implementations',
      'Website development',
      'Technology assessments',
    ],
    pricing: 'Fixed-price proposals based on project scope.',
  },
  {
    title: 'Managed Support',
    bestFor: 'Ongoing technology support through a monthly service agreement.',
    examples: [
      'Microsoft 365 administration',
      'Engineering technology support',
      'Routine maintenance',
      'Priority technical assistance',
    ],
    pricing: "Monthly plans tailored to your organization's needs.",
  },
]

const siteUrl = 'https://civicspanitgroup.com'
const businessName = 'CivicSpan IT Group'

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: businessName,
      url: siteUrl,
      logo: `${siteUrl}/civicspan-it-group-logo.webp`,
      description:
        'Infrastructure-focused IT support, Microsoft 365 consulting, ProjectWise support, and Dell business hardware deployment.',
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#localbusiness`,
      name: businessName,
      url: siteUrl,
      image: `${siteUrl}/civicspan-it-group-logo.webp`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Fredericksburg',
        addressRegion: 'VA',
        addressCountry: 'US',
      },
      areaServed: [
        'Fredericksburg VA',
        'Richmond VA',
        'Northern Virginia',
        'Maryland',
        'Pennsylvania',
        'Mid-Atlantic',
      ],
      knowsAbout: [
        'Microsoft 365',
        'SharePoint',
        'Microsoft Teams',
        'Intune',
        'Entra ID',
        'Dell business laptops',
        'Bentley ProjectWise',
      ],
    },
    ...services.map((service) => ({
      '@type': 'Service',
      '@id': `${siteUrl}/services#${service.anchorId}`,
      name: service.title,
      description: service.overview,
      serviceType: service.title,
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: ['Fredericksburg VA', 'Richmond VA', 'Northern Virginia', 'Mid-Atlantic'],
      url: `${siteUrl}/services#${service.anchorId}`,
    })),
  ],
}

const representativeEngagements = [
  {
    title: 'ProjectWise Workspace Health Assessment',
    challenge:
      'Engineering staff report inconsistent standards, missing references, slow workspace performance, and configuration issues that reduce productivity.',
    approach: [
      'Review workspace and workset configuration',
      'Validate environment variables and standards',
      'Analyze DGNLIB and CFG hierarchy',
      'Review managed workspaces and user preferences',
      'Identify configuration conflicts and redundant files',
    ],
    deliverables: [
      'Executive summary of findings',
      'Prioritized remediation recommendations',
      'Configuration documentation',
      'Knowledge transfer session with administrators',
    ],
    outcome:
      'Organizations gain a more consistent ProjectWise environment, reduced troubleshooting time, and documented configuration standards.',
  },
  {
    title: 'Microsoft 365 Security & Tenant Review',
    challenge:
      "An organization wants to improve its Microsoft 365 security posture and ensure tenant configuration aligns with operational needs.",
    approach: [
      'Review Entra ID configuration',
      'Evaluate MFA and Conditional Access',
      'Assess SharePoint and Teams governance',
      'Review licensing utilization',
      'Identify configuration risks',
    ],
    deliverables: [
      'Findings report',
      'Risk summary',
      'Prioritized recommendations',
      'Implementation roadmap',
    ],
    outcome:
      'Organizations gain a clearer picture of tenant security posture and a prioritized path to closing configuration gaps.',
  },
  {
    title: 'Engineering Software Deployment',
    challenge:
      'A transportation or engineering organization needs to deploy Bentley applications consistently across multiple workstations while minimizing user disruption.',
    approach: [
      'Review application dependencies',
      'Develop standardized deployment procedures',
      'Validate licensing and prerequisites',
      'Test installation and rollback procedures',
      'Document deployment process',
    ],
    deliverables: [
      'Deployment plan',
      'Installation documentation',
      'Troubleshooting guide',
      'Administrator handoff',
    ],
    outcome:
      'Organizations get a consistent, repeatable deployment process with documentation that survives staff turnover.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
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

      <section className="py-20 sm:py-32 border-t border-white/5" id="engagement-options">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-2">
              How We Work Together
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Engagement Options
            </h2>
            <p className="text-neutral-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Different organizations buy technology support differently, especially in government and
              engineering environments. CivicSpan works across three engagement models to fit how your
              team operates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {engagementOptions.map((option) => (
              <article
                key={option.title}
                className="bg-dark-secondary border border-green-500/15 hover:border-primary hover:shadow-lg hover:shadow-green-500/10 rounded-xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5"
              >
                <h3 className="text-xl font-bold text-primary mb-3">{option.title}</h3>
                <p className="text-neutral-light text-sm leading-relaxed mb-6">{option.bestFor}</p>

                <h4 className="text-neutral-muted font-semibold uppercase text-xs tracking-widest mb-3">
                  Best For
                </h4>
                <ul className="space-y-2 mb-6">
                  {option.examples.map((example) => (
                    <li key={example} className="flex items-start gap-3 text-neutral-muted text-sm">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-neutral-light text-sm leading-relaxed mt-auto pt-6 border-t border-white/8">
                  <span className="text-primary font-semibold">Pricing: </span>
                  {option.pricing}
                </p>
              </article>
            ))}
          </div>

          <div className="text-center mt-14 max-w-2xl mx-auto">
            <p className="text-neutral-light text-sm sm:text-base leading-relaxed mb-6">
              Pricing is tailored to the scope, complexity, and duration of each engagement. Contact
              CivicSpan to discuss your requirements and receive a customized proposal.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-dark font-bold rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/25"
            >
              Discuss Your Needs
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 border-t border-white/5 bg-gradient-to-b from-transparent to-dark/50" id="representative-engagements">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-bold text-xs sm:text-sm tracking-wider uppercase mb-2">
              Representative Engagements
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              How We Approach Common Projects
            </h2>
            <p className="text-neutral-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              The following examples illustrate CivicSpan&apos;s typical methodology for common
              engagement types — they describe how we approach this kind of work, not a specific past
              client project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {representativeEngagements.map((item) => (
              <article
                key={item.title}
                className="bg-dark-secondary border border-green-500/15 rounded-xl p-7 flex flex-col h-full"
              >
                <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>

                <h4 className="text-primary font-semibold uppercase text-xs tracking-widest mb-2">
                  Challenge
                </h4>
                <p className="text-neutral-muted text-sm leading-relaxed mb-5">{item.challenge}</p>

                <h4 className="text-primary font-semibold uppercase text-xs tracking-widest mb-2">
                  Our Approach
                </h4>
                <ul className="space-y-1.5 mb-5">
                  {item.approach.map((step) => (
                    <li key={step} className="flex items-start gap-2.5 text-neutral-muted text-sm">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-primary font-semibold uppercase text-xs tracking-widest mb-2">
                  Deliverables
                </h4>
                <ul className="space-y-1.5 mb-5">
                  {item.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-2.5 text-neutral-muted text-sm">
                      <span className="text-primary font-bold mt-0.5">✓</span>
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-neutral-light text-sm leading-relaxed mt-auto pt-5 border-t border-white/8">
                  <span className="text-primary font-semibold">Typical Outcome: </span>
                  {item.outcome}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-green-500/20 bg-dark-secondary/60 p-8 sm:p-10">
            <p className="text-primary font-semibold uppercase text-xs tracking-widest mb-3">
              Featured Technical Solution
            </p>
            <h3 className="text-2xl font-bold text-white mb-4">ProjectWise Workspace Doctor</h3>
            <p className="text-neutral-light text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
              To help administrators identify common ProjectWise workspace issues, CivicSpan developed an
              open-source PowerShell tool that audits workspace configurations and produces structured
              reports for troubleshooting and documentation — tangible evidence of our problem-solving
              approach, available for anyone to use.
            </p>
            <Link
              href="/tools-and-utilities"
              className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline"
            >
              View Tools &amp; Utilities <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

