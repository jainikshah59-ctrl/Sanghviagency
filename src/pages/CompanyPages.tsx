import { ArrowDownRight, ArrowRight, BadgeCheck, Boxes, Handshake, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { advantage, coreValues, history, images, mission, vision } from '../data/site';
import { ActionLink, ContentContainer, PageHeading, SafeImage, SectionHeading } from '../components/shared';

const advantageIcons = [BadgeCheck, Boxes, Handshake, ArrowRight, Truck];

export function AboutPage() {
  return (
    <main className="page-main">
      <section className="page-hero-surface">
        <ContentContainer>
          <PageHeading eyebrow="About Sanghvi Agency" title="Our Story" subtitle="Two decades of building trust, one steel bar at a time." />
          <div className="about-story-hero">
            <div className="about-story-copy">
              <p className="section-kicker">Building strong foundations since 2001.</p>
              <h2>From a small dealership in Bhuj to a trusted regional supplier.</h2>
              <p>Sanghvi Agency serves builders, contractors, engineers, fabricators, industries, and homeowners across Bhuj, Kutch and Gujarat. Our focus is quality, timely delivery and customer service.</p>
              <p>Our operating principle is simple: keep your promises—with delivery on time, no surprise pricing, and recommendations aligned with each project’s requirements.</p>
              <ActionLink href="/request-quote" tone="orange">Discuss Your Project</ActionLink>
            </div>
            <figure className="about-story-image">
              <SafeImage src={images.warehouse} alt="Colorful steel profile warehouse interior" fallbackSrc="/images/construction.jpg" />
              <figcaption><span>Bhuj, Gujarat</span><span>Serving since 2001</span></figcaption>
            </figure>
          </div>
        </ContentContainer>
      </section>

      <section className="page-section journey-section">
        <ContentContainer>
          <SectionHeading eyebrow="Our Journey" title="Built One Promise at a Time." intro="Through every stage of growth, the same commitment has guided our work: reliable materials, fair dealing and dependable supply." />
          <ol className="timeline-list">
            {history.map((item, index) => (
              <li className="timeline-item" key={item.year}>
                <span className="timeline-index">0{index + 1}</span>
                <span className="timeline-year">{item.year}</span>
                <div><h3>{item.title}</h3><p>{item.copy}</p></div>
                <ArrowDownRight className="timeline-arrow" size={18} aria-hidden="true" />
              </li>
            ))}
          </ol>
        </ContentContainer>
      </section>

      <section className="page-section values-section">
        <ContentContainer>
          <SectionHeading eyebrow="Mission & Vision" title="Direction Built for the Long Term." intro="The principles that shape how Sanghvi Agency serves builders, contractors and projects across the region." />
          <div className="mission-vision-grid">
            <article className="principle-card principle-card-dark">
              <span className="principle-number">01 / Mission</span>
              <h2>Supply you can count on.</h2>
              <p>{mission}</p>
            </article>
            <article className="principle-card">
              <span className="principle-number">02 / Vision</span>
              <h2>The first call for every builder.</h2>
              <p>{vision}</p>
            </article>
          </div>
          <div className="values-bottom-row">
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" />How we work</p>
              <h2>Principles in every order.</h2>
            </div>
            <div className="value-chips">{coreValues.map((value) => <span key={value}>{value}</span>)}</div>
          </div>
        </ContentContainer>
      </section>

      <section className="page-section advantage-section">
        <ContentContainer>
          <SectionHeading eyebrow="The Sanghvi Advantage" title="Experience That Moves Projects Forward." intro="Retail and wholesale supply for residential, commercial, industrial and infrastructure requirements across Gujarat." />
          <div className="advantage-grid">
            {advantage.map((item, index) => {
              const Icon = advantageIcons[index] ?? BadgeCheck;
              return <article className="advantage-card" key={item}><span className="advantage-icon"><Icon size={19} strokeWidth={1.6} /></span><span className="advantage-index">0{index + 1}</span><h3>{item}</h3></article>;
            })}
          </div>
          <div className="about-final-cta"><div><h2>Ready to work together?</h2><p>Let’s discuss your project requirements. Get a quick quote today.</p></div><div><ActionLink href="/request-quote" tone="orange">Request Quote</ActionLink><Link className="text-link" to="/contact">Contact Us <ArrowRight size={15} /></Link></div></div>
        </ContentContainer>
      </section>
    </main>
  );
}
