import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Everyday IT Help | CivicSpan IT Group',
  description: 'Get straightforward IT help for your home office or small business, from Wi-Fi and Microsoft 365 to computers, printers, and ongoing support.',
  alternates: { canonical: 'https://civicspanitgroup.com/get-started' },
}

export default function GetStartedLayout({ children }: { children: React.ReactNode }) {
  return children
}
