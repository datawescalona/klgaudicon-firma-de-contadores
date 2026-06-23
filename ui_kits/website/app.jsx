// Root app — routes between marketing screens with a faux router
const { FloatingWA, SiteNav, SiteFooter } = window;

function App() {
  const [view, setView] = React.useState('home');
  const go = (v) => { setView(v); window.scrollTo({ top: 0, behavior: 'instant' }); };

  let screen;
  if (view === 'home') screen = <window.HomeScreen go={go} />;
  else if (view === 'servicios') screen = <window.ServicesPage go={go} />;
  else if (view.startsWith('servicio:')) screen = <window.ServiceScreen serviceId={view.split(':')[1]} go={go} />;
  else if (view === 'blog') screen = <window.BlogScreen go={go} />;
  else if (view === 'contacto') screen = <window.ContactScreen go={go} />;
  else screen = <window.HomeScreen go={go} />;

  const navView = view;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SiteNav view={navView} go={go} />
      <main style={{ flexGrow: 1 }}>{screen}</main>
      <SiteFooter go={go} />
      <FloatingWA />
    </div>
  );
}

// Services index page (all services, reuses ServiceCard grid)
const { Badge, ServiceCard } = window.DesignSystem_b17006;
function ServicesPage({ go }) {
  return (
    <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-12) var(--gutter)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
        <span className="klg-eyebrow">Servicios</span>
        <h1 style={{ fontSize: 'var(--fs-h1)', marginTop: 10 }}>Todo lo contable, bajo un mismo techo</h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: 520, margin: '8px auto 0' }}>Desde auditoría de alto nivel hasta la conciliación express que resuelve tu semana.</p>
      </div>
      <div className="klg-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
        {window.KLG_SERVICES.map((s) => (
          <ServiceCard key={s.id} icon={<window.Icon n={s.icon} s={24} />} title={s.title} tone={s.tone} tilt={false}
            badge={<Badge tone={s.gancho ? 'bronze' : 'ink'} className={s.gancho ? 'klg-badge-pulse' : undefined}>{s.tag}</Badge>}
            cta={s.gancho ? 'Quiero esto' : 'Ver servicio'} href="#" onClick={(e) => { e.preventDefault(); go('servicio:' + s.id); }}>
            {s.blurb}
          </ServiceCard>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { ServicesPage });
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
