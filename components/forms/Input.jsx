import React from 'react';

/**
 * Core Physio Clinic — Input
 * Labeled text/date/number field with calm focus ring. RTL-aware.
 */
export function Input({
  label,
  type = 'text',
  placeholder,
  required = false,
  hint,
  icon,
  dir,
  value,
  onChange,
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, fontFamily: 'var(--font-sans)', textAlign: dir === 'rtl' ? 'right' : 'left' }} dir={dir}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: 13.5, fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)', letterSpacing: '-0.005em' }}>
          {label}{required && <span style={{ color: 'var(--coral-500)', marginInlineStart: 3 }}>*</span>}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {icon && <span style={{ position: 'absolute', insetInlineStart: 14, top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', color: 'var(--ink-400)', pointerEvents: 'none' }}>{icon}</span>}
        <input
          id={fieldId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: '100%',
            height: 50,
            paddingInlineStart: icon ? 42 : 16,
            paddingInlineEnd: 16,
            background: 'var(--white)',
            border: `1.5px solid ${focus ? 'var(--teal-500)' : 'var(--border-strong)'}`,
            borderRadius: 'var(--radius-md)',
            fontFamily: 'inherit',
            fontSize: 15,
            color: 'var(--text-heading)',
            outline: 'none',
            boxShadow: focus ? '0 0 0 4px rgba(22,169,154,0.14)' : 'none',
            transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
          }}
          {...rest}
        />
      </div>
      {hint && <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{hint}</span>}
    </div>
  );
}
