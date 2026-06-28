import React from 'react';

const TONES = {
  cobalt: { background: 'var(--cobalt-050)', color: 'var(--cobalt-800)', border: 'var(--cobalt-200)' },
  cyan: { background: 'var(--cyan-100)', color: 'var(--cyan-600)', border: 'var(--cyan-300)' },
  bronze: { background: 'var(--bronze-100)', color: 'var(--bronze-700)', border: 'var(--bronze-300)' },
  ink: { background: 'var(--ink-100)', color: 'var(--ink-700)', border: 'var(--ink-200)' },
  success: { background: '#E5F3EC', color: 'var(--success)', border: '#BFE3CE' },
  solid: { background: 'var(--brand-primary)', color: '#fff', border: 'var(--brand-primary)' },
};

/**
 * Compact label for status, categories, or service tags.
 */
export function Badge({ children, tone = 'cobalt', dot = false, style, ...rest }) {
  const t = TONES[tone] || TONES.cobalt;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.45em',
        fontFamily: 'var(--font-mono)', fontSize: '0.6875rem', fontWeight: 500,
        letterSpacing: '0.08em', textTransform: 'uppercase',
        padding: '5px 11px', borderRadius: 'var(--radius-pill)',
        background: t.background, color: t.color, border: `1px solid ${t.border}`,
        lineHeight: 1.1, ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />}
      {children}
    </span>
  );
}
