import { type ReactNode, useEffect, useRef, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Handshake,
  Headphones,
  PackageCheck,
  Star,
  Truck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  allBrandNames,
  faqItems,
  getBrandRoute,
  images,
  metrics,
  products,
  projects,
  testimonials,
} from '../data/site';
import ProjectCard from '../components/ProjectCard';
import { createWhatsAppHref } from '../lib/whatsapp';
import { ActionLink, ContentContainer } from '../components/shared';

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

        if (progress < 1) frame = window.requestAnimationFrame(tick);
        else setDisplayValue(value);
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

function AnimatedStat({ value, label, index }: { value: string; label: string; index: number }) {
  const numericMatch = value.match(/^(\d+)([+%]?)$/);
  const isNumeric = Boolean(numericMatch);
  const suffix = numericMatch?.[2] ?? '';
  const target = numericMatch ? Number(numericMatch[1]) : 0;
  const [displayValue, setDisplayValue] = useState(isNumeric ? `0${suffix}` : value);
  const statRef = useRef<HTMLDivElement>(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

  useEffect(() => {
    if (!isNumeric || !Number.isFinite(target)) {
      setDisplayValue(value);
      return;
    }

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      setHasEnteredViewport(true);
      return;
    }

    const element = statRef.current;
    if (!element || !('IntersectionObserver' in window)) {
      setHasEnteredViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredViewport(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(element);

    return () => observer.disconnect();
  }, [isNumeric, target, value]);

  useEffect(() => {
    if (!isNumeric || !Number.isFinite(target) || !hasEnteredViewport) return;

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    setDisplayValue(`0${suffix}`);
    let frame = 0;
    const timer = window.setTimeout(() => {
      const duration = 1450;
      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(`${Math.round(target * eased)}${suffix}`);
        if (progress < 1) frame = window.requestAnimationFrame(tick);
        else setDisplayValue(value);
      };

      frame = window.requestAnimationFrame(tick);
    }, 90 + index * 110);

    return () => {
      window.clearTimeout(timer);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [hasEnteredViewport, index, isNumeric, suffix, target, value]);

  return (
    <div className="home-stat" ref={statRef}>
      <strong>{displayValue}</strong>
      <span>{label}</span>
    </div>
  );
}


function HomeSectionHeading({
  eyebrow,
  title,
  intro,
  titleId,
  className = '',
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  titleId: string;
  className?: string;
}) {
  return (
    <header className={`home-section-heading ${className}`.trim()}>
      <p className="eyebrow home-section-eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      <p className="home-section-description">{intro}</p>
    </header>
  );
}

const homeAdvantages = [
  { title: 'Certified Quality', copy: 'ISI-marked and BIS-certified products from trusted steel manufacturers.', icon: BadgeCheck },
  { title: 'Competitive Pricing', copy: 'Competitive market pricing for retail and wholesale requirements.', icon: Boxes },
  { title: 'Timely Delivery', copy: 'Prompt dispatch across Kutch and Gujarat, with site delivery arranged for eligible requirements.', icon: Truck },
  { title: '20+ Years Experience', copy: 'Established in Bhuj in 2001 with long-standing builder and contractor relationships.', icon: Handshake },
  { title: 'Bulk Order Ready', copy: 'From individual bundles to full truckloads, we support requirements of different scales.', icon: PackageCheck },
  { title: 'Expert Guidance', copy: 'A knowledgeable team helps customers choose suitable products for their project.', icon: Headphones },
];

export default function HomePage() {
  const [videoMotionAllowed, setVideoMotionAllowed] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

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

  const featuredBrands = allBrandNames.slice(0, 16);

  return (
    <main className="home-main">
      <section className="hero-section" aria-labelledby="hero-title">
        <video ref={heroVideoRef} className="hero-video-background" autoPlay={videoMotionAllowed} muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1}>
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
                <ActionLink href="#home-products-section" tone="dark" className="hero-explore-action">
                  Explore Products
                </ActionLink>
              </div>
              <div className="hero-metrics" aria-label="Sanghvi Agency at a glance">
                {metrics.map((metric, index) => (
                  <AnimatedMetric key={metric.label} value={metric.value} label={metric.label} index={index} />
                ))}
              </div>
            </div>
          </div>
        </ContentContainer>
      </section>

      <section className="home-about-section" aria-labelledby="home-about-title">
        <ContentContainer>
          <HomeSectionHeading
            className="about-home-heading"
            eyebrow="About Sanghvi Agency"
            title="Your Trusted Partner in Construction Steel."
            titleId="home-about-title"
            intro="Established in Bhuj in 2001, Sanghvi Agency supplies construction steel and related materials across Kutch and Gujarat with a focus on reliable service."
          />
          <div className="about-home-grid">
            <div className="about-home-copy">
              <div className="about-copy-lead">
                <span className="about-copy-kicker">A dependable steel partner</span>
                <p>Sanghvi Agency serves builders, contractors, engineers, fabricators, industries, and homeowners across Bhuj, Kutch and Gujarat—with a focus on quality, timely delivery and customer service.</p>
              </div>
              <div className="about-copy-body">
                <p>From individual homeowners to multi-crore projects, every requirement receives the same focus on reliable supply, clear communication and project-ready support.</p>
                <p>From a small dealership in Bhuj to a recognized regional supplier, our principle remains simple: keep promises through on-time delivery, transparent pricing and recommendations aligned to each project.</p>
              </div>
              <div className="about-copy-meta" aria-label="Sanghvi Agency profile">
                <span><strong>01</strong> Bhuj, Gujarat</span>
                <span>Trusted supply since 2001</span>
              </div>
              <ActionLink href="/about" tone="orange">Learn Our Story</ActionLink>
            </div>
            <figure className="about-image about-image-large">
              <img src={images.steelSections} alt="Structural steel sections held in Sanghvi Agency warehouse inventory" loading="lazy" />
              <figcaption>Structural steel · Bhuj, Gujarat</figcaption>
            </figure>
          </div>
        </ContentContainer>
      </section>

      <section id="home-products-section" className="page-section" aria-labelledby="home-products-title">
        <ContentContainer>
          <HomeSectionHeading
            eyebrow="Our Products"
            title="Quality Steel for Every Project."
            titleId="home-products-title"
            intro="From residential construction to industrial requirements, the Sanghvi Agency product catalogue covers steel and construction materials across different project scales."
          />
          <div className="product-index-grid">
            {products.map((product, index) => (
              <article className="product-index-card" key={product.name}>
                <Link className={`product-card-visual product-visual-${product.icon}`} to={product.route} aria-label={`View ${product.name}`}>
                  <img src={product.image} alt={product.alt} loading="lazy" />
                  <span className="product-card-number">0{index + 1}</span>
                  <span className="product-card-open"><ArrowUpRight size={18} /></span>
                </Link>
                <div className="product-index-card-copy">
                  <div className="product-category-line"><span>{product.short}</span><span>{product.name}</span></div>
                  <h2><Link to={product.route}>{product.name}</Link></h2>
                  <p>{product.description}</p>
                  <div className="product-card-actions">
                    <Link to={product.route}>View Details <ArrowRight size={14} /></Link>
                    <a href={createWhatsAppHref([`Hello Sanghvi Agency, please share details and availability for ${product.name}.`])} target="_blank" rel="noopener noreferrer">Enquire Now <ArrowUpRight size={14} /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="center-cta"><ActionLink href="/products/" tone="outline">View All Products</ActionLink></div>
        </ContentContainer>
      </section>

      <section className="page-section home-stat-section" aria-label="Sanghvi Agency milestones">
        <ContentContainer>
          <div className="home-stat-strip">
            <AnimatedStat value="20+" label="Years of Experience" index={0} />
            <AnimatedStat value="1000+" label="Customers" index={1} />
            <AnimatedStat value="500+" label="Projects Supplied" index={2} />
            <AnimatedStat value="100%" label="Gujarat Coverage" index={3} />
          </div>
        </ContentContainer>
      </section>

      <section className="page-section advantage-section" aria-labelledby="home-advantage-title">
        <ContentContainer>
          <HomeSectionHeading
            eyebrow="Why Choose Us"
            title="Built on Trust, Driven by Quality."
            titleId="home-advantage-title"
            intro="Reliable supply for builders and contractors who need dependable quality, fair dealing, timely delivery and project-ready availability."
          />
          <div className="advantage-grid">
            {homeAdvantages.map(({ title, copy, icon: Icon }) => (
              <article className="advantage-card" key={title}>
                <span className="advantage-icon"><Icon size={20} strokeWidth={1.6} /></span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </ContentContainer>
      </section>

      <section className="page-section brand-directory-section" aria-labelledby="home-brands-title">
        <ContentContainer>
          <HomeSectionHeading
            eyebrow="Trusted Brands"
            title="We Stock India's Best."
            titleId="home-brands-title"
            intro="A multi-brand portfolio built around dependable steel manufacturers and established supplier relationships. Availability varies by current stock and requirement."
          />
          <div className="brand-feature-grid">
            {featuredBrands.slice(0, 4).map((name, index) => (
              <Link className="brand-card brand-card-featured" to={getBrandRoute(name)} key={name}>
                <div className="brand-card-top"><span className="brand-card-index">0{index + 1}</span><ArrowUpRight size={16} /></div>
                <span className="brand-relationship">{index < 2 ? 'Authorized distributor' : index === 2 ? 'Partner' : 'Dealer'}</span>
                <span className="brand-card-group">TMT Bars</span>
                <h3>{name}</h3>
                <p>View brand profile, product details and current availability.</p>
                <span className="brand-card-bottom">View details <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
          <div className="brand-directory-grid">
            {featuredBrands.slice(4).map((name, index) => (
              <Link className="brand-card" to={getBrandRoute(name)} key={name}>
                <div className="brand-card-top"><span className="brand-card-index">0{index + 5}</span><ArrowUpRight size={15} /></div>
                <span className="brand-card-group">Brand portfolio</span>
                <h3>{name}</h3>
                <p>Listed brand in the Sanghvi Agency inventory.</p>
              </Link>
            ))}
          </div>
          <div className="center-cta"><ActionLink href="/brands" tone="outline">View All Brands</ActionLink></div>
        </ContentContainer>
      </section>

      <section className="featured-projects-section" aria-labelledby="home-projects-title">
        <ContentContainer>
          <HomeSectionHeading
            eyebrow="Our Projects"
            title="Steel That Builds the Region."
            titleId="home-projects-title"
            intro="Selected industrial, residential, commercial and logistics supply work from the Sanghvi Agency project portfolio."
          />
          <div className="center-cta projects-heading-cta">
            <Link className="all-projects-link" to="/projects">View all projects <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="project-grid">
            {projects.slice(0, 4).map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
          </div>
          <span className="featured-mark" aria-hidden="true"><ArrowDownRight size={20} /><span>SA · 2001</span></span>
        </ContentContainer>
      </section>

      <section className="page-section testimonials-section" aria-labelledby="home-testimonials-title">
        <ContentContainer>
          <HomeSectionHeading
            eyebrow="Testimonials"
            title="What Our Customers Say."
            titleId="home-testimonials-title"
            intro="Feedback from builders, contractors, industrial customers and homeowners who rely on Sanghvi Agency for consistent steel supply and service."
          />
          <div className="home-testimonials-carousel">
            <div className="home-testimonials-viewport">
              <div className="home-testimonials-track" aria-label="Customer testimonials">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <blockquote className="testimonial-card" key={`${testimonial.name}-${index}`}>
                    <div className="testimonial-stars" aria-label={`${testimonial.stars} out of 5 stars`}>
                      {Array.from({ length: testimonial.stars }, (_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p>“{testimonial.quote}”</p>
                    <footer><strong>{testimonial.name}</strong><span>{testimonial.role}</span></footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </ContentContainer>
      </section>

      <section className="page-section faq-content-section" aria-labelledby="home-faq-title">
        <ContentContainer>
          <HomeSectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions."
            titleId="home-faq-title"
            intro="Clear answers on brands, order quantities, delivery coverage, certifications and quotations—so you can plan your next steel requirement with confidence."
          />
          <div className="accordion-list home-faq-list">
            {faqItems.slice(0, 4).map((item, index) => (
              <details className="accordion-item" key={item.question} open={index === 0}>
                <summary><span>{item.question}</span><span className="accordion-mark" /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
          <div className="center-cta"><ActionLink href="/faq" tone="outline">View All FAQs</ActionLink></div>
        </ContentContainer>
      </section>

    </main>
  );
}
