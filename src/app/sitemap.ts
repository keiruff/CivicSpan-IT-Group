import type { MetadataRoute } from 'next'
import { topicPages, locationPages, blogPages } from '@/data/seoContent'
import { pillarPages } from '@/data/pillarContent'
import { siteUrl } from '@/lib/seo'
import { staticRoutes } from '@/lib/static-routes'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticRoutes,
    ...topicPages.map(page => `/topics/${page.slug}`),
    ...locationPages.map(page => `/locations/${page.slug}`),
    ...blogPages.map(page => `/blog/${page.slug}`),
    ...pillarPages.map(page => `/pillars/${page.slug}`),
  ]
  // Do not invent lastModified dates: publish them only when editorial dates exist.
  return Array.from(new Set(paths)).map(path => ({ url: `${siteUrl}${path}` }))
}
