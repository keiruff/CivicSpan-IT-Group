import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-20 md:mt-32 bg-gradient-to-b from-dark/40 to-dark/80 border-t border-green-500/20 px-6 py-12 md:py-16 md:px-10 text-neutral-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-12 border-b border-white/8">
          {/* Logo & Intro */}
          <div className="flex flex-col items-start">
            <Image 
              src="/logo.webp" 
              alt="CivicSpan IT Group Logo" 
              width={160} 
              height={37} 
              className="w-40 h-auto mb-6 block"
            />
            
            <p className="text-neutral-light text-[0.95rem] leading-relaxed mb-4">
              Providing specialized IT support, digital solutions, and technical consulting for infrastructure-focused teams.
            </p>

            <div className="flex items-center gap-4 text-xl">
              <a 
                href="mailto:info@civicspanitgroup.com" 
                title="Email us" 
                aria-label="Send email"
                className="hover:text-primary transition-all duration-300 hover:scale-110"
              >
                ✉
              </a>
              <a 
                href="https://linkedin.com/in/keisha-ruffner-71236240b" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Visit LinkedIn" 
                aria-label="LinkedIn"
                className="hover:text-primary font-bold transition-all duration-300 hover:scale-110"
              >
                in
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61589970300407" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Visit Facebook" 
                aria-label="Facebook"
                className="hover:text-primary font-bold transition-all duration-300 hover:scale-110"
              >
                f
              </a>
            </div>
          </div>

          {/* Services Quick Links */}
          <div>
            <h3 className="text-primary font-semibold uppercase text-xs sm:text-sm tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#it-support" className="text-neutral-muted hover:text-primary transition-all duration-300 hover:pl-1 text-[0.95rem]">
                  IT Support
                </Link>
              </li>
              <li>
                <Link href="/services#digital-solutions" className="text-neutral-muted hover:text-primary transition-all duration-300 hover:pl-1 text-[0.95rem]">
                  Digital Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#training" className="text-neutral-muted hover:text-primary transition-all duration-300 hover:pl-1 text-[0.95rem]">
                  Training & Documentation
                </Link>
              </li>
              <li>
                <Link href="/services#consulting" className="text-neutral-muted hover:text-primary transition-all duration-300 hover:pl-1 text-[0.95rem]">
                  Technical Consulting
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-muted hover:text-primary transition-all duration-300 hover:pl-1 text-[0.95rem]">
                  Schedule Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Quick Links */}
          <div>
            <h3 className="text-primary font-semibold uppercase text-xs sm:text-sm tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-neutral-muted hover:text-primary transition-all duration-300 hover:pl-1 text-[0.95rem]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-muted hover:text-primary transition-all duration-300 hover:pl-1 text-[0.95rem]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-neutral-muted hover:text-primary transition-all duration-300 hover:pl-1 text-[0.95rem]">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="text-neutral-muted hover:text-primary transition-all duration-300 hover:pl-1 text-[0.95rem]">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/who-we-support" className="text-neutral-muted hover:text-primary transition-all duration-300 hover:pl-1 text-[0.95rem]">
                  Who We Support
                </Link>
              </li>
              <li>
                <Link href="/tools-and-utilities" className="text-neutral-muted hover:text-primary transition-all duration-300 hover:pl-1 text-[0.95rem]">
                  Tools & Utilities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-muted hover:text-primary transition-all duration-300 hover:pl-1 text-[0.95rem]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-primary font-semibold uppercase text-xs sm:text-sm tracking-wider mb-2">
              Contact
            </h3>
            
            <p className="text-[0.95rem] text-neutral-light flex items-center gap-2">
              <span>✉</span> 
              <a href="mailto:info@civicspanitgroup.com" className="hover:text-primary transition-colors">
                info@civicspanitgroup.com
              </a>
            </p>
            
            <p className="text-[0.95rem] text-neutral-light flex items-center gap-2">
              <span>☎</span> 
              <a href="tel:5407602020" className="hover:text-primary transition-colors">
                (540) 760-2020
              </a>
            </p>
            
            <p className="text-[0.95rem] text-neutral-light flex items-center gap-2">
              <span>📍</span> 
              <a 
                href="https://www.google.com/maps/search/Fredericksburg,+VA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Fredericksburg, Virginia
              </a>
            </p>
            
            <p className="text-xs text-neutral-muted font-medium pt-2 border-t border-white/5">
              IT Support • Training • Digital Solutions
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-4 text-sm">
          <div>
            &copy; {currentYear} CivicSpan IT Group. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-primary transition-colors">
              Disclaimer
            </Link>
          </div>

          <div className="text-xs text-neutral-light/50 font-medium">
            Built with care for infrastructure teams.
          </div>
        </div>
      </div>
    </footer>
  )
}
