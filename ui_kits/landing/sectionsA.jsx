/* Sections A — Header, Hero, Empathy, About */
const { useState: useStateA, useEffect: useEffectA } = React;
const DS_A = window.DesignSystem_155140;

/* Shared section heading */
function SectionHead({ eyebrow, title, sub, align = 'center', light = false, max = 680 }) {
  return (
    <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: align === 'center' ? 'center' : 'flex-start', textAlign: align, maxWidth: max, margin: align === 'center' ? '0 auto' : 0 }}>
      {eyebrow && (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12.5, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: light ? 'var(--teal-200)' : 'var(--teal-600)' }}>
          <span style={{ width: 22, height: 2, background: 'currentColor', borderRadius: 2, opacity: 0.7 }} />
          {eyebrow}
        </span>
      )}
      <h2 style={{ margin: 0, fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.1, fontWeight: 800, letterSpacing: '-0.02em', color: light ? '#fff' : 'var(--ink-900)', textWrap: 'balance' }}>{title}</h2>
      {sub && <p style={{ margin: 0, fontSize: 'clamp(15px, 1.6vw, 18px)', lineHeight: 1.6, color: light ? 'rgba(255,255,255,0.82)' : 'var(--ink-600)', maxWidth: max }}>{sub}</p>}
    </div>
  );
}

