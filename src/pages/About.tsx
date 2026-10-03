import { Band, CtaBand, PageHead } from '../components/Layout'
import { Badge, H2, SafeImg } from '../components/ui'
import { HERO_IMG, JOURNEY, TESTIMONIALS, WHY } from '../data/site'

const VALUES = ['Quality', 'Trust', 'Commitment', 'Reliability', 'Customer Satisfaction', 'Professional Service']
const ADV = ['20+ Years Experience', 'Retail & Wholesale Supply', 'Trusted by Builders & Contractors', 'Competitive Market Pricing', 'Reliable Product Availability & Delivery']

export default function About() {
  return (
    <>
      <PageHead eyebrow="About Us" title="Our Story" sub="Two decades of building trust, one steel bar at a time." />
      <Band>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5">
            <Badge label="Who We Are" />
            <H2>Building Strong Foundations Since 2001.</H2>
            <p className="text-gray-700">Sanghvi Agency serves builders, contractors, engineers, fabricators, industries, and homeowners across Bhuj, Kutch and Gujarat.</p>
            <p className="text-gray-700">We started as a small dealership in Bhuj and are now recognized across the region. Our operating principle is simple: keep your promises — delivery on time, no surprise pricing, and recommendations aligned with your project requirements.</p>
          </div>
          <SafeImg src={HERO_IMG} alt="Steel inventory at Sanghvi Agency." className="w-full rounded-2xl aspect-[4/3]" />
        </div>
      </Band>
      <Band tone="gray">
        <Badge label="Journey" /><H2 className="mb-12">Two decades, one promise.</H2>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {JOURNEY.map(([y, t, d]) => <li key={y} className="bg-white rounded-2xl p-6"><p className="text-4xl font-medium">{y}</p><p className="mt-3 font-medium">{t}</p><p className="text-sm text-gray-600 mt-1">{d}</p></li>)}
        </ol>
      </Band>
      <Band>
        <Badge label="Mission & Values" />
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-[#F5F5F5] p-8"><h3 className="text-2xl font-medium mb-3">Mission</h3><p className="text-gray-700">Deliver quality construction materials, maintain competitive pricing, ensure timely deliveries, support builders with dependable supply, build lasting customer relationships, and contribute to stronger, safer construction projects.</p></div>
          <div className="rounded-2xl bg-[#F5F5F5] p-8"><h3 className="text-2xl font-medium mb-3">Vision</h3><p className="text-gray-700">To be the most trusted name in construction material supply across Gujarat - known for integrity, quality, and customer-first service. We aim to be the first call for every builder in the region.</p></div>
        </div>
        <h3 className="text-2xl font-medium mt-12 mb-4">Core Values</h3>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">{VALUES.map((v) => <div key={v} className="border border-gray-300 rounded-2xl p-4 text-sm font-medium">{v}</div>)}</div>
      </Band>
      <Band tone="gray">
        <Badge label="The Sanghvi Advantage" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">{ADV.map((a) => <div key={a} className="bg-white rounded-2xl p-5 font-medium">{a}</div>)}</div>
        <Badge label="Why Choose Us" /><H2 className="mb-10">Built on Trust, Driven by Quality.</H2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{WHY.map(([t, d]) => <div key={t} className="bg-white rounded-2xl p-6"><p className="font-medium text-lg">{t}</p>{d && <p className="text-sm text-gray-600 mt-2">{d}</p>}</div>)}</div>
      </Band>
      <Band>
        <Badge label="Testimonials" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map(([n, r, q, s]) => (
            <figure key={n} className="rounded-2xl bg-[#F5F5F5] p-6 flex flex-col gap-4">
              <p className="text-[#F26522]" aria-label={`${s} stars`}>{'★'.repeat(s)}{'☆'.repeat(5 - s)}</p>
              <blockquote className="text-gray-700">“{q}”</blockquote>
              <figcaption className="mt-auto text-sm"><span className="font-medium">{n}</span><br /><span className="text-gray-500">{r}</span></figcaption>
            </figure>
          ))}
        </div>
      </Band>
      <CtaBand title="Ready to Work Together?" copy="Let’s discuss your project requirements. Get a quick quote today." secondary={['Contact Us', '/contact']} />
    </>
  )
}
