'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/capabilities', label: 'Capabilities' },
    { href: '/who-we-support', label: 'Who We Support' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="site-header relative z-40">
      <nav 
        className="w-full md:fixed md:top-0 md:left-0 md:h-[82px] flex flex-col md:flex-row justify-between items-center px-4 py-3 md:px-[55px] md:py-2.5 bg-dark border-b border-green-500/15 backdrop-blur-md z-[1000] gap-3 md:gap-0"
        aria-label="Primary navigation"
      >
        <div className="logo flex items-center justify-center w-full md:w-auto">
          <Link href="/" aria-label="CivicSpan IT Group home" className="inline-flex items-center justify-center">
            <Image 
              src="/logo.webp" 
              alt="CivicSpan IT Group Logo" 
              width={250} 
              height={58} 
              className="h-[52px] md:h-[58px] w-auto block object-contain transition-transform duration-300 hover:scale-[1.03]"
              priority
            />
          </Link>
        </div>

        <div className="nav-links flex justify-center flex-wrap gap-2 sm:gap-4 md:gap-6 items-center w-full md:w-auto text-[0.9rem] sm:text-base">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`text-white hover:text-primary transition-all duration-300 py-1.5 px-2.5 md:py-3 md:px-2 font-medium relative whitespace-nowrap block
                  ${active ? 'text-primary' : ''}
                  after:content-[""] after:absolute after:left-0 after:bottom-[-2px] md:after:bottom-[-4px] after:h-[2px] after:bg-primary after:transition-all after:duration-300
                  ${active ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                `}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