function Header({ t, lang, setLang, rtl, openWhatsApp, bookingHref }) {
  const { Logo, Button } = DS_A;
  const [scrolled, setScrolled] = useStateA(false);
  useEffectA(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const go = (id) => { const el = document.getElementById(id); if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: 'smooth' }); };
  return (
    <header style={{
      position: 'fixed', top: 0, insetInline: 0, zIndex: 50,
      transition: 'all var(--dur-base) var(--ease-out)',
      background: scrolled ? 'rgba(255,255,255,0.82)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      boxShadow: scrolled ? '0 6px 24px -18px rgba(12,36,41,0.4)' : 'none',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
        <a href="#home" onClick={(e) => { e.preventDefault(); go('home'); }} style={{ textDecoration: 'none' }}><Logo variant="dark" size={40} /></a>
        <nav className="lp-nav" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {NAV.map((n) => (
            <button key={n.id} onClick={() => go(n.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 14.5, fontWeight: 600, color: 'var(--ink-700)', padding: '8px 14px', borderRadius: 999 }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--teal-700)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--ink-700)'}>
              {n[lang]}
            </button>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'inline-flex', background: 'var(--surface-2)', borderRadius: 999, padding: 3 }}>
            {['en', 'ar'].map((l) => (
              <button key={l} onClick={() => setLang(l)} style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 13, fontWeight: 700, padding: '6px 12px', borderRadius: 999, background: lang === l ? 'var(--white)' : 'transparent', color: lang === l ? 'var(--teal-700)' : 'var(--ink-500)', boxShadow: lang === l ? 'var(--shadow-xs)' : 'none' }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a href={bookingHref} style={{ textDecoration: 'none' }} className="lp-hide-sm">
            <Button variant="whatsapp" size="sm" iconLeft={<Icon name="message-circle" size={16} />}>{t.bookCta}</Button>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ t, rtl, openWhatsApp, bookingHref }) {
  const { Button, Badge } = DS_A;
  return (
    <section id="home" style={{ position: 'relative', background: 'var(--grad-hero)', overflow: 'hidden', paddingTop: 120, paddingBottom: 72 }}>
      <div style={{ position: 'absolute', top: -120, insetInlineEnd: -120, width: 460, height: 460, background: 'radial-gradient(circle, rgba(22,169,154,0.18), transparent 65%)', borderRadius: '50%' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center' }} className="lp-hero-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Badge tone="soft" dot>{t.heroBadge}</Badge>
          <h1 style={{ margin: 0, fontSize: 'clamp(34px, 5vw, 60px)', lineHeight: 1.05, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--ink-900)', textWrap: 'balance' }}>{t.heroTitle}</h1>
          <p style={{ margin: 0, fontSize: 'clamp(16px, 1.7vw, 19px)', lineHeight: 1.6, color: 'var(--ink-600)', maxWidth: 520 }}>{t.heroSub}</p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href={bookingHref} style={{ textDecoration: 'none' }}><Button variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>{t.book}</Button></a>
            <Button variant="secondary" size="lg" onClick={() => openWhatsApp()} iconLeft={<Icon name="message-circle" size={18} />}>{t.whatsapp}</Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', marginTop: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ display: 'flex', gap: 2, color: 'var(--rating-star)' }}>
                {[0,1,2,3,4].map((i) => <Icon key={i} name="star" size={18} style={{ color: 'var(--gold-500)' }} />)}
              </div>
              <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink-800)' }}>4.9 <span style={{ color: 'var(--ink-500)', fontWeight: 500 }}>{t.ratingLabel}</span></span>
            </div>
            <span style={{ width: 1, height: 22, background: 'var(--border-strong)' }} />
            <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink-800)' }}>35+ <span style={{ color: 'var(--ink-500)', fontWeight: 500 }}>{t.reviewsLabel}</span></span>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img src="/assets/hero.jpg" alt="معالج طبيعي مع مريض في عيادة كور فيزيو كلينك بالشيخ زايد" title="جلسة علاج طبيعي في عيادة كور فيزيو" loading="eager" fetchpriority="high" decoding="async" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', objectPosition: '70% center', borderRadius: 28, display: 'block' }} />
          <div style={{ position: 'absolute', insetInlineStart: -22, top: 36 }}>
            <div style={{ background: 'var(--glass-bg)', backdropFilter: 'var(--blur-glass)', WebkitBackdropFilter: 'var(--blur-glass)', border: 'var(--glass-border)', borderRadius: 18, padding: '14px 18px', boxShadow: 'var(--shadow-glass)', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--gold-100)', color: 'var(--gold-500)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="star" size={20} /></span>
              <div><div style={{ fontSize: 20, fontWeight: 800, color: 'var(--ink-900)', lineHeight: 1 }}>4.9★</div><div style={{ fontSize: 12, color: 'var(--ink-500)' }}>{t.statRating}</div></div>
            </div>
          </div>
          <div style={{ position: 'absolute', insetInlineEnd: -18, bottom: 30 }}>
            <div style={{ background: 'var(--glass-bg)', backdropFilter: 'var(--blur-glass)', WebkitBackdropFilter: 'var(--blur-glass)', border: 'var(--glass-border)', borderRadius: 18, padding: '14px 18px', boxShadow: 'var(--shadow-glass)', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--teal-100)', color: 'var(--teal-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="users" size={20} /></span>
              <div><div style={{ fontSize: 20, fontWeight: 800, color: 'var(--ink-900)', lineHeight: 1 }}>35+</div><div style={{ fontSize: 12, color: 'var(--ink-500)' }}>{t.statPatients}</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Empathy({ t, rtl }) {
  return (
    <section style={{ padding: 'var(--section-y) 24px', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }} className="lp-2col">
        <div data-reveal style={{ position: 'relative' }}>
          <img src="/assets/empathy.jpg" alt="جلسة استشارة علاج طبيعي في عيادة كور فيزيو كلينك" title="استشارة علاج طبيعي" loading="lazy" decoding="async" style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', objectPosition: 'center 20%', borderRadius: 26, display: 'block' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <SectionHead eyebrow={t.empathyEy} title={t.empathyTitle} align="start" max={520} />
          <p data-reveal style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: 'var(--ink-600)' }}>{t.empathyBody}</p>
          <div data-reveal style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {t.pains.map((p, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 15px', background: 'var(--surface-tint)', border: '1px solid var(--border-subtle)', borderRadius: 999, fontSize: 14, fontWeight: 600, color: 'var(--ink-700)' }}>
                <Icon name="check" size={15} style={{ color: 'var(--teal-600)' }} />{p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ t, rtl }) {
  const { Badge } = DS_A;
  return (
    <section id="about" style={{ padding: 'var(--section-y) 24px', background: 'var(--surface-tint)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 56, alignItems: 'center' }} className="lp-2col">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
          <SectionHead eyebrow={t.aboutEy} title={t.aboutTitle} align="start" max={520} />
          <p data-reveal style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: 'var(--ink-600)' }}>{t.aboutBody}</p>
          <div data-reveal style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {t.aboutFeat.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 14, boxShadow: 'var(--shadow-xs)' }}>
                <span style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--teal-50)', color: 'var(--teal-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
                  <Icon name={['venus','sofa','sparkles','heart-handshake'][i]} size={17} />
                </span>
                <span style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--ink-800)' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div data-reveal style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: 16 }}>
            <img src="/assets/ChatGPT Image Jul 1, 2026, 01_59_34 PM.png" alt="جلسة علاج طبيعي في عيادة كور فيزيو كلينك" title="جلسة علاج طبيعي" width={941} height={1672} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 22, display: 'block', gridRow: 'span 2' }} />
            <img src="/assets/ChatGPT Image Jun 22, 2026, 11_52_31 PM 2.png" alt="استقبال عيادة كور فيزيو كلينك بالشيخ زايد" title="استقبال العيادة" width={955} height={811} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 22, display: 'block' }} />
            <img src="/assets/treatment-room.jpg" alt="غرفة العلاج الطبيعي في عيادة كور فيزيو كلينك" title="غرفة العلاج" width={1408} height={768} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 22, display: 'block' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SectionHead, Header, Hero, Empathy, About });
