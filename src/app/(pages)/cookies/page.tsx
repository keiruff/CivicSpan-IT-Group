import Hero from '@/components/Hero'

export default function CookiesPage() {
  return (
    <>
      <Hero
        title="Cookie Policy"
        description="Understanding how we use cookies and similar technologies."
      />

      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-neutral-light">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Cookie Policy</h2>
              <p className="text-sm text-neutral-muted mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">1. What Are Cookies?</h3>
              <p>
                Cookies are small files stored on your device that help us recognize you and improve your experience. They are used by most websites and do not harm your computer or device.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">2. Types of Cookies We Use</h3>
              
              <div className="space-y-4 mt-4">
                <div>
                  <h4 className="text-primary font-semibold mb-2">Essential Cookies</h4>
                  <p>These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.</p>
                </div>

                <div>
                  <h4 className="text-primary font-semibold mb-2">Analytics Cookies</h4>
                  <p>We use Google Analytics to understand how visitors use our website. This helps us improve content and user experience.</p>
                </div>

                <div>
                  <h4 className="text-primary font-semibold mb-2">Marketing Cookies</h4>
                  <p>These cookies track your browsing habits to help us show you relevant content and advertisements.</p>
                </div>

                <div>
                  <h4 className="text-primary font-semibold mb-2">Preference Cookies</h4>
                  <p>These remember your preferences and choices to personalize your experience on our website.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">3. Managing Cookies</h3>
              <p className="mb-4">You have control over cookie usage. Most browsers allow you to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>View cookies stored on your device</li>
                <li>Delete specific or all cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Set your browser to refuse all cookies</li>
              </ul>
              <p className="mt-4 text-sm text-neutral-muted">
                Note: Blocking essential cookies may affect website functionality.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">4. Third-Party Services</h3>
              <p>
                We use third-party services like Google Analytics that may set their own cookies. These services have their own privacy policies, and we are not responsible for their cookie practices.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">5. Consent Management</h3>
              <p>
                We display a cookie consent banner on first visit. You can adjust your preferences at any time through the banner or your browser settings. Your choices are stored for 365 days.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">6. Questions or Concerns?</h3>
              <p>
                If you have questions about this Cookie Policy, please contact us at{' '}
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
