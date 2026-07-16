/* Sections D — Booking CTA, Location, Final CTA, Footer */
const DS_D = window.DesignSystem_155140;

function BookingCTA({ t, rtl, openWhatsApp, bookingHref }) {
  const { Button } = DS_D;
  return (
    <section id="book" style={{ padding: '0 24px' }}>
      <div data-reveal style={{ maxWidth: 1120, margin: '0 auto', position: 'relative', overflow: 'hidden', background: 'var(--grad-cta)', borderRadius: 32, padding: 'clamp(36px, 5vw, 64px)', boxShadow: 'var(--shadow-lg)' }}>
        <div style={{ position: 'absolute', top: -80, insetInlineEnd: -60, width: 320, height: 320, background: 'radial-gradient(circle, rgba(255,255,255,0.18), transparent 65%)', borderRadius: '50%' }} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 40, alignItems: 'center' }} className="lp-2col">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal-200)' }}>{t.bookEy}</span>
            <h2 style={{ margin: 0, fontSize: 'clamp(26px, 3.6vw, 40px)', lineHeight: 1.1, fontWeight: 800, letterSpacing: '-0.02em', color: '#fff', textWrap: 'balance' }}>{t.bookTitle}</h2>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: 'rgba(255,255,255,0.85)', maxWidth: 480 }}>{t.bookBody}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <a href={bookingHref} style={{ textDecoration: 'none' }}>
              <Button variant="secondary" size="lg" full iconRight={<Icon name="arrow-right" size={18} />}>{t.book}</Button>
            </a>
            <Button variant="whatsapp" size="lg" full onClick={() => openWhatsApp()} iconLeft={<Icon name="message-circle" size={18} />}>{t.whatsapp}</Button>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'rgba(255,255,255,0.8)', fontSize: 13.5, marginTop: 2 }}>
              <Icon name="shield-check" size={15} />{rtl ? 'بدون دفع إلكتروني · تأكيد سريع' : 'No online payment · fast confirmation'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Location({ t, rtl, openWhatsApp }) {
  const { Button } = DS_D;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${CLINIC.mapsQuery}`;
  const contacts = [
    { icon: 'map-pin', label: t.addressLabel, lines: t.address },
    { icon: 'clock', label: t.hoursLabel, lines: t.hours.map(h => `${h[0]} · ${h[1]}`) },
    { icon: 'phone', label: t.phoneLabel, lines: [CLINIC.phone] },
  ];
  return (
    <section id="location" style={{ padding: 'var(--section-y) 24px', background: 'var(--surface-tint)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
        <SectionHead eyebrow={t.locEy} title={t.locTitle} />
        <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 28, alignItems: 'stretch' }} className="lp-2col">
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, padding: 28, background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              {contacts.map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 14 }}>
                  <span style={{ width: 42, height: 42, flex: '0 0 auto', borderRadius: 12, background: 'var(--teal-50)', color: 'var(--teal-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={c.icon} size={20} /></span>
                  <div>
                    <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-500)', marginBottom: 4 }}>{c.label}</div>
                    {c.lines.map((l, j) => <div key={j} dir={c.icon === 'phone' ? 'ltr' : undefined} style={{ fontSize: 14.5, color: 'var(--ink-700)', lineHeight: 1.5, textAlign: c.icon === 'phone' ? (rtl ? 'right' : 'left') : undefined }}>{l}</div>)}
                  </div>
                </div>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
                <a href={mapsLink} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}><Button variant="primary" full iconLeft={<Icon name="navigation" size={17} />}>{t.directions}</Button></a>
                <div style={{ display: 'flex', gap: 10 }}>
                  <a href={`tel:${CLINIC.phoneRaw}`} style={{ textDecoration: 'none', flex: 1 }}><Button variant="secondary" full iconLeft={<Icon name="phone" size={16} />}>{t.call}</Button></a>
                  <Button variant="whatsapp" full onClick={() => openWhatsApp()} iconLeft={<Icon name="message-circle" size={16} />} style={{ flex: 1 }}>{rtl ? 'واتساب' : 'WhatsApp'}</Button>
                </div>
              </div>
            </div>
          </div>
          <div data-reveal style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', minHeight: 420, border: '1px solid var(--border-subtle)' }}>
            <iframe
              title="Core Physio Clinic location"
              src={`https://www.google.com/maps?q=${CLINIC.mapsQuery}&output=embed`}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, filter: 'saturate(1.05)' }}
              loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ t, rtl, openWhatsApp, bookingHref }) {
  const { Button } = DS_D;
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--teal-900)', padding: 'clamp(64px, 9vw, 110px) 24px', textAlign: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 90% at 50% 0%, rgba(22,169,154,0.35), transparent 60%)' }} />
      <div data-reveal style={{ position: 'relative', maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
        <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--teal-300)' }}>{t.finalEy}</span>
        <h2 style={{ margin: 0, fontSize: 'clamp(30px, 4.6vw, 54px)', lineHeight: 1.08, fontWeight: 800, letterSpacing: '-0.025em', color: '#fff', textWrap: 'balance' }}>{t.finalTitle}</h2>
        <p style={{ margin: 0, fontSize: 'clamp(16px, 1.8vw, 19px)', lineHeight: 1.6, color: 'rgba(255,255,255,0.82)', maxWidth: 560 }}>{t.finalSub}</p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginTop: 8 }}>
          <a href={bookingHref} style={{ textDecoration: 'none' }}><Button variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>{t.book}</Button></a>
          <Button variant="whatsapp" size="lg" onClick={() => openWhatsApp()} iconLeft={<Icon name="message-circle" size={18} />}>{t.whatsapp}</Button>
        </div>
      </div>
    </section>
  );
}

