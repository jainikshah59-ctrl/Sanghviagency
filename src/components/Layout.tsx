import { ReactNode, useEffect } from 'react'
import { Outlet, useLocation, Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import Footer from './Footer'
import Nav from './Nav'
import { TEL_PRIMARY, waLink } from '../data/site'
import { Badge, H2, WRAP, Btn } from './ui'

export function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return (
    <>
      <Outlet />
      <Footer />
      {/* persistent mobile conversion bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-2 flex gap-2" style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}>
        <a href={TEL_PRIMARY} aria-label="Call Now" className="flex-1 bg-gray-900 text-white rounded-full py-3 text-sm font-medium flex items-center justify-center gap-2"><Phone size={14} />Call Now</a>
        <a href={waLink('Hello Sanghvi Agency, I would like a quote.')} target="_blank" rel="noreferrer" className="flex-1 bg-[#F26522] text-white rounded-full py-3 text-sm font-medium text-center">Chat on WhatsApp</a>
      </div>
    </>
  )
}

/** Inner-page header: same pill nav + oversized type on #EFEFEF */
export function PageHead({ eyebrow, title, sub, children }: { eyebrow?: string; title: string; sub?: string; children?: ReactNode }) {
  return (
    <section className="bg-[#EFEFEF]">
      <Nav />
      <div className={`${WRAP} pt-16 sm:pt-24 pb-12 sm:pb-16`}>
        {eyebrow && <Badge label={eyebrow} />}
        <h1 className="font-medium tracking-tight leading-[1.04] text-gray-900 max-w-5xl" style={{ fontSize: 'clamp(2.25rem,6vw,5.5rem)' }}>{title}</h1>
        {sub && <p className="mt-5 max-w-2xl text-gray-600 text-base sm:text-lg">{sub}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  )
}

export function Band({ children, tone = 'white' }: { children: ReactNode; tone?: 'white' | 'gray' | 'dark' }) {
  const bg = tone === 'white' ? 'bg-white' : tone === 'gray' ? 'bg-[#F5F5F5]' : 'bg-gray-900 text-white'
  return <section className={`${bg} py-14 sm:py-20 lg:py-24`}><div className={WRAP}>{children}</div></section>
}

export function CtaBand({ title, copy, primary = ['Request Quote', '/request-quote'], secondary }: { title: string; copy: string; primary?: [string, string]; secondary?: [string, string] }) {
  return (
    <Band tone="dark">
      <H2 className="!text-white max-w-3xl">{title}</H2>
      <p className="mt-5 text-gray-400 max-w-xl">{copy}</p>
      <div className="mt-8 flex flex-wrap gap-3">{primary[1] ? <Btn to={primary[1]}>{primary[0]}</Btn> : <Btn href={waLink('Hello Sanghvi Agency, I would like a quote.')} external>{primary[0]}</Btn>}{secondary && <Btn to={secondary[1]} variant="white">{secondary[0]}</Btn>}</div>
    </Band>
  )
}
export { Link }
