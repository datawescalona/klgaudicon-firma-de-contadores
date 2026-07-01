// Home — full-screen sections: hero (rotating word, binary RIGHT, trust franja),
// services, sectors (zona de confianza), reasons, lead magnet.
const { Button, Badge, ServiceCard, Card } = window.DesignSystem_b17006;

// Decorative binary stream — right side of the hero so it stays visible.
function BinaryRain() {
  const cols = React.useMemo(() => Array.from({ length: 7 }, () =>
    Array.from({ length: 30 }, () => (Math.random() > 0.5 ? '1' : '0')).join('\n')
  ), []);
  return (
    <div aria-hidden style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 'min(46%, 520px)', zIndex: 1, overflow: 'hidden', pointerEvents: 'none', maskImage: 'linear-gradient(270deg, #000 0%, #000 34%, transparent 100%)', WebkitMaskImage: 'linear-gradient(270deg, #000 0%, #000 34%, transparent 100%)' }}>
      <style>{`@keyframes klgFall{from{transform:translateY(-38%)}to{transform:translateY(0)}}`}</style>
      <div style={{ display: 'flex', gap: 26, justifyContent: 'flex-end', paddingRight: 24, height: '100%' }}>
        {cols.map((c, i) => (
          <pre key={i} style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: 14, lineHeight: 1.55, color: 'var(--gold-500)', opacity: 0.14 + (i % 3) * 0.05, whiteSpace: 'pre', animation: `klgFall ${7 + i * 1.3}s linear infinite alternate` }}>{c}</pre>
        ))}
      </div>
    </div>
  );
}

// Rotating word after "Necesita".
function RotatingWord() {
  const words = ['Analítica Avanzada', 'Control Interno', 'Prevención de Fraude', 'Información Confiable', 'Blindaje Fiscal'];
  const [i, setI] = React.useState(0);
  const [vis, setVis] = React.useState(true);
  React.useEffect(() => {
    const t = setInterval(() => {
      setVis(false);
      setTimeout(() => { setI((p) => (p + 1) % words.length); setVis(true); }, 320);
    }, 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span style={{
      color: 'var(--gold-500)', display: 'inline-block',
      opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(12px)',
      transition: 'opacity 320ms var(--ease-out), transform 320ms var(--ease-out)',
    }}>{words[i]}.</span>
  );
}

// Cinta continua de normas/estándares — bajo el header, sobre el banner.
function NormasMarquee() {
  const normas = ['VEN-NIF', 'NIA', 'COSO', 'SENIAT', 'SUDEBAN', 'BCV', 'FCCPV', 'LISLR', 'IVA', 'IGTF', 'IGP'];
  const seq = [...normas, ...normas];
  const item = (ab, k) => (
    <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: 22, padding: '0 22px' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.62)' }}>{ab}</span>
      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--gold-500)', opacity: 0.7 }}></span>
    </span>
  );
  return (
    <div className="klg-marquee" aria-hidden style={{ position: 'absolute', top: 156, left: 0, right: 0, zIndex: 3, padding: '9px 0', background: 'rgba(7,10,24,0.42)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(194,162,99,0.22)' }}>
      <div className="klg-marquee-track">
        {seq.map((n, i) => item(n, i))}
        {seq.map((n, i) => item(n, 'b' + i))}
      </div>
    </div>
  );
}

