import { pageMetadata } from '@/lib/seo'
import { Metadata } from 'next'
import ContentIndex from '@/components/ContentIndex'
import { blogPages } from '@/data/seoContent'

export const metadata: Metadata = pageMetadata("Helpful IT Guides & Problem Solvers | CivicSpan IT Group", "Helpful IT guides for Microsoft 365 security, ProjectWise cache issues, Windows 11 upgrades, laptop deployment, and engineering IT support.", "/blog")

export default function BlogPage() {
  return (
    <ContentIndex
      eyebrow="Helpful Guides"
      title="Problem-Led IT Guides"
      description="Short, practical articles written around the questions people actually search when technology is interrupting work."
      pages={blogPages}
      basePath="/blog"
    />
  )
}
