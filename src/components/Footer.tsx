import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-12 border-t border-green-500/15 bg-dark-secondary/60 px-6 py-6 md:py-8 text-neutral-muted text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          {/* Logo & Tagline */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link href="/" aria-label="CivicSpan IT Group Home" className="inline-flex items-center gap-3">
              <Image
                src="/civicspan-logo-mark.svg"
                alt="CivicSpan IT Group logo mark"
                width={48}
                height={48}
                className="h-11 w-11 rounded-full bg-white object-contain"
              />
              <span className="flex flex-col leading-none">
                <span className="text-sm font-black tracking-[0.18em] text-white">CIVICSPAN</span>
                <span className="mt-1 text-[0.65rem] font-extrabold tracking-[0.28em] text-primary">IT GROUP</span>
              </span>
            </Link>
            <span className="hidden sm:inline text-white/20">|</span>
            <p className="text-neutral-light/70 text-xs">
              Infrastructure &amp; Technology Operations • Fredericksburg, VA
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-4 text-xs font-medium text-white/80">
            <Link href="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/products" className="text-primary font-semibold hover:underline transition-colors">
              Shop
            </Link>
            <Link href="/capabilities" className="hover:text-primary transition-colors">
              Capabilities
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Footer Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-light/60">
          <div>
            &copy; {currentYear} CivicSpan IT Group. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/cookies" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-primary transition-colors">
              Disclaimer
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 text-neutral-light">
            <a href="mailto:info@civicspanitgroup.com" title="Email Us" aria-label="Send email" className="hover:text-primary transition-colors">
              ✉
            </a>
            <a href="tel:5407602020" title="Call Us" aria-label="Call phone" className="hover:text-primary transition-colors">
              ☎
            </a>
            <a
              href="https://linkedin.com/in/keisha-ruffner-71236240b"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
              className="hover:text-primary font-bold transition-colors"
            >
              in
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61589970300407"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              aria-label="Facebook"
              className="hover:text-primary font-bold transition-colors"
            >
              f
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
