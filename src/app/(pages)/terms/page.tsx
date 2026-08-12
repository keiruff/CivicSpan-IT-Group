import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Terms and Conditions | CivicSpan IT Group',
  description: 'Terms and Conditions for CivicSpan IT Group website, store, products, and services.',
}

const sections = [
  {
    title: '1. General Use of Website',
    content: <><p className="mb-4">You must be at least 18 years old, or the age of majority in your jurisdiction, to use this website or make a purchase from our store. You agree to provide accurate, current, and complete information when creating an account, placing an order, or submitting a contact or consultation request.</p><p>You agree not to use this website for any unlawful purpose, to interfere with the site&apos;s operation, or to attempt unauthorized access to any portion of the site, our systems, or connected accounts. All content on this website, including text, graphics, logos, and branding, is the property of CivicSpan IT Group unless otherwise noted and may not be reproduced, distributed, or used without prior written permission.</p></>,
  },
  {
    title: '2. Online Store Purchases',
    content: <div className="space-y-4"><p>Our online store at shop.civicspanitgroup.com offers physical products, including hardware, accessories, and novelty items, and digital products, including IT Standard Operating Procedure documents and related resources.</p><p><strong className="text-white">Pricing and payment.</strong> All prices are in U.S. Dollars and may change without notice. Payment is due in full at purchase. We accept the methods displayed at checkout. You represent that you are authorized to use the payment method provided.</p><p><strong className="text-white">Digital products.</strong> Digital products are delivered electronically. Sales are final and non-refundable once access is granted or a file is downloaded, except where required by law or when the product is materially defective or undeliverable. They are licensed for the purchasing individual or organization and may not be resold, redistributed, or shared without written consent.</p><p><strong className="text-white">Physical products, returns, and cancellations.</strong> Physical products are subject to availability, and delivery estimates are not guaranteed. Unused physical products in original packaging may be returned within 14 days of delivery with proof of purchase unless a listing states otherwise. The buyer pays return shipping unless the item is damaged or defective. We may refuse, limit, or cancel orders for suspected fraud, pricing errors, or inventory issues; payments collected for cancelled orders will be refunded in full.</p></div>,
  },
  {
    title: '3. Professional IT Services',
    content: <p>CivicSpan provides IT infrastructure and technology operations services, including ProjectWise/Bentley administration, Microsoft 365 management, cloud migration, and general IT support. Specific engagements, scope, deliverables, pricing, and timelines are governed by a separate written agreement, statement of work, or contract. Clients must provide timely access, accurate information, and reasonable cooperation. CivicSpan uses commercially reasonable efforts to protect client data and systems, but cannot guarantee absolute security.</p>,
  },
  {
    title: '4. Vendor Partnerships and Reseller Relationships',
    content: <p>Vendor partnership or reseller references indicate a business relationship only and do not create an endorsement, guarantee, or warranty by a referenced vendor. Hardware, software, or licenses purchased through CivicSpan are also subject to the original manufacturer&apos;s or vendor&apos;s terms and warranty. Government and institutional procurement contracts govern when they conflict with these general Terms.</p>,
  },
  {
    title: '5. Intellectual Property',
    content: <p>All CivicSpan-created materials, including the SOP document library, website content, templates, and branding, are protected by copyright and other intellectual property laws. A digital-product purchase grants a limited, non-exclusive, non-transferable license for personal or internal organizational use only unless broader rights are granted in writing.</p>,
  },
  {
    title: '6. Disclaimers and Limitation of Liability',
    content: <p>Our website, store, products, and services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. To the fullest extent permitted by law, CivicSpan is not liable for indirect, incidental, special, consequential, punitive, profit, revenue, data, or business-opportunity losses. CivicSpan&apos;s total liability for a claim arising from these Terms or a purchase or engagement will not exceed the amount paid for the specific product or service giving rise to the claim.</p>,
  },
  {
    title: '7. Indemnification',
    content: <p>You agree to indemnify and hold harmless CivicSpan IT Group, its owner, employees, and contractors from claims, damages, losses, liabilities, and expenses, including reasonable attorney&apos;s fees, arising from your use of our website, store, products, or services, or your violation of these Terms.</p>,
  },
  {
    title: '8. Privacy',
    content: <p>Information collected through our website and store, including contact and payment information, is handled according to our <a className="text-primary hover:underline" href="/privacy">Privacy Policy</a>. By using our website or store, you consent to the collection and use of information described there.</p>,
  },
  {
    title: '9. Governing Law and Dispute Resolution',
    content: <p>These Terms are governed by the laws of the Commonwealth of Virginia, without regard to conflict-of-law principles. Disputes arising from or relating to these Terms will be resolved in Virginia state or federal courts, and you consent to their personal jurisdiction.</p>,
  },
  {
    title: '10. Changes to These Terms',
    content: <p>We may update or modify these Terms at any time. Changes will be posted on this page with an updated effective date. Continued use after posting constitutes acceptance of the revised Terms.</p>,
  },
  {
    title: '11. Severability',
    content: <p>If any provision is unenforceable or invalid, it will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in effect.</p>,
  },
  {
    title: '12. Contact Us',
    content: <p>CivicSpan IT Group<br />Spotsylvania, Virginia<br />Website: civicspanitgroup.com<br />Store: shop.civicspanitgroup.com</p>,
  },
]

export default function TermsPage() {
  return <><Hero title="Terms and Conditions" description="Terms governing CivicSpan IT Group’s website, store, products, and services." /><section className="py-20 sm:py-32"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div className="space-y-8 text-neutral-light leading-relaxed"><div><h2 className="text-2xl font-bold text-white mb-2">CivicSpan IT Group Terms and Conditions</h2><p className="text-sm text-neutral-muted">Effective date: August 12, 2026</p></div><p>These Terms and Conditions govern your access to and use of civicspanitgroup.com, shop.civicspanitgroup.com, and CivicSpan IT Group services, products, digital downloads, and engagements. By accessing our website, purchasing from our store, or engaging our services, you agree to these Terms.</p>{sections.map((section) => <div key={section.title}><h3 className="text-xl font-bold text-primary mb-4">{section.title}</h3>{section.content}</div>)}</div></div></section></>
}
