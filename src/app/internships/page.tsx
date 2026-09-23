import type { Metadata } from 'next'
import Link from 'next/link'

const handshakeApplicationUrl = 'https://umw.joinhandshake.com/recruit/jobs/11380242/details'
const handshakeCompensationLanguage = ''

export const metadata: Metadata = {
  title: 'Technology Internships | CivicSpan IT Group',
  description:
    'Explore technology internship opportunities with CivicSpan IT Group in IT, cloud, cybersecurity, software development, business analysis, technical documentation, and government technology.',
  alternates: { canonical: '/internships' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Technology Internships | CivicSpan IT Group',
    description:
      'Explore technology internship opportunities with CivicSpan IT Group in IT, cloud, cybersecurity, software development, business analysis, technical documentation, and government technology.',
    url: '/internships',
    type: 'website',
  },
}

const supportAreas = [
  'Information Technology',
  'Cloud Computing',
  'Cybersecurity',
  'Software & Web Development',
  'Business Analysis',
  'Data & Reporting',
  'Technical Documentation',
  'Workflow & Process Improvement',
  'Government Technology',
  'IT Support & Operations',
  'Marketing & Business Operations',
  'Research & Emerging Technology',
]

const expectations = [
  'Real-world project assignments',
  'Defined objectives and deliverables',
  'Direct feedback and mentorship',
  'Professional documentation and project experience',
  'Exposure to technology operations and government contracting',
  'Opportunities to produce portfolio-ready work',
  'Independent work with structured guidance',
  'Remote collaboration where appropriate',
]

const candidateQualities = [
  'Current college or university students',
  'Technology, cybersecurity, computer science, information systems, analytics, business, marketing, or related fields',
  'Strong written and verbal communication',
  'Ability to manage assignments and meet deadlines',
  'Professionalism and reliability',
  'Willingness to research and solve unfamiliar problems',
  'Ability to work independently and ask questions when needed',
  'Relevant coursework, projects, certifications, employment, volunteer work, or personal projects may all demonstrate potential',
]

const selectionSteps = [
  ['Apply', 'Submit an application and requested materials through Handshake.'],
  ['Review', 'Applications are reviewed for relevant skills, projects, communication, initiative, learning potential, and alignment with available assignments.'],
  ['Interview', 'Selected applicants may be invited to a brief interview to discuss interests, experience, availability, and potential project areas.'],
  ['Onboarding', 'Selected interns receive program expectations, project information, communication procedures, and onboarding materials before beginning work.'],
]

