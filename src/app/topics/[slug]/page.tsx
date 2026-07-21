import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ContentPageTemplate from '@/components/ContentPageTemplate'
import { findTopic, siteUrl, topicPages } from '@/data/seoContent'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return topicPages.map((page) => ({ slug: page.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const page = findTopic(params.slug)
  if (!page) return {}

  return {
    title: `${page.title} | CivicSpan IT Group`,
    description: page.description,
    alternates: { canonical: `${siteUrl}/topics/${page.slug}` },
  }
}

export default function TopicPage({ params }: Props) {
  const page = findTopic(params.slug)
  if (!page) notFound()

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Topics', item: `${siteUrl}/topics` },
      { '@type': 'ListItem', position: 3, name: page.title, item: `${siteUrl}/topics/${page.slug}` },
    ],
  }

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.title,
    description: page.description,
    provider: { '@type': 'Organization', name: 'CivicSpan IT Group', url: siteUrl },
    areaServed: ['Virginia', 'Maryland', 'Pennsylvania', 'Northern Virginia', 'Mid-Atlantic'],
  }

  const faq = page.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }
    : null

  return <ContentPageTemplate page={page} category="Topic" jsonLd={faq ? [breadcrumb, service, faq] : [breadcrumb, service]} />
}
