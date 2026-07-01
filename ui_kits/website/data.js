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

// Menú principal — 5 categorías con submenú (ícono + título corto + descripción de una línea)
// + "Consultoría" como enlace directo sin submenú. Rutas nuevas (carpeta padre/hija, con guiones).
const KLG_NAV_MENU = [
  { id: 'tributario', label: 'Tributario', href: 'cumplimiento-tributario/',
    featured: { label: 'Declaración de IVA', href: 'cumplimiento-tributario/declaracion-iva/', desc: 'Tu declaración de IVA lista y a tiempo, cada mes.' },
    children: [
    { label: 'Declaración de ISLR', href: 'cumplimiento-tributario/declaracion-islr/', icon: 'file-text', desc: 'Declaración anual de ISLR lista antes del vencimiento.' },
    { label: 'Declaración de IVA', href: 'cumplimiento-tributario/declaracion-iva/', icon: 'receipt', desc: 'Declaración mensual de IVA sin errores ni retrasos.' },
    { label: 'Declaración de IGTF', href: 'cumplimiento-tributario/declaracion-igtf/', icon: 'banknote', desc: 'Impuesto a las Grandes Transacciones Financieras al día.' },
    { label: 'Declaración de IGP', href: 'cumplimiento-tributario/declaracion-igp/', icon: 'building-2', desc: 'Impuesto a los Grandes Patrimonios sin sorpresas.' },
    { label: 'Impuesto a las Pensiones', href: 'cumplimiento-tributario/impuesto-pensiones/', icon: 'piggy-bank', desc: 'Cálculo y cumplimiento del impuesto a las pensiones.' },
  ] },
  { id: 'auditorias', label: 'Auditorías', href: 'auditorias/',
    featured: { label: 'Auditoría Financiera', href: 'auditorias/auditoria-financiera/', desc: 'Verificamos que tus estados financieros reflejen la realidad.' },
    children: [
    { label: 'Auditoría Financiera', href: 'auditorias/auditoria-financiera/', icon: 'file-search', desc: 'Verificamos que tus estados financieros reflejen la realidad.' },
    { label: 'Auditoría de Gestión y Administrativa', href: 'auditorias/auditoria-gestion-administrativa/', icon: 'clipboard-check', desc: 'Evaluamos la eficiencia de tus procesos administrativos.' },
    { label: 'Auditoría de Estados Financieros', href: 'auditorias/auditoria-estados-financieros/', icon: 'file-bar-chart', desc: 'Opinión profesional independiente sobre tus estados financieros.' },
    { label: 'Auditoría Interna', href: 'auditorias/auditoria-interna/', icon: 'shield', desc: 'Control interno permanente para prevenir riesgos.' },
    { label: 'Auditoría Externa', href: 'auditorias/auditoria-externa/', icon: 'search', desc: 'Revisión independiente exigida por accionistas o entes reguladores.' },
    { label: 'Auditoría de Cumplimiento', href: 'auditorias/auditoria-cumplimiento/', icon: 'scale', desc: 'Verificamos el cumplimiento normativo y regulatorio.' },
  ] },
  { id: 'contable', label: 'Contable', href: 'outsourcing-contable/',
    featured: { label: 'Conciliaciones Bancarias', href: 'outsourcing-contable/conciliaciones-bancarias/', desc: 'Tu conciliación bancaria lista en 24 horas.' },
    children: [
    { label: 'Conciliaciones Bancarias', href: 'outsourcing-contable/conciliaciones-bancarias/', icon: 'banknote', desc: 'Diferencias entre libros y banco resueltas en 24 horas.' },
    { label: 'Ajuste por Inflación', href: 'outsourcing-contable/ajuste-por-inflacion/', icon: 'trending-up', desc: 'Reexpresión de tus estados financieros según la normativa vigente.' },
    { label: 'Libros Legales', href: 'outsourcing-contable/libros-legales/', icon: 'book-marked', desc: 'Libros contables al día y listos para cualquier fiscalización.' },
    { label: 'Análisis de Cuentas', href: 'outsourcing-contable/analisis-de-cuentas/', icon: 'list-checks', desc: 'Depuración y análisis detallado de tus cuentas contables.' },
    { label: 'Balances de Comprobación', href: 'outsourcing-contable/balances-de-comprobacion/', icon: 'clipboard-list', desc: 'Balances de comprobación preparados con precisión mensual.' },
  ] },
  { id: 'costos', label: 'Costos', href: 'consultoria-costos/',
    featured: { label: 'Estructura de Costos', href: 'consultoria-costos/estructura-de-costos/', desc: 'Diseñamos la estructura de costos real de tu operación.' },
    children: [
    { label: 'Estructura de Costos', href: 'consultoria-costos/estructura-de-costos/', icon: 'layers', desc: 'Diseñamos la estructura de costos real de tu operación.' },
    { label: 'Estudio de Procesos Productivos', href: 'consultoria-costos/estudio-procesos-productivos/', icon: 'settings', desc: 'Identificamos ineficiencias en tus procesos productivos.' },
    { label: 'Análisis de Cadena de Valor', href: 'consultoria-costos/cadena-de-valor/', icon: 'workflow', desc: 'Mapeamos tu cadena de valor para decisiones más rentables.' },
  ] },
  { id: 'nomina', label: 'Nómina', href: 'outsourcing-de-nomina/',
    featured: { label: 'Finiquitos y Prestaciones', href: 'outsourcing-de-nomina/finiquitos-prestaciones/', desc: 'Cálculo correcto de finiquitos y prestaciones sociales.' },
    children: [
    { label: 'Finiquitos y Prestaciones', href: 'outsourcing-de-nomina/finiquitos-prestaciones/', icon: 'user-minus', desc: 'Cálculo correcto de finiquitos y prestaciones sociales.' },
    { label: 'Reportes Parafiscales', href: 'outsourcing-de-nomina/reportes-parafiscales-inces/', icon: 'file-text', desc: 'Reportes de INCES y Seguridad Social siempre al día.' },
    { label: 'Recibos y Reportes de Nómina', href: 'outsourcing-de-nomina/recibos-reportes-nomina/', icon: 'receipt-text', desc: 'Recibos de pago y reportes de nómina sin errores.' },
  ] },
];
const KLG_NAV_CONSULTORIA = { label: 'Consultoría', href: 'consultoria-asesoria-contable-fiscal/' };

Object.assign(window, { KLG_SERVICES, KLG_SECTORS, KLG_REASONS, KLG_POSTS, KLG_NAV_MENU, KLG_NAV_CONSULTORIA });
