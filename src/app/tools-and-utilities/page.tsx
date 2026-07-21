import Hero from '@/components/Hero'

const tools = [
  {
    title: 'ProjectWise Workspace Doctor',
    githubUrl: 'https://github.com/keiruff/pw-workspace-doctor',
    description: (
      <>
        <strong className="text-white">ProjectWise Workspace Doctor</strong> is a free, open-source
        PowerShell utility developed by CivicSpan IT Group to help audit local engineering workspace
        directories, identify Bentley-related file types, review workspace size, and generate CSV
        reports for troubleshooting and cleanup planning.
      </>
    ),
    audience: 'Created for CAD managers, engineering technology teams, help desk support staff, and infrastructure-focused IT environments that need practical visibility into local workspace files and storage usage.',
    features: [
      'Workspace folder scanning',
      'Bentley-related file detection',
      'Workspace size auditing',
      'File count reporting',
      'CSV report generation',
      'Safe cleanup workflow foundation',
    ]
  },
  {
    title: 'Workspace Health Analyzer',
    githubUrl: 'https://github.com/keiruff/workspace-health-analyzer',
    description: (
      <>
        <strong className="text-white">Workspace Health Analyzer</strong> is a free, open-source
        utility designed to analyze the overall health, configuration integrity, and structure of local and shared 
        workspaces. It identifies corrupt configuration files, path inconsistencies, and environmental mismatches.
      </>
    ),
    audience: 'Created for systems administrators, engineering coordinators, and IT professionals looking to proactively verify workspace setups and reduce runtime application errors.',
    features: [
      'Workspace environment integrity checks',
      'Corrupt and misconfigured file auditing',
      'Registry path validation',
      'Dependency and system file scanning',
      'Detailed health report generation',
      'Remediation guidelines and logs',
    ]
  },
  {
    title: 'Cloud Resource Inventory Reporter',
    githubUrl: 'https://github.com/keiruff/cloud-resource-inventory-reporter',
    description: (
      <>
        <strong className="text-white">Cloud Resource Inventory Reporter</strong> is a script-based
        auditing tool that scans cloud infrastructures (such as Microsoft Azure) to discover, compile,
        and generate comprehensive reports on active resources, subscription details, and cost allocations.
      </>
    ),
    audience: 'Created for IT managers, business owners, and cloud engineers who need direct, actionable inventory reporting to optimize cloud spend, maintain compliance, and clean up orphan resources.',
    features: [
      'Multi-subscription cloud resource scanning',
      'Orphan and unused resource identification',
      'Billing allocation and cost center audits',
      'Resource tag mapping and taxonomy verification',
      'Excel/CSV report exporting capabilities',
      'Resource group mapping and dependency graphs',
    ]
  }
]

export default function ToolsAndUtilitiesPage() {
  return (
    <>
      <Hero
        title="Tools & Utilities"
        description="Practical automation tools built for engineering, infrastructure, and IT support workflows."
      />

      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {tools.map((tool) => (
            <div 
              key={tool.title}
              className="rounded-3xl border border-slate-400/15 bg-slate-900/80 p-8 sm:p-10 shadow-xl backdrop-blur"
            >
              <h2 className="text-3xl font-extrabold text-white mb-6">{tool.title}</h2>

              <p className="text-blue-100 leading-7 mb-6">
                {tool.description}
              </p>

              <p className="text-blue-100 leading-7 mb-8">
                {tool.audience}
              </p>

              <h3 className="text-xl font-bold text-primary mb-4">Key Features</h3>
              <ul className="list-disc pl-6 space-y-2 text-neutral-light mb-8">
                {tool.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <p className="text-blue-100 leading-7 mb-8">
                This utility is part of CivicSpan IT Group&apos;s commitment to building modern, automated
                solutions that reduce manual troubleshooting, improve visibility, and support real-world
                infrastructure technology workflows.
              </p>

              <a
                href={tool.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Download Free on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