function Hero({ go }) {
  const trust = [
    ['cpu', 'Auditoría Digital Inteligente'],
    ['check-check', 'Conciliaciones bancarias en 24 h'],
    ['receipt-text', 'Especialistas en IVA · ISLR · IGTF'],
    ['book-marked', 'Libros legales Venezuela al día'],
  ];
  return (
    <section className="klg-section klg-section--flush" data-nav-theme="dark" style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy-950)', marginTop: -88, minHeight: 'calc(100vh + 88px)', justifyContent: 'flex-start' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <image-slot id="hero-caracas" fit="cover"
          src="../../assets/banner-home.jpeg"
          placeholder="Arrastra tu render AI del skyline empresarial de Caracas"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', '--slot-opacity': 1 }}></image-slot>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(7,10,24,0.52)' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, var(--navy-950) 30%, rgba(12,18,48,0.78) 60%, rgba(7,10,24,0.35) 100%)' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, var(--navy-950) 1%, transparent 26%)' }}></div>
        <BinaryRain />
      </div>

      <div className="klg-hero-content" style={{ position: 'relative', zIndex: 2, flexGrow: 1, display: 'flex', alignItems: 'flex-start', paddingTop: 180, paddingBottom: 30 }}>
        <div className="klg-pad klg-hero-textblock" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)', width: '100%' }}>
          <div style={{ maxWidth: 800 }}>
            <h1 style={{ margin: '0 0 16px', fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold-300)' }}>Firma de Auditores Financieros · Caracas, Venezuela</h1>
            <h2 style={{ fontSize: 'clamp(2rem, 4.2vw, 3.7rem)', lineHeight: 1.05, color: '#fff', margin: 0, letterSpacing: '-0.025em' }}>
              Tu empresa no necesita<br />más contadores. Necesita
              <span style={{ display: 'block', minHeight: '2.1em' }}><RotatingWord /></span>
            </h2>
            <p style={{ fontSize: '1.075rem', lineHeight: 1.55, color: 'rgba(255,255,255,0.78)', maxWidth: 540, marginTop: 18 }}>
              En KLG AUDICON auditamos, ordenamos y protegemos las finanzas de tu empresa. Cumplimiento ante el SENIAT, outsourcing contable de precisión y auditorías que detectan lo que otros no ven.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 26, flexWrap: 'wrap' }}>
              <Button variant="cta" size="lg" iconRight icon={<Icon n="arrow-right" s={18} />} onClick={() => go('contacto')}>Habla con un experto</Button>
              <Button variant="ghostLight" size="lg" onClick={() => { const el = document.getElementById('servicios-home'); if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' }); }}>Ver servicios</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust franja — integrada al banner, minimalista, enmarcada arriba y abajo */}
      <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto', background: 'linear-gradient(0deg, rgba(7,10,24,0.5), rgba(7,10,24,0.05))', borderTop: '1px solid rgba(194,162,99,0.30)', borderBottom: '1px solid rgba(194,162,99,0.30)' }}>
        <div className="klg-pad klg-franja" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '10px var(--gutter)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, alignItems: 'center' }}>
          {trust.map(([ic, t], i) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '2px 18px', borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.10)' }}>
              <span style={{ color: 'var(--gold-400, #C2A263)', display: 'inline-flex', flexShrink: 0 }}><Icon n={ic} s={19} /></span>
              <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.88)', fontWeight: 600, lineHeight: 1.25 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid({ go }) {
  return (
    <section id="servicios-home" className="klg-section" style={{ background: 'var(--bg-canvas)' }}>
      <div className="klg-pad" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 720, marginBottom: 'var(--space-6)' }}>
          <span className="klg-eyebrow">Áreas de práctica</span>
          <h2 style={{ marginTop: 10 }}>Lo que hacemos para proteger tu empresa</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: 4 }}>Cada servicio está diseñado para eliminar un riesgo real: sanciones, errores en nómina, declaraciones fuera de plazo o estados financieros que no reflejan la realidad.</p>
        </div>
        <div className="klg-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
          {window.KLG_SERVICES.map((s) => (
            <ServiceCard key={s.id} icon={<Icon n={s.icon} s={24} />} title={s.title} tone={s.tone} tilt={false}
              badge={<Badge tone="bronze" className={s.gancho ? 'klg-badge-pulse' : undefined}>{s.tag}</Badge>}
              cta={s.gancho ? 'Quiero esto' : 'Ver servicio'} onClick={(e) => { e.preventDefault(); go('servicio:' + s.id); }} href="#">
              {s.blurb}
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Sección "El Problema": cards oscuras premium, compactas y responsivas ----
function ProblemSection() {
  const ref = React.useRef(null);
  const trackRef = React.useRef(null);
  const [p, setP] = React.useState(0);
  // Marquee vertical autónomo (no depende de CSS externo)
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const track = trackRef.current;
    if (!track) return;
    let y = 0, last = 0, raf = 0, paused = false;
    const speed = 38; // px por segundo
    const onEnter = () => { paused = true; };
    const onLeave = () => { paused = false; };
    track.parentNode.addEventListener('mouseenter', onEnter);
    track.parentNode.addEventListener('mouseleave', onLeave);
    const step = (t) => {
      if (!last) last = t;
      const dt = (t - last) / 1000; last = t;
      if (!paused) {
        y -= speed * dt;
        const half = track.scrollHeight / 2;
        if (half > 0 && -y >= half) y += half;
        track.style.transform = 'translateY(' + y + 'px)';
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => { cancelAnimationFrame(raf); track.parentNode.removeEventListener('mouseenter', onEnter); track.parentNode.removeEventListener('mouseleave', onLeave); };
  }, []);
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setP(1); return; }
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight || 800;
        setP(Math.max(0, Math.min(1, (vh - r.top) / (vh * 0.65))));
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  const pains = [
    { ic: 'triangle-alert', t: 'Riesgo fiscal ante el SENIAT', q: 'Declaro IVA, ISLR y retenciones pero no tengo certeza de que estén correctas. Un error puede costarme una multa.' },
    { ic: 'clock', t: 'Contabilidad sin control', q: 'Mi contabilidad va atrasada, los estados financieros no están al día y no puedo tomar decisiones con datos reales.' },
    { ic: 'shield', t: 'Sin auditoría que me respalde', q: 'Nunca he tenido una auditoría formal. Si el SENIAT fiscaliza, no tengo cómo demostrar que todo está en orden.' },
  ];
  const seq = [...pains, ...pains]; // duplicado para bucle continuo
  return (
    <section ref={ref} data-nav-theme="dark" style={{ background: 'var(--navy-950)', position: 'relative', overflow: 'hidden', padding: 'clamp(3.5rem, 8vw, 6rem) 0', borderTop: '1px solid rgba(194,162,99,0.18)' }}>
      <div aria-hidden style={{ position: 'absolute', top: '-25%', right: '-8%', width: 460, height: 460, borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,132,74,0.16), transparent 70%)', pointerEvents: 'none', transform: `translateY(${(p - 0.5) * 90}px)`, willChange: 'transform' }}></div>
      <div className="klg-pad klg-problem-grid" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)', position: 'relative', boxSizing: 'border-box', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 5vw, 4.5rem)', alignItems: 'center' }}>
        {/* Bloque izquierdo: H2 + intro */}
        <div style={{ transform: `translateX(${(1 - Math.min(1, p * 1.6)) * -36}px)`, opacity: Math.min(1, 0.3 + p * 1.6) }}>
          <span className="klg-eyebrow" style={{ color: 'var(--gold-300)' }}>El problema</span>
          <h2 style={{ marginTop: 14, color: '#fff', fontSize: 'clamp(1.9rem, 3.8vw, 3rem)' }}>¿Tu empresa opera con alguna de estas incertidumbres?</h2>
          <p style={{ color: 'rgba(255,255,255,0.66)', marginTop: 16, fontSize: 'var(--fs-lead)', lineHeight: 1.6, maxWidth: 480 }}>
            El entorno fiscal venezolano no perdona errores. Declaraciones incorrectas ante el SENIAT, contabilidad atrasada o estados financieros sin dictamen pueden derivar en multas y sanciones.
          </p>
          <p style={{ marginTop: 24, fontSize: '1.15rem', lineHeight: 1.5, color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.01em' }}>
            Si algo de esto te resulta familiar, <span style={{ color: 'var(--gold-300)' }}>KLG AUDICON existe exactamente para resolverlo.</span>
          </p>
        </div>
        {/* Bloque derecho: créditos verticales en bucle */}
        <div className="klg-credits-mask" style={{ position: 'relative', height: 'clamp(300px, 42vh, 380px)', overflow: 'hidden', WebkitMaskImage: 'linear-gradient(180deg, transparent, #000 16%, #000 84%, transparent)', maskImage: 'linear-gradient(180deg, transparent, #000 16%, #000 84%, transparent)' }}>
          <div ref={trackRef} className="klg-credits-track" style={{ display: 'flex', flexDirection: 'column', willChange: 'transform' }}>
            {seq.map((pain, i) => (
              <ProblemItem key={i} pain={pain} idx={i % pains.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemItem({ pain, idx }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: 'flex', gap: 18, alignItems: 'flex-start', padding: 'clamp(18px, 2.4vw, 26px) 4px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <span style={{ width: 46, height: 46, flexShrink: 0, borderRadius: 12, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-300)', background: 'rgba(168,132,74,0.16)', transition: 'transform 320ms var(--ease-out)', transform: hov ? 'scale(1.08)' : 'scale(1)' }}><Icon n={pain.ic} s={22} /></span>
      <div>
        <h3 style={{ margin: 0, color: hov ? 'var(--gold-300)' : '#fff', fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)', letterSpacing: '-0.01em', transition: 'color 240ms' }}>{pain.t}</h3>
        <p style={{ margin: '8px 0 0', fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)', lineHeight: 1.5, color: 'rgba(255,255,255,0.7)' }}>
          <span style={{ color: 'var(--gold-500)', fontFamily: 'Georgia, serif', fontSize: '1.4em', lineHeight: 0, verticalAlign: '-0.3em', marginRight: 4 }}>“</span>{pain.q}
        </p>
      </div>
    </div>
  );
}

// ---- Zona de confianza: distinct reveal — cards flip up + clip-reveal, staggered ----
function SectorsBand() {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setShown(true); obs.disconnect(); } });
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} className="klg-section" style={{ background: 'var(--hueso)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="klg-pad" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)', width: '100%', boxSizing: 'border-box' }}>
        {/* Innovación Tecnológica feature row */}
        <div className="klg-wrap-row" style={{
          display: 'flex', alignItems: 'center', gap: 20, padding: '20px 26px', marginBottom: 'var(--space-6)',
          background: 'var(--navy-950)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--gold-600)',
          opacity: shown ? 1 : 0, transform: shown ? 'none' : 'translateY(16px)',
          transition: 'opacity 600ms var(--ease-out), transform 600ms var(--ease-out)',
        }}>
          <span style={{ width: 54, height: 54, flexShrink: 0, borderRadius: 'var(--radius-sm)', background: 'rgba(168,132,74,0.16)', color: 'var(--gold-500)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon n="cpu" s={28} /></span>
          <div style={{ flexGrow: 1 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, color: '#fff' }}>Innovación Tecnológica</div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14.5, marginTop: 2 }}>Automatizamos la contabilidad con herramientas digitales: reportes en tiempo real, conciliaciones asistidas y trazabilidad total de cada cifra.</div>
          </div>
          <span style={{ display: 'flex', gap: 6, flexShrink: 0, flexWrap: 'wrap' }}>
            {['cloud', 'shield-check', 'line-chart'].map((n) => (
              <span key={n} style={{ width: 38, height: 38, borderRadius: 8, background: 'rgba(255,255,255,0.06)', color: 'var(--gold-300)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon n={n} s={18} /></span>
            ))}
          </span>
        </div>

        <div style={{ marginBottom: 'var(--space-5)' }}>
          <span className="klg-eyebrow">Zona de confianza</span>
          <h2 style={{ marginTop: 12, marginBottom: 4 }}>Sectores que confían en KLG AUDICON</h2>
          <span style={{ color: 'var(--text-muted)', fontSize: 15 }}>Experiencia contable y fiscal en las industrias que mueven a Venezuela.</span>
        </div>
        <div className="klg-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, alignItems: 'stretch', perspective: 900 }}>
          {window.KLG_SECTORS.map((s, i) => (
            <div key={s.name}
              style={{
                display: 'flex', flexDirection: 'column', gap: 12, padding: '22px 22px', minHeight: 124,
                border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
                background: 'var(--paper)', boxShadow: 'var(--shadow-xs)',
                transformOrigin: 'bottom center',
                opacity: shown ? 1 : 0,
                transform: shown ? 'rotateX(0) translateY(0)' : 'rotateX(-22deg) translateY(20px)',
                transition: `opacity 520ms var(--ease-out) ${i * 80}ms, transform 620ms var(--ease-out) ${i * 80}ms, border-color 200ms, box-shadow 200ms`,
                cursor: 'default',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold-600)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.boxShadow = 'var(--shadow-xs)'; }}
            >
              <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'var(--cobalt-050)', color: 'var(--cobalt-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon n={s.icon} s={23} /></span>
              <span style={{ color: 'var(--text-strong)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15.5 }}>{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reasons() {
  return (
    <section className="klg-section" style={{ background: 'var(--bg-canvas)' }}>
      <div className="klg-pad" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: 640, marginBottom: 'var(--space-6)' }}>
          <span className="klg-eyebrow">Por qué KLG</span>
          <h2 style={{ marginTop: 10 }}>Por qué las empresas en Venezuela confían en nosotros</h2>
        </div>
        <div className="klg-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-5)' }}>
          {window.KLG_REASONS.map((r) => (
            <div key={r.title} style={{ display: 'flex', gap: 18, padding: 'var(--space-5)', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
              <span style={{ width: 48, height: 48, flexShrink: 0, borderRadius: 'var(--radius-sm)', background: 'var(--cobalt-050)', color: 'var(--cobalt-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon n={r.icon} s={24} /></span>
              <div>
                <h3 style={{ fontSize: 'var(--fs-h4)', margin: '2px 0 6px' }}>{r.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14.5, margin: 0, lineHeight: 1.6 }}>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadMagnet({ go }) {
  return (
    <section className="klg-section" style={{ background: 'var(--bg-canvas)' }}>
      <div className="klg-pad" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)', width: '100%', boxSizing: 'border-box' }}>
        <div className="klg-split" style={{ background: 'var(--navy-950)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-10)', color: '#fff', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'var(--space-8)', alignItems: 'center', position: 'relative', overflow: 'hidden', borderTop: '3px solid var(--gold-600)' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-300)' }}>Recurso descargable</span>
            <h2 style={{ color: '#fff', marginTop: 12 }}>¿Sabes qué errores contables sanciona el SENIAT?</h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 460, marginTop: 8 }}>Descarga gratis nuestro checklist con los 10 errores más comunes que detectan los fiscalizadores y cómo evitar cada uno.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Button variant="cta" size="lg" fullWidth icon={<Icon n="download" s={18} />} onClick={() => go('contacto')}>Descargar checklist — PDF</Button>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>PDF · 12 páginas · gratuito</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CredencialesBand() {
  const cred = [
    ['shield-check', 'Certificación SUDEBAN', 'Habilitados para prestar servicios a entidades bajo supervisión de la Superintendencia de las Instituciones del Sector Bancario de Venezuela.'],
    ['badge-check', 'Colegiados CCPV', 'Miembros activos del Colegio de Contadores Públicos de Venezuela con inscripción y colegiatura vigente.'],
    ['graduation-cap', '+20 años de experiencia', 'Socios directivos egresados de la Universidad Central de Venezuela (UCV) con especialización en múltiples sectores productivos.'],
  ];
  return (
    <section className="klg-section" style={{ background: 'var(--bg-sunken)' }}>
      <div className="klg-pad" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <span className="klg-eyebrow">Respaldo institucional</span>
          <h2 style={{ marginTop: 10 }}>Credenciales que dan certeza</h2>
        </div>
        <div className="klg-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
          {cred.map(([ic, t, d]) => (
            <div key={t} style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: 'var(--space-6)', borderRadius: 'var(--radius-lg)', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}>
              <span style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--cobalt-050)', color: 'var(--cobalt-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon n={ic} s={26} /></span>
              <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{t}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)' }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABand({ go }) {
  return (
    <section className="klg-section" style={{ background: 'var(--bg-canvas)' }}>
      <div className="klg-pad" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--gutter)', width: '100%', boxSizing: 'border-box' }}>
        <div data-nav-theme="dark" style={{ background: 'var(--navy-950)', borderRadius: 'var(--radius-xl)', padding: 'clamp(2.5rem, 6vw, 5rem)', textAlign: 'center', border: '1px solid rgba(194,162,99,0.25)', boxShadow: 'var(--shadow-lg)' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', margin: '0 0 12px' }}>¿Necesita auditoría o asesoría contable?</h2>
          <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 580, margin: '0 auto 28px', fontSize: 'var(--fs-lead)' }}>Más de 20 años respaldando empresas venezolanas. Cuéntenos su caso.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="cta" size="lg" onClick={() => go('contacto')}>Solicitar consulta gratuita</Button>
            <Button variant="ghostLight" size="lg" onClick={() => { const el = document.getElementById('servicios-home'); if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' }); }}>Ver nuestros servicios</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeScreen({ go }) {
  return (
    <div>
      <Hero go={go} />
      <ServicesGrid go={go} />
      <ProblemSection />
      <SectorsBand />
      <Reasons />
      <CredencialesBand />
      <CTABand go={go} />
      <LeadMagnet go={go} />
    </div>
  );
}

Object.assign(window, { HomeScreen });
