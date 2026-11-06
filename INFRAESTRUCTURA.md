# Publicación de KLG AUDICON en Cloudflare Workers

Este sitio publica HTML estático. Cloudflare ya está conectado al repositorio, con `main` como rama de producción, `npx wrangler deploy` como comando de despliegue y `npx wrangler versions upload` para ramas adicionales.

## Construir y comprobar

Requiere Node.js 22 o superior y npm.

```sh
npm ci
npm test
npx wrangler deploy --dry-run
npm run preview
```

Wrangler ejecuta `npm run build` antes de publicar o iniciar la vista local. No hace falta añadir otro comando de compilación al panel. La versión de Wrangler queda fijada en `package.json` y sus dependencias en `package-lock.json`.

`scripts/build.mjs` publica exclusivamente las nueve páginas existentes, las cuatro piezas compartidas de `components/`, imágenes, CSS, fuentes, el bundle y sidecars de imágenes cuando existen. No publica notas, herramientas, credenciales ni documentación del repositorio. Las nuevas páginas deben añadirse explícitamente al listado `pages` del constructor.

## Configuración

- `wrangler.jsonc` identifica el Worker existente y sirve `dist/`. Es el unico archivo de configuracion de Wrangler.
- Se conserva la fecha de compatibilidad observada en el panel: `2026-07-01`.
- No se añaden bases de datos, permisos, secretos ni servicios de pago.
- `_headers` añade protección frente a interpretación errónea de contenido, incrustación en otros orígenes y acceso a cámara, micrófono y ubicación. La política CSP actual es parcial: no limita scripts mientras siga existiendo Babel en el navegador y código inline.
- `404.html` devuelve una página de error útil; no oculta páginas pendientes con una respuesta 200 del inicio.

## Contacto pendiente

El usuario confirmó el 5 de noviembre de 2026 que teléfono, correo y RIF siguen siendo ejemplos. El formulario permanece deshabilitado y avisa de que no envía solicitudes. Para habilitarlo se necesita un destino real, un mecanismo de envío y una prueba de recepción. No basta con volver a habilitar el botón.

## Producción y reversión

Publicar un commit en `main` inicia la integración de Cloudflare. Verificar que la compilación termina, que la versión activa cambia y que la web muestra los cambios. Una compilación correcta por sí sola no demuestra que producción haya cambiado: el panel puede mostrar versiones cargadas sin tráfico.

Antes de esta revisión, la versión con el 100 % de tráfico era `8475f6d5`. Conservarla como referencia de reversión; no activar versiones intermedias sin revisarlas.

## Conciliacion de la propuesta automatica de Cloudflare

La propuesta automatica #2 de Cloudflare parte del mismo `main` y agrega un `wrangler.jsonc` con `assets.directory` igual a `.`. Este lote conserva su nombre de Worker y fecha de compatibilidad, y utiliza el mismo nombre de archivo de configuracion. La publicacion se limita a `dist/` mediante el constructor revisado, en lugar de ofrecer el contenido completo de la raiz del repositorio.

No agregar tambien `wrangler.json` ni integrar ambas propuestas sin resolver el archivo compartido. La configuracion automatica anterior queda cubierta por esta propuesta mas completa; su existencia no demuestra que las correcciones de este lote esten activas en produccion.

## Referencias oficiales

- [Configuración de activos estáticos](https://developers.cloudflare.com/workers/static-assets/binding/)
- [Cabeceras para activos estáticos](https://developers.cloudflare.com/workers/static-assets/headers/)
