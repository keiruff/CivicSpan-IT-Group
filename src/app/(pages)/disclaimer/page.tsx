import Hero from '@/components/Hero'

export default function DisclaimerPage() {
  return (
    <>
      <Hero
        title="Disclaimer"
        description="Important information about the use of our website."
      />

      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-neutral-light">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Website Disclaimer</h2>
              <p className="text-sm text-neutral-muted mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">1. General Disclaimer</h3>
              <p>
                The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">2. No Professional Advice</h3>
              <p>
                The content on this website does not constitute professional advice. Before implementing any recommendations, you should consult with qualified professionals who understand your specific situation and requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">3. Limitation of Liability</h3>
              <p>
                In no event shall CivicSpan IT Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the website or its content.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">4. Third-Party Links</h3>
              <p>
                This website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of external websites. Your use of third-party sites is at your own risk and subject to their terms and policies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">5. Changes to Content</h3>
              <p>
                We reserve the right to modify, update, or remove content from this website at any time without notice. We are not responsible for any errors or omissions in the content.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">6. Security</h3>
              <p>
                While we implement security measures to protect your information, we cannot guarantee complete security. Use of this website is at your own risk.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">7. Jurisdiction</h3>
              <p>
                This website and disclaimer are governed by the laws of Virginia, and you consent to the exclusive jurisdiction and venue of the courts located in Virginia for the resolution of any disputes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">8. Contact Information</h3>
              <p>
                If you have questions about this disclaimer, please contact us at{' '}
                <a href="mailto:legal@civicspanitgroup.com" className="text-primary hover:underline">
                  legal@civicspanitgroup.com
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
