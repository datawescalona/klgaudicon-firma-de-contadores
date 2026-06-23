import React from 'react';

/**
 * Editorial surface card. Optional signature tilt to break the grid, and a
 * "sticker" lift on hover. Use `interactive` for clickable cards.
 */
export function Card({
  children, tilt = false, interactive = false, accent = false, padding = 'var(--space-6)',
  style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const baseRotate = tilt === 'alt' ? 'var(--tilt-alt)' : tilt ? 'var(--tilt)' : '0deg';
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding,
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        transform: `rotate(${baseRotate})${hover ? ' translateY(-4px) rotate(0deg)' : ''}`,
        borderTop: accent ? '4px solid var(--brand-accent)' : '1px solid var(--border-subtle)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
