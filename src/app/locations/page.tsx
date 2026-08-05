import { Metadata } from 'next'
import ContentIndex from '@/components/ContentIndex'
import { locationPages } from '@/data/seoContent'

export const metadata: Metadata = {
  title: 'IT Support Service Areas in Fredericksburg and the Mid-Atlantic | CivicSpan IT Group',
  description: 'Find CivicSpan IT support service areas for Fredericksburg, Richmond, Northern Virginia, Maryland, and Pennsylvania. Contact us for ProjectWise, Microsoft 365, and Dell support.',
}

export default function LocationsPage() {
  return (
    <ContentIndex
      eyebrow="Locations"
      title="IT Support Service Areas in Fredericksburg and the Mid-Atlantic"
      description="Useful regional pages for organizations searching for Microsoft 365, ProjectWise, Dell deployment, and engineering IT support across the Mid-Atlantic."
      pages={locationPages}
      basePath="/locations"
    />
  )
}
