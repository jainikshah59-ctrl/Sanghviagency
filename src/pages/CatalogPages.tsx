import { ArrowRight, ArrowUpRight, Check, CircleHelp, PackageCheck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  allBrandNames,
  brands,
  categoryPages,
  getBrandRoute,
  images,
  products,
  productsDetail,
  type BrandProfile,
  type Question,
} from '../data/site';
import { createWhatsAppHref } from '../lib/whatsapp';
import { ActionLink, ContentContainer, FeatureList, PageHeading, SpecTable } from '../components/shared';

const normalizeBrand = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '');

type ProductDetail = {
  title: string;
  subtitle: string;
  sectionTitle: string;
  body: string;
  badge?: string;
  callout?: string;
  grades?: string[];
  benefits: string[];
  table: string[][];
  tableHeaders: string[];
  brands?: string[];
};

export function ProductsPage() {
  return (
    <main className="page-main">
      <section className="page-hero-surface">
        <ContentContainer>
          <PageHeading eyebrow="Steel & construction materials" title="Our Products" subtitle="Comprehensive range of steel and construction materials for every project scale." />
          <div className="custom-quote-panel">
            <div><p className="eyebrow"><span className="eyebrow-dot" />Built around your requirements</p><h2>Need a custom quote?</h2><p>Tell us what you need and we’ll get back to you with the best rates.</p></div>
            <ActionLink href="/request-quote" tone="orange">Request Quote</ActionLink>
          </div>
        </ContentContainer>
      </section>
      <section className="page-section product-index-section">
        <ContentContainer>
          <div className="product-index-grid">
            {products.map((product, index) => (
              <article className="product-index-card" key={product.name}>
                <Link className={`product-card-visual product-visual-${product.icon}`} to={product.route} aria-label={`View ${product.name}`}>
                  {product.image ? <img src={product.image} alt={product.alt} loading="lazy" /> : <span className="product-line-art" aria-hidden="true"><i /><i /><i /></span>}
                  <span className="product-card-number">0{index + 1}</span>
                  <span className="product-card-open"><ArrowUpRight size={18} /></span>
                </Link>
                <div className="product-index-card-copy">
                  <div className="product-category-line"><span>{product.short}</span><span>{product.name}</span></div>
                  <h2><Link to={product.route}>{product.name}</Link></h2>
                  <p>{product.description}</p>
                  <div className="product-card-actions"><Link to={product.route}>View Details <ArrowRight size={14} /></Link><a href={createWhatsAppHref([`Hello Sanghvi Agency, please share details and availability for ${product.name}.`])} target="_blank" rel="noopener noreferrer">Enquire Now <ArrowUpRight size={14} /></a></div>
                </div>
              </article>
            ))}
          </div>
          <aside className="pipes-separate-note"><span className="product-note-mark"><PackageCheck size={18} /></span><div><strong>Steel Pipes</strong><p>The public site exposes Steel Pipes as a separate category route. It is not a card in the main Products index.</p></div><Link to="/pipes/">Explore Pipes <ArrowRight size={14} /></Link></aside>
        </ContentContainer>
      </section>
    </main>
  );
}

