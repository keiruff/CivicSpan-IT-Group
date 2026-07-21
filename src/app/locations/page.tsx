import { Metadata } from 'next'
import ContentIndex from '@/components/ContentIndex'
import { locationPages } from '@/data/seoContent'

export const metadata: Metadata = {
  title: 'Service Areas | CivicSpan IT Group',
  description: 'Regional IT support pages for Fredericksburg, Richmond, Northern Virginia, Maryland, Pennsylvania, ProjectWise support, and engineering IT teams.',
}

export default function LocationsPage() {
  return (
    <ContentIndex
      eyebrow="Locations"
      title="IT Support and Consulting Service Areas"
      description="Useful regional pages for organizations searching for Microsoft 365, ProjectWise, Dell deployment, and engineering IT support across the Mid-Atlantic."
      pages={locationPages}
      basePath="/locations"
    />
  )
}
