'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const COOKIE_CONSENT_KEY = 'civicspan_cookie_consent'
const CONSENT_EXPIRY_DAYS = 365
const GA_ID = 'G-DHDMJY4DW5'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = getCookieConsent()
    if (!consent) {
      setShowBanner(true)
    } else if (consent === 'accepted') {
      loadAnalytics()
    }
  }, [])

  const setCookieConsent = (consent: 'accepted' | 'rejected') => {
    const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + CONSENT_EXPIRY_DAYS)
    document.cookie = `${COOKIE_CONSENT_KEY}=${consent};path=/;expires=${expiryDate.toUTCString()};SameSite=Strict`
  }

  const getCookieConsent = () => {
    const cookies = typeof window !== 'undefined' ? document.cookie.split('; ') : []
    const consentRow = cookies.find(row => row.startsWith(`${COOKIE_CONSENT_KEY}=`))
    return consentRow ? consentRow.split('=')[1] : null
  }

  const loadAnalytics = () => {
    if (typeof window === 'undefined' || (window as any).gtagLoaded) {
      return
    }

    (window as any).gtagLoaded = true

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script)

    const dataLayer = (window as any).dataLayer || []
    const gtag = function (...args: any[]) {
      dataLayer.push(args)
    };
    (window as any).dataLayer = dataLayer;
    (window as any).gtag = gtag;

    gtag('js', new Date())
    gtag('config', GA_ID)
  }

  const handleAccept = () => {
    setCookieConsent('accepted')
    setShowBanner(false)
    loadAnalytics()
  }

  const handleDecline = () => {
    setCookieConsent('rejected')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div 
      className="fixed bottom-5 left-5 right-5 max-w-[450px] bg-dark/95 backdrop-blur-md border border-primary/30 rounded-xl p-6 z-[9999] flex flex-col gap-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-bottom-5 duration-300"
      role="dialog" 
      aria-labelledby="cookie-title" 
      aria-describedby="cookie-description"
    >
      <button 
        className="absolute top-3 right-3 text-neutral-muted hover:text-primary transition-colors text-xl p-1 bg-transparent border-0 cursor-pointer line-none leading-none" 
        type="button" 
        onClick={handleDecline} 
        aria-label="Close cookie banner"
      >
        &times;
      </button>

      <h3 id="cookie-title" className="text-primary font-semibold text-base mt-0">
        Cookie Preferences
      </h3>

      <p id="cookie-description" className="text-neutral-light text-sm leading-relaxed m-0 pr-4">
        We use cookies to enhance your browsing experience and understand site traffic.{' '}
        <Link href="/cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
          Learn more about our cookie policy
        </Link>
        .
      </p>

      <div className="flex gap-3 mt-2">
        <button 
          className="flex-1 py-2 px-4 bg-white/10 hover:bg-white/15 text-neutral-light border border-white/20 hover:border-white/30 rounded-lg font-semibold text-xs sm:text-sm cursor-pointer transition-all duration-300" 
          type="button" 
          onClick={handleDecline}
        >
          Decline
        </button>
        <button 
          className="flex-1 py-2 px-4 bg-primary hover:bg-primary-dark text-dark rounded-lg font-semibold text-xs sm:text-sm cursor-pointer transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_16px_rgba(34,197,94,0.3)]" 
          type="button" 
          onClick={handleAccept}
        >
          Accept All
        </button>
      </div>
    </div>
  )
}
