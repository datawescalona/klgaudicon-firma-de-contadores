import React from 'react';

const WA_PATH = 'M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.89-7.02ZM12.04 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z';

/**
 * Floating WhatsApp action button — critical conversion element for the
 * Venezuelan market. Fixed bottom-right by default; optional pulse + label.
 */
export function WhatsAppFab({
  phone = '', message = '', label = '', position = 'fixed', style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const href = `https://wa.me/${phone.replace(/[^0-9]/g, '')}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position, bottom: position === 'fixed' ? 24 : undefined, right: position === 'fixed' ? 24 : undefined,
        zIndex: 60, display: 'inline-flex', alignItems: 'center', gap: 10,
        height: 58, padding: label ? '0 22px 0 16px' : 0, width: label ? 'auto' : 58,
        justifyContent: 'center', borderRadius: 'var(--radius-pill)',
        background: 'var(--whatsapp)', color: '#fff', textDecoration: 'none',
        boxShadow: hover ? '0 14px 34px rgba(37,211,102,0.45)' : '0 8px 22px rgba(37,211,102,0.35)',
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d={WA_PATH} /></svg>
      {label && <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.9375rem' }}>{label}</span>}
    </a>
  );
}
