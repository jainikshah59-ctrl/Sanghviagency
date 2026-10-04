import { Fragment, useEffect, useRef, useState } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { images, metrics, projects } from '../data/site';
import { createWhatsAppHref } from '../lib/whatsapp';
import ProjectCard from '../components/ProjectCard';
import { ActionLink, ContentContainer } from '../components/shared';

const ribbonBrands = [
  'Tata Tiscon', 'JSW Steel', 'SAIL TMT', 'Jindal Steel', 'JSPL TMT', 'RINL Vizag',
  'Mono TMT', 'Apollo Pipes', 'Surya Pipes', 'Goodluck Pipes', 'Varrsana TMX', 'National TMX',
];

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

function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    let raf = 0;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${(x * 0.14).toFixed(1)}px, ${(y * 0.2).toFixed(1)}px)`;
      });
    };
    const leave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = '';
    };
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mousemove', move);
      el.removeEventListener('mouseleave', leave);
    };
  }, []);
  return ref;
}

function CountMetric({ value, label, divider }: { value: string; label: string; divider: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const m = value.match(/^(\d[\d,]*)(.*)$/);
    if (!m || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const target = parseInt(m[1].replace(/,/g, ''), 10);
    const suffix = m[2];
    if (!Number.isFinite(target)) return;
    let raf = 0;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started) return;
          started = true;
          const t0 = performance.now();
          const dur = 1500;
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 4);
            setDisplay(`${Math.round(target * eased).toLocaleString('en-IN')}${suffix}`);
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
          io.disconnect();
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);
  return (
    <div className="hero-metric">
      <span className="hero-metric-value" ref={ref}>{display}</span>
      <span className="hero-metric-label">{label}</span>
      {divider && <span className="hero-metric-divider" aria-hidden="true" />}
    </div>
  );
}

function BrandRibbon() {
  const renderSet = (hidden: boolean) => (
    <>
      {ribbonBrands.map((brand) => (
        <Fragment key={`${hidden ? 'b-' : ''}${brand}`}>
          <span aria-hidden={hidden || undefined}>{brand}</span>
          <i aria-hidden="true" />
        </Fragment>
      ))}
    </>
  );
  return (
    <div className="brand-ribbon" aria-label="Steel brands supplied by Sanghvi Agency">
      <span className="brand-ribbon-label">We supply</span>
      <div className="brand-marquee">
        <div className="brand-marquee-track">
          {renderSet(false)}
          <span aria-hidden="true" className="sr-only">,</span>
          {renderSet(true)}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [videoMotionAllowed, setVideoMotionAllowed] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const quoteMagnetic = useMagnetic<HTMLSpanElement>();
  const waMagnetic = useMagnetic<HTMLSpanElement>();

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
    return () => {
      motionPreference.removeEventListener('change', update);
    };
  }, []);

  return (
    <main className="home-main">
      <section className="hero-section" aria-labelledby="hero-title">
        <img className="hero-video-poster" src="/images/warehouse.jpg" alt="" aria-hidden="true" />
        <video
          ref={heroVideoRef}
          className="hero-video-background"
          autoPlay={videoMotionAllowed}
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/warehouse.jpg"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <ContentContainer className="hero-content-container">
          <div className="hero-content">
            <div className="hero-copy-block">
              <p className="hero-eyebrow hero-fade hero-fade-1">Premium Steel &amp; Construction Material Supplier</p>
              <h1 id="hero-title" aria-label="Building Strong Foundations Since 2001">
                <span className="reveal-line" aria-hidden="true"><span>Building Strong</span></span>
                <span className="reveal-line" aria-hidden="true"><span>Foundations Since</span></span>
                <span className="reveal-line" aria-hidden="true"><span className="hero-year">2001</span></span>
              </h1>
              <p className="hero-support hero-fade hero-fade-3">Serving Builders, Contractors &amp; Industries Across Kutch &amp; Gujarat with trusted quality steel.</p>
              <div className="hero-actions hero-fade hero-fade-4">
                <span className="magnetic" ref={quoteMagnetic} style={{ display: 'inline-block' }}>
                  <ActionLink href="/request-quote" tone="orange" className="hero-quote-action">Request a Quote</ActionLink>
                </span>
                <span className="magnetic" ref={waMagnetic} style={{ display: 'inline-block' }}>
                  <a className="hero-whatsapp-action" href={createWhatsAppHref(['Hello Sanghvi Agency, I would like to ask about steel availability and pricing.'])} target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </span>
              </div>
            </div>
            <div className="hero-trust-column hero-fade hero-fade-2">
              <TrustBadge />
              <Link to="/about" className="hero-story-link">A Bhuj business, serving Gujarat <ArrowDownRight size={15} aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="hero-metrics" aria-label="Sanghvi Agency at a glance">
            {metrics.map((metric, index) => (
              <CountMetric key={metric.label} value={metric.value} label={metric.label} divider={index < metrics.length - 1} />
            ))}
          </div>
          <span className="hero-scroll-cue"><span />Scroll to explore</span>
        </ContentContainer>
        <BrandRibbon />
      </section>

      <section className="home-about-section" aria-labelledby="home-about-title">
        <ContentContainer>
          <div className="about-home-heading">
            <span className="section-badge"><span className="section-number">1</span><span className="section-label">About Sanghvi Agency</span></span>
            <h2 id="home-about-title">Your Trusted Partner in<br className="about-heading-break" /> Construction Steel.</h2>
          </div>
          <div className="about-home-grid">
            <figure className="about-image about-image-small">
              <img src={images.tmtBars} alt="Sanghvi Agency TMT reinforcement bars, shown as part of its steel inventory" loading="lazy" />
              <figcaption>Trusted supply since 2001</figcaption>
            </figure>
            <div className="about-home-copy">
              <p>Sanghvi Agency serves builders, contractors, engineers, fabricators, industries, and homeowners across Bhuj, Kutch and Gujarat—with a focus on quality, timely delivery and customer service.</p>
              <p>From individual homeowners to multi-crore projects, Sanghvi Agency brings the same focus on quality, timely delivery and customer service.</p>
              <p>From a small dealership in Bhuj to a recognized regional supplier, the principle remains simple: keep your promises with on-time delivery, transparent pricing and recommendations aligned to each project.</p>
              <ActionLink href="/about" tone="orange">Learn Our Story</ActionLink>
            </div>
            <figure className="about-image about-image-large">
              <img src={images.steelSections} alt="Structural steel sections held in Sanghvi Agency warehouse inventory" loading="lazy" />
              <figcaption>Structural steel · Bhuj, Gujarat</figcaption>
            </figure>
          </div>
        </ContentContainer>
      </section>

      <section className="featured-projects-section" aria-labelledby="featured-projects-title">
        <ContentContainer>
          <div className="featured-heading-row">
            <div>
              <span className="section-badge"><span className="section-number">2</span><span className="section-label">Featured Supply &amp; Projects</span></span>
              <h2 id="featured-projects-title">Steel That Builds<br className="featured-heading-break" /> the Region.</h2>
            </div>
            <Link className="all-projects-link" to="/projects">View all projects <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
          </div>
          <div className="home-bottom-cta">
            <p>Need steel for your next project?</p>
            <ActionLink href="/request-quote" tone="dark">Request a Quote</ActionLink>
          </div>
          <span className="featured-mark" aria-hidden="true"><ArrowDownRight size={20} /><span>SA · 2001</span></span>
        </ContentContainer>
      </section>
    </main>
  );
}
