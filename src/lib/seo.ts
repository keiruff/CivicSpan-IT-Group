import type { Metadata } from 'next'

export const siteUrl = 'https://civicspanitgroup.com'

/** One canonical and matching sharing metadata for each public page. */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${siteUrl}${path === '/' ? '/' : path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title, description, url, siteName: 'CivicSpan IT Group',
      locale: 'en_US', type: 'website',
      images: [{ url: '/social-card.png', width: 1200, height: 630, alt: 'CivicSpan IT Group — Engineering IT, Microsoft 365 and Government Procurement' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/social-card.png'] },
  }
}
