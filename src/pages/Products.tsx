import { Link } from 'react-router-dom'
import { Band, CtaBand, PageHead } from '../components/Layout'
import { Btn, Chips, SpecTable } from '../components/ui'
import { PRODUCTS, SECTION_TABLE, TMT_BRANDS_LINE, TMT_GRADES, TMT_TABLE } from '../data/products'
import { CATS } from '../data/brands'
import { waLink } from '../data/site'
import { useParams } from 'react-router-dom'

export function Products() {
  return (
    <>
      <PageHead title="Our Products" sub="Comprehensive range of steel and construction materials for every project scale." />
      <Band tone="gray">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="bg-white rounded-2xl p-7 flex flex-col gap-4">
              <h2 className="text-2xl font-medium tracking-tight">{p.name}</h2>
              <p className="text-gray-600 text-sm flex-1">{p.desc}</p>
              {p.slug ? <Btn to={`/products/${p.slug}`} size="sm" className="self-start">View Details</Btn>
                : <Btn href={waLink(`Hello Sanghvi Agency, I would like to enquire about ${p.name}.`)} external size="sm" className="self-start">Enquire Now</Btn>}
            </article>
          ))}
        </div>
        <div className="mt-12">
          <p className="text-sm text-gray-600 mb-3">Brand category routes</p>
          <div className="flex flex-wrap gap-2">{Object.values(CATS).map((c) => <Link key={c.base} to={c.base + '/'} className="border border-gray-300 bg-white rounded-full px-4 py-1.5 text-sm hover:bg-gray-900 hover:text-white transition-colors duration-300">{c.label}</Link>)}</div>
        </div>
      </Band>
      <CtaBand title="Need a Custom Quote?" copy="Tell us what you need and we’ll get back to you with the best rates." />
    </>
  )
}

export function ProductDetail() {
  const { slug } = useParams()
  const p = PRODUCTS.find((x) => x.slug === slug)
  if (!p) return <PageHead title="Product not found" sub="Please choose a product from our range." ><Btn to="/products">All Products</Btn></PageHead>
  const isTmt = slug === 'tmt-bars'
  return (
    <>
      <PageHead eyebrow="Products" title={p.name} sub={p.sub}>
        <Btn href={waLink(`Hello Sanghvi Agency, I would like a quote for ${p.name}.`)} external>Chat on WhatsApp</Btn>
      </PageHead>
      <Band>
        {isTmt ? (
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10">
            <div className="flex flex-col gap-5">
              <span className="self-start border border-gray-300 rounded-full px-4 py-1.5 text-sm">Authorized Distribution Partner</span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">TMT Steel Reinforcement Bars</h2>
              <h3 className="text-xl font-medium">Mono TMT Steel Bars & Custom Lengths</h3>
              <p className="text-gray-700">Authorized distributor for Mono TMT, custom-length Fe500, Fe550D, CRS for residential/commercial/export. TMT is the backbone in foundations, columns, beams, slabs and all RCC. Stocks trusted manufacturers, BIS standards for strength, ductility and corrosion.</p>
            </div>
            <div className="grid grid-cols-3 gap-3 content-start">{TMT_GRADES.map(([g, d]) => <div key={g} className="rounded-2xl bg-[#F5F5F5] p-5"><p className="text-2xl font-medium">{g}</p><p className="text-sm text-gray-600 mt-1">{d}</p></div>)}</div>
          </div>
        ) : <p className="text-gray-700 text-lg max-w-3xl">{p.body}</p>}
      </Band>
      <Band tone="gray">
        <h2 className="text-2xl sm:text-3xl font-medium mb-6">{isTmt ? 'Sizes / weights / applications' : 'Available sizes'}</h2>
        {isTmt ? <SpecTable head={['Size', 'Weight', 'Typical use']} rows={TMT_TABLE} /> : <SpecTable head={['Size', 'Thickness', 'Weight']} rows={SECTION_TABLE} />}
      </Band>
      <Band>
        <h2 className="text-2xl sm:text-3xl font-medium mb-6">Key benefits</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{p.benefits?.map((b) => <div key={b} className="rounded-2xl border border-gray-300 p-5 font-medium">{b}</div>)}</div>
        {isTmt && <div className="mt-12"><h2 className="text-2xl sm:text-3xl font-medium mb-4">Brands Available</h2><p className="text-gray-700 mb-4">{TMT_BRANDS_LINE}</p><Link to="/tmt-bars/" className="underline underline-offset-4">Browse TMT brand pages</Link></div>}
      </Band>
      <CtaBand title={p.cta ?? 'Request a quote on WhatsApp'} copy="Send your sizes and quantities and we respond with market rates within minutes during business hours." primary={['Request Quote', '/request-quote']} />
    </>
  )
}
export { Chips }
