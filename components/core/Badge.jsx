import React from 'react';

/**
 * Core Physio Clinic — Badge / Pill
 * Small status or trust chip. Tones: teal (default), gold (rating),
 * neutral, whatsapp, soft. Use `dot` for a leading status dot.
 */
export function Badge({ tone = 'teal', children, icon, dot = false, ...rest }) {
  const tones = {
    teal:    { bg: 'var(--teal-100)',  fg: 'var(--teal-800)',  dot: 'var(--teal-500)' },
    gold:    { bg: 'var(--gold-100)',  fg: '#8A5A00',          dot: 'var(--gold-500)' },
    neutral: { bg: 'var(--surface-2)', fg: 'var(--ink-700)',   dot: 'var(--ink-400)' },
    soft:    { bg: 'rgba(255,255,255,0.78)', fg: 'var(--teal-800)', dot: 'var(--teal-500)' },
    whatsapp:{ bg: 'rgba(37,211,102,0.14)',  fg: '#138a42',     dot: 'var(--whatsapp)' },
  };
  const t = tones[tone] || tones.teal;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        height: 30,
        padding: '0 13px',
        background: t.bg,
        color: t.fg,
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 'var(--fw-semibold)',
        letterSpacing: '-0.005em',
        borderRadius: 'var(--radius-pill)',
        whiteSpace: 'nowrap',
      }}
      {...rest}
    >
      {dot && (
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: t.dot, flex: '0 0 auto' }} />
      )}
      {icon}
      {children}
    </span>
  );
}
