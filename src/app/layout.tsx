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
  title: 'ProjectWise & Engineering IT Operations | Fredericksburg, VA | CivicSpan IT Group',
  description: 'CivicSpan IT Group provides specialized technology operations, ProjectWise & Bentley administration, heavy-duty cybersecurity, and multi-vendor procurement for government-adjacent and infrastructure teams in Virginia.',
  keywords: [
    'ProjectWise support Fredericksburg VA',
    'Bentley application specialist Virginia',
    'Government contractor IT services Fredericksburg',
    'SWaM certified IT vendor Virginia',
    'eVA registered IT procurement',
    'Engineering technology operations',
    'Infrastructure data governance',
    'CAD workstation support Mid-Atlantic',
    'Defense-grade network architecture',
    'SAM.gov registered IT consultant',
  ],
  alternates: {
    canonical: 'https://civicspanitgroup.com',
  },
  openGraph: {
    title: 'CivicSpan IT Group | Engineering Technology & Government IT Operations',
    description: 'Accountable technical execution for organizations that cannot afford downtime. Specialized Bentley, ProjectWise, and infrastructure support.',
    url: 'https://civicspanitgroup.com',
    siteName: 'CivicSpan IT Group',
    locale: 'en_US',
    type: 'website',
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
      telephone: '+1-540-760-2020',
      email: 'info@civicspanitgroup.com',
      priceRange: '$$',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+1-540-760-2020',
          email: 'info@civicspanitgroup.com',
          contactType: 'sales and support',
          areaServed: ['Fredericksburg VA', 'Richmond VA', 'Northern Virginia', 'Maryland', 'Pennsylvania'],
          availableLanguage: 'English',
        },
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Fredericksburg',
        addressRegion: 'VA',
        addressCountry: 'US',
      },
      areaServed: ['Fredericksburg VA', 'Richmond VA', 'Northern Virginia', 'Maryland', 'Pennsylvania', 'Mid-Atlantic'],
      knowsAbout: ['Infrastructure and technology operations', 'Managed infrastructure services', 'Microsoft 365', 'SharePoint', 'Microsoft Teams', 'Intune', 'Entra ID', 'Dell business laptops'],
    },
  ]

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
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
