/* Sections C — Testimonials, Gallery */
const DS_C = window.DesignSystem_155140;

function Testimonials({ t, rtl }) {
  const { ReviewCard } = DS_C;
  return (
    <section id="reviews" style={{ padding: 'var(--section-y) 24px', background: 'var(--surface-tint)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <SectionHead eyebrow={t.reviewsEy} title={t.reviewsTitle} align="start" max={620} />
          <div data-reveal style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 20px', background: 'var(--white)', border: '1px solid var(--border-subtle)', borderRadius: 18, boxShadow: 'var(--shadow-sm)' }}>
            <span style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--gold-100)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="star" size={22} style={{ color: 'var(--gold-500)' }} />
            </span>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 26, fontWeight: 800, color: 'var(--ink-900)', lineHeight: 1 }}>4.9</span>
                <div style={{ display: 'flex', gap: 1 }}>{[0,1,2,3,4].map(i => <Icon key={i} name="star" size={14} style={{ color: 'var(--gold-500)' }} />)}</div>
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-500)', marginTop: 2 }}>{rtl ? 'تقييم جوجل · أكثر من 35 مراجعة' : 'Google Rating · 35+ reviews'}</div>
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="lp-grid-3">
          {REVIEWS.map((r, i) => (
            <div key={i} data-reveal style={{ '--d': `${i * 80}ms` }}>
              <ReviewCard dir={rtl ? 'rtl' : 'ltr'} name={rtl ? r.ar_name : r.name} rating={r.rating} quote={rtl ? r.ar : r.en} role={rtl ? 'مريض موثّق' : 'Verified patient'} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ t, rtl }) {
  return (
    <section id="gallery" style={{ padding: 'var(--section-y) 24px', background: 'var(--white)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 44 }}>
        <SectionHead eyebrow={t.galleryEy} title={t.galleryTitle} sub={t.gallerySub} />
        <div className="lp-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: '260px 260px 520px', gap: 16 }}>
          {GALLERY.map((g, i) => {
            const spans = [
              { gridColumn: 'span 2', gridRow: 'span 2' },
              { gridColumn: 'span 2', gridRow: 'span 1' },
              { gridColumn: 'span 1', gridRow: 'span 1' },
              { gridColumn: 'span 1', gridRow: 'span 1' },
              { gridColumn: 'span 2', gridRow: 'span 1' },
              { gridColumn: 'span 2', gridRow: 'span 1' },
            ];
            return (
              <div key={i} data-reveal style={{ '--d': `${i * 70}ms`, ...spans[i], borderRadius: 20, overflow: 'hidden' }}>
                {g.img
                  ? <img src={g.img} alt={`${g[rtl ? 'ar' : 'en']} — عيادة كور فيزيو كلينك`} title={g[rtl ? 'ar' : 'en']} width={g.w} height={g.h} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  : <Photo icon={g.icon} tone={g.tone} label={g[rtl ? 'ar' : 'en']} rounded={20} style={{ height: '100%' }} />
                }
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Testimonials, Gallery });
