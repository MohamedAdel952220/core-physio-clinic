/* Core Physio Clinic — Booking page (appointment request → WhatsApp) */
const { useState: useStateB } = React;
const DS_BK = window.DesignSystem_155140;

const STRB = {
  en: {
    back: 'Back to site', langName: 'العربية',
    eyebrow: 'Book your appointment',
    title: 'Book Your Appointment',
    sub: 'Select your preferred date and our team will contact you to confirm the exact appointment time.',
    asideTitle: 'What happens next?',
    steps: [
      ['Send your request', 'Fill the short form — it takes under a minute.'],
      ['We review & call you', 'Our team contacts you to confirm the exact time.'],
      ['Start your recovery', 'Visit us and begin your personalized plan.'],
    ],
    noPay: 'Appointment request only — no online payment.',
    fullName: 'Full Name', phone: 'Phone Number', whatsapp: 'WhatsApp Number',
    age: 'Age', gender: 'Gender', date: 'Preferred Date', service: 'Service Needed', notes: 'Notes',
    notesPh: 'Anything you’d like us to know (optional)',
    chooseService: 'Choose a service', chooseGender: 'Select',
    genders: ['Male', 'Female', 'Prefer not to say'],
    services: ['Physiotherapy Session', 'Sports Injury Rehabilitation', 'Back Pain Treatment', 'Neck Pain Treatment', 'Manual Therapy', 'Post Surgery Rehabilitation', 'Other'],
    submit: 'Request Appointment', sending: 'Opening WhatsApp…',
    required: 'Please fill in all required fields.',
    successTitle: 'Thank you!',
    successBody: 'Your appointment request has been received. Our team will contact you shortly to confirm the exact appointment time.',
    successNote: 'We’ve opened WhatsApp with your details. If it didn’t open, tap the button below.',
    openWa: 'Open WhatsApp', another: 'Submit another request',
    callUs: 'Or call us', namePh: 'e.g. Sara Mahmoud', phonePh: '+20 ...',
  },
  ar: {
    back: 'العودة للموقع', langName: 'English',
    eyebrow: 'احجز موعدك',
    title: 'احجز موعدك',
    sub: 'اختر التاريخ المناسب لك وسيتواصل معك فريقنا لتأكيد وقت الموعد بالضبط.',
    asideTitle: 'ماذا يحدث بعد ذلك؟',
    steps: [
      ['أرسل طلبك', 'املأ النموذج القصير — يستغرق أقل من دقيقة.'],
      ['نراجع ونتصل بك', 'يتواصل معك فريقنا لتأكيد الوقت بالضبط.'],
      ['ابدأ تعافيك', 'قم بزيارتنا وابدأ خطتك المخصّصة.'],
    ],
    noPay: 'طلب حجز فقط — بدون دفع إلكتروني.',
    fullName: 'الاسم الكامل', phone: 'رقم الهاتف', whatsapp: 'رقم واتساب',
    age: 'العمر', gender: 'النوع', date: 'التاريخ المفضّل', service: 'الخدمة المطلوبة', notes: 'ملاحظات',
    notesPh: 'أي شيء تودّ إخبارنا به (اختياري)',
    chooseService: 'اختر خدمة', chooseGender: 'اختر',
    genders: ['ذكر', 'أنثى', 'أفضّل عدم الإفصاح'],
    services: ['جلسة علاج طبيعي', 'تأهيل إصابات الملاعب', 'علاج آلام الظهر', 'علاج آلام الرقبة', 'العلاج اليدوي', 'التأهيل بعد الجراحة', 'أخرى'],
    submit: 'إرسال طلب الحجز', sending: 'جاري فتح واتساب…',
    required: 'يرجى ملء جميع الحقول المطلوبة.',
    successTitle: 'شكرًا لك!',
    successBody: 'تم استلام طلب حجزك. سيتواصل معك فريقنا قريبًا لتأكيد وقت الموعد بالضبط.',
    successNote: 'فتحنا واتساب مع بياناتك. إن لم يفتح، اضغط الزر أدناه.',
    openWa: 'فتح واتساب', another: 'إرسال طلب آخر',
    callUs: 'أو اتصل بنا', namePh: 'مثال: سارة محمود', phonePh: '+20 ...',
  },
};

