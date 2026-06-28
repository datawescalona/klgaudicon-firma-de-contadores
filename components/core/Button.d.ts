import * as React from 'react';

/**
 * KLG AUDICON button — confident geometric pill with a soft "sticker" lift on hover.
 * Use `primary` (cobalt) for main navigation actions, `cta` (bronze) for conversion
 * moments, `secondary` for outline, `ghost` for low-emphasis, `ghostLight` for
 * low-emphasis on dark backgrounds (white text, translucent hover).
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'cta' | 'secondary' | 'ghost' | 'ghostLight';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Optional leading icon node. */
  icon?: React.ReactNode;
  /** Render the icon after the label instead of before. @default false */
  iconRight?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Render as an anchor when given an href. */
  as?: 'button' | 'a';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
