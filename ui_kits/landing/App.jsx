/* Core Physio Clinic — Landing page app shell */
const { useState: useStateApp, useEffect: useEffectApp } = React;

function App() {
  const [lang, setLang] = useStateApp('ar');
  const rtl = lang === 'ar';
  const t = T[lang];
  const bookingHref = '/ui_kits/booking/index.html';

  useEffectApp(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
  }, [lang]);

  useReveals([lang]);

  const openWhatsApp = (msg) => {
    const url = CLINIC.whatsapp + (msg ? `?text=${encodeURIComponent(msg)}` : '');
    window.open(url, '_blank', 'noopener');
  };

  const shared = { t, lang, rtl, openWhatsApp, bookingHref };
  return (
    <div style={{ fontFamily: rtl ? 'var(--font-arabic)' : 'var(--font-sans)', background: 'var(--white)', overflowX: 'hidden' }}>
      <Header {...shared} setLang={setLang} />
      <main>
        <Hero {...shared} />
        <Empathy {...shared} />
        <About {...shared} />
        <Trust {...shared} />
        <Journey {...shared} />
        <Services {...shared} />
        <Testimonials {...shared} />
        <Gallery {...shared} />
        <div style={{ padding: 'var(--section-y) 0', background: 'var(--white)' }}>
          <BookingCTA {...shared} />
        </div>
        <Location {...shared} />
        <FinalCTA {...shared} />
      </main>
      <Footer {...shared} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
