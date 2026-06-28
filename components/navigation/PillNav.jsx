import React from 'react';

/**
 * Floating glassmorphism "pill" navigation bar. Logo slot at left, links in the
 * middle, a CTA at right. Frosted translucent surface that sits above content.
 */
export function PillNav({
  logo, links = [], cta = null, active, onNavigate, style, ...rest
}) {
  return (
    <nav
      style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-5)',
        padding: '10px 12px 10px 20px',
        background: 'var(--glass-bg)',
        WebkitBackdropFilter: 'blur(var(--glass-blur)) saturate(140%)',
        backdropFilter: 'blur(var(--glass-blur)) saturate(140%)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-pill)',
        boxShadow: 'var(--shadow-md)',
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>{logo}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexGrow: 1, justifyContent: 'center' }}>
        {links.map((l) => {
          const isActive = active === (l.id ?? l.label);
          return (
            <a key={l.id ?? l.label} href={l.href || '#'}
              onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(l.id ?? l.label); } }}
              style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', fontWeight: 600,
                color: isActive ? 'var(--brand-primary)' : 'var(--text-body)',
                textDecoration: 'none', padding: '8px 16px', borderRadius: 'var(--radius-pill)',
                background: isActive ? 'var(--cobalt-050)' : 'transparent',
                transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = 'rgba(20,21,27,0.05)'; }}
              onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
            >{l.label}</a>
          );
        })}
      </div>
      {cta && <div style={{ flexShrink: 0 }}>{cta}</div>}
    </nav>
  );
}
