import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'whatsapp';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Core Physio Clinic primary action button — pill shaped, calm-medical.
 * @startingPoint section="Core" subtitle="Pill CTA: primary, secondary, ghost, whatsapp" viewport="700x180"
 */
export interface ButtonProps {
  /** Visual style */
  variant?: ButtonVariant;
  /** Size token */
  size?: ButtonSize;
  /** Stretch to container width */
  full?: boolean;
  disabled?: boolean;
  /** Element/component to render as (e.g. 'a') */
  as?: any;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
