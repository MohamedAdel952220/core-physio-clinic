import React from 'react';

/**
 * Core Physio Clinic — ServiceCard
 * Icon tile + title + description + "Learn More" affordance. Hover lifts.
 * Pass `icon` (ReactNode/SVG). Used in Services and Why-Choose-Us grids.
 */
export function ServiceCard({ icon, title, description, action = 'Learn More', onAction, dir }) {
  const [hover, setHover] = React.useState(false);
  const rtl = dir === 'rtl';
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      dir={dir}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        padding: 'var(--space-5)',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-4px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        textAlign: rtl ? 'right' : 'left',
        fontFamily: 'var(--font-sans)',
        height: '100%',
      }}
    >
      <span
        style={{
          width: 54,
          height: 54,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'var(--radius-md)',
          background: hover ? 'var(--grad-cta)' : 'var(--teal-50)',
          color: hover ? '#fff' : 'var(--teal-600)',
          transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
          alignSelf: rtl ? 'flex-end' : 'flex-start',
        }}
      >
        {icon}
      </span>
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 'var(--fw-bold)', color: 'var(--text-heading)', letterSpacing: '-0.01em' }}>{title}</h3>
      <p style={{ margin: 0, fontSize: 14.5, lineHeight: 'var(--lh-relaxed)', color: 'var(--text-body)', flex: 1 }}>{description}</p>
      {action && (
        <button
          onClick={onAction}
          style={{
            marginTop: 4,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            color: 'var(--teal-700)',
            fontFamily: 'inherit',
            fontSize: 14,
            fontWeight: 'var(--fw-semibold)',
            alignSelf: rtl ? 'flex-end' : 'flex-start',
          }}
        >
          {action}
          <span style={{ transform: hover ? (rtl ? 'translateX(-3px) rotate(180deg)' : 'translateX(3px)') : (rtl ? 'rotate(180deg)' : 'none'), transition: 'transform var(--dur-base) var(--ease-out)', display: 'inline-flex' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </button>
      )}
    </div>
  );
}
