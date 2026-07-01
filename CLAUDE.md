# KLG AUDICON — contexto persistente

## Arquitectura
- Sitio estático servido en GitHub Pages.
- `components/header.html` y `components/footer.html` son el ÚNICO origen de esos componentes — no duplicar su contenido, editar solo ahí. Cada página los inyecta vía loader.
- CSS modularizado en `css/`: `variables.css`, `layout.css`, `header.css`, `footer.css`, `buttons.css`, `forms.css`, `cards.css`, `responsive.css`.
- JS organizado en `main.js`, `components.js`, `menu.js`, `utils.js`.
- Páginas individuales (`index.html`, `auditorias/index.html`, `blog/index.html`, `outsourcing-contable/index.html`, `contactanos/index.html`, `consultoria-costos/index.html`, `outsourcing-de-nomina/index.html`, `cumplimiento-tributario/index.html`) son bundles standalone: cada una lleva su propia copia inline del CSS/JS compilado (data.js y app.jsx sí van inline por página; header.html y footer.html se cargan en runtime desde su único origen, no hace falta propagarlos). Cuando se ajusta una regla compartida (ej. `css/responsive.css` o `data.js`), hay que propagarla a las 8 copias inline para que se vea igual en todo el sitio. Las carpetas viejas (`tributos/`, `auditoria/`, `contable/`, `costos/`, `nomina/`, `contacto/`) quedaron como redirects automáticos a las nuevas.
- Páginas estáticas aún sirven CSS inline — pendiente migrarlas a `styles.css`.

## Reglas de trabajo
- Trabajar por etapas, una a la vez.
- Al terminar cada cambio, decir qué archivos se modificaron.
- Si hay riesgo de romper algo, avisar antes de actuar.
- Respetar la arquitectura de componentes ya establecida (`components/header.html`, `components/footer.html`).

## Estado actual del menú principal (implementado)
Header con 5 categorías desplegables + Consultoría directo + botón CTA "Contáctanos". "Inicio" NO va en el menú — el logo ya cumple esa función (clic en el logo lleva al home) en PC, tablet y móvil.

Cada dropdown de categoría (desktop) es un grid de 2 columnas (ícono + título + descripción de una línea por hija) + un panel destacado a la derecha con imagen (vía `<image-slot>`, el usuario debe arrastrar su foto), badge "Más buscado", el nombre del servicio con más volumen de búsqueda de esa categoría, una frase de valor corta, y enlace "Quiero esto". No lleva "Ver todo X".

- **Tributario** → `/cumplimiento-tributario/` — 5 hijas: Declaración de ISLR, Declaración de IVA, Declaración de IGTF, Declaración de IGP, Impuesto a las Pensiones. (Se quitaron "Retenciones de IVA" y "Retenciones de ISLR" — no van). Destacado: Declaración de IVA.
- **Auditorías** → `/auditorias/` — 6 hijas: Auditoría Financiera, de Gestión y Administrativa, de Estados Financieros, Interna, Externa, de Cumplimiento. (Se quitó "Auditoría de Sistemas" — no va). Destacado: Auditoría Financiera.
- **Contable** → `/outsourcing-contable/` — 5 hijas sin cambios. Destacado: Conciliaciones Bancarias.
- **Costos** → `/consultoria-costos/` — 3 hijas sin cambios. Destacado: Estructura de Costos.
- **Nómina** → `/outsourcing-de-nomina/` — 3 hijas sin cambios. Destacado: Finiquitos y Prestaciones.
- **Consultoría** (sin submenú) → `/consultoria-asesoria-contable-fiscal/`.
- **Botón CTA "Contáctanos"** → `/contactanos/`.

Datos del menú (incluye `featured` por categoría) en `ui_kits/website/data.js` (`KLG_NAV_MENU`), lógica del dropdown en `components/header.html` (`CatDropdown`).

## Pendiente (próxima etapa)
- Crear las 27 páginas hijas del submenú (declaracion-islr, auditoria-financiera, etc.) y `/consultoria-asesoria-contable-fiscal/` — hoy esos enlaces dan 404 a propósito, se construyen página por página.
- El usuario debe arrastrar una foto real a cada `<image-slot>` de los paneles destacados del menú (uno por categoría).
- "Blog" existe como sección del sitio pero NO va en el header — vive en el footer.
