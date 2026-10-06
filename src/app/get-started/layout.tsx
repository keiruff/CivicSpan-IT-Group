import { pageMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

export const metadata: Metadata = pageMetadata(
  'Everyday IT Help | CivicSpan IT Group',
  'Real IT help for home offices and small businesses — Wi-Fi, Microsoft 365, computers, printers, and ongoing support. No runaround.',
  '/get-started',
)

export default function GetStartedLayout({ children }: { children: React.ReactNode }) {
  return children
}
