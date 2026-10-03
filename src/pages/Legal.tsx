import { Band, PageHead } from '../components/Layout'
import { ADDRESS, EMAIL, PHONE_PRIMARY } from '../data/site'

const PRIVACY: [string, string][] = [
  ['Information We Collect', 'Name, phone, email if provided, and product enquiry details. Collected solely via website forms and transmitted directly to the WhatsApp business number; no server storage.'],
  ['Use', 'Respond to enquiries/quotes; product/pricing; orders/deliveries; improve products/services.'],
  ['Data Sharing', 'We do not sell, trade or rent data; information is shared only with WhatsApp (Meta) as a platform.'],
  ['Cookies & Analytics', 'We may use cookies/Google Analytics; anonymous usage; users can disable cookies.'],
  ['Third-party links', 'We are not responsible for third-party links.'],
  ['Data Security', 'Reasonable measures are used; WhatsApp end-to-end encryption applies during transmission.'],
  ['Rights', 'Users may request access/correction/deletion via the contact details.'],
]
const TERMS: [string, string][] = [
  ['Use of Website', 'For informational and communication purposes.'],
  ['Product Information & Pricing', 'For reference only; prices, stock, and specifications may change; users must confirm; not a binding offer.'],
  ['Quotations', 'WhatsApp quotes are estimates, valid for a limited period, typically 24-48 hours, due to fluctuating steel prices; final price at order/payment.'],
  ['Intellectual Property', 'Website content, logo, text, images, graphics, and design are the IP of Sanghvi Agency unless stated; unauthorized reproduction prohibited; third-party brand names/logos belong to their owners.'],
  ['Limitation', 'No warranties regarding accuracy, completeness, or reliability; no liability as described on the page.'],
  ['Third-party links', 'Includes WhatsApp, Google Maps, and social links; we are not responsible for third-party destinations.'],
  ['Governing law', 'India; disputes subject to exclusive jurisdiction of Bhuj courts.'],
  ['Changes', 'Terms may be modified at any time; updated date will be posted; continued use constitutes acceptance.'],
]
export default function Legal({ kind }: { kind: 'privacy' | 'terms' }) {
  const items = kind === 'privacy' ? PRIVACY : TERMS
  return (
    <>
      <PageHead eyebrow="Legal" title={kind === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'} sub="Last updated: July 2025." />
      <Band>
        <div className="max-w-3xl space-y-8">
          {[...items, ['Contact', `${ADDRESS}. ${PHONE_PRIMARY}${kind === 'privacy' ? ` · ${EMAIL}` : ''}`] as [string, string]].map(([t, d], i) => (
            <section key={t}><h2 className="text-xl font-medium mb-2">{i + 1}. {t}</h2><p className="text-gray-700">{d}</p></section>
          ))}
          <p className="text-sm text-gray-500 border-t border-gray-200 pt-6">This page is general template language and should be reviewed by a legal professional.</p>
        </div>
      </Band>
    </>
  )
}
