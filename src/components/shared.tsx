import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export type ButtonTone = 'dark' | 'orange' | 'light' | 'outline';

type ActionProps = {
  href?: string;
  children: ReactNode;
  tone?: ButtonTone;
  className?: string;
  arrow?: boolean;
  external?: boolean;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
  'aria-label'?: string;
};

function ActionContent({ children, arrow = true }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      <span className="action-roll">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
      {arrow && (
        <span className="action-arrow" aria-hidden="true">
          <ArrowRight size={15} strokeWidth={1.8} />
          <ArrowUpRight className="action-arrow-alt" size={15} strokeWidth={1.8} />
        </span>
      )}
    </>
  );
}

export function ActionLink({
  href,
  children,
  tone = 'dark',
  className = '',
  arrow = true,
  external = false,
  onClick,
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
}: ActionProps) {
  const classes = `action-pill action-${tone} ${className}`.trim();
  const content = <ActionContent arrow={arrow}>{children}</ActionContent>;

  if (href) {
    if (href.startsWith('/') && !external) {
      return (
        <Link className={classes} to={href} onClick={onClick} aria-disabled={disabled || undefined} aria-label={ariaLabel}>
          {content}
        </Link>
      );
    }
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        target={href.startsWith('https://') ? '_blank' : undefined}
        rel={href.startsWith('https://') ? 'noopener noreferrer' : undefined}
        aria-disabled={disabled || undefined}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type} disabled={disabled} aria-label={ariaLabel}>
      {content}
    </button>
  );
}

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link className={`brand-mark ${compact ? 'brand-mark-compact' : ''}`} to="/" aria-label="Sanghvi Agency home">
      <span className="brand-monogram" aria-hidden="true">SA</span>
      {!compact && (
        <span className="brand-wordmark">
          <strong>Sanghvi</strong>
          <small>Agency</small>
        </span>
      )}
    </Link>
  );
}

export function SectionBadge({ number, label, dark = false }: { number: string; label: string; dark?: boolean }) {
  return (
    <div className={`section-badge ${dark ? 'section-badge-dark' : ''}`}>
      <span className="section-number">{number}</span>
      <span className="section-label">{label}</span>
    </div>
  );
}

export function PageHeading({
  eyebrow,
  title,
  subtitle,
  actions,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  return (
    <header className="page-heading">
      <p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>
      <h1>{title}</h1>
      {subtitle && <p className="page-heading-copy">{subtitle}</p>}
      {actions && <div className="page-heading-actions">{actions}</div>}
    </header>
  );
}

export function SectionTitle({
  number,
  label,
  title,
  intro,
}: {
  number: string;
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="section-title-block">
      <SectionBadge number={number} label={label} />
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

export function ContentContainer({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`content-container ${className}`.trim()}>{children}</div>;
}

export function SpecTable({ headers, rows }: { headers: string[]; rows: string[][] | { label: string; value: string }[] }) {
  const normalizedRows = rows.map((row) => Array.isArray(row) ? row : [row.label, row.value]);
  return (
    <div className="table-frame">
      <table>
        <thead><tr>{headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr></thead>
        <tbody>
          {normalizedRows.map((row, index) => (
            <tr key={`${row[0]}-${index}`}>
              {row.map((cell, cellIndex) => cellIndex === 0
                ? <th scope="row" key={`${cell}-${cellIndex}`}>{cell}</th>
                : <td key={`${cell}-${cellIndex}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="feature-list">
      {items.map((item) => (
        <li key={item}><span className="feature-check"><Check size={13} strokeWidth={2.4} /></span>{item}</li>
      ))}
    </ul>
  );
}
