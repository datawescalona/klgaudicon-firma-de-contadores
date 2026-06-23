import React from 'react';
import { IconTile } from '../core/IconTile.jsx';

/**
 * Service card for the marketing site. Line-art icon tile, title, blurb, and a
 * quiet "ver más" affordance that lifts on hover. Optional signature tilt.
 */
export function ServiceCard({
  icon, title, children, tone = 'cobalt', tilt = false, badge = null,
  href = '#', cta = 'Ver servicio', style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const baseRotate = tilt === 'alt' ? 'var(--tilt-alt)' : tilt ? 'var(--tilt)' : '0deg';
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
        background: 'var(--bg-surface)', textDecoration: 'none',
        border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-6)',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: `rotate(${baseRotate})${hover ? ' translateY(-6px) rotate(0deg)' : ''}`,
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <IconTile icon={icon} tone={tone} />
        {badge}
      </div>
      <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '1.375rem', color: 'var(--text-strong)', letterSpacing: 'var(--tracking-tight)' }}>{title}</h3>
      <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 'var(--lh-relaxed)', flexGrow: 1 }}>{children}</p>
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.875rem',
        color: 'var(--brand-primary)',
        transform: hover ? 'translateX(4px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)',
      }}>{cta} <span aria-hidden>→</span></span>
    </a>
  );
}
