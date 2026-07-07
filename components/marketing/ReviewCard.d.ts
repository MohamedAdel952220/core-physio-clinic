import React from 'react';

/** Patient testimonial card — star rating, quote, avatar initials, name. */
export interface ReviewCardProps {
  name: string;
  /** 1–5 filled stars */
  rating?: number;
  quote: string;
  role?: string;
  dir?: 'ltr' | 'rtl';
}

export function ReviewCard(props: ReviewCardProps): JSX.Element;
