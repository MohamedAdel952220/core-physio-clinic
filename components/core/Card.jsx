import React from 'react';

/**
 * Core Physio Clinic — Card
 * Soft white surface with hairline border + diffuse shadow. Hover lifts.
 * Variants: default | glass | tint | feature.
 */
export function Card({ variant = 'default', interactive = false, children, style, ...rest }) {
  const variants = {
    default: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' },
    glass:   { background: 'var(--glass-bg)', border: 'var(--glass-border)', boxShadow: 'var(--shadow-glass)', backdropFilter: 'var(--blur-glass)', WebkitBackdropFilter: 'var(--blur-glass)' },
    tint:    { background: 'var(--teal-50)', border: '1px solid var(--teal-100)', boxShadow: 'none' },
    feature: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)' },
  };
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-5)',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        transform: hover ? 'translateY(-4px)' : 'none',
        boxShadow: hover ? 'var(--shadow-lg)' : (variants[variant] || variants.default).boxShadow,
        ...(variants[variant] || variants.default),
        ...(hover ? { boxShadow: 'var(--shadow-lg)' } : {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