function HandshakeButton({ className }: { className: string }) {
  if (handshakeApplicationUrl) {
    return <a href={handshakeApplicationUrl} className={className}>Apply Through Handshake</a>
  }

  return (
    <button type="button" disabled aria-describedby="handshake-link-status" className={`${className} cursor-not-allowed opacity-70`}>
      Apply Through Handshake
    </button>
  )
}

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
  const primaryButtonClass = 'inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 font-bold text-dark transition-all hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark'

  return (
    <>
      <section className="relative overflow-hidden px-6 py-20 sm:py-28">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_75%_65%_at_50%_0%,rgba(34,197,94,0.14),transparent)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-primary">Early Career Opportunities</p>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">Spring 2027 Technology Internship Program</h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-light sm:text-lg">Build practical experience by working on real technology and business projects with CivicSpan IT Group. Our internship program gives students opportunities to develop professional skills while contributing to the systems, documentation, research, workflows, and digital operations of a growing technology company.</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <HandshakeButton className={primaryButtonClass} />
            <Link href="/services" className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-3.5 font-bold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark">Explore CivicSpan</Link>
          </div>
          {!handshakeApplicationUrl && <p id="handshake-link-status" className="mt-4 text-sm text-neutral-muted">The public Handshake application link will be added after it is confirmed.</p>}
        </div>
      </section>

      <section className="border-y border-white/5 bg-dark-secondary/30 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">Program overview</p>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Learn by Working on Real Projects</h2>
            <p className="mt-6 text-base leading-8 text-neutral-light">CivicSpan Technologies LLC, DBA CivicSpan IT Group, provides technology operations, infrastructure modernization, cloud, engineering technology, documentation, deployment, and support services for organizations operating in business and public-sector environments.</p>
            <p className="mt-5 text-base leading-8 text-neutral-light">Interns work on defined projects aligned with their skills, academic interests, and CivicSpan&apos;s current business needs. Assignments are designed to produce useful work while giving students practical experience they can discuss in future interviews and professional portfolios.</p>
          </div>
          <div className="rounded-2xl border border-green-500/20 bg-dark-secondary/80 p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">About the work</p>
            <p className="mt-4 text-sm leading-7 text-neutral-light">Projects support the systems, documentation, research, workflows, and digital operations that help CivicSpan serve business and public-sector environments.</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/services" className="font-bold text-primary hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Explore services</Link>
              <Link href="/capabilities" className="font-bold text-primary hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">View capabilities</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">Explore the work</p>
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Areas Interns May Support</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {supportAreas.map((area) => <article key={area} className="rounded-xl border border-green-500/15 bg-dark-secondary/70 p-5 text-sm font-semibold text-neutral-light transition-colors hover:border-primary/50">{area}</article>)}
        </div>
      </section>

      <section className="border-y border-white/5 bg-dark-secondary/30 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">Program experience</p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">What Interns Can Expect</h2>
          <div className="mt-10"><CheckList items={expectations} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">Student opportunities</p>
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Who We&apos;re Looking For</h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-light">CivicSpan welcomes students who are curious, dependable, willing to learn, and interested in solving real technology or business problems. Applicants do not need to already be experts.</p>
        <div className="mt-10"><CheckList items={candidateQualities} /></div>
        <p className="mt-6 text-sm font-semibold leading-7 text-primary">Prior professional technology experience is not required for every internship assignment.</p>
      </section>

      <section className="border-y border-white/5 bg-dark-secondary/30 px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-2xl border border-green-500/20 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.12),transparent_55%),rgba(15,23,42,0.85)] p-7 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Spring 2027 Cohort</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Spring 2027 Technology Internship</h2>
          <dl className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[['Cohort size', 'Up to 10 interns'], ['Application method', 'Handshake'], ['Application deadline', 'October 2, 2026'], ['Program format', 'Remote / project-based depending on assignment'], ['Selection', 'Competitive application review']].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-green-500/15 bg-dark-secondary/80 p-4"><dt className="text-xs font-bold uppercase tracking-wider text-primary">{label}</dt><dd className="mt-2 text-sm font-semibold leading-6 text-white">{value}</dd></div>
            ))}
          </dl>
          {handshakeCompensationLanguage && <p className="mt-7 text-sm leading-7 text-neutral-light"><span className="font-bold text-white">Compensation: </span>{handshakeCompensationLanguage}</p>}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">Application process</p>
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Selection Process</h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {selectionSteps.map(([title, copy], index) => <li key={title} className="rounded-2xl border border-green-500/15 bg-dark-secondary/70 p-6"><span className="text-primary text-sm font-extrabold">0{index + 1}</span><h3 className="mt-4 text-xl font-extrabold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-neutral-light">{copy}</p></li>)}
        </ol>
      </section>

      <section className="border-y border-white/5 bg-dark-secondary/30 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">About CivicSpan</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Technology Operations for Organizations That Can&apos;t Afford Downtime</h2>
          <p className="mt-6 max-w-4xl text-base leading-8 text-neutral-light">CivicSpan supports infrastructure and technology operations; Microsoft 365 and cloud; engineering technology; IT documentation and knowledge management; infrastructure modernization; procurement and deployment; and managed support.</p>
          <div className="mt-6 flex flex-wrap gap-5"><Link href="/services" className="font-bold text-primary hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Explore CivicSpan services</Link><Link href="/capabilities" className="font-bold text-primary hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Explore CivicSpan capabilities</Link></div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16"><div className="rounded-2xl border border-green-500/20 bg-dark-secondary/80 p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Equal opportunity</p><p className="mt-4 text-sm leading-7 text-neutral-light">CivicSpan Technologies LLC provides equal opportunity in its internship and employment programs. Applicants are considered based on qualifications, skills, experience, and program requirements without discrimination prohibited by applicable law.</p></div></section>

      <section className="border-t border-white/5 bg-gradient-to-t from-dark/60 to-transparent px-6 py-20 text-center"><h2 className="text-3xl font-extrabold text-white sm:text-4xl">Start Building Practical Experience</h2><p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-neutral-light">Interested in contributing to real technology and business projects while developing professional experience? Explore CivicSpan&apos;s Spring 2027 Technology Internship Program.</p><div className="mt-8"><HandshakeButton className={primaryButtonClass} /></div></section>
    </>
  )
}
