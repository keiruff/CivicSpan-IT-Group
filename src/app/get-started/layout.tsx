import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Everyday IT Help | CivicSpan IT Group',
  description: 'Real IT help for home offices and small businesses — Wi-Fi, Microsoft 365, computers, printers, and ongoing support. No runaround.',
  openGraph: {
    title: 'Everyday IT Help | CivicSpan IT Group',
    description: 'Real IT help for home offices and small businesses — Wi-Fi, Microsoft 365, computers, printers, and ongoing support. No runaround.',
    url: 'https://civicspanitgroup.com/get-started',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Everyday IT Help | CivicSpan IT Group',
    description: 'Real IT help for home offices and small businesses — Wi-Fi, Microsoft 365, computers, printers, and ongoing support. No runaround.',
  },
  alternates: { canonical: 'https://civicspanitgroup.com/get-started' },
}

export default function GetStartedLayout({ children }: { children: React.ReactNode }) {
  return children
}
