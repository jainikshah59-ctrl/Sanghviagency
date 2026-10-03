import { Link } from 'react-router-dom'
import { ADDRESS, EMAIL, GSTIN, HOURS, PHONE_PRIMARY, PHONE_SECONDARY, TEL_PRIMARY, TEL_SECONDARY, waLink } from '../data/site'
import { WRAP } from './ui'

const QUICK: [string, string][] = [['Home', '/'], ['About Us', '/about'], ['All Products', '/products'], ['Brand Portfolio', '/brands'], ['Projects Portfolio', '/projects'], ['Photo Gallery', '/gallery'], ['FAQ', '/faq'], ['Contact Us', '/contact']]
const CATS: [string, string][] = [['Mono TMT Bars (Fe500/550D)', '/products/tmt-bars'], ['Steel Angles (MS)', '/products/steel-angles'], ['MS Channels (ISMC)', '/products/steel-channels'], ['Steel Beams (ISMB / H-Beams)', '/products/steel-beams'], ['Binding Wire & Nails', '/products'], ['Request Instant Quote', '/request-quote']]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-14 pb-24 md:pb-10">
      <div className={`${WRAP} grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-sm`}>
        <div>
          <p className="text-base font-medium mb-3">Sanghvi Agency</p>
          <p className="text-gray-400">Primary industrial wholesale steel supplier in Bhuj specializing in structural steel, binding wires, nails, and custom-length TMT bars.</p>
          <p className="text-gray-400 mt-3">Authorized distributor: Mono TMT, Utkarsh TMX, Varrsana TMX, and National TMX.</p>
          <p className="text-gray-400 mt-3">GSTIN: {GSTIN}<br />Proprietorship - Sanghvi Agency</p>
        </div>
        <div><p className="font-medium mb-3">Quick Links</p><ul className="space-y-2 text-gray-400">{QUICK.map(([l, t]) => <li key={l}><Link className="hover:text-white transition-colors duration-300" to={t}>{l}</Link></li>)}</ul></div>
        <div><p className="font-medium mb-3">Steel Products</p><ul className="space-y-2 text-gray-400">{CATS.map(([l, t]) => <li key={l}><Link className="hover:text-white transition-colors duration-300" to={t}>{l}</Link></li>)}</ul></div>
        <div className="text-gray-400 space-y-2">
          <p className="font-medium text-white mb-3">Contact</p>
          <p>{ADDRESS}</p>
          <p>Dhaval Sanghvi - <a className="hover:text-white" href={TEL_PRIMARY}>{PHONE_PRIMARY}</a></p>
          <p>Vinesh Sanghvi - <a className="hover:text-white" href={TEL_SECONDARY}>{PHONE_SECONDARY}</a></p>
          <p><a className="hover:text-white" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          <p>Hours: {HOURS}</p>
          <p><a className="text-[#F26522]" href={waLink('Hello Sanghvi Agency, I would like a quote.')} target="_blank" rel="noreferrer">Chat on WhatsApp</a></p>
        </div>
      </div>
      <div className={`${WRAP} mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between gap-3 text-xs text-gray-500`}>
        <p>© 2026 Sanghvi Agency. All rights reserved.</p>
        <p className="flex gap-4"><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link><Link to="/terms-and-conditions" className="hover:text-white">Terms &amp; Conditions</Link></p>
      </div>
    </footer>
  )
}
