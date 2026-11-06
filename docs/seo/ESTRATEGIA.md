# KLG AUDICON · Arquitectura y operación SEO

Estado: propuesta de trabajo, 6 de noviembre de 2026. No publicada. Base del inventario: auditoría de esta conversación y código local 553236b, cuyo contenido coincidía con main 55f13ae en la revisión anterior. Revalidar SHA y producción antes de integrar.

## Objetivo

Convertir la estrategia en requisitos por URL, cambios revisables y evidencia. La hipótesis de negocio es captar solicitudes de empresas para servicios contables y auditoría en Caracas/Venezuela; falta confirmar mercado, servicios prioritarios, capacidad y conversión real. No se han obtenido volúmenes, posiciones, datos de Search Console ni validación SERP. No se promete una posición en Google.

## Método de System SEO aplicado

M03 investigación de palabras clave → M04 arquitectura → M06 URLs, M07 encabezados, M08 contenido, M09 metadatos, M10 enlaces, M11 imágenes → M12 robots, M13 sitemap, M14 datos estructurados, M15 indexación, M16 canibalización → M17 móvil, M18 rendimiento → M30 Search Console y M39 SEO local. M64 medición cuando exista una conversión real.

Se consultaron los arneses locales M03, M04, M05, M13 y M16 y los textos de arquitectura y especificaciones de sitemap. Los otros módulos son rutas de trabajo propuestas, todavía no ejecutadas. No se modificó System SEO ni se reconstruyeron sus arneses. Esta propuesta adapta su método a un panel; no representa una arquitectura final aprobada ni una investigación completa.

Reglas: una necesidad de búsqueda por página, varias variantes de la misma intención pueden pertenecer a ella. No crear una URL por palabra clave. No agrupar ni separar sin evidencia de resultados de búsqueda o decisión explícita documentada. Las 23 URLs del menú son candidatas heredadas del código, no 23 páginas que deban crearse obligatoriamente. Revisar especialmente auditoría financiera/estados financieros/externa y el solapamiento tributos/cumplimiento tributario.

## Pestaña SEO del panel de gestión

Vistas: Resumen, Arquitectura y fichas, Hitos, Reglas de código. El HTML adjunto es una primera versión local independiente, pendiente de confirmar el panel final. No es una ruta del sitio público, no tiene autenticación ni sincronización multiusuario y no se debe subir como carpeta de activos públicos.

Cada ficha permite completar palabra principal, secundarias, intención, mercado, volumen y fuente/fecha, evidencia SERP, decisión de agrupar/separar, objetivo/CTA, title, descripción, H1, contenido, canonical propuesto, enlaces, responsable y notas. Los cambios se guardan en este navegador cuando el almacenamiento está disponible; exportar JSON para conservarlos. Cambiar una ficha no modifica el repositorio ni producción. El JSON exportado es un borrador hasta revisión y versionado.

## Hitos y condiciones de cierre

| Hito | Entrega | Evidencia necesaria |
|---|---|---|
| H0 Negocio y dominio | Mercado, servicios prioritarios, datos reales, destino de solicitudes y dominio preferido | Confirmación del responsable; prueba de recepción cuando se habilite contacto |
| H1 Investigación | Términos, intención, demanda, competidores y fuente con fecha/localización | Export real y SERP por consultas; sin cifras inventadas |
| H2 Arquitectura | Mapa aprobado, grupos, página propietaria de intención, URLs nuevas/conservadas/fusionadas y redirecciones | Matriz de decisiones; resolver las 23 candidatas y tributos |
| H3 Fichas y contenido | Brief por URL, metadatos, H1, oferta, pruebas, CTA y enlaces | Revisión de contenido y revisión profesional de afirmaciones contables/fiscales |
| H4 Código | Metadatos por página, canonical, enlaces rastreables, contenido renderizable, redirecciones y sitemap | Validación sobre build exacto, informe por URL y SHA |
| H5 Producción | Despliegue autorizado, comprobaciones HTTP/renderizado/canonical/sitemap | Autorización, versión activa y resultado en URL pública |
| H6 Seguimiento | Search Console, indexación, clics, consultas y solicitudes válidas | Acceso y datos reales, periodo y comparación; no confundir envío del sitemap con indexación |

Estados: pendiente, en curso, bloqueado, listo para revisión. La verificación de producción debe registrarla quien haga la comprobación, con fecha, URL, SHA y resultado. Una casilla no sustituye esa evidencia. No asignar porcentajes de posicionamiento a una lista de tareas.

## Contrato para cada URL en el código

1. Registro único de ruta, estado (candidata/publicable/redirección/excluida), intención y ficha aprobada. No generar páginas ni sitemap desde simples candidatas.
2. Title y descripción específicos y revisados; H1 principal coherente con el servicio. Contenido útil visible y enlaces HTML rastreables. La comprobación de H1 debe hacerse en página renderizada mientras el sitio dependa de React/Babel.
3. Canonical absoluto coherente con el dominio elegido. Evitar contradicciones entre enlaces internos, redirecciones y sitemap. No fijar hoy el dominio corporativo escrito en el footer: su control no está verificado.
4. URLs publicables con respuesta 200, contenido completo, indexación permitida según estrategia y sin canonical a otra URL. Una respuesta 200 por sí sola no valida el contenido.
5. Sitemap XML generado solo con páginas aprobadas, canónicas e indexables. No incluir 404, redirecciones, noindex ni panel interno. lastmod solo con fecha real de cambio relevante; si no existe, omitirlo. Referencia en robots y envío en Search Console tras aprobación.
6. Redirecciones permanentes directas para rutas sustituidas después de aprobar el mapeo; sin cadenas ni bucles. Revisar las cinco rutas antiguas detectadas en la auditoría.
7. Datos estructurados basados en información real visible y aplicable; no inventar dirección, reseñas, puntuaciones ni credenciales. Su validez no garantiza resultados enriquecidos.
8. Comprobar móvil, navegación, imágenes y rendimiento con herramientas; registrar mediciones reales. Compilar JSX y retirar dependencias de desarrollo es una tarea técnica pendiente, no un hito ya superado.

La futura integración debe añadir una validación SEO al proceso de construcción: ruta duplicada, metadatos ausentes/duplicados, canonical inválido, sitemap inconsistente y enlaces internos a destinos no publicables deben producir errores con ruta y causa. Las excepciones requieren motivo explícito. Las comprobaciones de HTML renderizado y HTTP se ejecutan sobre la vista previa; tras autorización se repiten en producción.

## Secuencia de implementación propuesta

Primero completar H0 y H1; después aprobar grupos y prioridades. Implementar un grupo de páginas por lote con sus fichas, enlaces y controles, sin publicar las 23 candidatas de golpe. Preparar cambios en rama aislada desde el main vigente, mostrar diff y pruebas, y solicitar autorización antes de integrar o desplegar. Mantener el panel de gestión separado del contenido público.

## Fuentes

- System SEO local: C:/Users/willi/system-seo/harnesses/.
- Google: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Canonicals: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Sitemap: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
