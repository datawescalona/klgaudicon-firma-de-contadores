import * as React from 'react';

/**
 * Floating glassmorphism "pill" navigation — the signature KLG top bar. Frosted
 * translucent surface with a logo slot, centered links, and a right-side CTA.
 *
 * @startingPoint section="Navigation" subtitle="Floating glass pill nav" viewport="980x88"
 */
export interface PillNavLink { id?: string; label: string; href?: string; }
export interface PillNavProps {
  /** Logo node (use an <img> of the KLG mark). */
  logo: React.ReactNode;
  links?: PillNavLink[];
  /** CTA node, right side (e.g. a bronze <Button>). */
  cta?: React.ReactNode;
  /** id/label of the active link. */
  active?: string;
  onNavigate?: (id: string) => void;
  style?: React.CSSProperties;
}

export function PillNav(props: PillNavProps): JSX.Element;
