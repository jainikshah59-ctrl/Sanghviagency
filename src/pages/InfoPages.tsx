import { useId, useState } from 'react';
import { CalendarDays } from 'lucide-react';
import { faqItems, privacySections, termsSections } from '../data/site';
import { ActionLink, ContentContainer, PageHeading } from '../components/shared';

function FAQItem({ question, answer, defaultOpen }: { question: string; answer: string; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const triggerId = `faq-trigger-${id}`;
  const panelId = `faq-panel-${id}`;

  return (
    <article className={`accordion-item ${open ? 'is-open' : ''}`}>
      <button
        id={triggerId}
        className="accordion-trigger"
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{question}</span>
        <span className="accordion-mark" aria-hidden="true" />
      </button>
      <div
        id={panelId}
        className="accordion-panel"
        role="region"
        aria-labelledby={triggerId}
        aria-hidden={!open}
      >
        <div className="accordion-panel-inner">
          <p>{answer}</p>
        </div>
      </div>
    </article>
  );
}

export function FAQPage() {
  return (
    <main className="page-main faq-page">
      <section className="page-hero-surface"><ContentContainer><PageHeading eyebrow="Help & answers" title="Frequently Asked Questions" subtitle="Everything you need to know about ordering steel from Sanghvi Agency." /></ContentContainer></section>
      <section className="page-section faq-content-section">
        <ContentContainer>
          <div className="faq-layout"><div className="faq-sticky-intro"><p className="eyebrow"><span className="eyebrow-dot" />A clear answer, first</p><h2>Planning a steel order?</h2><p>Explore common questions about brands, quantities, delivery and getting a quotation. For a specific size or grade, contact the team directly.</p><ActionLink href="/request-quote" tone="orange">Request Quote</ActionLink></div>
            <div className="accordion-list faq-accordion-list">{faqItems.map((item, index) => <FAQItem key={item.question} question={item.question} answer={item.answer} defaultOpen={index === 0} />)}</div>
          </div>
          <div className="faq-final-cta"><div><h2>Still have questions?</h2><p>Reach out directly, or share your list of products and quantities.</p></div><div><ActionLink href="/contact" tone="dark">Contact Us</ActionLink><ActionLink href="/request-quote" tone="orange">Request Quote</ActionLink></div></div>
        </ContentContainer>
      </section>
    </main>
  );
}

export function LegalPage({ kind }: { kind: 'privacy' | 'terms' }) {
  const privacy = kind === 'privacy';
  const sections = privacy ? privacySections : termsSections;
  const title = privacy ? 'Privacy Policy' : 'Terms & Conditions';
  return (
    <main className="page-main legal-page">
      <section className="page-hero-surface"><ContentContainer><PageHeading eyebrow="Website information" title={title} subtitle={privacy ? 'How enquiry information is described and handled on the source website.' : 'Terms relating to the use of the Sanghvi Agency website and its information.'} /></ContentContainer></section>
      <section className="page-section legal-content-section">
        <ContentContainer>
          <div className="legal-updated"><CalendarDays size={15} />Last updated July 2025</div>
          <div className="legal-review-notice"><strong>Source-page note:</strong> This page is general template language and recommends legal review. The text below reflects the source inventory and is not legal advice.</div>
          <div className="legal-sections-list">{sections.map((section, index) => <article className="legal-section-card" key={section.title}><span className="legal-section-index">{String(index + 1).padStart(2, '0')}</span><div><h2>{section.title.replace(/^\d+\.\s*/, '')}</h2><p>{section.copy}</p></div></article>)}</div>
          <div className="legal-contact-block"><div><p className="eyebrow"><span className="eyebrow-dot" />Questions about this page?</p><h2>Contact Sanghvi Agency.</h2></div><ActionLink href="/contact" tone="dark">Contact Us</ActionLink></div>
        </ContentContainer>
      </section>
    </main>
  );
}
