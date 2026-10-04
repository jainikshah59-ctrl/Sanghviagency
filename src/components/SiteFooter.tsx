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
      <svg className="whatsapp-icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z"/>
        <path d="M12.05 21.885h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.87 9.87 0 0 1-1.563-5.363c.002-5.45 4.437-9.884 9.89-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.986c-.002 5.45-4.437 9.884-9.89 9.885m8.413-18.297A11.815 11.815 0 0 0 12.074.1C5.516.1.181 5.435.178 11.99a11.9 11.9 0 0 0 1.59 5.946L.078 24l6.304-1.654a11.89 11.89 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.89a11.8 11.8 0 0 0-3.478-8.316Z"/>
      </svg>
    </a>
  );
}

export default function SiteFooter({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <footer className="site-footer category-footer">
        <ContentContainer>
          <div className="category-footer-top">
            <BrandMark useLogo />
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
            <BrandMark useLogo />
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
    </footer>
  );
}
