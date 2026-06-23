// Blog — inbound engine index with a featured post
const { Button, Badge, Card } = window.DesignSystem_b17006;

function BlogScreen({ go }) {
  const posts = window.KLG_POSTS;
  const feat = posts.find((p) => p.feat) || posts[0];
  const rest = posts.filter((p) => p !== feat);
  return (
    <section style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-12) var(--gutter)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
        <span className="klg-eyebrow">Motor inbound</span>
        <h1 style={{ fontSize: 'var(--fs-h1)', marginTop: 10 }}>Educación contable para empresarios</h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: 520, margin: '8px auto 0' }}>Actualidad SENIAT, eficiencia financiera y cómo no volver a pagar una multa evitable.</p>
      </div>

      <a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: 'none', display: 'block', marginBottom: 'var(--space-8)' }}>
        <Card interactive className="klg-split" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 0, padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: 'var(--space-8)' }}>
            <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
              <Badge tone="bronze">Destacado</Badge>
              <Badge tone="ink">{feat.cat}</Badge>
            </div>
            <h2 style={{ fontSize: 'var(--fs-h2)' }}>{feat.title}</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: 8 }}>{feat.excerpt}</p>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--cobalt-700)', fontWeight: 700, fontSize: 14, marginTop: 14 }}>Leer guía <Icon n="arrow-right" s={16} /></span>
          </div>
          <div style={{ background: 'linear-gradient(135deg, var(--cobalt-700), var(--cobalt-900))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.9)', minHeight: 240 }}>
            <Icon n="file-check-2" s={72} />
          </div>
        </Card>
      </a>

      <div className="klg-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
        {rest.map((p, i) => (
          <a key={p.id} href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: 'none' }}>
            <Card interactive style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <Badge tone="cobalt">{p.cat}</Badge>
                <span className="klg-figure" style={{ fontSize: 12, color: 'var(--text-muted)' }}>{p.read}</span>
              </div>
              <h3 style={{ fontSize: 'var(--fs-h4)', flexGrow: 1 }}>{p.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 6 }}>{p.excerpt}</p>
            </Card>
          </a>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
        <Button variant="secondary" onClick={() => go('contacto')}>Suscríbete al boletín técnico</Button>
      </div>
    </section>
  );
}

Object.assign(window, { BlogScreen });
