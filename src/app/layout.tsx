import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://civicspanitgroup.com'),
  title: 'ProjectWise, SharePoint, Website & Shopify IT Support | CivicSpan IT Group',
  description: 'CivicSpan IT Group provides ProjectWise support, SharePoint setup, website creation, Shopify store setup, Microsoft 365 consulting, cybersecurity, and multi-vendor procurement for infrastructure and public-sector teams.',
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
    'SharePoint setup services',
    'website creation services Virginia',
    'Shopify store setup services',
    'small business website package',
  ],
  icons: {
    icon: [{ url: '/civicspan-logo-mark.svg', type: 'image/svg+xml' }],
    apple: '/civicspan-logo-mark.svg',
  },
  ...pageMetadata('Engineering IT & Microsoft 365 Support | CivicSpan IT Group', 'ProjectWise, Bentley, Microsoft 365 and identity governance support from a Virginia SWaM-certified IT provider in Fredericksburg.', '/'),
  alternates: undefined,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
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
      '@id': 'https://civicspanitgroup.com/#organization',
      legalName: 'CivicSpan Technologies LLC',
      alternateName: 'CivicSpan Technologies LLC dba CivicSpan IT Group',
      identifier: [
        { '@type': 'PropertyValue', propertyID: 'UEI', value: 'PMVWGHNEZYK4' },
        { '@type': 'PropertyValue', propertyID: 'CAGE', value: '20NK8' },
        { '@type': 'PropertyValue', propertyID: 'Virginia SWaM', value: '845315' },
      ],
      name: 'CivicSpan IT Group',
      url: 'https://civicspanitgroup.com/',
      logo: 'https://civicspanitgroup.com/civicspan-logo-mark.svg',
      description: 'Infrastructure and technology operations support, Microsoft 365 consulting, ProjectWise support, Dell procurement, endpoint deployment, documentation, and governance.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'CivicSpan IT Group',
      url: 'https://civicspanitgroup.com/',
      image: 'https://civicspanitgroup.com/civicspan-logo-mark.svg',
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
        streetAddress: '10320 Hillside Lane',
        postalCode: '22408',
        addressLocality: 'Fredericksburg',
        addressRegion: 'VA',
        addressCountry: 'US',
      },
      areaServed: ['Fredericksburg VA', 'Richmond VA', 'Northern Virginia', 'Maryland', 'Pennsylvania', 'Mid-Atlantic'],
      knowsAbout: ['Infrastructure and technology operations', 'Managed infrastructure services', 'Microsoft 365', 'SharePoint', 'Microsoft Teams', 'Intune', 'Entra ID', 'Dell business laptops', 'website creation', 'Shopify store setup'],
    },
  ]

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/civicspan-logo-mark.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/civicspan-logo-mark.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-dark text-white min-h-screen flex flex-col`}>
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-DHDMJY4DW5"
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
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <Script id="zift-analytics" strategy="afterInteractive">
          {`(function() {
            var zanalytics_ = document.createElement('script');
            zanalytics_.type = 'text/javascript';
            zanalytics_.async = false;
            zanalytics_.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'static.ziftsolutions.com/analytics/8a998ab59fd1366a019fd16634327c70.js';
            document.getElementsByTagName('script')[0].parentNode.appendChild(zanalytics_);
          })();`}
        </Script>
        <CookieBanner />
        <SpeedInsights />
      </body>
    </html>
  )
}
