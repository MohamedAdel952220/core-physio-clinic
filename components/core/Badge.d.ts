import React from 'react';

export type BadgeTone = 'teal' | 'gold' | 'neutral' | 'soft' | 'whatsapp';

/** Small trust / status chip used in hero badges, ratings and tags. */
export interface BadgeProps {
  tone?: BadgeTone;
  /** Leading status dot */
  dot?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
