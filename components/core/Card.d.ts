import React from 'react';

export type CardVariant = 'default' | 'glass' | 'tint' | 'feature';

/** Soft white surface container — the base for service, review and info cards. */
export interface CardProps {
  variant?: CardVariant;
  /** Enable hover-lift */
  interactive?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
