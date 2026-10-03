import { useEffect, useLayoutEffect } from 'react';
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
  '.home-about-section',
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

function SiteMotion({ pathname }: { pathname: string }) {
  useLayoutEffect(() => {
    const root = document.getElementById('root');
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    if (!root || prefersReducedMotion || !('IntersectionObserver' in window)) return;

    const observed = new Set<HTMLElement>();
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('motion-visible');
        intersectionObserver.unobserve(entry.target);
      });
    }, { threshold: 0.02, rootMargin: '0px 0px -5% 0px' });

    const observe = (element: HTMLElement) => {
      if (observed.has(element)) return;
      observed.add(element);
      element.classList.add('motion-reveal');
      const siblings = Array.from(element.parentElement?.children ?? [])
        .filter((sibling): sibling is HTMLElement => sibling instanceof HTMLElement && sibling.matches(motionSelector));
      const siblingIndex = Math.max(0, siblings.indexOf(element));
      element.style.setProperty('--motion-delay', `${Math.min(siblingIndex, 4) * 55}ms`);
      intersectionObserver.observe(element);
    };

    const scan = (node: Node) => {
      if (!(node instanceof Element)) return;
      if (node instanceof HTMLElement && node.matches(motionSelector)) observe(node);
      node.querySelectorAll<HTMLElement>(motionSelector).forEach(observe);
    };

    scan(root);
    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach(scan));
    });
    mutationObserver.observe(root, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      intersectionObserver.disconnect();
      observed.forEach((element) => {
        element.classList.remove('motion-reveal', 'motion-visible');
        element.style.removeProperty('--motion-delay');
      });
    };
  }, [pathname]);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function SiteSectionBackgroundEffect({ pathname }: { pathname: string }) {
  useLayoutEffect(() => {
    const main = document.querySelector<HTMLElement>('.route-surface > .home-main, .route-surface > .page-main');
    if (!main || main.querySelector('.site-section-silver-fog')) return;

    const root = document.documentElement;
    const isDark = root.dataset.theme === 'dark';

    // Keep the existing dark steel treatment untouched. Vanta Cells is for light mode only.
    if (isDark) return;

    const layer = document.createElement('div');
    layer.className = 'site-section-cells-background';
    layer.setAttribute('aria-hidden', 'true');

    const canvasHost = document.createElement('div');
    canvasHost.className = 'site-section-cells-canvas';
    layer.appendChild(canvasHost);
    main.prepend(layer);

    let effect: { destroy?: () => void } | null = null;
    let cancelled = false;

    const loadScript = (src: string) => new Promise<void>((resolve, reject) => {
      const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
      if (existing) {
        if (existing.dataset.loaded === 'true') {
          resolve();
          return;
        }
        existing.addEventListener('load', () => resolve(), { once: true });
        existing.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true });
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.dataset.loaded = 'false';
      script.addEventListener('load', () => {
        script.dataset.loaded = 'true';
        resolve();
      }, { once: true });
      script.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true });
      document.head.appendChild(script);
    });

    const initCells = async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.cells.min.js');

        if (cancelled || root.dataset.theme === 'dark') return;

        const vanta = (window as Window & {
          VANTA?: {
            CELLS?: (options: Record<string, unknown>) => { destroy?: () => void };
          };
        }).VANTA;

        if (!vanta?.CELLS) return;

        effect = vanta.CELLS({
          el: canvasHost,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          color1: 0x798383,
          color2: 0x9a9990,
          size: 1.60,
        });
      } catch {
        // The page remains usable if the optional visual CDN is unavailable.
      }
    };

    void initCells();

    return () => {
      cancelled = true;
      effect?.destroy?.();
      layer.remove();
    };
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
        <SiteSectionBackgroundEffect pathname={location.pathname} />
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
