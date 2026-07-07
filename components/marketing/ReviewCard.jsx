import React from 'react';

/**
 * Core Physio Clinic — ReviewCard
 * Patient testimonial with star rating, quote, avatar initials + name.
 */
export function ReviewCard({ name, rating = 5, quote, role = 'Verified patient', dir }) {
  const rtl = dir === 'rtl';
  const initials = (name || '?').split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase();
  return (
    <div
      dir={dir}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        padding: 'var(--space-6)',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
        fontFamily: 'var(--font-sans)',
        textAlign: rtl ? 'right' : 'left',
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', gap: 3, color: 'var(--rating-star)' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i < rating ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2.5l2.95 5.98 6.6.96-4.77 4.65 1.13 6.57L12 17.6l-5.9 3.1 1.13-6.57L2.46 9.44l6.6-.96L12 2.5z" strokeLinejoin="round"/>
          </svg>
        ))}
      </div>
      <p style={{ margin: 0, fontSize: 15.5, lineHeight: 'var(--lh-relaxed)', color: 'var(--text-strong)', flex: 1 }}>
        &ldquo;{quote}&rdquo;
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 4 }}>
        <span style={{ width: 44, height: 44, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--teal-100)', color: 'var(--teal-800)', fontWeight: 'var(--fw-bold)', fontSize: 15, flex: '0 0 auto' }}>{initials}</span>
        <span style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 15, fontWeight: 'var(--fw-bold)', color: 'var(--text-heading)' }}>{name}</span>
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{role}</span>
        </span>
      </div>
    </div>
  );
}