export function ProductDetailPage({ path }: { path: keyof typeof productsDetail }) {
  const detail = productsDetail[path] as ProductDetail;
  const isTmt = path === '/products/tmt-bars';
  const relevantProduct = products.find((product) => product.route === path);
  const image = relevantProduct?.image || (isTmt ? images.tmtBars : images.steelSections);
  const chatHref = createWhatsAppHref([`Hello Sanghvi Agency, I would like a quote for ${detail.title}.`, 'Please share current sizes, stock and transport availability.']);

  return (
    <main className="page-main">
      <section className="page-hero-surface product-detail-hero">
        <ContentContainer>
          <PageHeading eyebrow="Product details" title={detail.title} subtitle={detail.subtitle} actions={<><ActionLink href={chatHref} tone="orange">Request a Quote on WhatsApp</ActionLink><ActionLink href="tel:+919428220385" tone="outline" arrow={false}>Call Now</ActionLink></>} />
          <div className="product-detail-showcase">
            <div className="product-detail-media">
              {image && <img src={image} alt={relevantProduct?.alt || 'Sanghvi Agency steel inventory'} />}
              <span className="showcase-caption"><span>Supply category</span><span>{detail.title}</span></span>
            </div>
            <div className="product-detail-intro">
              {detail.badge && <span className="availability-badge"><ShieldCheck size={15} />{detail.badge}</span>}
              {detail.callout && <p className="section-kicker">{detail.callout}</p>}
              <h2>{detail.sectionTitle}</h2>
              <p>{detail.body}</p>
              {detail.grades && <div className="grade-chip-row">{detail.grades.map((grade) => <span key={grade}>{grade}</span>)}</div>}
              <ActionLink href={chatHref} tone="dark">Enquire Now</ActionLink>
            </div>
          </div>
        </ContentContainer>
      </section>
      <section className="page-section specifications-section">
        <ContentContainer>
          <div className="split-section-heading">
            <div><p className="eyebrow"><span className="eyebrow-dot" />Technical reference</p><h2>Sizes &amp; specifications.</h2></div>
            <div><FeatureList items={detail.benefits} /><p className="table-source-note">Sizes and availability should be confirmed with Sanghvi Agency for your order.</p></div>
          </div>
          <SpecTable headers={detail.tableHeaders} rows={detail.table} />
          {!isTmt && <p className="source-observation"><CircleHelp size={16} />The source inventory shows this same 25x25mm–200x200mm table on the Steel Angles, MS Channels and Steel Beams pages. It is retained as captured rather than silently corrected.</p>}
        </ContentContainer>
      </section>
      {detail.brands && (
        <section className="page-section related-brands-section">
          <ContentContainer>
            <div className="split-section-heading"><div><p className="eyebrow"><span className="eyebrow-dot" />Brand portfolio</p><h2>Brands available.</h2></div><p>Brand availability may vary by stock and requirement. Contact Sanghvi Agency to confirm current stock and specific brand availability.</p></div>
            <div className="brand-chip-grid">{detail.brands.map((name) => <Link key={name} to={getBrandRoute(name)}>{name}<ArrowUpRight size={14} /></Link>)}</div>
            <div className="center-cta"><ActionLink href="/request-quote" tone="orange">Request TMT Bar Quote on WhatsApp</ActionLink></div>
          </ContentContainer>
        </section>
      )}
    </main>
  );
}

export function BrandsPage() {
  const coreNames = new Set(['Mono TMT', 'Utkarsh TMX', 'Varrsana TMX', 'National TMX']);
  const featured = brands.filter((brand) => coreNames.has(brand.brand));
  const additional = allBrandNames.filter((name) => !brands.some((brand) => normalizeBrand(brand.brand) === normalizeBrand(name)));
  const grouped = ['TMT Bars', 'Steel Angles', 'MS Channels', 'Steel Pipes'] as const;

  return (
    <main className="page-main">
      <section className="page-hero-surface">
        <ContentContainer>
          <PageHeading eyebrow="Brand portfolio" title="Brands We Stock" subtitle="We deal only in genuine, certified steel from India’s premier manufacturers. Every brand we carry undergoes strict quality testing and comes with official manufacturer certification." />
          <div className="brands-intro-stamp"><span><ShieldCheck size={18} /></span><p>India’s Top Steel Manufacturers.<br /><small>Availability may vary by stock and requirement.</small></p></div>
        </ContentContainer>
      </section>
      <section className="page-section brand-directory-section">
        <ContentContainer>
          <p className="eyebrow"><span className="eyebrow-dot" />Authorized relationships</p>
          <div className="brand-feature-grid">
            {featured.map((brand, index) => <BrandCard key={brand.route} brand={brand} index={index} featured />)}
          </div>
          {grouped.map((group) => {
            const groupBrands = brands.filter((brand) => brand.group === group && !coreNames.has(brand.brand));
            if (!groupBrands.length) return null;
            return (
              <section className="brand-group" key={group}>
                <div className="brand-group-heading"><h2>{group}</h2><span>{String(groupBrands.length).padStart(2, '0')} profiles</span></div>
                <div className="brand-directory-grid">{groupBrands.map((brand, index) => <BrandCard key={brand.route} brand={brand} index={index} />)}</div>
              </section>
            );
          })}
          <section className="additional-brands-section">
            <div><p className="eyebrow"><span className="eyebrow-dot" />Additional names in the source inventory</p><p>Availability is subject to stock. Contact us to confirm specific brands and grades.</p></div>
            <div className="brand-chip-grid">{additional.map((name) => <Link key={name} to={getBrandRoute(name)}>{name}<ArrowUpRight size={14} /></Link>)}</div>
          </section>
          <div className="brand-availability-cta"><div><h2>Looking for a specific brand?</h2><p>Send us your requirements on WhatsApp for instant confirmation.</p></div><ActionLink href={createWhatsAppHref(['Hello Sanghvi Agency, I am checking availability for a specific steel brand.'])} tone="orange">Check Availability</ActionLink></div>
        </ContentContainer>
      </section>
    </main>
  );
}

