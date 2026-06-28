import * as React from 'react';

/**
 * Editorial surface card with optional signature tilt and a sticker lift on hover.
 */
export interface CardProps {
  children: React.ReactNode;
  /** false | true (-1.4°) | "alt" (+1.2°). @default false */
  tilt?: boolean | 'alt';
  /** Enable hover lift + straighten. @default false */
  interactive?: boolean;
  /** Cyan accent rule along the top edge. @default false */
  accent?: boolean;
  /** CSS padding value. @default "var(--space-6)" */
  padding?: string;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
