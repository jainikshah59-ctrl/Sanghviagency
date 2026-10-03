import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { NAV } from '../data/site'
import { Btn, EASE, useIST } from './ui'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const time = useIST()
  return (
    <header className="relative z-20 w-full max-w-[1440px] mx-auto p-2 sm:p-3">
      <nav aria-label="Primary" className="bg-white rounded-full p-[5px] flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" aria-label="Sanghvi Agency home" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center text-white text-[10px] sm:text-[11px] font-bold tracking-tight">SA</Link>
          <div className="hidden md:flex items-center gap-6 text-[14px]">
            {NAV.map((n) => <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => `text-gray-900 hover:text-gray-500 transition-colors duration-300 ${isActive ? 'underline underline-offset-4' : ''}`}>{n.label}</NavLink>)}
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 pr-0.5">
          <span className="hidden lg:inline text-[13px] text-gray-600">Serving Kutch &amp; Gujarat</span>
          <span className="flex items-center gap-1.5 text-[13px] text-gray-600"><Clock size={14} />{time} IST</span>
          <Btn to="/request-quote" variant="dark" size="sm">Request Quote</Btn>
        </div>
        <button className="md:hidden bg-gray-900 text-white text-[13px] font-medium rounded-full px-5 py-2.5 mr-0.5" aria-expanded={open} onClick={() => setOpen(true)}>Menu</button>
      </nav>
      <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
        <div className={`absolute inset-0 bg-black/60 transition-opacity ${EASE} ${open ? 'opacity-100' : 'opacity-0'}`} onClick={() => setOpen(false)} />
        <div className={`absolute bottom-0 inset-x-0 bg-white rounded-t-3xl p-6 transition-transform ${EASE} ${open ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="flex justify-between items-center mb-6">
            <span className="flex items-center gap-1.5 text-[13px] text-gray-600"><Clock size={14} />{time} IST</span>
            <button className="bg-gray-900 text-white text-[13px] font-medium rounded-full px-5 py-2.5" onClick={() => setOpen(false)}>Close</button>
          </div>
          <div className="flex flex-col gap-3 text-2xl mb-6">{NAV.map((n) => <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>{n.label}</Link>)}</div>
          <Link to="/request-quote" onClick={() => setOpen(false)} className="block text-center bg-[#F26522] text-white rounded-full py-3 font-medium">Request a Quote</Link>
        </div>
      </div>
    </header>
  )
}
