import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

export const root = fileURLToPath(new URL('../', import.meta.url));
export const pages = ['', 'auditorias', 'blog', 'consultoria-costos', 'contactanos',
  'cumplimiento-tributario', 'outsourcing-contable', 'outsourcing-de-nomina', 'tributos'];

// Only publish runtime files; repository notes, tools and credentials stay out.
export async function build() {
  const output = resolve(root, 'dist');
  if (output !== resolve(root, './dist')) throw new Error('Unexpected output directory');
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  for (const page of pages) {
    const dest = resolve(output, page);
    await mkdir(dest, { recursive: true });
    await cp(resolve(root, page, 'index.html'), resolve(dest, 'index.html'));
  }
  for (const directory of ['assets', 'uploads', 'css', 'tokens']) {
    await cp(resolve(root, directory), resolve(output, directory), { recursive: true });
  }
  await mkdir(resolve(output, 'components'), { recursive: true });
  for (const filename of ['header.html', 'footer.html', 'floating-whatsapp.html', 'back-to-top.html']) {
    await cp(resolve(root, 'components', filename), resolve(output, 'components', filename));
  }
  for (const filename of ['styles.css', '_ds_bundle.js', '_headers', '404.html']) {
    await cp(resolve(root, filename), resolve(output, filename));
  }
  // Preserve optional image sidecars if present, including per-page sidecars.
  for (const page of pages) {
    for (const entry of await readdir(resolve(root, page), { withFileTypes: true })) {
      if (entry.isFile() && entry.name === '.image-slots.state.json') {
        await cp(resolve(root, page, entry.name), resolve(output, page, entry.name));
      }
    }
  }
  console.log('Built dist with public pages and runtime assets.');
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await build();
