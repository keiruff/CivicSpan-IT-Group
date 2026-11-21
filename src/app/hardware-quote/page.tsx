import Hero from '@/components/Hero'
import HardwareQuoteForm from '@/components/HardwareQuoteForm'
import { pageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = pageMetadata(
  'Business Hardware & Volume Procurement Quotes | CivicSpan IT Group',
  'Request a multi-vendor hardware quote for business, engineering, or public-sector deployments. Share quantities, specifications, and your delivery timeline.',
  '/hardware-quote',
)

export default function HardwareQuotePage() {
  return (
    <>
      <Hero
        title="Request a Business Hardware Quote"
        description="Multi-vendor sourcing and configuration support for engineering teams, businesses, and public-sector projects."
      />
      <section aria-label="Hardware quote intake" className="mx-auto max-w-4xl px-4 pb-20 pt-10 sm:px-6">
        <p className="mb-8 max-w-3xl text-neutral-light">
          Share what you need from Dell Technologies, Cisco, Epson, or Ergotron, along with your quantities
          and deployment timeline. CivicSpan will review your request and follow up about availability,
          configuration, and itemized pricing.
        </p>
        <HardwareQuoteForm />
      </section>
    </>
  )
}
