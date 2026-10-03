import { useState, type FormEvent } from 'react';
import { Clock, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { contact } from '../data/site';
import { openWhatsApp } from '../lib/whatsapp';
import { ActionLink, ContentContainer, PageHeading } from '../components/shared';

type ProductLine = { id: string; name: string; measure: string; sizePlaceholder: string; quantityPlaceholder: string };
const quoteProducts: ProductLine[] = [
  { id: 'tmt', name: 'TMT Bars', measure: 'Size', sizePlaceholder: 'e.g. 12mm', quantityPlaceholder: 'Quantity' },
  { id: 'angles', name: 'Steel Angles', measure: 'Size', sizePlaceholder: 'e.g. 50x50mm', quantityPlaceholder: 'Quantity' },
  { id: 'channels', name: 'MS Channels', measure: 'Size', sizePlaceholder: 'e.g. ISMC 150', quantityPlaceholder: 'Quantity' },
  { id: 'beams', name: 'Steel Beams', measure: 'Size', sizePlaceholder: 'e.g. ISMB 200', quantityPlaceholder: 'Quantity' },
  { id: 'wire', name: 'Binding Wire', measure: 'Gauge', sizePlaceholder: 'Enter gauge', quantityPlaceholder: 'Quantity (kg)' },
  { id: 'nails', name: 'Steel Nails', measure: 'Size', sizePlaceholder: 'Enter size', quantityPlaceholder: 'Quantity (kg)' },
];

type QuoteLineValue = { selected: boolean; size: string; quantity: string };
type QuoteValues = Record<string, QuoteLineValue>;
const emptyQuoteValues = (): QuoteValues => Object.fromEntries(quoteProducts.map((product) => [product.id, { selected: false, size: '', quantity: '' }]));

export function QuotePage() {
  const [lines, setLines] = useState<QuoteValues>(emptyQuoteValues);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const selected = quoteProducts.filter((product) => lines[product.id].selected);
    if (!selected.length) {
      setError('Select at least one product to prepare your WhatsApp quote.');
      return;
    }
    if (!event.currentTarget.reportValidity()) return;
    setError('');
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const productLines = selected.map((product) => {
      const line = lines[product.id];
      return `• ${product.name}${line.size.trim() ? ` — ${product.measure}: ${line.size.trim()}` : ''} — Quantity: ${line.quantity.trim()}`;
    });
    openWhatsApp([
      'Hello Sanghvi Agency, I would like to request a quote.',
      `Name: ${name}`,
      `Phone: ${phone}`,
      'Products:',
      ...productLines,
    ]);
    setSent(true);
  }

  return (
    <main className="page-main lead-page quote-page">
      <section className="page-hero-surface">
        <ContentContainer>
          <PageHeading eyebrow="Instant quote" title="Request a Quote" subtitle="Select your products, enter quantities, and get a quote directly on WhatsApp. It’s that simple." />
          <div className="quote-process" aria-label="How it works">
            {['Select Products', 'Enter Details', 'Send via WhatsApp'].map((step, index) => <div className="quote-process-step" key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < 2 && <i aria-hidden="true" />}</div>)}
          </div>
        </ContentContainer>
      </section>
      <section className="page-section lead-form-section">
        <ContentContainer>
          <div className="lead-form-layout">
            <aside className="lead-form-aside"><p className="eyebrow"><span className="eyebrow-dot" />Send your requirements</p><h2>Clear details.<br />A quick reply.</h2><p>Share product sizes and quantities for a direct WhatsApp quotation. Brand availability and pricing are confirmed for your requirement.</p><div className="lead-aside-contact"><a href={`tel:${contact.primaryPhone.replaceAll(' ', '')}`}><Phone size={15} /><span><strong>Call Now</strong>{contact.primaryPhone}</span></a><span><Clock size={15} />{contact.hours}</span></div></aside>
            <form className="lead-form quote-form" onSubmit={handleSubmit} noValidate>
              <div className="form-section-header"><span>01 / Products</span><h2>Select products &amp; quantities</h2><p>Choose one or more products. Add the size or gauge requested.</p></div>
              <div className="quote-product-list">
                {quoteProducts.map((product) => {
                  const value = lines[product.id];
                  return (
                    <fieldset className={`quote-product-row ${value.selected ? 'is-selected' : ''}`} key={product.id}>
                      <legend className="sr-only">{product.name}</legend>
                      <label className="quote-product-toggle"><input type="checkbox" checked={value.selected} onChange={(event) => setLines((current) => ({ ...current, [product.id]: { ...current[product.id], selected: event.target.checked } }))} /><span className="custom-check" aria-hidden="true"><ShieldCheck size={14} /></span><span className="quote-product-name">{product.name}</span></label>
                      <label className="quote-field"><span>{product.measure}</span><input type="text" placeholder={product.sizePlaceholder} value={value.size} disabled={!value.selected} onChange={(event) => setLines((current) => ({ ...current, [product.id]: { ...current[product.id], size: event.target.value } }))} /></label>
                      <label className="quote-field"><span>Quantity</span><input type="text" inputMode="decimal" placeholder={product.quantityPlaceholder} value={value.quantity} disabled={!value.selected} required={value.selected} onChange={(event) => setLines((current) => ({ ...current, [product.id]: { ...current[product.id], quantity: event.target.value } }))} /></label>
                    </fieldset>
                  );
                })}
              </div>
              <div className="form-section-header form-personal-header"><span>02 / Your details</span><h2>How can we reach you?</h2></div>
              <div className="form-fields-grid">
                <label className="form-field"><span>Your Name <b>*</b></span><input name="name" type="text" autoComplete="name" placeholder="Enter your full name" required /></label>
                <label className="form-field"><span>Phone Number <b>*</b></span><input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="Your phone number" required /></label>
              </div>
              {error && <p className="form-error" role="alert">{error}</p>}
              {sent && <p className="form-success" role="status">Your WhatsApp chat is opening. Your details were not stored on this website.</p>}
              <button className="action-pill action-orange form-submit" type="submit"><span className="action-roll"><span>Send Quote Request via WhatsApp</span><span aria-hidden="true">Send Quote Request via WhatsApp</span></span><span className="action-arrow" aria-hidden="true"><Phone size={15} /></span></button>
              <p className="form-privacy-note"><ShieldCheck size={15} />Submitting opens a pre-filled WhatsApp chat. No form data is stored on website servers.</p>
            </form>
          </div>
        </ContentContainer>
      </section>
    </main>
  );
}

