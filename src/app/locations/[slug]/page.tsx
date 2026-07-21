import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ContentPageTemplate from '@/components/ContentPageTemplate'
import { findLocation, locationPages, siteUrl } from '@/data/seoContent'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return locationPages.map((page) => ({ slug: page.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const page = findLocation(params.slug)
  if (!page) return {}

  return {
    title: `${page.title} | CivicSpan IT Group`,
    description: page.description,
    alternates: { canonical: `${siteUrl}/locations/${page.slug}` },
  }
}

export default function LocationPage({ params }: Props) {
  const page = findLocation(params.slug)
  if (!page) notFound()

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: `${siteUrl}/locations` },
      { '@type': 'ListItem', position: 3, name: page.title, item: `${siteUrl}/locations/${page.slug}` },
    ],
  }

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.title,
    description: page.description,
    provider: { '@type': 'LocalBusiness', name: 'CivicSpan IT Group', url: siteUrl, address: { '@type': 'PostalAddress', addressLocality: 'Fredericksburg', addressRegion: 'VA', addressCountry: 'US' } },
    areaServed: page.title,
  }

  return <ContentPageTemplate page={page} category="Location" jsonLd={[breadcrumb, service]} />
}
