import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata("Contact CivicSpan IT Group | IT Support in Fredericksburg, VA", "Discuss ProjectWise support, Microsoft 365, identity governance and technology procurement with CivicSpan IT Group in Fredericksburg, Virginia.", "/contact")

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</> }
