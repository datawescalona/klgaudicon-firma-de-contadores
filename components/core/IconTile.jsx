import React from 'react';

/**
 * Line-art icon tile in a soft rounded square with a "sticker" hover shadow.
 * Pass a Lucide/SVG node as `icon` (2px stroke, monocolor — gray by default).
 */
export function IconTile({ icon, tone = 'cobalt', size = 56, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    cobalt: { bg: 'var(--cobalt-050)', fg: 'var(--cobalt-700)' },
    cyan: { bg: 'var(--cyan-100)', fg: 'var(--cyan-600)' },
    bronze: { bg: 'var(--bronze-100)', fg: 'var(--bronze-700)' },
    ink: { bg: 'var(--ink-100)', fg: 'var(--ink-500)' },
  };
  const t = tones[tone] || tones.cobalt;
  return (
    <span
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, borderRadius: 'var(--radius-md)',
        background: t.bg, color: t.fg,
        boxShadow: hover ? 'var(--shadow-sticker)' : 'none',
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {icon}
    </span>
  );
}
