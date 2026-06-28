// Shared chrome: WhatsApp FAB. Header → header.html, Footer → footer.html.
const { Button, WhatsAppFab } = window.DesignSystem_b17006;

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

function FloatingWA() {
  // Oculto mientras el banner (hero oscuro) es visible Y al llegar al footer.
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      const pastBanner = window.scrollY > window.innerHeight * 0.7;
      const footer = document.querySelector('footer[data-nav-theme]');
      let footerVisible = false;
      if (footer) {
        const r = footer.getBoundingClientRect();
        footerVisible = r.top < window.innerHeight - 40;
      }
      setShow(pastBanner && !footerVisible);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 60,
      opacity: show ? 1 : 0,
      transform: show ? 'translateY(0)' : 'translateY(24px)',
      pointerEvents: show ? 'auto' : 'none',
      transition: 'opacity 360ms var(--ease-out), transform 360ms var(--ease-out)',
    }}>
      <WhatsAppFab position="static" className="klg-wa-pulse" phone="+58 412 1234567" label="Agendar Reunión" message="Hola KLG, quiero agendar una reunión." />
    </div>
  );
}

// Botón "volver arriba" minimalista — discreto, no choca con el de WhatsApp.
function BackToTop() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const [hov, setHov] = React.useState(false);
  return (
    <button aria-label="Volver al inicio" title="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        position: 'fixed', bottom: 112, right: 30, zIndex: 59,
        width: 38, height: 38, borderRadius: 11, cursor: 'pointer',
        background: 'rgba(9,13,30,0.55)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        border: `1px solid ${hov ? 'var(--gold-500)' : 'rgba(255,255,255,0.22)'}`,
        color: hov ? 'var(--gold-300)' : 'rgba(255,255,255,0.82)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        opacity: show ? 1 : 0, transform: show ? 'translateY(0)' : 'translateY(16px)',
        pointerEvents: show ? 'auto' : 'none',
        transition: 'opacity 320ms var(--ease-out), transform 320ms var(--ease-out), color 200ms, border-color 200ms',
      }}>
      <Icon n="arrow-up" s={18} />
    </button>
  );
}

Object.assign(window, { Icon, FloatingWA, BackToTop });
