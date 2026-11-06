# KLG AUDICON · Entrada operativa

Proyecto independiente: `klg-audicon-web`. No pertenece a CH Retail ni hereda capacidades de su CRM.

## Responsabilidades

- Williams decide prioridades y autoriza producción.
- IA Manager/Williams es el PM. Su expediente central está en `datawescalona/ia-manager`, `projects/klg-audicon-web/README.md`.
- Codex o Claude Code es el ejecutor técnico; registrar flujo, ejecutor, capacidad, modelo recomendado y realmente utilizado, esfuerzo y evidencia.
- Modelo recomendado: Luna para tareas simples, Terra para trabajo técnico normal, Sol para migraciones, auditorías, VPS y seguridad, Astra para decisiones críticas. Ajustar esfuerzo al lote y comunicarlo al comenzar.

## Apertura

1. Leer `gestion/README.md`, `docs/seo/README.md`, `data/tasks.json` y la última sesión.
2. Consultar en vivo IA Manager: `AGENTS.md`, `core/orchestrator/registry.json` y `core/skills/seo-orquestador/SKILL.md`. No copiar habilidades ni reglas particulares de otros proyectos.
3. Para SEO activar `seo-orquestador`, validar System SEO en vivo y seleccionar el arnés construido que corresponda al módulo. Los arneses y conocimientos permanecen en `datawescalona/system-seo`; aquí se guardan resultados del proyecto y enlaces de origen.
4. Comprobar main remoto, rama, cambios sin subir y versión activa antes de modificar. No descartar trabajo ni hacer reset sobre un clon ajeno.

## Estado y cambios

Las tareas detalladas SEO se conservan en `data/tasks.json` de KLG; el expediente central de IA Manager conserva coordinación e índices, con enlace a este registro. No mantener dos estados contradictorios para la misma tarea. Los identificadores SEO propios no reemplazan los task-310 a task-316 centrales.

Un dato sin fuente queda pendiente: demanda, SERP, posición, indexación, métricas, identidad y credenciales no se inventan. Una candidata del menú no autoriza crear una página. La arquitectura final se aprueba después de investigar y resolver intenciones compartidas.

Los documentos y el panel de `docs/seo/` son gestión interna del proyecto dentro de este repositorio público: no incluir información confidencial. `scripts/build.mjs` no los publica en dist. No añadirlos al constructor público ni al sitemap del sitio.

## Publicación y cierre

Trabajar en rama y presentar diff, pruebas y SHA antes de solicitar autorización para producción. Main activa Cloudflare: no integrar ni ejecutar deploy sin autorización explícita para el lote. Un push a rama puede generar una versión de vista previa sin tráfico productivo.

Al terminar, actualizar tareas afectadas, sesión y enlaces de gestión; verificar commit remoto. Distinguir preparado, propuesto, integrado y verificado en producción. Respetar las reglas de componentes y marca de `CLAUDE.md` y `SKILL.md`.
