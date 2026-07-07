/* Core Physio Clinic — Landing kit shared library: icons, photo placeholders,
   i18n strings, data, and the scroll-reveal helper. Exposes to window. */

const { useState, useEffect, useRef } = React;

/* ---------- Inline SVG icon set (Lucide-style, 24/stroke-2, React-safe) ----------
   Each entry is an array of path `d` strings, or element specs for non-paths. */
const ICONS = {
  'arrow-right': ['M5 12h14', 'm12 5 7 7-7 7'],
  'check': ['M20 6 9 17l-5-5'],
  'message-circle': ['M7.9 20A9 9 0 1 0 4 16.1L2 22Z'],
  'users': ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', { t: 'circle', cx: 9, cy: 7, r: 4 }, 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'],
  'stethoscope': ['M5 2v5a4 4 0 0 0 8 0V2', 'M9 11v3a5 5 0 0 0 10 0v-2', { t: 'circle', cx: 19, cy: 9, r: 2 }],
  'heart-pulse': ['M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.49 4.04 3 5.5l7 7Z', 'M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27'],
  'heart': ['M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.49 4.04 3 5.5l7 7Z'],
  'image': [{ t: 'rect', x: 3, y: 3, width: 18, height: 18, rx: 2 }, { t: 'circle', cx: 9, cy: 9, r: 2 }, 'm21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21'],
  'building-2': ['M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z', 'M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2', 'M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2', 'M10 6h4', 'M10 10h4', 'M10 14h4', 'M10 18h4'],
  'armchair': ['M5 9V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3', 'M3 11a2 2 0 0 1 2 2v3h14v-3a2 2 0 0 1 2-2', 'M5 16v3h14v-3', 'M5 11a2 2 0 0 0-2 2', 'M21 13a2 2 0 0 0-2-2'],
  'sofa': ['M5 9V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3', 'M3 11a2 2 0 0 1 2 2v3h14v-3a2 2 0 0 1 2-2', 'M5 16v3h14v-3', 'M5 11a2 2 0 0 0-2 2', 'M21 13a2 2 0 0 0-2-2'],
  'bed': ['M2 4v16', 'M2 8h18a2 2 0 0 1 2 2v10', 'M2 17h20', 'M6 8v4'],
  'venus': [{ t: 'circle', cx: 12, cy: 9, r: 5 }, 'M12 14v7', 'M9 18h6'],
  'sparkles': ['M12 3l1.9 5.6L19.5 10l-5.6 1.4L12 17l-1.9-5.6L4.5 10l5.6-1.4z', 'M19 3v3', 'M20.5 4.5h-3'],
  'heart-handshake': ['M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.49 4.04 3 5.5l7 7Z', 'm12 6-3 3 2 2 3-3'],
  'activity': ['M3 12h4l3 8 4-16 3 8h4'],
  'zap': [{ t: 'polygon', points: '13 2 4 14 12 14 11 22 20 10 12 10 13 2' }],
  'move-down': ['M8 18l4 4 4-4', 'M12 2v20'],
  'bone': ['M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z'],
  'hand': ['M18 11V6a2 2 0 0 0-4 0', 'M14 10V4a2 2 0 0 0-4 0v2', 'M10 10.5V6a2 2 0 0 0-4 0v8a8 8 0 0 0 8 8h0a8 8 0 0 0 8-8v-3a2 2 0 0 0-4 0v1'],
  'droplets': ['M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 4.7 7 2.3c-.29 2.4-1.14 3.83-2.29 4.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z', 'M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97'],
  'person-standing': [{ t: 'circle', cx: 12, cy: 5, r: 1 }, 'm9 20 3-6 3 6', 'm6 8 6 2 6-2', 'M12 10v4'],
  'scan-line': ['M3 7V5a2 2 0 0 1 2-2h2', 'M17 3h2a2 2 0 0 1 2 2v2', 'M21 17v2a2 2 0 0 1-2 2h-2', 'M7 21H5a2 2 0 0 1-2-2v-2', 'M7 12h10'],
  'shield-plus': ['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z', 'M9 12h6', 'M12 9v6'],
  'shield-check': ['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z', 'm9 12 2 2 4-4'],
  'clipboard-list': [{ t: 'rect', x: 8, y: 2, width: 8, height: 4, rx: 1 }, 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'M12 11h4', 'M12 16h4', 'M8 11h.01', 'M8 16h.01'],
  'route': [{ t: 'circle', cx: 6, cy: 19, r: 3 }, 'M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15', { t: 'circle', cx: 18, cy: 5, r: 3 }],
  'line-chart': ['M3 3v16a2 2 0 0 0 2 2h16', 'm19 9-5 5-4-4-3 3'],
  'trophy': ['M6 9H4.5a2.5 2.5 0 0 1 0-5H6', 'M18 9h1.5a2.5 2.5 0 0 0 0-5H18', 'M4 22h16', 'M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22', 'M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22', 'M18 2H6v7a6 6 0 0 0 12 0V2Z'],
  'map-pin': ['M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z', { t: 'circle', cx: 12, cy: 10, r: 3 }],
  'clock': [{ t: 'circle', cx: 12, cy: 12, r: 10 }, 'M12 6v6l4 2'],
  'phone': ['M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'],
  'navigation': [{ t: 'polygon', points: '3 11 22 2 13 21 11 13 3 11' }],
  'instagram': [{ t: 'rect', x: 2, y: 2, width: 20, height: 20, rx: 5 }, { t: 'circle', cx: 12, cy: 12, r: 4 }, { t: 'circle', cx: 17.5, cy: 6.5, r: 0.9, fill: 'currentColor', stroke: 'none' }],
  'dumbbell': ['M2 12h2', 'M6 8v8', 'M9 9v6', 'M15 9v6', 'M18 8v8', 'M20 12h2', 'M9 12h6'],
  'star': [{ t: 'polygon', points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26', fill: 'currentColor', stroke: 'currentColor' }],
};

function Icon({ name, size = 22, stroke = 2, color, style, className }) {
  const specs = ICONS[name] || ['M12 12h.01'];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      className={className} style={{ display: 'inline-block', flex: '0 0 auto', color, ...style }}>
      {specs.map((s, i) => {
        if (typeof s === 'string') return <path key={i} d={s} />;
        const { t, ...attrs } = s;
        return React.createElement(t, { key: i, ...attrs });
      })}
    </svg>
  );
}
function refreshIcons() {}

