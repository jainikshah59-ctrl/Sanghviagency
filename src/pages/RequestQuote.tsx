import { FormEvent, useState } from 'react'
import { Band, PageHead } from '../components/Layout'
import { Btn } from '../components/ui'
import { waLink } from '../data/site'
import { field } from './Contact'

const ROWS = [
  ['TMT Bars', 'size e.g. 12mm', 'quantity'], ['Steel Angles', 'size', 'quantity'], ['MS Channels', 'size e.g. ISMC 150', 'quantity'],
  ['Steel Beams', 'size e.g. ISMB 200', 'quantity'], ['Binding Wire', 'gauge', 'quantity (kg)'], ['Steel Nails', 'size', 'quantity (kg)'],
]
export default function RequestQuote() {
  const [rows, setRows] = useState(ROWS.map(() => ['', '']))
  const [name, setName] = useState(''); const [phone, setPhone] = useState('')
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const lines = ROWS.map((r, i) => (rows[i][0] || rows[i][1]) ? `- ${r[0]}: ${rows[i][0] || '-'} x ${rows[i][1] || '-'}` : '').filter(Boolean)
    window.open(waLink(`Hello Sanghvi Agency, quote request:\n${lines.join('\n') || '(no items selected)'}\nName: ${name}\nPhone: ${phone}`), '_blank', 'noopener')
  }
  return (
    <>
      <PageHead eyebrow="Instant Quote" title="Request a Quote" sub="Select your products, enter quantities, and get a quote directly on WhatsApp. It’s that simple." />
      <Band tone="gray">
        <ol className="grid sm:grid-cols-3 gap-4 mb-10">{['Select Products', 'Enter Details', 'Send via WhatsApp'].map((s, i) => <li key={s} className="bg-white rounded-2xl p-5 flex items-center gap-3"><span className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs flex items-center justify-center">{i + 1}</span>{s}</li>)}</ol>
        <form onSubmit={submit} className="bg-white rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="space-y-3">{ROWS.map((r, i) => (
            <div key={r[0]} className="grid sm:grid-cols-[1fr_1fr_1fr] gap-3 items-center">
              <p className="font-medium">{r[0]}</p>
              <input aria-label={`${r[0]} ${r[1]}`} className={field} placeholder={r[1]} value={rows[i][0]} onChange={(e) => setRows(rows.map((x, j) => j === i ? [e.target.value, x[1]] : x))} />
              <input aria-label={`${r[0]} ${r[2]}`} className={field} placeholder={r[2]} value={rows[i][1]} onChange={(e) => setRows(rows.map((x, j) => j === i ? [x[0], e.target.value] : x))} />
            </div>))}</div>
          <h2 className="text-xl font-medium pt-4">Your Details</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <input required className={field} placeholder="Enter full name" aria-label="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input required type="tel" className={field} placeholder="Phone Number" aria-label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <Btn type="submit">Send Quote Request via WhatsApp</Btn>
          <p className="text-xs text-gray-500">This opens a pre-filled WhatsApp chat. No data is stored on our servers.</p>
        </form>
      </Band>
    </>
  )
}
