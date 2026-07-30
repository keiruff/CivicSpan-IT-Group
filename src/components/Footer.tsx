import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-12 md:mt-20 bg-gradient-to-b from-dark/60 to-dark border-t border-green-500/15 px-6 py-8 md:py-12 md:px-10 text-neutral-muted text-sm">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-8 border-b border-white/10">
          {/* Logo & Intro */}
          <div className="flex flex-col items-start space-y-4 sm:col-span-2 lg:col-span-1">
            <Image
              src="/civicspan-it-group-logo.webp"
              alt="CivicSpan IT Group Logo"
              width={150}
              height={35}
              className="w-36 h-auto block"
            />
            <p className="text-neutral-light/80 text-xs sm:text-sm leading-relaxed max-w-xs">
              Helping organizations build, modernize, secure, document, and support business-critical technology operations.
            </p>
            <div className="flex items-center gap-3 text-base text-neutral-light">
              <a href="mailto:info@civicspanitgroup.com" title="Email us" aria-label="Send email" className="hover:text-primary transition-colors">✉</a>
              <a href="tel:5407602020" title="Call us" aria-label="Call phone" className="hover:text-primary transition-colors">☎</a>
              <a href="https://linkedin.com/in/keisha-ruffner-71236240b" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn" className="hover:text-primary font-bold transition-colors">in</a>
              <a href="https://www.facebook.com/profile.php?id=61589970300407" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook" className="hover:text-primary font-bold transition-colors">f</a>
            </div>
          </div>

          {/* Key Services */}
          <div>
            <h3 className="text-white font-semibold uppercase text-xs tracking-wider mb-3">Services &amp; Solutions</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link href="/infrastructure-technology-operations" className="hover:text-primary transition-colors">Operations Framework</Link></li>
              <li><Link href="/services#managed-infrastructure-services" className="hover:text-primary transition-colors">Managed Services</Link></li>
              <li><Link href="/services#ai-readiness-foundations" className="hover:text-primary transition-colors">AI Readiness</Link></li>
              <li><Link href="/services#it-support" className="hover:text-primary transition-colors">Engineering Support</Link></li>
              <li><Link href="/services#digital-solutions" className="hover:text-primary transition-colors">Digital Solutions</Link></li>
              <li><Link href="/solutions" className="hover:text-primary transition-colors">Tailored Solutions</Link></li>
            </ul>
          </div>

          {/* Explore & Store */}
          <div>
            <h3 className="text-white font-semibold uppercase text-xs tracking-wider mb-3">Explore &amp; Store</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="https://h1bg1p-j7.myshopify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold inline-flex items-center gap-1"
                >
                  Shopify Store ↗
                </a>
              </li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Product Catalog</Link></li>
              <li><Link href="/tools-and-utilities" className="hover:text-primary transition-colors">Tools &amp; Utilities</Link></li>
              <li><Link href="/capabilities" className="hover:text-primary transition-colors">Capabilities Statement</Link></li>
              <li><Link href="/who-we-support" className="hover:text-primary transition-colors">Who We Support</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Guides &amp; Articles</Link></li>
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h3 className="text-white font-semibold uppercase text-xs tracking-wider mb-3">Company &amp; Contact</h3>
            <ul className="space-y-2 text-xs sm:text-sm mb-4">
              <li><Link href="/why-civicspan" className="hover:text-primary transition-colors">Why CivicSpan</Link></li>
              <li><Link href="/locations" className="hover:text-primary transition-colors">Service Areas</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact &amp; Scheduling</Link></li>
            </ul>
            <div className="text-xs text-neutral-light/70 space-y-1 border-t border-white/5 pt-3">
              <p>📍 Fredericksburg, Virginia</p>
              <p>📞 (540) 760-2020</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-light/60">
          <div>
            &copy; {currentYear} CivicSpan IT Group. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