/* ---------- Art-directed photo placeholder ----------
   The clinic replaces these with real <img>. Branded duotone panel. */
function Photo({ label, icon = 'image', ratio, height, rounded = 22, tone = 'mint', style, children }) {
  const tones = {
    mint:  'linear-gradient(150deg, #DCF2EF 0%, #BDE9E3 60%, #82D7CD 100%)',
    teal:  'linear-gradient(150deg, #0A6F64 0%, #0D8E80 60%, #16A99A 100%)',
    soft:  'linear-gradient(150deg, #EEF8F6 0%, #DCF2EF 100%)',
  };
  const dark = tone === 'teal';
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: ratio || undefined,
        height: height || undefined,
        background: tones[tone] || tones.mint,
        borderRadius: rounded,
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      {/* soft motif */}
      <div style={{ position: 'absolute', inset: 0, opacity: dark ? 0.16 : 0.4, background: 'radial-gradient(60% 60% at 78% 18%, rgba(255,255,255,0.9), transparent 60%)' }} />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, color: dark ? 'rgba(255,255,255,0.92)' : 'var(--teal-700)', textAlign: 'center', padding: 16 }}>
        <span style={{ width: 52, height: 52, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: dark ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)' }}>
          <Icon name={icon} size={24} stroke={1.8} />
        </span>
        {label && <span style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '0.02em', maxWidth: 220, lineHeight: 1.4, opacity: 0.92 }}>{label}</span>}
      </div>
      {children}
    </div>
  );
}

/* ---------- Scroll reveal (IntersectionObserver) ---------- */
function useReveals(deps = []) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]:not(.is-in)'));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window) || reduce) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    // Reveal anything already in (or near) the viewport immediately — keeps
    // above-the-fold content visible on first paint and in screenshots.
    const vh = window.innerHeight || 800;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92) el.classList.add('is-in');
      else io.observe(el);
    });
    return () => io.disconnect();
  }, deps);
}

/* ---------- Constants ---------- */
const CLINIC = {
  phone: '+20 10 40396189',
  phoneRaw: '+201040396189',
  whatsapp: 'https://wa.me/201040396189',
  instagram: 'https://www.instagram.com/core_physio_clinic',
  mapsQuery: 'Twin+Towers+Mall+Second+Al+Sheikh+Zayed+Giza',
};

Object.assign(window, { Icon, refreshIcons, Photo, useReveals, CLINIC });
