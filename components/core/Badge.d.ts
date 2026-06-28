import * as React from 'react';

/**
 * Compact uppercase mono label for service categories, statuses, and tags.
 */
export interface BadgeProps {
  children: React.ReactNode;
  /** @default "cobalt" */
  tone?: 'cobalt' | 'cyan' | 'bronze' | 'ink' | 'success' | 'solid';
  /** Show a leading status dot. @default false */
  dot?: boolean;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
