// Root app — multi-page aware router.
// In the live preview it behaves as an SPA; the generated GitHub Pages build
// sets window.KLG_PAGES=true so each click navigates to a real, indexable URL.
const { FloatingWA, SiteNav, SiteFooter, BackToTop } = window;

// view id  ->  relative path (folder per route, trailing slash)
const KLG_ROUTES = {
  'home': '',
  'servicio:auditoria': 'auditorias/',
  'servicio:outsourcing': 'outsourcing-contable/',
  'servicio:nomina': 'outsourcing-de-nomina/',
  'servicio:tributos': 'cumplimiento-tributario/',
  'servicio:costos': 'consultoria-costos/',
  'servicio:consultoria': 'consultoria-asesoria-contable-fiscal/',
  'blog': 'blog/',
  'contacto': 'contactanos/',
};
window.KLG_ROUTES = KLG_ROUTES;

function App() {
  const [view, setView] = React.useState(window.KLG_INITIAL || 'home');
  const go = (v) => {
    if (window.KLG_PAGES) {
      const base = window.KLG_BASE || '';
      const path = KLG_ROUTES[v] != null ? KLG_ROUTES[v] : '';
      window.location.href = base + path;
      return;
    }
    setView(v);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  let screen;
  if (view === 'home') screen = <window.HomeScreen go={go} />;
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
      <BackToTop />
    </div>
  );
}

// Services index page (all services, reuses ServiceCard grid)
const { Badge, ServiceCard } = window.DesignSystem_b17006;

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
