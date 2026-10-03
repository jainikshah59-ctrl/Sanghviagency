import { ReactNode, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export const EASE = 'duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]'
export const WRAP = 'w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12'

type BtnProps = { children: ReactNode; to?: string; href?: string; onClick?: () => void; type?: 'button' | 'submit'; variant?: 'orange' | 'dark' | 'white'; size?: 'sm' | 'md'; className?: string; external?: boolean }
/** Reference CTA: duplicated text-roll + circular arrow that rotates on hover */
export function Btn({ children, to, href, onClick, type = 'button', variant = 'orange', size = 'md', className = '', external }: BtnProps) {
  const v = variant === 'orange' ? 'bg-[#F26522] text-white' : variant === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
  const circle = variant === 'white' ? 'bg-gray-900 text-white' : variant === 'orange' ? 'bg-white text-[#F26522]' : 'bg-white text-gray-900'
  const sz = size === 'sm' ? 'text-[13px] pl-5 pr-2 py-2 gap-3' : 'text-[15px] pl-6 pr-2 py-2 gap-4'
  const ic = size === 'sm' ? 'w-7 h-7' : 'w-9 h-9'
  const cls = `group inline-flex items-center rounded-full font-medium ${v} ${sz} ${className}`
  const inner = (
    <>
      <span className="block overflow-hidden h-[1.25em] leading-[1.25em]">
        <span className={`flex flex-col transition-transform ${EASE} group-hover:-translate-y-full`}><span>{children}</span><span aria-hidden="true">{children}</span></span>
      </span>
      <span className={`${ic} rounded-full ${circle} flex items-center justify-center shrink-0`}>
        <ArrowRight size={size === 'sm' ? 14 : 16} className={`transition-transform ${EASE} group-hover:-rotate-45`} />
      </span>
    </>
  )
  if (to) return <Link to={to} className={cls}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>{inner}</a>
  return <button type={type} onClick={onClick} className={cls}>{inner}</button>
}

export function Badge({ n, label, dark = false }: { n?: string | number; label: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-6 sm:mb-8">
      {n !== undefined && <span className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs flex items-center justify-center">{n}</span>}
      <span className={`border rounded-full px-4 py-1.5 text-sm ${dark ? 'border-gray-600 text-white' : 'border-gray-300'}`}>{label}</span>
    </div>
  )
}

export const H2 = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <h2 className={`font-medium tracking-tight leading-[1.05] text-gray-900 ${className}`} style={{ fontSize: 'clamp(2rem,5vw,4.5rem)' }}>{children}</h2>
)

/** Image with graceful fallback to a tile when the file is missing */
export function SafeImg({ src, alt, className = '', fallback }: { src?: string; alt: string; className?: string; fallback?: ReactNode }) {
  const [bad, setBad] = useState(!src)
  if (bad) return <div role="img" aria-label={alt} className={`${className} bg-gradient-to-br from-gray-200 to-gray-300 flex items-end p-5`}>{fallback ?? <span className="text-sm text-gray-600">{alt}</span>}</div>
  return <img src={src} alt={alt} loading="lazy" onError={() => setBad(true)} className={`${className} object-cover`} />
}

export function useIST() {
  const get = () => { try { return new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' }) } catch { return '--:--' } }
  const [t, setT] = useState(get)
  useEffect(() => { const i = setInterval(() => setT(get()), 1000); return () => clearInterval(i) }, [])
  return t
}

export function SpecTable({ rows, head }: { rows: string[][]; head?: string[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white">
      <table className="w-full text-left text-sm">
        {head && <thead><tr className="border-b border-gray-200 text-gray-500">{head.map((h) => <th key={h} className="px-5 py-3 font-medium">{h}</th>)}</tr></thead>}
        <tbody>{rows.map((r, i) => (
          <tr key={i} className="border-b border-gray-100 last:border-0">{r.map((c, j) => <td key={j} className={`px-5 py-3 ${j === 0 && !head ? 'text-gray-500 w-1/3' : ''} ${j === 0 && head ? 'font-medium' : ''}`}>{c}</td>)}</tr>
        ))}</tbody>
      </table>
    </div>
  )
}

export function Accordion({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-gray-200 border-y border-gray-200">
      {items.map(([q, a], i) => (
        <div key={q}>
          <button className="w-full flex items-center justify-between gap-4 py-5 text-left text-lg font-medium" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
            {q}<span className={`shrink-0 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center transition-transform ${EASE} ${open === i ? 'rotate-45' : ''}`}>+</span>
          </button>
          {open === i && <p className="pb-5 pr-12 text-gray-600">{a}</p>}
        </div>
      ))}
    </div>
  )
}

export const Chips = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2">{items.map((c) => <span key={c} className="border border-gray-300 bg-white rounded-full px-4 py-1.5 text-sm">{c}</span>)}</div>
)