export function ContactPage() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    openWhatsApp([
      'Hello Sanghvi Agency, I would like to get in touch.',
      `Name: ${String(formData.get('name') || '').trim()}`,
      `Phone: ${String(formData.get('phone') || '').trim()}`,
      formData.get('email') ? `Email: ${String(formData.get('email')).trim()}` : '',
      formData.get('message') ? `Message: ${String(formData.get('message')).trim()}` : '',
    ]);
    setSent(true);
  }

  return (
    <main className="page-main lead-page contact-page">
      <section className="page-hero-surface">
        <ContentContainer><PageHeading eyebrow="Get in touch" title="Contact Us" subtitle="We’d love to hear from you. Reach out for enquiries, quotes, or just to say hello." /></ContentContainer>
      </section>
      <section className="page-section contact-details-section">
        <ContentContainer>
          <div className="contact-people-grid">
            <ContactPerson name={contact.primaryName} phone={contact.primaryPhone} label="Primary Sales & Enquiries" />
            <ContactPerson name={contact.secondaryName} phone={contact.secondaryPhone} label="Direct Sales & Orders" />
            <div className="contact-detail-card contact-hours-card"><span className="contact-card-icon"><Clock size={18} /></span><span className="contact-card-kicker">Business hours</span><h2>{contact.hours}</h2><p>Open 7 Days a Week.</p></div>
          </div>
          <div className="contact-content-grid">
            <div className="contact-form-side"><p className="eyebrow"><span className="eyebrow-dot" />Drop us a line</p><h2>Let’s talk about your requirements.</h2><p>Fill in the form below and your message will be sent directly to our WhatsApp for a quick response.</p>
              <form className="lead-form contact-form" onSubmit={handleSubmit}>
                <label className="form-field"><span>Your Name <b>*</b></span><input name="name" type="text" autoComplete="name" placeholder="Enter your full name" required /></label>
                <label className="form-field"><span>Phone Number <b>*</b></span><input name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="Your phone number" required /></label>
                <label className="form-field"><span>Email <small>(Optional)</small></span><input name="email" type="email" autoComplete="email" placeholder="Your email address" /></label>
                <label className="form-field"><span>Message</span><textarea name="message" rows={4} placeholder="How can we help?" /></label>
                {sent && <p className="form-success" role="status">Your WhatsApp chat is opening. No data was stored on this website.</p>}
                <button className="action-pill action-orange form-submit" type="submit"><span className="action-roll"><span>Send via WhatsApp</span><span aria-hidden="true">Send via WhatsApp</span></span><span className="action-arrow" aria-hidden="true"><ArrowRightIcon /></span></button>
                <p className="form-privacy-note"><ShieldCheck size={15} />Your message opens a pre-filled WhatsApp chat. No data is stored on our servers.</p>
              </form>
            </div>
            <aside className="contact-location-card">
              <div className="location-card-map"><span className="map-grid-lines" aria-hidden="true" /><span className="map-pin-mark"><MapPin size={22} fill="currentColor" /></span><span className="map-city-label">BHUJ · KUTCH · GUJARAT</span></div>
              <div className="location-card-copy"><p className="eyebrow"><span className="eyebrow-dot" />Our location</p><h2>Visit our office<br />&amp; warehouse.</h2><p>{contact.address}</p><p className="location-region">Bhuj, Kutch, Gujarat, India</p><a className="map-link" href={contact.mapSearch} target="_blank" rel="noopener noreferrer"><MapPin size={15} />Google Maps <ArrowUpRightIcon /></a><div className="location-legal-details"><span>GSTIN {contact.gstin}</span><span>{contact.businessType}</span></div></div>
            </aside>
          </div>
          <div className="contact-email-strip"><Mail size={17} /><span>Email us</span><a href={`mailto:${contact.email}`}>{contact.email}</a><ActionLink href="tel:+919428220385" tone="dark" arrow={false}>Call Now</ActionLink></div>
        </ContentContainer>
      </section>
    </main>
  );
}

function ContactPerson({ name, phone, label }: { name: string; phone: string; label: string }) {
  return <article className="contact-detail-card"><span className="contact-card-icon"><Phone size={17} /></span><span className="contact-card-kicker">{label}</span><h2>{name}</h2><a href={`tel:${phone.replaceAll(' ', '')}`}>{phone}<ArrowUpRightIcon /></a><span className="contact-direct-badge">Call Now · WhatsApp</span></article>;
}

function ArrowUpRightIcon() {
  return <span className="inline-arrow" aria-hidden="true">↗</span>;
}
function ArrowRightIcon() {
  return <span aria-hidden="true">↗</span>;
}
