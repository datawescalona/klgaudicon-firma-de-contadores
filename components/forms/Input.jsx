import React from 'react';

/**
 * Form input with floating label feel and cobalt focus ring.
 * Pass `as="textarea"` or `as="select"` for other field types.
 */
export function Input({
  label, hint, error, icon = null, as = 'input', options = [], style, id, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || `f-${Math.random().toString(36).slice(2, 8)}`;
  const Tag = as;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--brand-primary)' : 'var(--border-default)';
  const fieldStyle = {
    width: '100%', fontFamily: 'var(--font-sans)', fontSize: '1rem',
    color: 'var(--text-strong)', background: 'var(--bg-surface)',
    border: `1.5px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
    padding: as === 'textarea' ? '12px 14px' : '0 14px',
    height: as === 'textarea' ? 'auto' : 48, minHeight: as === 'textarea' ? 120 : undefined,
    paddingLeft: icon ? 42 : 14, outline: 'none',
    boxShadow: focus ? '0 0 0 4px var(--cobalt-100)' : 'none',
    transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    appearance: as === 'select' ? 'none' : undefined, resize: as === 'textarea' ? 'vertical' : undefined,
    ...style,
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%' }}>
      {label && (
        <label htmlFor={fieldId} style={{
          fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', fontWeight: 600,
          color: 'var(--text-body)', letterSpacing: '0.01em',
        }}>{label}</label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {icon && <span style={{ position: 'absolute', left: 13, color: 'var(--icon-default)', display: 'inline-flex', pointerEvents: 'none' }}>{icon}</span>}
        <Tag id={fieldId} style={fieldStyle}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest}>
          {as === 'select' ? options.map((o) => <option key={o.value ?? o} value={o.value ?? o}>{o.label ?? o}</option>) : undefined}
        </Tag>
        {as === 'select' && <span aria-hidden style={{ position: 'absolute', right: 14, color: 'var(--icon-default)', pointerEvents: 'none' }}>▾</span>}
      </div>
      {(hint || error) && (
        <span style={{ fontSize: '0.75rem', color: error ? 'var(--danger)' : 'var(--text-muted)' }}>{error || hint}</span>
      )}
    </div>
  );
}
