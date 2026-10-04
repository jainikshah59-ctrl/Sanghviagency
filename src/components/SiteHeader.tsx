import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Menu, Moon, Sun, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navItems } from '../data/site';

const SANGHVI_LOGO_URL = 'https://res.cloudinary.com/kmkcbqvz/image/upload/v1791107200/logo_1.jpg';
import { ActionLink, ContentContainer } from './shared';

const productLinks = [
  { label: 'TMT Bars', to: '/products/tmt-bars' },
  { label: 'Steel Angles', to: '/products/steel-angles' },
  { label: 'MS Channels', to: '/products/steel-channels' },
  { label: 'Steel Beams', to: '/products/steel-beams' },
];

function ThemeToggle({ darkMode, onToggle, className }: { darkMode: boolean; onToggle: () => void; className: string }) {
  const label = darkMode ? 'Switch to light mode' : 'Switch to dark mode';
  return (
    <button
      className={`theme-toggle ${className}`}
      type="button"
      aria-label={label}
      aria-pressed={darkMode}
      title={label}
      onClick={onToggle}
    >
      {darkMode ? <Sun size={17} strokeWidth={1.8} aria-hidden="true" /> : <Moon size={17} strokeWidth={1.8} aria-hidden="true" />}
      <span className="sr-only">{label}</span>
    </button>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(() => document.documentElement.dataset.theme === 'dark');
  const location = useLocation();
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const menuDialogRef = useRef<HTMLElement>(null);
  const wasMenuOpenRef = useRef(false);
  const menuCloseTimerRef = useRef<number | null>(null);

  const clearMenuCloseTimer = () => {
    if (menuCloseTimerRef.current !== null) {
      window.clearTimeout(menuCloseTimerRef.current);
      menuCloseTimerRef.current = null;
    }
  };

  const openMenu = () => {
    clearMenuCloseTimer();
    setMenuMounted(true);
    window.requestAnimationFrame(() => setMenuOpen(true));
  };

  const closeMenu = () => {
    clearMenuCloseTimer();
    setMenuOpen(false);
    menuCloseTimerRef.current = window.setTimeout(() => {
      setMenuMounted(false);
      menuCloseTimerRef.current = null;
    }, 460);
  };

  const toggleTheme = () => {
    const nextTheme = darkMode ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (themeColor) themeColor.content = nextTheme === 'dark' ? '#11171c' : '#e9eef3';
    try {
      window.localStorage.setItem('sanghvi-theme', nextTheme);
    } catch {
      // Theme switching still works for this session when storage is unavailable.
    }
    setDarkMode(nextTheme === 'dark');
  };

  useEffect(() => {
    if (menuMounted) closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    return () => clearMenuCloseTimer();
  }, []);

  useEffect(() => {
    if (!menuMounted) {
      document.body.classList.remove('menu-open');
      return;
    }
    document.body.classList.add('menu-open');
    return () => document.body.classList.remove('menu-open');
  }, [menuMounted]);

  useEffect(() => {
    if (!menuOpen) {
      if (wasMenuOpenRef.current) {
        wasMenuOpenRef.current = false;
        menuToggleRef.current?.focus();
      }
      return;
    }
    wasMenuOpenRef.current = true;
    const focusableElements = () => Array.from(
      menuDialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [],
    );
    window.requestAnimationFrame(() => focusableElements()[0]?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
        return;
      }
      if (event.key !== 'Tab') return;
      const items = focusableElements();
      if (items.length === 0) {
        event.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      const outsideDialog = !menuDialogRef.current?.contains(active);
      if (event.shiftKey && (active === first || outsideDialog)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || outsideDialog)) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <ContentContainer className="header-container">
        <div className="nav-pill">
          <div className="nav-primary">
            <a className="site-logo-image site-logo-image--header" href="/" aria-label="Sanghvi Agency home"><img src={SANGHVI_LOGO_URL} alt="Sanghvi Agency" /></a>
            <nav className="desktop-navigation" aria-label="Primary navigation">
              {navItems.map((item) => item.label === 'Products' ? (
                <div className="nav-products" key={item.label}>
                  <NavLink to={item.to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                    Products
                  </NavLink>
                  <div className="products-popover" aria-label="Products submenu">
                    {productLinks.map((product) => <Link key={product.to} to={product.to}>{product.label}</Link>)}
                  </div>
                </div>
              ) : (
                <NavLink key={item.label} to={item.to} end={item.to === '/'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
          <span className="mobile-header-title" aria-hidden="true">Sanghvi Agency</span>
          <div className="nav-utility">
            <span className="service-region">Serving Kutch &amp; Gujarat</span>
            <ThemeToggle darkMode={darkMode} onToggle={toggleTheme} className="theme-toggle--utility" />
            <ActionLink href="/request-quote" className="header-quote" arrow>Request Quote</ActionLink>
          </div>
          <button
            ref={menuToggleRef}
            className="mobile-menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-sheet"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={menuOpen ? closeMenu : openMenu}
          >
            {menuOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </ContentContainer>

      {menuMounted && (
        <div className={`mobile-menu-overlay ${menuOpen ? 'is-open' : 'is-closing'}`}>
          <button className="mobile-menu-scrim" type="button" aria-label="Close navigation menu" onClick={closeMenu} />
          <nav ref={menuDialogRef} id="mobile-navigation-sheet" className={`mobile-menu-sheet ${menuOpen ? 'is-open' : 'is-closing'}`} aria-label="Mobile navigation" aria-modal="true" role="dialog">
            <div className="mobile-sheet-top">
              <button className="mobile-menu-back" type="button" onClick={() => {
                closeMenu();
                if (window.history.length > 1) window.setTimeout(() => window.history.back(), 20);
                else window.setTimeout(() => window.location.assign('/'), 20);
              }}>
                <ArrowLeft size={16} aria-hidden="true" />
                <span>Back</span>
              </button>
              <a className="site-logo-image site-logo-image--menu" href="/" aria-label="Sanghvi Agency home"><img src={SANGHVI_LOGO_URL} alt="Sanghvi Agency" /></a>
              <div className="mobile-sheet-tools">
                <ThemeToggle darkMode={darkMode} onToggle={toggleTheme} className="theme-toggle--mobile" />
              </div>
            </div>
            <div className="mobile-nav-list">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === '/'}
                  style={{ animationDelay: `${90 + index * 45}ms` }}
                >
                  <span>{item.label}</span><span className="mobile-nav-number">0{index + 1}</span>
                </NavLink>
              ))}
            </div>
            <div className="mobile-sheet-subnav" aria-label="Popular steel products">
              {productLinks.map((product) => <Link key={product.to} to={product.to}>{product.label}</Link>)}
            </div>
            <ActionLink href="/request-quote" tone="dark" className="mobile-request-quote" arrow>
              Request a Quote
            </ActionLink>
            <p className="mobile-menu-footer">Serving builders, contractors &amp; industries across Kutch &amp; Gujarat.</p>
          </nav>
        </div>
      )}
    </header>
  );
}
