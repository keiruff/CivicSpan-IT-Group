import Hero from '@/components/Hero'

const capabilities = [
  'Infrastructure Management',
  'Cloud Architecture',
  'Security & Compliance',
  'Disaster Recovery',
  'Business Continuity',
  'System Administration',
  'Network Management',
  'Database Administration',
  'Virtualization',
  'Backup & Recovery',
  'Managed Services',
  'Technical Support',
]

const naics = [
  '541511 - Custom Computer Programming',
  '541512 - Computer Systems Design',
  '541519 - IT Management Services',
  '811212 - Computer & Equipment Repair',
]

export default function CapabilitiesPage() {
  return (
    <>
      <Hero
        title="Our Capabilities"
        description="Enterprise IT expertise across infrastructure, security, and digital transformation."
      />

      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12">Technical Capabilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-dark-secondary border border-green-500/15 hover:border-primary rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-xl text-primary font-bold group-hover:scale-125 transition-transform">✓</div>
                    <span className="text-neutral-light font-medium group-hover:text-white transition-colors">
                      {capability}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-12 mb-20">
            <h2 className="text-3xl font-bold text-white mb-8">Company Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div>
                  <h4 className="text-primary font-semibold uppercase text-sm tracking-widest mb-2">Business Type</h4>
                  <p className="text-neutral-light">Service-Disabled Veteran-Owned Small Business (SDVOSB)</p>
                </div>
                
                <div>
                  <h4 className="text-primary font-semibold uppercase text-sm tracking-widest mb-2">Location</h4>
                  <p className="text-neutral-light">Virginia, United States</p>
                </div>
                
                <div>
                  <h4 className="text-primary font-semibold uppercase text-sm tracking-widest mb-2">Services</h4>
                  <p className="text-neutral-light">IT Support, Infrastructure Management, Digital Solutions</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-primary font-semibold uppercase text-sm tracking-widest mb-2">Certifications</h4>
                  <ul className="space-y-2 text-neutral-light">
                    <li>• ISO 27001 Compliant</li>
                    <li>• SOC 2 Type II</li>
                    <li>• HIPAA Ready</li>
                    <li>• NIST Cybersecurity Framework</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8">NAICS Classification</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {naics.map((code, index) => (
                <div
                  key={index}
                  className="bg-dark-secondary border border-green-500/15 rounded-lg p-6 hover:border-primary transition-all duration-300"
                >
                  <p className="text-neutral-light font-mono text-sm">{code}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