function Footer({ t, lang, rtl, openWhatsApp }) {
  const { Logo } = DS_D;
  const go = (id) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: 'smooth' }); };
  return (
    <footer style={{ background: 'var(--ink-900)', color: 'rgba(255,255,255,0.7)', padding: '56px 24px 28px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1.2fr 1fr', gap: 36 }} className="lp-footer">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 280 }}>
            <Logo variant="light" size={42} />
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6 }}>{rtl ? 'مركز متخصّص في العلاج الطبيعي وإعادة التأهيل في الشيخ زايد.' : 'A specialized physiotherapy & rehabilitation center in Sheikh Zayed.'}</p>
            <span style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--teal-300)' }}>{t.footerTag}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h4 style={{ margin: '0 0 4px', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff' }}>{t.quickLinks}</h4>
            {NAV.map((n) => <button key={n.id} onClick={() => go(n.id)} style={{ background: 'none', border: 'none', textAlign: rtl ? 'right' : 'left', padding: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{n[lang]}</button>)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h4 style={{ margin: '0 0 4px', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff' }}>{t.contact}</h4>
            <a href={`tel:${CLINIC.phoneRaw}`} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}><Icon name="phone" size={15} /><span dir="ltr">{CLINIC.phone}</span></a>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.5 }}><Icon name="map-pin" size={15} style={{ marginTop: 3 }} />{rtl ? 'تُوين تاورز مول، الشيخ زايد، الجيزة' : 'Twin Towers Mall, Sheikh Zayed, Giza'}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}><Icon name="clock" size={15} />{rtl ? 'السبت-الجمعة · يوميًا 9:00 ص – 12:00 م' : 'Sat–Fri · Daily 9:00 AM – 12:00 PM'}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h4 style={{ margin: '0 0 4px', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff' }}>{t.follow}</h4>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href={CLINIC.instagram} target="_blank" rel="noopener" style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Icon name="instagram" size={18} /></a>
              <a href={CLINIC.whatsapp} target="_blank" rel="noopener" style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Icon name="message-circle" size={18} /></a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 40, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 13, textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>{t.rights}</div>
      </div>
    </footer>
  );
}

Object.assign(window, { BookingCTA, Location, FinalCTA, Footer });
