import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ContentPageTemplate from '@/components/ContentPageTemplate'
import { blogPages, findBlog, siteUrl } from '@/data/seoContent'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return blogPages.map((page) => ({ slug: page.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const page = findBlog(params.slug)
  if (!page) return {}

  const canonical = `${siteUrl}/blog/${page.slug}`

  return {
    title: page.metadata?.title ?? `${page.title} | CivicSpan IT Group`,
    description: page.metadata?.description ?? page.description,
    keywords: page.metadata?.keywords,
    alternates: { canonical },
    openGraph: page.metadata?.openGraph
      ? {
          title: page.metadata.openGraph.title,
          description: page.metadata.openGraph.description,
          url: page.metadata.openGraph.url ?? canonical,
          siteName: 'CivicSpan IT Group',
          type: page.metadata.openGraph.type ?? 'article',
        }
      : undefined,
  }
}

export default function BlogPostPage({ params }: Props) {
  const page = findBlog(params.slug)
  if (!page) notFound()

  const canonical = `${siteUrl}/blog/${page.slug}`
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
        { '@type': 'ListItem', position: 3, name: page.title, item: canonical },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: page.title,
      description: page.metadata?.description ?? page.description,
      author: { '@type': 'Organization', name: 'CivicSpan IT Group' },
      publisher: {
        '@type': 'Organization',
        name: 'CivicSpan IT Group',
        logo: { '@type': 'ImageObject', url: `${siteUrl}/search-thumbnail.png` },
      },
      mainEntityOfPage: canonical,
    },
    ...(page.howTo
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: page.howTo.name,
            description: page.howTo.description,
            estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
            totalTime: page.howTo.totalTime,
            step: page.howTo.steps.map((step) => ({
              '@type': 'HowToStep',
              name: step.name,
              text: step.text,
              url: step.url ?? canonical,
            })),
            publisher: {
              '@type': 'Organization',
              name: 'CivicSpan IT Group',
              url: siteUrl,
              logo: `${siteUrl}/search-thumbnail.png`,
            },
          },
        ]
      : []),
  ]

  return <ContentPageTemplate page={page} category="Guide" jsonLd={jsonLd} />
}