function BrandCard({ brand, index, featured = false }: { brand: BrandProfile; index: number; featured?: boolean }) {
  return (
    <Link className={`brand-card ${featured ? 'brand-card-featured' : ''}`} to={brand.route}>
      <div className="brand-card-top"><span className="brand-card-index">{String(index + 1).padStart(2, '0')}</span><ArrowUpRight size={16} /></div>
      {brand.relationship && <span className="brand-relationship">{brand.relationship}</span>}
      <span className="brand-card-group">{brand.group}</span>
      <h3>{brand.brand}</h3>
      <p>{brand.subtitle}</p>
      <span className="brand-card-bottom">View details <ArrowRight size={14} /></span>
    </Link>
  );
}

const categoryQuestions = (route: string): Question[] => {
  if (route === '/tmt-bars/') return [
    { question: 'Which TMT brands are available?', answer: 'Tata, SAIL, JSW, Vizag, JSPL, Panther, Jindal, ET, Gallantt, Nilkanth, ASR, German, Kemo, Mono, Welspun, National and Poddar are listed. Contact Sanghvi Agency to confirm stock.' },
    { question: 'What are common sizes?', answer: '8, 10, 12, 16, 20, 25 and 32mm + custom.' },
    { question: 'What grades are available?', answer: 'Fe500, Fe550, Fe550D, Fe550 CRS and Fe550D CRS.' },
    { question: 'Is delivery available across Gujarat?', answer: 'All-Gujarat delivery is stated in the source inventory; confirm delivery details for your order.' },
  ];
  if (route === '/ms-angle/') return [
    { question: 'What sizes are available?', answer: 'The category FAQ lists 25x25 up to 200x200mm, thickness 3–20mm. Brand-specific tables are shown below.' },
    { question: 'Are test certificates available?', answer: 'The source states that test certificates and official manufacturer MTC complying with IS 2062 are available.' },
  ];
  if (route === '/ms-channel/') return [
    { question: 'What is the standard ISMC range?', answer: 'The source lists standard sizes from ISMC75 (75x40mm) up to ISMC400 (400x100mm).' },
    { question: 'Which grade is listed?', answer: 'IS 2062 grade E250 (Fe 410 W).' },
  ];
  return [
    { question: 'Which pipe brands and shapes are listed?', answer: 'Apollo, Goodluck and Surya; shapes include CHS, SHS and RHS, with black and GI finishes.' },
    { question: 'What pipe size range is listed?', answer: 'The source lists Apollo round, square and rectangular options; Goodluck from 15mm (1/2 inch) to 200mm (8 inch) NB; and Surya Roshni from 15mm to 150mm NB.' },
  ];
};

export function CategoryPage({ route }: { route: string }) {
  const page = categoryPages.find((item) => item.route === route);
  if (!page) return <NotFoundPage />;
  const questions = categoryQuestions(route);
  const image = route === '/tmt-bars/' ? images.tmtBars : route === '/ms-channel/' ? images.msChannels : images.steelSections;

  return (
    <main className="page-main category-page">
      <section className="page-hero-surface category-hero">
        <ContentContainer>
          <PageHeading eyebrow="Steel category" title={page.title} subtitle={page.subtitle} />
          <div className="category-hero-strip"><div><span className="category-hero-icon"><PackageCheck size={20} /></span><span><strong>{page.heading}</strong><small>{page.body}</small></span></div><img src={image} alt={`${page.heading} inventory from Sanghvi Agency`} /></div>
        </ContentContainer>
      </section>
      <section className="page-section category-content-section">
        <ContentContainer>
          <div className="category-note-grid">{page.notes.map((note, index) => <article key={note}><span>0{index + 1}</span><p>{note}</p></article>)}</div>
          <div className="brand-group-heading"><h2>Brands &amp; supply details</h2><span>{page.brands.length} source-listed brands</span></div>
          <div className="category-brand-grid">
            {page.brands.map((name, index) => {
              const href = getBrandRoute(name);
              const brand = brands.find((item) => item.route === href);
              return <Link className="category-brand-card" key={name} to={href}><span className="category-brand-number">0{index + 1}</span><span className="category-brand-name">{name}</span>{brand?.relationship && <span className="brand-relationship">{brand.relationship}</span>}<ArrowUpRight size={16} /></Link>;
            })}
          </div>
          <div className="category-faq-wrap"><div><p className="eyebrow"><span className="eyebrow-dot" />Quick answers</p><h2>Frequently asked.</h2></div><div className="accordion-list">{questions.map((item) => <details className="accordion-item" key={item.question}><summary><span>{item.question}</span><span className="accordion-mark" /></summary><p>{item.answer}</p></details>)}</div></div>
          <div className="category-cta-panel"><div><span><Check size={16} />Availability varies by stock and requirement</span><h2>Need a supply quote?</h2><p>Share your exact sizes and required weight or quantities.</p></div><ActionLink href="/request-quote" tone="orange">Request Quote</ActionLink></div>
        </ContentContainer>
      </section>
    </main>
  );
}

