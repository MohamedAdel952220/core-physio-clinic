/* Sections B — Trust, Journey timeline, Services */
const DS_B = window.DesignSystem_155140;

function Trust({ t, rtl }) {
  return (
    <section id="reviews-trust" style={{ padding: 'var(--section-y) 24px', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 44 }}>
        <SectionHead eyebrow={t.trustEy} title={t.trustTitle} sub={t.trustSub} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="lp-grid-3">
          {t.trustItems.map((it, i) => (
            <div key={i} data-reveal style={{ '--d': `${i * 60}ms`, display: 'flex', gap: 16, padding: 24, background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <span style={{ width: 48, height: 48, flex: '0 0 auto', borderRadius: 14, background: 'var(--teal-50)', color: 'var(--teal-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={it.icon} size={22} />
              </span>
              <div>
                <h3 style={{ margin: '2px 0 6px', fontSize: 17, fontWeight: 700, color: 'var(--ink-900)' }}>{it.t}</h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-600)' }}>{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey({ t, rtl }) {
  return (
    <section id="journey" style={{ padding: 'var(--section-y) 24px', background: 'var(--surface-tint)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 52 }}>
        <SectionHead eyebrow={t.journeyEy} title={t.journeyTitle} sub={t.journeySub} />
        <div className="lp-journey" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18 }}>
          <div className="lp-journey-line" style={{ position: 'absolute', insetInline: '10%', top: 34, height: 2, background: 'linear-gradient(90deg, var(--teal-200), var(--teal-400), var(--teal-200))' }} />
          {STEPS.map((s, i) => (
            <div key={i} data-reveal style={{ '--d': `${i * 90}ms`, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14 }}>
              <span style={{ position: 'relative', width: 68, height: 68, borderRadius: '50%', background: 'var(--grad-cta)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-teal)', zIndex: 1 }}>
                <Icon name={s.icon} size={26} stroke={1.8} />
                <span style={{ position: 'absolute', top: -6, insetInlineEnd: -6, width: 26, height: 26, borderRadius: '50%', background: 'var(--white)', color: 'var(--teal-700)', fontSize: 12, fontWeight: 800, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>{s.n}</span>
              </span>
              <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 700, color: 'var(--ink-900)' }}>{s[rtl ? 'ar' : 'en']}</h3>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-600)', maxWidth: 190 }}>{s[rtl ? 'dar' : 'den']}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({ t, rtl, openWhatsApp }) {
  const { ServiceCard } = DS_B;
  return (
    <section id="services" style={{ padding: 'var(--section-y) 24px', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 44 }}>
        <SectionHead eyebrow={t.servicesEy} title={t.servicesTitle} sub={t.servicesSub} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(248px, 1fr))', gap: 18 }}>
          {SERVICES.map((s, i) => (
            <div key={i} data-reveal style={{ '--d': `${(i % 5) * 60}ms` }}>
              <ServiceCard
                dir={rtl ? 'rtl' : 'ltr'}
                icon={<Icon name={s.icon} size={26} stroke={1.8} />}
                title={s[rtl ? 'ar' : 'en']}
                description={s[rtl ? 'dar' : 'den']}
                action={null}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Trust, Journey, Services });
