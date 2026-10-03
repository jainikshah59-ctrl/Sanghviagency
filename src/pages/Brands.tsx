import { Link, useParams } from 'react-router-dom'
import { Band, CtaBand, PageHead } from '../components/Layout'
import { Accordion, Badge, Btn, H2, SpecTable } from '../components/ui'
import { ALL_BRAND_LABELS, BRANDS, Cat, CATS, brandPath, byCat, findBrand, resolveRelated } from '../data/brands'
import { PHONE_PRIMARY, PHONE_SECONDARY, TEL_PRIMARY, TEL_SECONDARY, waLink } from '../data/site'

export function Brands() {
  return (
    <>
      <PageHead title="Brands We Stock" sub="We deal only in genuine, certified steel from India’s premier manufacturers." />
      <Band tone="gray">
        <Badge label="India’s Top Steel Manufacturers" />
        <p className="text-gray-700 max-w-2xl mb-10">Every brand we carry undergoes strict quality testing and comes with official manufacturer certification.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {ALL_BRAND_LABELS.map(([n, r]) => (
            <div key={n} className="bg-white rounded-2xl p-5 min-h-[7rem] flex flex-col justify-between">
              <p className="font-medium">{n}</p>{r && <span className="self-start text-xs bg-gray-900 text-white rounded-full px-3 py-1">{r}</span>}
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-2">{(Object.keys(CATS) as Cat[]).map((c) => <Link key={c} to={CATS[c].base + '/'} className="border border-gray-300 bg-white rounded-full px-4 py-1.5 text-sm hover:bg-gray-900 hover:text-white transition-colors duration-300">{CATS[c].title}</Link>)}</div>
        <p className="mt-8 text-sm text-gray-600 max-w-2xl">Brand availability may vary by stock and requirement. Contact us to confirm current stock levels and specific brand availability for your order.</p>
      </Band>
      <CtaBand title="Looking for a Specific Brand?" copy="Send us your requirements on WhatsApp for instant confirmation." primary={['Check Availability', '']} />
    </>
  )
}

export function Category({ cat }: { cat: Cat }) {
  const c = CATS[cat]
  return (
    <>
      <PageHead eyebrow={c.label} title={c.h1} sub={c.sub}><Btn href={waLink(`Hello Sanghvi Agency, I need ${c.label}.`)} external>Chat on WhatsApp</Btn></PageHead>
      <Band tone="gray">
        <H2 className="mb-5">{c.h2}</H2><p className="text-gray-700 max-w-3xl mb-10">{c.body}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {byCat(cat).map((b) => (
            <Link key={b.key} to={brandPath(b)} className="group bg-white rounded-2xl p-6 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
              <h3 className="text-xl font-medium">{b.short}</h3>
              <p className="text-sm text-gray-600 flex-1">{b.card}</p>
              <span className="text-sm underline underline-offset-4">View details</span>
            </Link>
          ))}
        </div>
      </Band>
      <Band><h2 className="text-2xl sm:text-3xl font-medium mb-6">FAQ</h2><Accordion items={c.faq} /></Band>
      <CtaBand title="Need a quote?" copy="Send us your requirements and we respond with market rates during business hours." />
    </>
  )
}

export function BrandDetail({ cat }: { cat: Cat }) {
  const { slug = '' } = useParams()
  const key = slug.replace(/-tmt-bars$|-angle$|-channel$|-pipes$/, '')
  const b = findBrand(cat, key)
  if (!b) return <PageHead title="Brand not found"><Btn to={CATS[cat].base + '/'}>{CATS[cat].title}</Btn></PageHead>
  const tmt = cat === 'tmt'
  const rel = b.rel.map((l) => ({ l, b: resolveRelated(cat, l) }))
  return (
    <>
      <PageHead eyebrow={CATS[cat].label} title={b.h1} sub={b.sub}>
        <Btn href={waLink(`Hello Sanghvi Agency, I need a quote for ${b.short}.`)} external>WhatsApp</Btn>
        <Btn href={TEL_PRIMARY} variant="dark">Call Now ({PHONE_PRIMARY})</Btn>
      </PageHead>
      <Band>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <Badge label="Brand Overview" />{b.badge && <p className="mb-4 -mt-3"><span className="text-xs bg-gray-900 text-white rounded-full px-3 py-1">{b.badge}</span></p>}
            <p className="text-lg text-gray-700">{b.ov}</p>
            <h2 className="text-2xl sm:text-3xl font-medium mt-8">About {b.short} at Sanghvi Agency.</h2>
          </div>
          <div><h3 className="font-medium mb-4">Primary Applications</h3><div className="grid grid-cols-2 gap-3">{b.apps.map((a) => <div key={a} className="rounded-2xl bg-[#F5F5F5] p-4 text-sm">{a}</div>)}</div></div>
        </div>
      </Band>
      <Band tone="gray">
        <div className="grid md:grid-cols-2 gap-10">
          <div><h3 className="text-2xl font-medium mb-4">Key Features &amp; Technical Strengths</h3><ul className="space-y-2">{b.feat.map((f) => <li key={f} className="bg-white rounded-2xl px-5 py-3">{f}</li>)}</ul></div>
          <div><h3 className="text-2xl font-medium mb-4">Sanghvi Advantage</h3><ul className="space-y-2">{b.adv.map((f) => <li key={f} className="bg-white rounded-2xl px-5 py-3">{f}</li>)}</ul></div>
        </div>
      </Band>
      <Band>
        <h3 className="text-2xl sm:text-3xl font-medium mb-6">Product Specifications &amp; Availability</h3>
        <SpecTable rows={b.spec} />
      </Band>
      <Band tone="gray">
        <Badge label="Instant Quotation" />
        <H2 className="mb-5">Need {b.short} for your project?</H2>
        <p className="text-gray-700 max-w-xl mb-8">{tmt ? 'Send your exact sizes and required weight or quantities. We respond with market rates within minutes during business hours.' : 'Send exact sizes and required weight or quantities. Market rates within minutes during business hours.'}</p>
        <div className="flex flex-wrap gap-3 mb-6"><Btn href={waLink(`Hello Sanghvi Agency, I need a quote for ${b.short}.`)} external>Get WhatsApp Quote</Btn><Btn to="/request-quote" variant="dark">Detailed Multi-Product Quote</Btn></div>
        <p className="text-sm text-gray-600"><a href={TEL_PRIMARY}>{PHONE_PRIMARY}</a> · <a href={TEL_SECONDARY}>{PHONE_SECONDARY}</a></p>
      </Band>
      <Band>
        <h3 className="text-2xl sm:text-3xl font-medium mb-6">Direct Answers / FAQ</h3><Accordion items={b.faq} />
        <h3 className="text-xl font-medium mt-14 mb-4">Explore Alternatives / Related {tmt ? 'TMT Bars Brands' : 'Products'}</h3>
        <div className="flex flex-wrap gap-2">{rel.map(({ l, b: rb }) => rb
          ? <Link key={l} to={brandPath(rb)} className="border border-gray-300 rounded-full px-4 py-1.5 text-sm hover:bg-gray-900 hover:text-white transition-colors duration-300">{l}</Link>
          : <span key={l} className="border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-500">{l}</span>)}</div>
      </Band>
      <CtaBand title={`Looking for Wholesale Rates on ${b.short}?`} copy="Chat on WhatsApp for a quick response during business hours." primary={['Chat on WhatsApp', '']} />
    </>
  )
}
export const ALL = BRANDS
