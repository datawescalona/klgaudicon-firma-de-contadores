// Service detail landing page
const { Button, Badge, Card, IconTile } = window.DesignSystem_b17006;

function ServiceScreen({ serviceId, go }) {
  const s = (window.KLG_SERVICES.find((x) => x.id === serviceId)) || window.KLG_SERVICES[0];
  const deliverables = {
    auditoria: ['Razonabilidad de estados financieros', 'Evaluación de control interno', 'Detección de fraudes', 'Carta de recomendaciones'],
    outsourcing: ['Registro contable mensual', 'Conciliaciones bancarias', 'Ajuste por inflación', 'Libros legales al día'],
    nomina: ['Cálculo de nómina', 'Reportes INCES y Seguridad Social', 'Finiquitos laborales', 'Recibos digitales'],
    tributos: ['Declaración de IVA e ISLR', 'Retenciones IVA/ISLR', 'IGTF e IGP', 'Planificación fiscal'],
    conciliacion: ['Conciliación en 24h', 'Detección de partidas', 'Informe ejecutivo', 'Soporte por WhatsApp'],
    certificaciones: ['Certificación de ingresos', 'Validación documental', 'Respaldo profesional', 'Entrega express'],
  }[s.id] || [];

  return (
    <div>
      <section style={{ background: 'var(--bg-sunken)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-12) var(--gutter) var(--space-10)' }}>
          <button onClick={() => go('home')} style={{ background: 'none', border: 0, color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontSize: 14, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, padding: 0, marginBottom: 22 }}>
            <Icon n="arrow-left" s={16} /> Inicio
          </button>
          <div className="klg-split" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 'var(--space-8)', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', gap: 10, marginBottom: 18 }}>
                <Badge tone={s.gancho ? 'bronze' : 'cobalt'} dot={s.gancho}>{s.tag}</Badge>
              </div>
              <h1 style={{ fontSize: 'var(--fs-h1)' }}>{s.title}</h1>
              <p style={{ fontSize: 'var(--fs-lead)', color: 'var(--text-body)', maxWidth: 520, marginTop: 12 }}>{s.blurb}</p>
              <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
                <Button variant="cta" size="lg" onClick={() => go('contacto')}>Solicitar propuesta</Button>
                <Button variant="ghost" size="lg" icon={<Icon n="message-circle" s={18} />} onClick={() => go('contacto')}>Consultar por WhatsApp</Button>
              </div>
            </div>
            <IconTile icon={<Icon n={s.icon} s={48} />} tone={s.tone} size={140} style={{ justifySelf: 'center', borderRadius: 'var(--radius-xl)' }} />
          </div>
        </div>
      </section>

      <section className="klg-2col" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-10) var(--gutter)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)' }}>
        <div>
          <span className="klg-eyebrow">Qué incluye</span>
          <h2 style={{ marginTop: 10, fontSize: 'var(--fs-h2)' }}>Entregables claros, sin letra pequeña</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 22 }}>
            {deliverables.map((d) => (
              <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--cobalt-050)', color: 'var(--cobalt-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon n="check" s={16} /></span>
                <span style={{ fontSize: 15, color: 'var(--text-body)' }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
        <Card accent>
          <span className="klg-eyebrow">Cómo trabajamos</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 18 }}>
            {[['01', 'Diagnóstico', 'Revisamos tu situación contable y fiscal actual.'], ['02', 'Propuesta', 'Alcance y honorarios claros en 48h.'], ['03', 'Ejecución', 'Procesamos con reportes que entiendes.'], ['04', 'Acompañamiento', 'Soporte continuo por WhatsApp.']].map(([n, t, d]) => (
              <div key={n} style={{ display: 'flex', gap: 14 }}>
                <span className="klg-figure" style={{ fontSize: 18, fontWeight: 600, color: 'var(--cyan-600)' }}>{n}</span>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 15 }}>{t}</div>
                  <div style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}

Object.assign(window, { ServiceScreen });
