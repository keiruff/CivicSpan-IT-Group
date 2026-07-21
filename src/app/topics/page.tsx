import { Metadata } from 'next'
import ContentIndex from '@/components/ContentIndex'
import { topicPages } from '@/data/seoContent'

export const metadata: Metadata = {
  title: 'IT Topic Guides | Microsoft, Dell & ProjectWise | CivicSpan IT Group',
  description: 'Helpful topic guides for Microsoft 365, Dell business hardware, ProjectWise support, SharePoint, Intune, Entra ID, and engineering IT workflows.',
}

export default function TopicsPage() {
  return (
    <ContentIndex
      eyebrow="Topic Clusters"
      title="Microsoft, Dell, and ProjectWise IT Guides"
      description="Practical pages for the problems CivicSpan solves: Microsoft 365, Dell deployment, ProjectWise troubleshooting, engineering workstations, and infrastructure technology support."
      pages={topicPages}
      basePath="/topics"
    />
  )
}
