// Shared chrome: floating pill nav + footer. Uses bundle components.
const { PillNav, Button, WhatsAppFab } = window.DesignSystem_b17006;

function Icon({ n, s = 20 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', n);
    el.appendChild(i);
    window.lucide.createIcons();
    const svg = el.querySelector('svg');
    if (svg) { svg.setAttribute('width', s); svg.setAttribute('height', s); svg.style.display = 'block'; }
  });
  return <span ref={ref} style={{ display: 'inline-flex', width: s, height: s }}></span>;
}

function SiteNav({ view, go }) {
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 50, padding: '18px var(--gutter) 0', pointerEvents: 'none' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', pointerEvents: 'auto' }}>
        <PillNav
          logo={<img src="../../assets/logo-horizontal-cobalt.png" alt="KLG AUDICON" style={{ height: 24, display: 'block', cursor: 'pointer' }} onClick={() => go('home')} />}
          links={[
            { id: 'servicio:auditoria', label: 'Auditorías' },
            { id: 'servicio:outsourcing', label: 'Contable' },
            { id: 'servicio:nomina', label: 'Nómina' },
            { id: 'servicio:tributos', label: 'Tributos' },
            { id: 'servicio:costos', label: 'Costos' },
          ]}
          active={view}
          onNavigate={go}
          cta={<Button variant="cta" size="sm" onClick={() => go('contacto')}>Hablemos</Button>}
        />
      </div>
    </div>
  );
}

function SiteFooter({ go }) {
  return (
    <footer style={{ background: 'var(--navy-950)', color: 'rgba(255,255,255,0.82)', marginTop: 'var(--space-16)', borderTop: '3px solid var(--gold-600)' }}>
      <div className="klg-split" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-12) var(--gutter) var(--space-8)', display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gap: 'var(--space-8)' }}>
        <div>
          <img src="../../assets/logo-horizontal-white.png" alt="KLG AUDICON" style={{ height: 28, marginBottom: 18 }} />
          <p style={{ maxWidth: 320, fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)' }}>
            Firma de auditores y contadores en Venezuela. Aliados tecnológicos que previenen sanciones y optimizan tu rentabilidad.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
            {['globe', 'mail', 'phone'].map((n) => (
              <span key={n} style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(255,255,255,0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Icon n={n} s={18} /></span>
            ))}
          </div>
        </div>
        <div>
          <h4 style={{ color: '#fff', fontSize: 13, fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Servicios</h4>
          {[['Auditorías', 'auditoria'], ['Contable', 'outsourcing'], ['Nómina', 'nomina'], ['Tributos', 'tributos'], ['Costos', 'costos']].map(([t, id]) => (
            <a key={id} href="#" onClick={(e) => { e.preventDefault(); go('servicio:' + id); }} style={{ display: 'block', color: 'rgba(255,255,255,0.72)', fontSize: 14, padding: '5px 0', textDecoration: 'none' }}>{t}</a>
          ))}
        </div>
        <div>
          <h4 style={{ color: '#fff', fontSize: 13, fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Cumplimiento</h4>
          {['Privacidad de datos', 'Términos de servicio', 'Sobre KLG', 'Blog técnico'].map((t) => (
            <a key={t} href="#" onClick={(e) => e.preventDefault()} style={{ display: 'block', color: 'rgba(255,255,255,0.72)', fontSize: 14, padding: '5px 0', textDecoration: 'none' }}>{t}</a>
          ))}
        </div>
      </div>
      <div className="klg-wrap-row" style={{ borderTop: '1px solid rgba(255,255,255,0.12)', padding: '18px var(--gutter)', maxWidth: 'var(--container)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', gap: 10, fontSize: 12, fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.5)' }}>
        <span>© 2026 KLG AUDICON · RIF J-00000000-0</span>
        <span>Caracas · Venezuela</span>
      </div>
    </footer>
  );
}

function FloatingWA() {
  return <WhatsAppFab className="klg-wa-pulse" phone="+58 412 1234567" label="Agendar Reunión" message="Hola KLG, quiero agendar una reunión." />;
}

Object.assign(window, { Icon, SiteNav, SiteFooter, FloatingWA });