export function BrandDetailPage({ brand }: { brand: BrandProfile }) {
  const image = brand.group === 'TMT Bars' ? images.tmtBars : brand.group === 'MS Channels' ? images.msChannels : brand.group === 'Steel Pipes' ? null : images.steelSections;
  const chatHref = createWhatsAppHref([`Hello Sanghvi Agency, I am interested in ${brand.brand}.`, 'Please share current sizes, stock and delivery availability.']);

  return (
    <main className="page-main brand-detail-page">
      <section className="page-hero-surface brand-detail-hero">
        <ContentContainer>
          <PageHeading eyebrow={brand.relationship || brand.group} title={brand.title} subtitle={brand.subtitle} actions={<><ActionLink href={chatHref} tone="orange">WhatsApp</ActionLink><ActionLink href="tel:+919428220385" tone="outline" arrow={false}>Call Now</ActionLink></>} />
          <div className="brand-overview-card">
            <div className="brand-overview-copy"><span className="brand-detail-logo"><ShieldCheck size={20} /></span><p className="eyebrow"><span className="eyebrow-dot" />About {brand.brand} at Sanghvi Agency</p><h2>Genuine supply.<br />Technical confidence.</h2><p>{brand.overview}</p><span className="availability-note">Brand availability may vary by stock and requirement. Contact us to confirm current stock.</span></div>
            <div className={`brand-overview-media ${image ? '' : 'brand-overview-media-pattern'}`}>{image ? <img src={image} alt={`${brand.group} inventory shown on the official Sanghvi Agency source site`} /> : <div className="brand-section-pattern" aria-hidden="true"><i /><i /><i /><i /></div>}<span>{brand.group} · Bhuj, Gujarat</span></div>
          </div>
        </ContentContainer>
      </section>
      <section className="page-section brand-detail-content">
        <ContentContainer>
          <div className="brand-detail-feature-grid">
            <article className="brand-info-panel"><p className="eyebrow"><span className="eyebrow-dot" />Primary applications</p><h2>Where it works.</h2><FeatureList items={brand.applications} /></article>
            <article className="brand-info-panel"><p className="eyebrow"><span className="eyebrow-dot" />Technical strengths</p><h2>Designed to perform.</h2><FeatureList items={brand.features} /></article>
            <article className="brand-info-panel brand-info-panel-accent"><p className="eyebrow"><span className="eyebrow-dot" />Sanghvi Advantage</p><h2>Dependable service.</h2><FeatureList items={brand.advantages} /></article>
          </div>
          <div className="brand-spec-section"><div className="split-section-heading"><div><p className="eyebrow"><span className="eyebrow-dot" />Product specifications</p><h2>Supply details.</h2></div><p>Stock and delivery vary by order; confirm the exact requirements with the team.</p></div><SpecTable headers={['Specification', 'Site value']} rows={brand.specs} /></div>
          <div className="brand-faq-related-grid">
            <section><p className="eyebrow"><span className="eyebrow-dot" />Direct answers</p><h2>Good to know.</h2><div className="accordion-list">{brand.faq.map((item) => <details className="accordion-item" key={item.question}><summary><span>{item.question}</span><span className="accordion-mark" /></summary><p>{item.answer}</p></details>)}</div></section>
            <aside className="brand-instant-quote"><span className="availability-badge"><ShieldCheck size={15} />Instant quotation</span><h2>Need {brand.brand} for your project?</h2><p>Send exact sizes and required weight or quantities. The source page states market rates are shared within minutes during business hours.</p><ActionLink href={chatHref} tone="orange">Get WhatsApp Quote</ActionLink><Link className="text-link" to="/request-quote">Detailed Multi-Product Quote <ArrowRight size={14} /></Link><p className="brand-direct-contacts">{'+91 94282 20385'} · {'+91 94262 14737'}</p></aside>
          </div>
          {brand.related.length > 0 && <div className="related-brand-row"><p>Explore alternatives</p><div>{brand.related.map((name) => <Link to={getBrandRoute(name)} key={name}>{name}<ArrowUpRight size={14} /></Link>)}</div></div>}
        </ContentContainer>
      </section>
    </main>
  );
}

export function NotFoundPage() {
  return <main className="page-main not-found-page"><ContentContainer><PageHeading eyebrow="Page not found" title="This page isn’t in the directory." subtitle="Return to the Sanghvi Agency homepage or browse its product range." actions={<><ActionLink href="/" tone="dark">Home</ActionLink><ActionLink href="/products/" tone="outline">Our Products</ActionLink></>} /></ContentContainer></main>;
}
