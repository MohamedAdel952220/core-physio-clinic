import React from 'react';

/**
 * Service / feature card with icon tile, title, description and learn-more link.
 * @startingPoint section="Marketing" subtitle="Icon service card with hover lift" viewport="380x260"
 */
export interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  /** Link label; pass null to hide */
  action?: string | null;
  onAction?: () => void;
  dir?: 'ltr' | 'rtl';
}

export function ServiceCard(props: ServiceCardProps): JSX.Element;
