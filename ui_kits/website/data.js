// KLG AUDICON — shared site data + helpers for the UI kit
const KLG_SERVICES = [
  { id:'auditoria', icon:'search-check', tone:'cobalt',
    title:'Auditorías financieras y administrativas',
    blurb:'Verificamos que tus estados financieros sean reales, detectamos irregularidades y emitimos una opinión profesional independiente.',
    tag:'Opinión independiente' },
  { id:'outsourcing', icon:'calculator', tone:'cobalt',
    title:'Outsourcing contable',
    blurb:'Tu contabilidad completa en nuestras manos: estados financieros, libros legales, conciliaciones y ajuste por inflación.',
    tag:'Mensual' },
  { id:'nomina', icon:'users-round', tone:'cobalt',
    title:'Outsourcing de nómina',
    blurb:'Procesamos tu nómina, gestionamos los reportes parafiscales (INCES, Seguridad Social) y liquidamos beneficios laborales sin errores.',
    tag:'Parafiscales' },
  { id:'tributos', icon:'shield-check', tone:'cobalt',
    title:'Cumplimiento tributario',
    blurb:'IVA, ISLR, IGTF, IGP y retenciones declaradas correctamente y en plazo. Cero multas. Cero sorpresas del SENIAT.',
    tag:'SENIAT' },
  { id:'conciliacion', icon:'banknote', tone:'bronze',
    title:'Conciliaciones bancarias express',
    blurb:'Comparamos tus libros contra los estados de cuenta bancarios y entregamos el reporte de diferencias en 24 horas.',
    tag:'24h', gancho:true },
  { id:'costos', icon:'layers', tone:'cobalt',
    title:'Estructuras de costos',
    blurb:'Diseñamos la estructura de costos de tu empresa, identificamos ineficiencias y determinamos tu cadena de valor real.',
    tag:'Consultoría' },
];

const KLG_SECTORS = [
  { name:'Manufactura', icon:'factory' },
  { name:'Retail & Comercio', icon:'shopping-bag' },
  { name:'Construcción', icon:'building-2' },
  { name:'Tecnología', icon:'cpu' },
  { name:'Salud', icon:'heart-pulse' },
  { name:'Maquinaria', icon:'cog' },
  { name:'Logística', icon:'truck' },
  { name:'Servicios', icon:'briefcase' },
];

const KLG_REASONS = [
  { icon:'target', title:'Precisión técnica, no estimaciones',
    body:'Cada declaración, ajuste y conciliación se respalda con documentación verificable. No improvisamos con tus obligaciones fiscales.' },
  { icon:'scale', title:'Conocimiento profundo de la normativa venezolana',
    body:'SENIAT, INCES, Seguridad Social, Ley de Pensiones, IGTF. Trabajamos a diario con la normativa fiscal vigente en Venezuela.' },
  { icon:'timer', title:'Respuesta rápida cuando más importa',
    body:'Conciliaciones bancarias en 24 horas y asesoría fiscal disponible cuando una notificación del SENIAT no puede esperar.' },
  { icon:'lock', title:'Confidencialidad total',
    body:'La información financiera de tu empresa está protegida bajo los principios de confidencialidad profesional y ética contable.' },
];

const KLG_POSTS = [
  { id:1, cat:'SENIAT', read:'5 min', title:'Checklist: 10 errores contables que sanciona el SENIAT',
    excerpt:'Los descuidos más costosos en libros legales y cómo blindarte antes de una fiscalización.', feat:true },
  { id:2, cat:'Tributos', read:'4 min', title:'Ajuste por inflación: qué cambió este ejercicio fiscal',
    excerpt:'Guía práctica para reexpresar tus estados financieros sin perder razonabilidad.' },
  { id:3, cat:'Nómina', read:'3 min', title:'Reportes parafiscales: calendario INCES y Seguridad Social',
    excerpt:'Fechas clave y un método para no volver a pagar recargos.' },
  { id:4, cat:'Eficiencia', read:'6 min', title:'Outsourcing contable vs. equipo interno: el costo real',
    excerpt:'Cómo comparar honorarios, riesgo de sanción y horas-hombre de forma honesta.' },
];

Object.assign(window, { KLG_SERVICES, KLG_SECTORS, KLG_REASONS, KLG_POSTS });
