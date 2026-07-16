import React from 'react';

/**
 * Core Physio Clinic — Select
 * Native dropdown styled to match Input. RTL-aware.
 */
export function Select({ label, required = false, options = [], value, onChange, placeholder, dir, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, fontFamily: 'var(--font-sans)', textAlign: dir === 'rtl' ? 'right' : 'left' }} dir={dir}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: 13.5, fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>
          {label}{required && <span style={{ color: 'var(--coral-500)', marginInlineStart: 3 }}>*</span>}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <select
          id={fieldId}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: '100%',
            height: 50,
            paddingInlineStart: 16,
            paddingInlineEnd: 40,
            appearance: 'none',
            WebkitAppearance: 'none',
            background: 'var(--white)',
            border: `1.5px solid ${focus ? 'var(--teal-500)' : 'var(--border-strong)'}`,
            borderRadius: 'var(--radius-md)',
            fontFamily: 'inherit',
            fontSize: 15,
            color: value ? 'var(--text-heading)' : 'var(--ink-400)',
            outline: 'none',
            cursor: 'pointer',
            boxShadow: focus ? '0 0 0 4px rgba(22,169,154,0.14)' : 'none',
            transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
          }}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lbl = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lbl}</option>;
          })}
        </select>
        <span style={{ position: 'absolute', insetInlineEnd: 16, top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', pointerEvents: 'none', color: 'var(--ink-500)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </div>
    </div>
  );
}
