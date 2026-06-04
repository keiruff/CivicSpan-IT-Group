import Hero from '@/components/Hero'

export default function PrivacyPage() {
  return (
    <>
      <Hero
        title="Privacy Policy"
        description="How we handle and protect your information."
      />

      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-neutral-light">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Privacy Policy</h2>
              <p className="text-sm text-neutral-muted mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">1. Introduction</h3>
              <p>
                CivicSpan IT Group (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">2. Information We Collect</h3>
              <p className="mb-4">We may collect information about you in a variety of ways, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Information you voluntarily provide through contact forms and communications</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Server logs and analytics data</li>
                <li>Device information and browsing behavior</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">3. Use of Your Information</h3>
              <p className="mb-4">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, maintain, and improve our services</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send promotional communications (with your consent)</li>
                <li>To analyze usage patterns and improve user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">4. Data Security</h3>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">5. Your Rights</h3>
              <p className="mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to opt-out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">6. Contact Us</h3>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us at{' '}
                <a href="mailto:privacy@civicspanitgroup.com" className="text-primary hover:underline">
                  privacy@civicspanitgroup.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
