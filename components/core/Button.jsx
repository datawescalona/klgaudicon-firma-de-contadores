import React from 'react';

const SIZES = {
  sm: { padding: '8px 16px', fontSize: '0.875rem', height: 38 },
  md: { padding: '12px 22px', fontSize: '1rem', height: 46 },
  lg: { padding: '15px 30px', fontSize: '1.0625rem', height: 54 },
};

const VARIANTS = {
  primary: {
    background: 'var(--brand-primary)', color: 'var(--text-on-cobalt)',
    border: '2px solid var(--brand-primary)', boxShadow: 'var(--shadow-cobalt)',
  },
  cta: {
    background: 'var(--cta)', color: 'var(--text-on-bronze)',
    border: '2px solid var(--cta)', boxShadow: 'var(--shadow-bronze)',
  },
  secondary: {
    background: 'transparent', color: 'var(--brand-primary)',
    border: '2px solid var(--brand-primary)', boxShadow: 'none',
  },
  ghost: {
    background: 'transparent', color: 'var(--text-strong)',
    border: '2px solid transparent', boxShadow: 'none',
  },
  ghostLight: {
    background: 'transparent', color: '#fff',
    border: '2px solid rgba(255,255,255,0.30)', boxShadow: 'none',
  },
};

/**
 * KLG AUDICON primary button. Confident, geometric, sticker-lift on hover.
 */
export function Button({
  children, variant = 'primary', size = 'md', icon = null, iconRight = false,
  fullWidth = false, disabled = false, as = 'button', href, onClick, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;

  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: '0.55em', fontFamily: 'var(--font-sans)', fontWeight: 700,
    lineHeight: 1, letterSpacing: '0.01em', borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer', textDecoration: 'none',
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-fast) var(--ease-out)',
    width: fullWidth ? '100%' : 'auto', whiteSpace: 'nowrap',
    opacity: disabled ? 0.45 : 1,
    transform: hover && !disabled ? 'translateY(-2px)' : 'none',
    ...v, ...s,
    ...(hover && !disabled && variant === 'primary' ? { background: 'var(--brand-primary-hover)', borderColor: 'var(--brand-primary-hover)' } : {}),
    ...(hover && !disabled && variant === 'cta' ? { background: 'var(--cta-hover)', borderColor: 'var(--cta-hover)' } : {}),
    ...(hover && !disabled && variant === 'secondary' ? { background: 'var(--cobalt-050)' } : {}),
    ...(hover && !disabled && variant === 'ghost' ? { background: 'var(--ink-100)' } : {}),
    ...(hover && !disabled && variant === 'ghostLight' ? { background: 'rgba(255,255,255,0.16)', borderColor: 'rgba(255,255,255,0.55)' } : {}),
    ...style,
  };

  const Tag = as === 'a' || href ? 'a' : 'button';
  return (
    <Tag
      href={href} onClick={disabled ? undefined : onClick} disabled={Tag === 'button' ? disabled : undefined}
      style={base}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {icon && !iconRight && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      {children}
      {icon && iconRight && <span style={{ display: 'inline-flex' }}>{icon}</span>}
    </Tag>
  );
}
