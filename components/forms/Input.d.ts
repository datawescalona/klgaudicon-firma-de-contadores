import * as React from 'react';

/**
 * Form field with label, optional leading icon, hint/error text and a cobalt focus ring.
 * Renders an input, textarea, or native select.
 */
export interface InputOption { value: string; label: string; }
export interface InputProps {
  label?: string;
  hint?: string;
  error?: string;
  icon?: React.ReactNode;
  /** @default "input" */
  as?: 'input' | 'textarea' | 'select';
  /** For as="select". */
  options?: (InputOption | string)[];
  id?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent) => void;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
