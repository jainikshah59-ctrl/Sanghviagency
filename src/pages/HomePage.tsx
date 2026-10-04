import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CircleDollarSign,
  Handshake,
  Headphones,
  PackageCheck,
  ShieldCheck,
  Star,
  Truck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  allBrandNames,
  advantage,
  faqItems,
  getBrandRoute,
  images,
  metrics,
  products,
  projects,
  testimonials,
} from '../data/site';
import { createWhatsAppHref } from '../lib/whatsapp';
import { ActionLink, ContentContainer } from '../components/shared';
import ProjectCard from '../components/ProjectCard';

function TrustBadge() {
  return (
    <div className="trust-badge">
      <span className="trust-badge-mark" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" fill="currentColor" /></svg>
      </span>
      <span className="trust-badge-text">20+ Years of Trust</span>
      <span className="trust-badge-year">2001</span>
    </div>
  );
}

function AnimatedMetric({ value, label, index }: { value: string; label: string; index: number }) {
  const numericMatch = value.match(/^(\d+)(\+?)$/);
  const isNumeric = Boolean(numericMatch);
  const suffix = numericMatch?.[2] ?? '';
  const target = numericMatch ? Number(numericMatch[1]) : 0;
  const [displayValue, setDisplayValue] = useState(isNumeric ? `0${suffix}` : value);

  useEffect(() => {
    if (!isNumeric || !Number.isFinite(target)) {
      setDisplayValue(value);
      return;
    }

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    setDisplayValue(`0${suffix}`);
    const delay = 980 + index * 140;
    const duration = value === '2001' ? 1900 : 1600;
    let frame = 0;

    const timer = window.setTimeout(() => {
      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        setDisplayValue(`${current}${suffix}`);
        if (progress < 1) {
          frame = window.requestAnimationFrame(tick);
        } else {
          setDisplayValue(value);
        }
      };

      frame = window.requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timer);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [index, isNumeric, suffix, target, value]);

  return (
    <div className="hero-metric">
      <span className="hero-metric-glow" aria-hidden="true" />
      <span className="hero-metric-value" aria-label={value}>{displayValue}</span>
      <span className="hero-metric-label">{label}</span>
    </div>
  );
}

function AnimatedHomeStat({ value, label, index }: { value: string; label: string; index: number }) {
  const numericMatch = value.match(/^(\d+)(\+?)$/);
  const isNumeric = Boolean(numericMatch);
  const suffix = numericMatch?.[2] ?? '';
  const target = numericMatch ? Number(numericMatch[1]) : 0;
  const [display, setDisplay] = useState(isNumeric ? `0${suffix}` : value);

  useEffect(() => {
    if (!isNumeric || !Number.isFinite(target)) {
      setDisplay(value);
      return;
    }

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const delay = 120 + index * 120;
    const duration = 1400;
    let frame = 0;

    const timer = window.setTimeout(() => {
      const startTime = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(`${Math.round(target * eased)}${suffix}`);
        if (progress < 1) frame = window.requestAnimationFrame(tick);
        else setDisplay(value);
      };
      frame = window.requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timer);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [index, isNumeric, suffix, target, value]);

  return (
    <div className="home-stat-item">
      <strong>{display}</strong>
      <span>{label}</span>
    </div>
  );
}

function HomeFAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`home-faq-item ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="home-faq-trigger"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span>{question}</span>
        <span className="home-faq-icon" aria-hidden="true">+</span>
      </button>
      <div className="home-faq-answer">
        <p>{answer}</p>
      </div>
    </article>
  );
}

const whyChooseCards = [
  {
    title: 'Certified Quality',
    copy: 'ISI-marked and BIS-certified products from trusted steel manufacturers, with certification available for applicable products.',
    icon: ShieldCheck,
  },
  {
    title: 'Competitive Pricing',
    copy: advantage.find((item) => item.includes('Competitive')) || 'Competitive market pricing for retail and wholesale requirements.',
    icon: CircleDollarSign,
  },
  {
    title: 'Timely Delivery',
    copy: 'Prompt dispatch across Kutch and Gujarat, with site delivery arranged for eligible requirements.',
    icon: Truck,
  },
  {
    title: '20+ Years of Trust',
    copy: advantage.find((item) => item.includes('20+')) || 'Established in Bhuj in 2001 with long-standing customer relationships.',
    icon: Handshake,
  },
  {
    title: 'Bulk Order Ready',
    copy: 'From individual bundles to full truckloads, we support construction requirements of different scales.',
    icon: PackageCheck,
  },
  {
    title: 'Expert Guidance',
    copy: 'A knowledgeable team helps builders and contractors choose the right products for the project.',
    icon: Headphones,
  },
];

const featuredBrandNames = ['Mono TMT', 'Utkarsh TMX', 'Varrsana TMX', 'National TMX'];

export default function HomePage() {
  const [videoMotionAllowed, setVideoMotionAllowed] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const moreBrandNames = useMemo(
    () => allBrandNames.filter((name) => !featuredBrandNames.includes(name)).slice(0, 20),
    [],
  );

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      const canPlay = !motionPreference.matches;
      setVideoMotionAllowed(canPlay);
      const video = heroVideoRef.current;
      if (!video) return;
      if (canPlay) void video.play().catch(() => {});
      else video.pause();
    };
    update();
    motionPreference.addEventListener('change', update);
    return () => motionPreference.removeEventListener('change', update);
  }, []);

  const shiftTestimonials = (direction: number) => {
    setTestimonialIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <main className="home-main">
      <section className="hero-section" aria-labelledby="hero-title">
        <video
          ref={heroVideoRef}
          className="hero-video-background"
          autoPlay={videoMotionAllowed}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" aria-hidden="true" />
        <ContentContainer className="hero-content-container">
          <div className="hero-content">
            <div className="hero-copy-block">
              <p className="hero-eyebrow">Premium Steel &amp; Construction Material Supplier</p>
              <h1 id="hero-title">Building Strong<br className="hero-break" /> Foundations Since <span>2001</span></h1>
              <p className="hero-support">Serving Builders, Contractors &amp; Industries Across Kutch &amp; Gujarat with trusted quality steel.</p>
              <div className="hero-actions">
                <ActionLink href="/request-quote" tone="orange" className="hero-quote-action">Request a Quote</ActionLink>
                <a className="hero-whatsapp-action" href={createWhatsAppHref(['Hello Sanghvi Agency, I would like to ask about steel availability and pricing.'])} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
              <div className="hero-metrics" aria-label="Sanghvi Agency at a glance">
                {metrics.map((metric, index) => (
                  <AnimatedMetric key={metric.label} value={metric.value} label={metric.label} index={index} />
                ))}
              </div>
            </div>
            <div className="hero-trust-column">
              <TrustBadge />
              <Link to="/about" className="hero-story-link">A Bhuj business, serving Gujarat <ArrowDownRight size={15} aria-hidden="true" /></Link>
            </div>
          </div>
          <span className="hero-scroll-cue"><span />Scroll to explore</span>
        </ContentContainer>
      </section>

      <section className="home-about-section" aria-labelledby="home-about-title">
        <ContentContainer>
          <div className="home-section-heading home-section-heading--split">
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" />About Sanghvi Agency</p>
              <h2 id="home-about-title">Your Trusted Partner in<br className="desktop-only" /> Construction Steel</h2>
            </div>
            <p>Serving builders, contractors, engineers, fabricators, industries and homeowners across Bhuj, Kutch and Gujarat.</p>
          </div>
          <div className="home-about-layout">
            <div className="home-about-copy">
              <p>Sanghvi Agency supplies construction steel with a focus on quality, timely delivery, competitive pricing and dependable customer service.</p>
              <p>From individual homeowners to large commercial and industrial requirements, the same commitment to genuine products and straightforward service applies.</p>
              <ActionLink href="/about" tone="outline">Learn Our Story</ActionLink>
            </div>
            <figure className="home-about-visual">
              <img src={images.steelSections} alt="Structural steel sections held in Sanghvi Agency warehouse inventory" loading="lazy" />
              <figcaption><strong>2001</strong><span>Trusted supply since 2001 · Bhuj, Gujarat</span></figcaption>
            </figure>
          </div>
        </ContentContainer>
      </section>

      <section className="home-products-section" aria-labelledby="home-products-title">
        <ContentContainer>
          <div className="home-section-heading home-section-heading--center">
            <p className="eyebrow"><span className="eyebrow-dot" />Our Products</p>
            <h2 id="home-products-title">Quality Steel for Every Project</h2>
            <p>From residential construction to industrial requirements, we stock a comprehensive range of steel and construction materials.</p>
          </div>
          <div className="home-product-grid">
            {products.map((product, index) => (
              <article className="home-product-card" key={product.name}>
                <Link className="home-product-media" to={product.route} aria-label={`View ${product.name}`}>
                  <img src={product.image} alt={product.alt} loading="lazy" />
                  <span className="home-product-index">0{index + 1}</span>
                  <span className="home-product-open"><ArrowUpRight size={17} /></span>
                </Link>
                <div className="home-product-copy">
                  <span className="home-product-kicker">{product.short}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="home-product-actions">
                    <Link to={product.route}>View Details <ArrowRight size={14} /></Link>
                    <a href={createWhatsAppHref([`Hello Sanghvi Agency, please share current availability for ${product.name}.`])} target="_blank" rel="noopener noreferrer">Enquire <ArrowUpRight size={14} /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="home-centered-action"><ActionLink href="/products/" tone="outline">View All Products</ActionLink></div>
        </ContentContainer>
      </section>

      <section className="home-stats-section" aria-label="Sanghvi Agency milestones">
        <ContentContainer>
          <div className="home-stats-grid">
            <AnimatedHomeStat value="20+" label="Years of Experience" index={0} />
            <AnimatedHomeStat value="1000+" label="Customers" index={1} />
            <AnimatedHomeStat value="500+" label="Projects Supplied" index={2} />
            <div className="home-stat-item"><strong>Gujarat-Wide</strong><span>Service Coverage</span></div>
          </div>
        </ContentContainer>
      </section>

      <section className="home-advantages-section" aria-labelledby="home-advantages-title">
        <ContentContainer>
          <div className="home-section-heading home-section-heading--center">
            <p className="eyebrow"><span className="eyebrow-dot" />Why Choose Us</p>
            <h2 id="home-advantages-title">Built on Trust, Driven by Quality</h2>
            <p>Reliable supply for builders and contractors who need the right material, the right quantity and dependable service.</p>
          </div>
          <div className="home-advantage-grid">
            {whyChooseCards.map(({ title, copy, icon: Icon }, index) => (
              <article className="home-advantage-card" key={title}>
                <span className="home-advantage-icon"><Icon size={22} strokeWidth={1.7} /></span>
                <span className="home-card-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </ContentContainer>
      </section>

      <section className="home-brands-section" aria-labelledby="home-brands-title">
        <ContentContainer>
          <div className="home-section-heading home-section-heading--center">
            <p className="eyebrow"><span className="eyebrow-dot" />Trusted Brands</p>
            <h2 id="home-brands-title">We Stock India's Best</h2>
            <p>Authorized relationships plus a broad multi-brand portfolio across TMT, structural steel and construction materials.</p>
          </div>
          <div className="home-featured-brands">
            {featuredBrandNames.map((name, index) => {
              const profile = allBrandNames.find((item) => item === name);
              return (
                <Link className="home-brand-featured" to={getBrandRoute(name)} key={name}>
                  <span>0{index + 1}</span>
                  <strong>{profile}</strong>
                  <small>{index < 2 ? 'Distributor' : index === 2 ? 'Partner' : 'Dealer'}</small>
                  <ArrowUpRight size={16} />
                </Link>
              );
            })}
          </div>
          <div className="home-brand-grid">
            {moreBrandNames.map((name) => (
              <Link className="home-brand-card" to={getBrandRoute(name)} key={name}>
                <span>{name}</span><ArrowUpRight size={14} />
              </Link>
            ))}
          </div>
          <div className="home-centered-action"><ActionLink href="/brands" tone="outline">View All Brands</ActionLink></div>
        </ContentContainer>
      </section>

      <section className="home-projects-section" aria-labelledby="home-projects-title">
        <ContentContainer>
          <div className="home-section-heading home-section-heading--center">
            <p className="eyebrow"><span className="eyebrow-dot" />Our Projects</p>
            <h2 id="home-projects-title">Steel That Builds the Region</h2>
            <p>From homes to factories, Sanghvi Agency supplies the steel that helps projects move from drawing to delivery.</p>
          </div>
          <div className="home-project-grid">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
          <div className="home-centered-action"><ActionLink href="/projects" tone="outline">View All Projects</ActionLink></div>
        </ContentContainer>
      </section>

      <section className="home-testimonials-section" aria-labelledby="home-testimonials-title">
        <ContentContainer>
          <div className="home-section-heading home-section-heading--center">
            <p className="eyebrow"><span className="eyebrow-dot" />Testimonials</p>
            <h2 id="home-testimonials-title">What Our Customers Say</h2>
          </div>
          <div className="home-testimonial-carousel">
            <button type="button" className="home-testimonial-arrow home-testimonial-arrow--left" aria-label="Previous testimonial" onClick={() => shiftTestimonials(-1)}><ArrowLeft size={19} /></button>
            <div className="home-testimonial-viewport">
              <div className="home-testimonial-track" style={{ transform: `translateX(-${testimonialIndex * 20}%)` }}>
                {testimonials.map((testimonial) => (
                  <blockquote className="home-testimonial-card" key={testimonial.name}>
                    <div className="home-testimonial-stars" aria-label={`${testimonial.stars} out of 5 stars`}>
                      {Array.from({ length: testimonial.stars }, (_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p>“{testimonial.quote}”</p>
                    <footer><strong>{testimonial.name}</strong><span>{testimonial.role}</span></footer>
                  </blockquote>
                ))}
              </div>
            </div>
            <button type="button" className="home-testimonial-arrow home-testimonial-arrow--right" aria-label="Next testimonial" onClick={() => shiftTestimonials(1)}><ArrowRight size={19} /></button>
          </div>
          <div className="home-testimonial-dots" aria-label="Choose testimonial">
            {testimonials.map((testimonial, index) => (
              <button
                type="button"
                key={testimonial.name}
                className={testimonialIndex === index ? 'active' : ''}
                aria-label={`Show testimonial ${index + 1}`}
                aria-pressed={testimonialIndex === index}
                onClick={() => setTestimonialIndex(index)}
              />
            ))}
          </div>
        </ContentContainer>
      </section>

      <section className="home-faq-section" aria-labelledby="home-faq-title">
        <ContentContainer>
          <div className="home-section-heading home-section-heading--center">
            <p className="eyebrow"><span className="eyebrow-dot" />FAQ</p>
            <h2 id="home-faq-title">Frequently Asked Questions</h2>
          </div>
          <div className="home-faq-list">
            {[faqItems[0], faqItems[2], faqItems[1], faqItems[4]].map((item) => (
              <HomeFAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
          <div className="home-centered-action"><ActionLink href="/faq" tone="orange">View All FAQs</ActionLink></div>
        </ContentContainer>
      </section>

      <section className="home-final-cta" aria-labelledby="home-final-cta-title">
        <ContentContainer>
          <div className="home-final-cta-inner">
            <p className="eyebrow home-final-eyebrow"><span className="eyebrow-dot" />Quick quotation</p>
            <h2 id="home-final-cta-title">Need Steel for Your Next Project?</h2>
            <p>Get a quick quote on WhatsApp. Share your sizes and quantities and we’ll respond with current availability and pricing.</p>
            <div className="home-final-cta-actions">
              <ActionLink href="/request-quote" tone="light">Request Quote</ActionLink>
              <ActionLink href="tel:+919428220385" tone="outline" arrow={false}>Call Now</ActionLink>
            </div>
          </div>
        </ContentContainer>
      </section>
    </main>
  );
}
