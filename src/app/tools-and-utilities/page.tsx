import Hero from '@/components/Hero'

const features = [
  'Workspace folder scanning',
  'Bentley-related file detection',
  'Workspace size auditing',
  'File count reporting',
  'CSV report generation',
  'Safe cleanup workflow foundation',
]

export default function ToolsAndUtilitiesPage() {
  return (
    <>
      <Hero
        title="Tools & Utilities"
        description="Practical automation tools built for engineering, infrastructure, and IT support workflows."
      />

      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-400/15 bg-slate-900/80 p-8 sm:p-10 shadow-xl backdrop-blur">
            <h2 className="text-3xl font-extrabold text-white mb-6">ProjectWise Workspace Doctor</h2>

            <p className="text-blue-100 leading-7 mb-6">
              <strong className="text-white">ProjectWise Workspace Doctor</strong> is a free, open-source
              PowerShell utility developed by CivicSpan IT Group to help audit local engineering workspace
              directories, identify Bentley-related file types, review workspace size, and generate CSV
              reports for troubleshooting and cleanup planning.
            </p>

            <p className="text-blue-100 leading-7 mb-8">
              The tool was created for CAD managers, engineering technology teams, help desk support staff,
              and infrastructure-focused IT environments that need practical visibility into local workspace
              files and storage usage.
            </p>

            <h3 className="text-xl font-bold text-primary mb-4">Current Features</h3>
            <ul className="list-disc pl-6 space-y-2 text-neutral-light mb-8">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <p className="text-blue-100 leading-7 mb-8">
              This utility is part of CivicSpan IT Group&apos;s commitment to building modern, automated
              solutions that reduce manual troubleshooting, improve visibility, and support real-world
              engineering technology workflows.
            </p>

            <a
              href="https://github.com/keiruff/pw-workspace-doctor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Download Free on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
