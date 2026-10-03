import { FormEvent, useState } from 'react'
import { Band, PageHead } from '../components/Layout'
import { Btn, Badge } from '../components/ui'
import { ADDRESS, GSTIN, HOURS, PHONE_PRIMARY, PHONE_SECONDARY, TEL_PRIMARY, TEL_SECONDARY, waLink } from '../data/site'

export const field = 'w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors duration-300'

export default function Contact() {
  const [f, setF] = useState({ name: '', phone: '', email: '', message: '' })
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const t = `Hello Sanghvi Agency,\nName: ${f.name}\nPhone: ${f.phone}${f.email ? `\nEmail: ${f.email}` : ''}${f.message ? `\nMessage: ${f.message}` : ''}`
    window.open(waLink(t), '_blank', 'noopener')
  }
  return (
    <>
      <PageHead eyebrow="Get in Touch" title="Contact Us" sub="We’d love to hear from you. Reach out for enquiries, quotes, or just to say hello." />
      <Band tone="gray">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6"><p className="font-medium">Dhaval Sanghvi</p><a className="text-2xl" href={TEL_PRIMARY}>{PHONE_PRIMARY}</a><p className="text-sm text-gray-600">Primary Sales &amp; Enquiries</p></div>
            <div className="bg-white rounded-2xl p-6"><p className="font-medium">Vinesh Sanghvi</p><a className="text-2xl" href={TEL_SECONDARY}>{PHONE_SECONDARY}</a><p className="text-sm text-gray-600">Direct Sales &amp; Orders</p></div>
            <div className="bg-white rounded-2xl p-6 flex flex-wrap items-center justify-between gap-3"><div><p className="font-medium">WhatsApp Quote</p><p className="text-sm text-gray-600">Instant Response</p></div><Btn href={waLink('Hello Sanghvi Agency, I would like a quote.')} external size="sm">Chat on WhatsApp</Btn></div>
            <div className="bg-white rounded-2xl p-6"><p className="font-medium">Business hours</p><p>{HOURS}</p><p className="text-sm text-gray-600">Open 7 Days a Week.</p></div>
          </div>
          <form onSubmit={submit} className="bg-white rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-2xl font-medium">Drop Us a Line</h2>
            <p className="text-sm text-gray-600">Fill in the form below and your message will be sent directly to our WhatsApp for a quick response.</p>
            <label className="block text-sm">Your Name*<input required className={`${field} mt-1`} placeholder="Enter your full name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></label>
            <label className="block text-sm">Phone Number*<input required type="tel" className={`${field} mt-1`} placeholder="Your phone number" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} /></label>
            <label className="block text-sm">Email (Optional)<input type="email" className={`${field} mt-1`} placeholder="Your email address" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></label>
            <label className="block text-sm">Message<textarea rows={4} className={`${field} mt-1`} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} /></label>
            <Btn type="submit">Send via WhatsApp</Btn>
            <p className="text-xs text-gray-500">Your message will open a pre-filled WhatsApp chat. No data is stored on our servers.</p>
          </form>
        </div>
      </Band>
      <Band>
        <Badge label="Our Location" />
        <p className="text-gray-700 mb-2">Visit office/warehouse in Bhuj, Kutch, Gujarat.</p>
        <p className="text-lg">{ADDRESS}</p>
        <p className="text-sm text-gray-600 mt-2">Bhuj, Kutch, Gujarat, India. · GST: {GSTIN}</p>
        <div className="mt-6"><Btn href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Sanghvi Agency ' + ADDRESS)}`} external variant="dark" size="sm">Google Maps</Btn></div>
      </Band>
    </>
  )
}
