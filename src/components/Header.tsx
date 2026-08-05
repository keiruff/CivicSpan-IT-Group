'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const primaryLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/partners', label: 'Partners' },
    { href: '/products', label: 'Shop' },
    { href: '/topics', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ]

  const menuLinks = [
    { href: '/infrastructure-technology-operations', label: 'Operations' },
    { href: '/locations', label: 'Locations' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/capabilities', label: 'Capabilities' },
    { href: '/why-civicspan', label: 'Why CivicSpan' },
    { href: '/who-we-support', label: 'Who We Support' },
    { href: '/tools-and-utilities', label: 'Tools & Utilities' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const linkClass = (href: string) => {
    const active = isActive(href)

    return `text-white hover:text-primary transition-all duration-300 py-1.5 px-2.5 md:py-3 md:px-2 font-medium relative whitespace-nowrap block
      ${active ? 'text-primary' : ''}
      after:content-[""] after:absolute after:left-0 after:bottom-[-2px] md:after:bottom-[-4px] after:h-[2px] after:bg-primary after:transition-all after:duration-300
      ${active ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
    `
  }

  return (
    <header className="site-header relative z-40">
      <nav
        className="w-full md:fixed md:top-0 md:left-0 md:h-[82px] flex flex-col md:flex-row justify-between items-center px-4 py-3 md:px-[55px] md:py-2.5 bg-dark border-b border-green-500/15 backdrop-blur-md z-[1000] gap-3 md:gap-0"
        aria-label="Primary navigation"
      >
        <div className="logo flex items-center justify-center w-full md:w-auto">
          <Link href="/" aria-label="CivicSpan IT Group home" className="inline-flex items-center justify-center" onClick={() => setMenuOpen(false)}>
            <Image
              src="/civicspan-it-group-logo.webp"
              alt="CivicSpan IT Group Logo"
              width={250}
              height={58}
              className="h-[52px] md:h-[58px] w-auto block object-contain transition-transform duration-300 hover:scale-[1.03]"
              priority
            />
          </Link>
        </div>

        <div className="nav-links flex justify-center flex-wrap gap-2 sm:gap-4 md:gap-6 items-center w-full md:w-auto text-[0.9rem] sm:text-base">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={linkClass(link.href)}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="relative">
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="secondary-navigation-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-dark-secondary px-4 py-2 text-sm font-semibold text-white hover:border-primary hover:text-primary transition-colors"
            >
              <span aria-hidden="true">☰</span>
              <span>Menu</span>
            </button>

            {menuOpen && (
              <div
                id="secondary-navigation-menu"
                className="absolute right-0 top-full mt-3 w-64 rounded-2xl border border-green-500/20 bg-dark-secondary p-3 shadow-xl shadow-black/40 z-[1100] text-left"
              >
                <div className="grid gap-1">
                  {menuLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={isActive(link.href) ? 'page' : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary ${isActive(link.href) ? 'text-primary bg-primary/10' : 'text-neutral-light'}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
