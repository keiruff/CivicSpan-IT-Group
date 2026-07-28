import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'
import Script from "next/script";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'CivicSpan IT Group | ProjectWise, Bentley & Engineering Systems Support',
  description: 'CivicSpan IT Group helps organizations build, modernize, secure, document, and support infrastructure and technology operations.',
  keywords: 'infrastructure operations, technology operations, managed infrastructure services, ProjectWise support, Microsoft 365 consulting, Dell procurement, endpoint deployment',
  authors: [{ name: 'CivicSpan IT Group' }],
  openGraph: {
    title: 'CivicSpan IT Group',
    description: 'Infrastructure and technology operations support for ProjectWise, Microsoft 365, Dell endpoints, cloud support, documentation, and governance.',
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
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'CivicSpan IT Group',
      url: 'https://civicspanitgroup.com/',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'CivicSpan IT Group',
      url: 'https://civicspanitgroup.com/',
      logo: 'https://civicspanitgroup.com/civicspan-it-group-logo.webp',
      description: 'Infrastructure and technology operations support, Microsoft 365 consulting, ProjectWise support, Dell procurement, endpoint deployment, documentation, and governance.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'CivicSpan IT Group',
      url: 'https://civicspanitgroup.com/',
      image: 'https://civicspanitgroup.com/civicspan-it-group-logo.webp',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Fredericksburg',
        addressRegion: 'VA',
        addressCountry: 'US',
      },
      areaServed: ['Fredericksburg VA', 'Richmond VA', 'Northern Virginia', 'Maryland', 'Pennsylvania', 'Mid-Atlantic'],
      knowsAbout: ['Infrastructure and technology operations', 'Managed infrastructure services', 'Microsoft 365', 'SharePoint', 'Microsoft Teams', 'Intune', 'Entra ID', 'Dell business laptops', 'Endpoint deployment', 'Cloud support', 'Bentley ProjectWise', 'CAD', 'GIS'],
    },
  ]

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
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-YOURIDHERE"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-DHDMJY4DW5');
  `}
</Script>
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
