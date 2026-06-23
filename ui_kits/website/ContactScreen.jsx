// Contact — segmented smart form + WhatsApp, with a success state
const { Button, Badge, Card, Input } = window.DesignSystem_b17006;

function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const [service, setService] = React.useState('Auditoría Financiera');
  return (
    <section className="klg-split" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-12) var(--gutter)', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'var(--space-10)', alignItems: 'start' }}>
      <div>
        <span className="klg-eyebrow">Hablemos</span>
        <h1 style={{ fontSize: 'var(--fs-h1)', marginTop: 12 }}>Tu próxima conciliación empieza con un mensaje</h1>
        <p style={{ fontSize: 'var(--fs-lead)', color: 'var(--text-body)', marginTop: 10, maxWidth: 440 }}>
          Cuéntanos sobre tu empresa. Respondemos en menos de 24 horas con un próximo paso concreto.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 30 }}>
          {[['message-circle', 'WhatsApp', '+58 412 123 4567', 'var(--whatsapp)'], ['mail', 'Correo', 'contacto@klgaudicon.com', 'var(--cobalt-700)'], ['map-pin', 'Oficina', 'Caracas, Venezuela', 'var(--bronze-600)']].map(([ic, k, v, c]) => (
            <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--bg-surface)', boxShadow: 'var(--shadow-sm)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: c }}><Icon n={ic} s={20} /></span>
              <div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{k}</div>
                <div style={{ fontWeight: 600, color: 'var(--text-strong)' }}>{v}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 28, padding: 16, borderRadius: 'var(--radius-md)', background: 'var(--cobalt-050)', display: 'flex', gap: 12, alignItems: 'center' }}>
          <Icon n="shield-check" s={22} />
          <span style={{ fontSize: 13, color: 'var(--cobalt-800)' }}>Cumplimiento y privacidad: tus datos de nómina y auditoría se tratan con confidencialidad profesional.</span>
        </div>
      </div>

      <Card style={{ padding: 'var(--space-8)' }}>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '40px 10px' }}>
            <span style={{ width: 64, height: 64, borderRadius: '50%', background: '#E5F3EC', color: 'var(--success)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><Icon n="check" s={32} /></span>
            <h3>Mensaje recibido</h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: 320, margin: '0 auto 22px' }}>Un asesor de KLG te contactará en menos de 24 horas sobre <strong>{service}</strong>.</p>
            <Button variant="secondary" onClick={() => setSent(false)}>Enviar otro</Button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="klg-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Input label="Nombre y apellido" placeholder="Tu nombre" icon={<Icon n="user" s={18} />} required />
              <Input label="Empresa" placeholder="Razón social" icon={<Icon n="building-2" s={18} />} />
            </div>
            <div className="klg-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Input label="Correo corporativo" type="email" placeholder="empresa@correo.com" icon={<Icon n="mail" s={18} />} required />
              <Input label="RIF" placeholder="J-00000000-0" icon={<Icon n="hash" s={18} />} />
            </div>
            <Input label="Servicio de interés" as="select" value={service} onChange={(e) => setService(e.target.value)}
              options={['Auditoría Financiera', 'Outsourcing Contable', 'Outsourcing de Nómina', 'Estrategia Tributaria', 'Conciliación Bancaria Express', 'Certificación de Ingresos']} />
            <Input label="¿Cómo podemos ayudarte?" as="textarea" placeholder="Cuéntanos sobre tu situación contable o fiscal…" />
            <Button variant="cta" size="lg" fullWidth as="button" icon={<Icon n="send" s={18} />}>Enviar solicitud</Button>
            <span style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center' }}>Al enviar aceptas nuestra política de privacidad de datos.</span>
          </form>
        )}
      </Card>
    </section>
  );
}

Object.assign(window, { ContactScreen });
