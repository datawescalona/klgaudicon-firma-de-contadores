import * as React from 'react';

/**
 * Service card for the marketing site — line-art icon tile, title, blurb and a
 * lifting "ver servicio" affordance. The grid-breaking workhorse of KLG pages.
 */
export interface ServiceCardProps {
  /** Line-art icon node (Lucide / 2px SVG). */
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  /** Icon tile tone. @default "cobalt" */
  tone?: 'cobalt' | 'cyan' | 'bronze' | 'ink';
  /** false | true (-1.4°) | "alt" (+1.2°). @default false */
  tilt?: boolean | 'alt';
  /** Optional <Badge> node, top-right. */
  badge?: React.ReactNode;
  href?: string;
  /** Link label. @default "Ver servicio" */
  cta?: string;
  style?: React.CSSProperties;
}

export function ServiceCard(props: ServiceCardProps): JSX.Element;
