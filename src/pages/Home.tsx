import { Link } from 'react-router-dom'
import HeroShader from '../components/HeroShader'
import Nav from '../components/Nav'
import ProjectCard from '../components/ProjectCard'
import { Badge, Btn, H2, SafeImg, WRAP } from '../components/ui'
import { HERO_IMG, PROJECTS, STATS } from '../data/site'
import { PRODUCTS } from '../data/products'

const SPARK = 'm19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z'

export default function Home() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-[#EFEFEF]">
        <HeroShader />
        <Nav />
        <div className={`relative z-20 mt-auto ${WRAP} pb-8 sm:pb-12 pt-24`}>
          <p className="text-[13px] sm:text-sm tracking-wide text-gray-600 mb-3 sm:mb-4">Premium Steel &amp; Construction Material Supplier</p>
          <h1 className="text-gray-900 font-medium tracking-tight leading-[1.02] max-w-[14ch] sm:max-w-[18ch]" style={{ fontSize: 'clamp(2.75rem,8vw,7.5rem)' }}>Building Strong Foundations Since 2001</h1>
          <p className="mt-4 sm:mt-6 max-w-xl text-gray-600 text-base sm:text-lg">Serving Builders, Contractors &amp; Industries Across Kutch &amp; Gujarat with trusted quality steel.</p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <Btn to="/request-quote" className="self-start">Request a Quote</Btn>
            <div className="self-start sm:self-auto flex items-center gap-3 bg-white rounded-full pl-3 pr-2 py-2 shadow-lg hover:scale-[1.03] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
              <svg className="w-6 h-6 text-[#F26522]" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true"><path d={SPARK} /></svg>
              <span className="text-sm font-medium">20+ Years of Trust</span>
              <span className="bg-gray-900 text-white text-xs font-medium rounded-full px-3 py-1.5">2001</span>
            </div>
          </div>
          <dl className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 border-t border-gray-300 pt-5 text-sm">
            {STATS.map(([k, v]) => <div key={k}><dt className="text-gray-500">{k}</dt><dd className="text-xl font-medium">{v}</dd></div>)}
          </dl>
        </div>
      </section>

      {/* SECTION 2 — ABOUT */}
      <section className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
        <div className={WRAP}>
          <Badge n={1} label="About Sanghvi Agency" />
          <H2 className="mb-10 lg:mb-14 max-w-4xl">Your Trusted Partner in Construction Steel.</H2>
          <div className="grid grid-cols-1 lg:grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8">
            <div className="rounded-2xl bg-[#F5F5F5] aspect-[4/5] p-5 flex flex-col justify-end order-2 lg:order-none">
              <p className="text-4xl font-medium">2001</p><p className="text-sm text-gray-600">Founded in Bhuj</p>
            </div>
            <div className="flex flex-col gap-5 order-1 lg:order-none">
              <p className="text-gray-700">Sanghvi Agency serves builders, contractors, engineers, fabricators, industries and homeowners across Bhuj, Kutch and Gujarat, with a focus on quality, timely delivery and customer service.</p>
              <p className="text-gray-700">Grown from a small dealership in Bhuj into a recognized regional supplier, we keep our promises: on-time delivery, transparent pricing, and recommendations aligned to your project requirements.</p>
              <Btn to="/about" className="self-start">Learn Our Story</Btn>
            </div>
            <SafeImg src={HERO_IMG} alt="Sanghvi Agency steel warehouse with organized TMT bar inventory." className="w-full rounded-2xl aspect-[4/3] order-3 lg:order-none" />
          </div>
        </div>
      </section>

      {/* SECTION 3 — FEATURED SUPPLY & PROJECTS */}
      <section className="bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <div className={WRAP}>
          <Badge n={2} label="Featured Supply & Projects" />
          <H2 className="mb-10 lg:mb-14">Steel That Builds the Region.</H2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
            {PROJECTS.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-600">
            {PRODUCTS.map((p) => <Link key={p.name} to={p.slug ? `/products/${p.slug}` : '/products'} className="border border-gray-300 rounded-full px-4 py-1.5 bg-white hover:bg-gray-900 hover:text-white transition-colors duration-300">{p.name}</Link>)}
            <Link to="/projects" className="ml-auto underline underline-offset-4 text-gray-900">View All Projects</Link>
          </div>
        </div>
      </section>
    </>
  )
}
