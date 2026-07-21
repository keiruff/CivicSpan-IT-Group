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

  return {
    title: `${page.title} | CivicSpan IT Group`,
    description: page.description,
    alternates: { canonical: `${siteUrl}/blog/${page.slug}` },
  }
}

export default function BlogPostPage({ params }: Props) {
  const page = findBlog(params.slug)
  if (!page) notFound()

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
        { '@type': 'ListItem', position: 3, name: page.title, item: `${siteUrl}/blog/${page.slug}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: page.title,
      description: page.description,
      author: { '@type': 'Organization', name: 'CivicSpan IT Group' },
      publisher: { '@type': 'Organization', name: 'CivicSpan IT Group' },
      mainEntityOfPage: `${siteUrl}/blog/${page.slug}`,
    },
  ]

  return <ContentPageTemplate page={page} category="Guide" jsonLd={jsonLd} />
}
