import * as React from 'react';

/**
 * Floating WhatsApp action button — a critical conversion element for the
 * Venezuelan market. Renders a wa.me deep link with optional prefilled message.
 */
export interface WhatsAppFabProps {
  /** Phone in international format, digits only or with symbols. */
  phone?: string;
  /** Prefilled message text. */
  message?: string;
  /** Optional label shown beside the glyph. */
  label?: string;
  /** @default "fixed" */
  position?: 'fixed' | 'static' | 'relative';
  style?: React.CSSProperties;
}

export function WhatsAppFab(props: WhatsAppFabProps): JSX.Element;
