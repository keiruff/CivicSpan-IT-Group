import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'CivicSpan IT Group | Infrastructure-Focused IT Support',
  description: 'CivicSpan IT Group provides practical IT support, digital solutions, documentation, and workflow assistance for infrastructure-focused teams, small businesses, and nonprofits.',
  keywords: 'IT support, Bentley support, ProjectWise support, engineering technology, infrastructure technology, digital solutions, technical consulting',
  authors: [{ name: 'CivicSpan IT Group' }],
  openGraph: {
    title: 'CivicSpan IT Group',
    description: 'Practical IT support and digital solutions for infrastructure-focused organizations.',
    type: 'website',
    url: 'https://civicspanitgroup.com/',
    images: [
      {
        url: 'https://civicspanitgroup.com/social-preview.png',
        width: 1200,
        height: 630,
        alt: 'CivicSpan IT Group Banner',
      },
    ],
    siteName: 'CivicSpan IT Group',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'CivicSpan IT Group',
    'url': 'https://civicspanitgroup.com/',
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-dark text-white min-h-screen flex flex-col`}>
        <Header />
        <main id="main-content" className="flex-grow mt-0 md:mt-[82px]">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
