import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Spring 2027 Technology Internships | CivicSpan IT Group',
  description:
    'Explore Spring 2027 technology internship opportunities with CivicSpan IT Group in IT, cloud, cybersecurity, software, business analysis, technical documentation, and government technology.',
  alternates: {
    canonical: '/internships',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const workAreas = [
  'Information Technology',
  'Cloud Computing',
  'Cybersecurity',
  'Software and Web Development',
  'Technical Documentation',
  'Business Analysis',
  'Workflow and Process Improvement',
  'Data and Reporting',
  'Government Technology',
  'IT Support and Operations',
  'Marketing and Business Operations',
]

const expectations = [
  'Real-world project assignments',
  'Defined project goals and deliverables',
  'Direct feedback and mentorship',
  'Exposure to small-business and government-contracting operations',
  'Opportunities to build portfolio-ready work',
  'Experience working in a professional technology environment',
  'Flexible remote collaboration where appropriate',
]

const candidates = [
  'Current college or university students',
  'Students in technology, cybersecurity, computer science, information systems, business, analytics, marketing, or related disciplines',
  'Strong written and verbal communication',
  'Dependability and ability to meet deadlines',
  'Willingness to learn independently',
  'Professionalism',
  'Interest in solving real business or technology problems',
  'Prior professional experience is not required for every position',
]

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2" role="list">
      {items.map((item) => (
        <li key={item} className="flex gap-3 rounded-xl border border-green-500/15 bg-dark-secondary/70 p-4 text-sm leading-6 text-neutral-light">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary" aria-hidden="true">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function InternshipsPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 py-20 sm:py-28">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_75%_65%_at_50%_0%,rgba(34,197,94,0.14),transparent)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-primary">Spring 2027 Program</p>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Spring 2027 Technology Internship Program
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-light sm:text-lg">
            CivicSpan IT Group offers hands-on internship opportunities for students interested in technology, business operations, and public-sector IT. The Spring 2027 program is designed to give interns exposure to real projects while developing practical professional skills.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <span
              aria-disabled="true"
              aria-describedby="handshake-link-status"
              className="inline-flex cursor-not-allowed items-center justify-center rounded-lg bg-primary px-8 py-3.5 font-bold text-dark opacity-70"
            >
              Apply Through Handshake
            </span>
            <Link href="/capabilities" className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-3.5 font-bold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark">
              Learn About CivicSpan
            </Link>
          </div>
          <p id="handshake-link-status" className="mt-4 text-sm text-neutral-muted">
            The public Handshake application link will be added after it is confirmed.
          </p>
        </div>
      </section>

      <section className="border-y border-white/5 bg-dark-secondary/40 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-5">
          {[
            ['Program', 'Spring 2027 Technology Internship'],
            ['Application platform', 'Handshake'],
            ['Work arrangement', 'Remote / project-based, depending on assignment'],
            ['Cohort size', 'Limited'],
            ['Application status', 'Currently accepting applications'],
          ].map(([label, value]) => (
            <dl key={label} className="rounded-xl border border-green-500/15 bg-dark-secondary/80 p-5">
              <dt className="text-xs font-bold uppercase tracking-wider text-primary">{label}</dt>
              <dd className="mt-2 text-sm font-semibold leading-6 text-white">{value}</dd>
            </dl>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-6xl text-center text-sm leading-6 text-neutral-muted">
          Compensation details will match the active Handshake posting when the public application link is confirmed.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">Explore the work</p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Areas You May Work In</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workAreas.map((area) => (
            <div key={area} className="rounded-xl border border-green-500/15 bg-dark-secondary/70 p-5 text-sm font-semibold text-neutral-light transition-colors hover:border-primary/50">
              {area}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/5 bg-dark-secondary/30 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">Program experience</p>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">What Interns Can Expect</h2>
          </div>
          <CheckList items={expectations} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">Student opportunities</p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Who We&apos;re Looking For</h2>
        </div>
        <CheckList items={candidates} />
      </section>

      <section className="border-y border-white/5 bg-dark-secondary/30 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">Application process</p>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">How Selection Works</h2>
            <ol className="mt-8 grid gap-4">
              {[
                'Applications are reviewed for relevant skills, projects, communication, initiative, and learning potential.',
                'Selected candidates may be invited to interview.',
                'Final candidates receive internship onboarding and project information before the program begins.',
              ].map((step, index) => (
                <li key={step} className="flex gap-4 rounded-xl border border-green-500/15 bg-dark-secondary/80 p-5 text-sm leading-6 text-neutral-light">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-extrabold text-primary">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <aside className="rounded-2xl border border-green-500/20 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.12),transparent_55%),rgba(15,23,42,0.85)] p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">About CivicSpan</p>
            <h2 className="mt-3 text-2xl font-extrabold text-white">Technology work with real-world context.</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-light">
              CivicSpan Technologies LLC, DBA CivicSpan IT Group, provides IT services and digital solutions for public-sector, infrastructure, engineering, and business environments.
            </p>
            <Link href="/capabilities" className="mt-6 inline-flex font-bold text-primary hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark">
              Explore CivicSpan capabilities
            </Link>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-2xl border border-green-500/20 bg-dark-secondary/80 p-7 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Equal opportunity</p>
          <h2 className="mt-3 text-2xl font-extrabold text-white">A fair, qualifications-based process.</h2>
          <p className="mt-4 text-sm leading-7 text-neutral-light">
            CivicSpan Technologies LLC is committed to providing equal opportunity in its internship and employment programs. Applicants are considered based on qualifications, skills, experience, and alignment with program requirements without discrimination prohibited by applicable law.
          </p>
        </div>
      </section>
    </>
  )
}
