import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Clock,
  FileText,
  FolderKanban,
  HelpCircle,
  Home,
  Image,
  Info,
  Layers3,
  Mail,
  MapPin,
  Package,
  Phone,
  PhoneCall,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { contact } from '../data/site';
import { createWhatsAppHref } from '../lib/whatsapp';
import { ActionLink, BrandMark, ContentContainer } from './shared';

const categoryLinks = [
  { label: 'TMT Bars', to: '/tmt-bars/' },
  { label: 'MS Angles', to: '/ms-angle/' },
  { label: 'MS Channels', to: '/ms-channel/' },
  { label: 'Steel Pipes', to: '/pipes/' },
];

const quickLinks = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'About Us', to: '/about', icon: Info },
  { label: 'All Products', to: '/products/', icon: Package },
  { label: 'Brand Portfolio', to: '/brands', icon: BadgeCheck },
  { label: 'Projects Portfolio', to: '/projects', icon: FolderKanban },
  { label: 'Photo Gallery', to: '/gallery', icon: Image },
  { label: 'FAQ', to: '/faq', icon: HelpCircle },
  { label: 'Contact Us', to: '/contact', icon: PhoneCall },
];

const steelProductLinks = [
  { label: 'Mono TMT Bars (Fe500/550D)', to: '/tmt-bars/mono-tmt-bars/', icon: Layers3 },
  { label: 'Steel Angles (MS)', to: '/products/steel-angles', icon: Boxes },
  { label: 'MS Channels (ISMC)', to: '/products/steel-channels', icon: Layers3 },
  { label: 'Steel Beams (ISMB / H-Beams)', to: '/products/steel-beams', icon: Layers3 },
  { label: 'Binding Wire & Nails', to: '/products/', icon: Package },
  { label: 'Request Instant Quote', to: '/request-quote', icon: FileText },
];

export function MobileWhatsApp() {
  return (
    <a
      className="mobile-whatsapp"
      href={createWhatsAppHref(['Hello Sanghvi Agency, I would like to ask about steel availability and pricing.'])}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sanghvi Agency on WhatsApp"
    >
      <span className="whatsapp-dot" aria-hidden="true" />
      <span>WhatsApp</span>
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

export default function SiteFooter({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <footer className="site-footer category-footer">
        <ContentContainer>
          <div className="category-footer-top">
            <BrandMark />
            <p>Primary industrial wholesale steel supplier in Bhuj, specializing in structural steel, binding wire, nails and custom-length TMT bars.</p>
            <ActionLink href="/request-quote" tone="dark" arrow>Request Quote</ActionLink>
          </div>
          <div className="category-footer-links">
            {categoryLinks.map((link) => <Link key={link.to} to={link.to}>{link.label}</Link>)}
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          </div>
          <div className="footer-bottom"><span>© 2026 Sanghvi Agency. All rights reserved.</span><span>Bhuj, Gujarat · {contact.primaryPhone}</span></div>
        </ContentContainer>
        <MobileWhatsApp />
      </footer>
    );
  }

  return (
    <footer className="site-footer">
      <ContentContainer>
        <div className="footer-callout">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" />Supply across Kutch &amp; Gujarat</p>
            <h2>Need steel for your next project?</h2>
            <p>Get a quick quote on WhatsApp. We respond within minutes during business hours.</p>
          </div>
          <div className="footer-callout-actions">
            <ActionLink href="/request-quote" tone="orange">Request Quote</ActionLink>
            <ActionLink href={`tel:${contact.primaryPhone.replaceAll(' ', '')}`} tone="light" arrow={false}>Call Now</ActionLink>
          </div>
        </div>

        <div className="footer-main-grid">
          <div className="footer-brand-column">
            <BrandMark />
            <p className="footer-brand-copy">Primary industrial wholesale steel supplier in Bhuj specializing in structural steel, binding wires, nails, and custom-length TMT bars.</p>
            <p className="authorized-line"><span><ShieldCheck size={11} /> Authorized distributor</span> Mono TMT · Utkarsh TMX · Varrsana TMX · National TMX</p>
            <p className="footer-business"><strong>GSTIN</strong> {contact.gstin}<br /><strong>Business type</strong> {contact.businessType}</p>
          </div>

          <div className="footer-link-column">
            <div className="footer-column-heading"><span className="footer-heading-icon"><Home size={13} /></span><h3>Quick Links</h3></div>
            {quickLinks.map(({ label, to, icon: Icon }) => (
              <Link key={to} to={to}>
                <span className="footer-link-icon"><Icon size={13} /></span>
                <span>{label}</span>
                <ArrowUpRight size={12} aria-hidden="true" />
              </Link>
            ))}
          </div>

          <div className="footer-link-column">
            <div className="footer-column-heading"><span className="footer-heading-icon"><Package size={13} /></span><h3>Steel Products</h3></div>
            {steelProductLinks.map(({ label, to, icon: Icon }) => (
              <Link key={to} to={to}>
                <span className="footer-link-icon"><Icon size={13} /></span>
                <span>{label}</span>
                <ArrowUpRight size={12} aria-hidden="true" />
              </Link>
            ))}
          </div>

          <div className="footer-contact-column">
            <div className="footer-column-heading"><span className="footer-heading-icon"><PhoneCall size={13} /></span><h3>Contact Sanghvi Agency</h3></div>
            <a href={`tel:${contact.primaryPhone.replaceAll(' ', '')}`}><Phone size={15} /><span><strong>Dhaval Sanghvi</strong>{contact.primaryPhone}</span></a>
            <a href={`tel:${contact.secondaryPhone.replaceAll(' ', '')}`}><Phone size={15} /><span><strong>Vinesh Sanghvi</strong>{contact.secondaryPhone}</span></a>
            <a href={`mailto:${contact.email}`}><Mail size={15} /><span>{contact.email}</span></a>
            <a href={contact.mapSearch} target="_blank" rel="noopener noreferrer"><MapPin size={15} /><span>{contact.address}</span><ArrowUpRight size={14} /></a>
            <p className="footer-hours"><Clock size={14} />{contact.hours}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Sanghvi Agency. All rights reserved.</span>
          <div className="footer-legal-links"><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms-and-conditions">Terms &amp; Conditions</Link></div>
          <span>Bhuj, Gujarat · India</span>
        </div>
      </ContentContainer>
      <MobileWhatsApp />
    </footer>
  );
}
