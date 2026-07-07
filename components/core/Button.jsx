import React from 'react';

/**
 * Core Physio Clinic — Button
 * Pill-shaped, calm-medical CTA. Variants: primary (teal), secondary (outline),
 * ghost, whatsapp (brand green). Sizes: sm | md | lg.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  children,
  iconLeft,
  iconRight,
  full = false,
  disabled = false,
  as = 'button',
  style: styleProp,
  ...rest
}) {
  const sizes = {
    sm: { padding: '0 16px', height: 38, fontSize: 14, gap: 7 },
    md: { padding: '0 22px', height: 48, fontSize: 15, gap: 9 },
    lg: { padding: '0 30px', height: 58, fontSize: 16.5, gap: 10 },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    width: full ? '100%' : 'auto',
    fontFamily: 'var(--font-sans)',
    fontSize: s.fontSize,
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: '-0.01em',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    outline: 'none',
  };

  const variants = {
    primary: {
      background: 'var(--grad-cta)',
      color: 'var(--text-on-primary)',
      boxShadow: 'var(--shadow-teal)',
    },
    secondary: {
      background: 'var(--white)',
      color: 'var(--teal-700)',
      borderColor: 'var(--border-strong)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
    },
    whatsapp: {
      background: 'var(--whatsapp)',
      color: '#fff',
      boxShadow: '0 16px 34px -16px rgba(37,211,102,0.6)',
    },
  };

  const Tag = as;
  return (
    <Tag
      style={{ ...base, ...(variants[variant] || variants.primary), ...styleProp }}
      disabled={Tag === 'button' ? disabled : undefined}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(0) scale(0.98)'; }}
      onMouseUp={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(-2px)'; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
