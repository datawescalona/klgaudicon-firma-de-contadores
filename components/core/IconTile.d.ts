import * as React from 'react';

/**
 * Line-art icon tile — a soft rounded square holding a 2px-stroke monocolor icon,
 * with the brand "sticker" hover shadow. Feed it a Lucide or SVG node.
 */
export interface IconTileProps {
  icon: React.ReactNode;
  /** @default "cobalt" */
  tone?: 'cobalt' | 'cyan' | 'bronze' | 'ink';
  /** Square edge in px. @default 56 */
  size?: number;
  style?: React.CSSProperties;
}

export function IconTile(props: IconTileProps): JSX.Element;
