import { contact } from '../data/site';

export function createWhatsAppHref(lines: string[], number = contact.primaryDigits) {
  const text = lines.filter(Boolean).join('\n');
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function openWhatsApp(lines: string[], number = contact.primaryDigits) {
  const href = createWhatsAppHref(lines, number);
  const opened = window.open(href, '_blank', 'noopener,noreferrer');
  if (!opened) window.location.assign(href);
}