function field(label, node) { return node; }

function BookingApp() {
  const { Logo, Button, Input, Select } = DS_BK;
  const [lang, setLang] = useStateB('ar');
  const rtl = lang === 'ar';
  const t = STRB[lang];
  const [form, setForm] = useStateB({ name: '', phone: '', whatsapp: '', age: '', gender: '', date: '', service: '', notes: '' });
  const [error, setError] = useStateB(false);
  const [done, setDone] = useStateB(false);
  const [waUrl, setWaUrl] = useStateB('');

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildMessage = () => {
    const L = STRB.en; // send the message in a consistent (English-labeled) format
    const lines = [
      'New Appointment Request', '',
      `Patient Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `WhatsApp: ${form.whatsapp || form.phone}`,
      `Age: ${form.age}`,
      `Gender: ${form.gender}`,
      `Preferred Date: ${form.date}`,
      `Service: ${form.service}`,
      `Notes: ${form.notes || '-'}`, '',
      'Please contact the patient to confirm the exact appointment time.',
    ];
    return lines.join('\n');
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.age || !form.gender || !form.date || !form.service) {
      setError(true);
      return;
    }
    setError(false);
    const url = `${CLINIC.whatsapp}?text=${encodeURIComponent(buildMessage())}`;
    setWaUrl(url);
    window.open(url, '_blank', 'noopener');
    setDone(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const reset = () => { setForm({ name: '', phone: '', whatsapp: '', age: '', gender: '', date: '', service: '', notes: '' }); setDone(false); setWaUrl(''); };

  const inputStyle = { };

  return (
    <div dir={rtl ? 'rtl' : 'ltr'} style={{ fontFamily: rtl ? 'var(--font-arabic)' : 'var(--font-sans)', minHeight: '100vh', background: 'var(--surface-tint)' }}>
      {/* top bar */}
      <header style={{ background: 'var(--white)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px', height: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="../landing/index.html" style={{ textDecoration: 'none' }}><Logo variant="dark" size={38} /></a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <a href="../landing/index.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, textDecoration: 'none', color: 'var(--ink-600)', fontSize: 14, fontWeight: 600 }}>
              <Icon name="arrow-right" size={16} style={{ transform: rtl ? 'none' : 'rotate(180deg)' }} />{t.back}
            </a>
            <button onClick={() => setLang(rtl ? 'en' : 'ar')} style={{ border: '1px solid var(--border-strong)', background: 'var(--white)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 13, fontWeight: 700, padding: '7px 14px', borderRadius: 999, color: 'var(--teal-700)' }}>{t.langName}</button>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1140, margin: '0 auto', padding: '40px 24px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: 28, alignItems: 'start' }} className="bk-grid">
          {/* aside */}
          <aside style={{ position: 'relative', overflow: 'hidden', background: 'var(--grad-cta)', borderRadius: 26, padding: 32, color: '#fff', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ position: 'absolute', top: -70, insetInlineEnd: -50, width: 230, height: 230, background: 'radial-gradient(circle, rgba(255,255,255,0.16), transparent 65%)', borderRadius: '50%' }} />
            <div style={{ position: 'relative' }}>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--teal-200)' }}>{t.eyebrow}</span>
              <h1 style={{ margin: '12px 0 10px', fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.12 }}>{t.title}</h1>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)' }}>{t.sub}</p>

              <h2 style={{ margin: '30px 0 16px', fontSize: 14, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>{t.asideTitle}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {t.steps.map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14 }}>
                    <span style={{ width: 34, height: 34, flex: '0 0 auto', borderRadius: '50%', background: 'rgba(255,255,255,0.16)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14 }}>{i + 1}</span>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700 }}>{s[0]}</div>
                      <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, marginTop: 2 }}>{s[1]}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 28, padding: '14px 16px', background: 'rgba(255,255,255,0.12)', borderRadius: 14, display: 'flex', alignItems: 'center', gap: 10, fontSize: 13.5 }}>
                <Icon name="shield-check" size={18} />{t.noPay}
              </div>
              <a href={`tel:${CLINIC.phoneRaw}`} style={{ marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 10, color: '#fff', textDecoration: 'none', fontSize: 14.5, fontWeight: 600 }}>
                <Icon name="phone" size={16} />{t.callUs}: <span dir="ltr">{CLINIC.phone}</span>
              </a>
            </div>
          </aside>

          {/* form / success */}
          <section style={{ background: 'var(--white)', borderRadius: 26, padding: 'clamp(24px, 4vw, 40px)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)' }}>
            {done ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 18, padding: '24px 12px' }}>
                <span style={{ width: 76, height: 76, borderRadius: '50%', background: 'var(--teal-50)', color: 'var(--teal-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="check" size={38} stroke={2.4} />
                </span>
                <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: 'var(--ink-900)' }}>{t.successTitle}</h2>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'var(--ink-600)', maxWidth: 440 }}>{t.successBody}</p>
                <p style={{ margin: 0, fontSize: 13.5, color: 'var(--ink-500)', maxWidth: 420 }}>{t.successNote}</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginTop: 6 }}>
                  <a href={waUrl} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}><Button variant="whatsapp" iconLeft={<Icon name="message-circle" size={17} />}>{t.openWa}</Button></a>
                  <Button variant="secondary" onClick={reset}>{t.another}</Button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="bk-row">
                  <Input label={t.fullName} required dir={rtl ? 'rtl' : 'ltr'} placeholder={t.namePh} value={form.name} onChange={set('name')} icon={<Icon name="users" size={17} />} />
                  <Input label={t.phone} required type="tel" dir={rtl ? 'rtl' : 'ltr'} placeholder={t.phonePh} value={form.phone} onChange={set('phone')} icon={<Icon name="phone" size={16} />} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="bk-row">
                  <Input label={t.whatsapp} type="tel" dir={rtl ? 'rtl' : 'ltr'} placeholder={t.phonePh} value={form.whatsapp} onChange={set('whatsapp')} icon={<Icon name="message-circle" size={16} />} />
                  <Input label={t.age} required type="number" dir={rtl ? 'rtl' : 'ltr'} placeholder="—" value={form.age} onChange={set('age')} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="bk-row">
                  <Select label={t.gender} required dir={rtl ? 'rtl' : 'ltr'} placeholder={t.chooseGender} value={form.gender} onChange={set('gender')} options={t.genders} />
                  <Input label={t.date} required type="date" dir={rtl ? 'rtl' : 'ltr'} value={form.date} onChange={set('date')} />
                </div>
                <Select label={t.service} required dir={rtl ? 'rtl' : 'ltr'} placeholder={t.chooseService} value={form.service} onChange={set('service')} options={t.services} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  <label style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text-strong)' }}>{t.notes}</label>
                  <textarea value={form.notes} onChange={set('notes')} placeholder={t.notesPh} rows={3}
                    style={{ width: '100%', padding: '12px 16px', background: 'var(--white)', border: '1.5px solid var(--border-strong)', borderRadius: 'var(--radius-md)', fontFamily: 'inherit', fontSize: 15, color: 'var(--text-heading)', outline: 'none', resize: 'vertical', lineHeight: 1.5 }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--teal-500)'; e.target.style.boxShadow = '0 0 0 4px rgba(22,169,154,0.14)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border-strong)'; e.target.style.boxShadow = 'none'; }} />
                </div>
                {error && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: 'var(--coral-100)', color: '#a23c1d', borderRadius: 12, fontSize: 13.5, fontWeight: 600 }}>
                    <Icon name="shield-plus" size={16} />{t.required}
                  </div>
                )}
                <Button variant="primary" size="lg" full iconLeft={<Icon name="message-circle" size={18} />} as="button">{t.submit}</Button>
                <p style={{ margin: 0, textAlign: 'center', fontSize: 12.5, color: 'var(--ink-500)' }}>{t.noPay}</p>
              </form>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<BookingApp />);
