import React from 'react';

/**
 * Core Physio Clinic logo lockup — mark + wordmark.
 * @startingPoint section="Brand" subtitle="Logo lockup, dark & light" viewport="700x140"
 */
export interface LogoProps {
  /** 'dark' for light backgrounds, 'light' for teal/dark backgrounds */
  variant?: 'dark' | 'light';
  /** Mark height in px; wordmark scales from this */
  size?: number;
  /** Show the wordmark; false = mark only */
  showText?: boolean;
  /** Solid-disc app-icon version (white figure) */
  disc?: boolean;
}

export function Logo(props: LogoProps): JSX.Element;
