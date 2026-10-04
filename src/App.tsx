import { useEffect, useLayoutEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import HomePage from './pages/HomePage';
import { AboutPage } from './pages/CompanyPages';
import { BrandsPage, BrandDetailPage, CategoryPage, NotFoundPage, ProductDetailPage, ProductsPage } from './pages/CatalogPages';
import { ContactPage, QuotePage } from './pages/LeadPages';
import { FAQPage, LegalPage } from './pages/InfoPages';
import { GalleryPage, ProjectsPage } from './pages/PortfolioPages';
import { brands, categoryPages } from './data/site';

const productRoutes = ['/products/tmt-bars', '/products/steel-angles', '/products/steel-channels', '/products/steel-beams'] as const;

const motionSelector = [
  '.page-main > section',
  '.home-main > section',
  '.featured-projects-section',
  '.site-footer',
  '.project-card',
  '.product-index-card',
  '.brand-card',
  '.category-brand-card',
  '.gallery-card',
  '.testimonial-card',
  '.legal-section-card',
  '.principle-card',
  '.advantage-card',
  '.timeline-item',
  '.contact-detail-card',
  '.accordion-item',
  '.lead-form',
].join(',');

const motionVariantRules = [
  { selectors: ['.home-about-section'], variant: 'split' },
  { selectors: ['#home-products-section', '.product-index-card'], variant: 'cascade' },
  { selectors: ['.home-stat-section'], variant: 'float' },
  { selectors: ['.advantage-section', '.advantage-card'], variant: 'tilt' },
  { selectors: ['.brand-directory-section', '.brand-card'], variant: 'slide' },
  { selectors: ['.featured-projects-section', '.project-card'], variant: 'depth' },
  { selectors: ['.testimonials-section', '.testimonial-card'], variant: 'soft' },
  { selectors: ['.faq-content-section', '.accordion-item'], variant: 'fold' },
  { selectors: ['.site-footer'], variant: 'footer' },
  { selectors: ['.page-hero-surface'], variant: 'hero' },
  { selectors: ['.page-section'], variant: 'section' },
] as const;

function getMotionVariant(element: HTMLElement) {
  for (const rule of motionVariantRules) {
    if (rule.selectors.some((selector) => element.matches(selector) || Boolean(element.closest(selector)))) {
      return rule.variant;
    }
  }
  return 'section';
}

function decorateAnimatedIcons(root: HTMLElement) {
  root.querySelectorAll<SVGElement>('svg').forEach((icon) => {
    if (icon.closest('.brand-mark, .action-arrow, .hero-video-background, .hero-video-overlay, [data-static-icon="true"]')) return;
    icon.classList.add('icon-3d');
    const shell = icon.parentElement;
    if (shell instanceof HTMLElement && shell.matches('.advantage-icon, .footer-heading-icon, .footer-link-icon, .feature-check, .contact-card-icon, .brand-detail-logo, .accordion-mark')) {
      shell.classList.add('icon-3d-shell');
    }
  });
}

function SiteMotion({ pathname }: { pathname: string }) {
  const scrollDirectionRef = useRef<'down' | 'up'>('down');

  useLayoutEffect(() => {
    const root = document.getElementById('root');
    const documentElement = document.documentElement;
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    if (!root || prefersReducedMotion || !('IntersectionObserver' in window)) return;

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const nextScrollY = window.scrollY;
      const delta = nextScrollY - lastScrollY;
      if (Math.abs(delta) > 1.5) {
        scrollDirectionRef.current = delta > 0 ? 'down' : 'up';
        documentElement.dataset.scrollDirection = scrollDirectionRef.current;
        lastScrollY = nextScrollY;
      }
    };

    const handleVisibility = (element: HTMLElement, isVisible: boolean) => {
      if (!isVisible) {
        element.classList.remove('motion-visible');
        return;
      }

      element.dataset.motionDirection = scrollDirectionRef.current;
      element.classList.remove('motion-visible');
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          if (element.isConnected) element.classList.add('motion-visible');
        });
      });
    };

    const observed = new Set<HTMLElement>();
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!(entry.target instanceof HTMLElement)) return;
        handleVisibility(entry.target, entry.isIntersecting);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });

    const observe = (element: HTMLElement) => {
      if (observed.has(element)) return;
      observed.add(element);
      element.classList.add('motion-reveal');
      element.dataset.motionVariant = getMotionVariant(element);
      const siblings = Array.from(element.parentElement?.children ?? [])
        .filter((sibling): sibling is HTMLElement => sibling instanceof HTMLElement && sibling.matches(motionSelector));
      const siblingIndex = Math.max(0, siblings.indexOf(element));
      element.style.setProperty('--motion-delay', `${Math.min(siblingIndex, 5) * 48}ms`);
      intersectionObserver.observe(element);
    };

    const scan = (node: Node) => {
      if (!(node instanceof Element)) return;
      if (node instanceof HTMLElement && node.matches(motionSelector)) observe(node);
      node.querySelectorAll<HTMLElement>(motionSelector).forEach(observe);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    scan(root);
    decorateAnimatedIcons(root);

    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          scan(node);
          if (node instanceof HTMLElement) decorateAnimatedIcons(node);
        });
      });
    });
    mutationObserver.observe(root, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      mutationObserver.disconnect();
      intersectionObserver.disconnect();
      if (documentElement.dataset.scrollDirection) delete documentElement.dataset.scrollDirection;
      observed.forEach((element) => {
        element.classList.remove('motion-reveal', 'motion-visible');
        element.removeAttribute('data-motion-direction');
        element.removeAttribute('data-motion-variant');
        element.style.removeProperty('--motion-delay');
      });
    };
  }, [pathname]);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    window.history.scrollRestoration = 'manual';
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const isShortCategoryFooter = categoryPages.some((page) => page.route === location.pathname);

  return (
    <>
      <ScrollToTop />
      <SiteMotion pathname={location.pathname} />
      <SiteHeader />
      <div className="route-surface" key={location.pathname}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products/" element={<ProductsPage />} />
          {productRoutes.map((path) => <Route key={path} path={path} element={<ProductDetailPage path={path} />} />)}
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request-quote" element={<QuotePage />} />
          <Route path="/privacy-policy" element={<LegalPage kind="privacy" />} />
          <Route path="/terms-and-conditions" element={<LegalPage kind="terms" />} />
          {categoryPages.map((page) => <Route key={page.route} path={page.route} element={<CategoryPage route={page.route} />} />)}
          {brands.map((brand) => <Route key={brand.route} path={brand.route} element={<BrandDetailPage brand={brand} />} />)}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <SiteFooter compact={isShortCategoryFooter} />
    </>
  );
}
