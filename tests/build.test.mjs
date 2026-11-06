import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { build, pages, root } from '../scripts/build.mjs';

test('public output preserves pages and component loaders without publishing repository tooling', async () => {
  await build();
  const output = resolve(root, 'dist');
  const names = await readdir(output);
  for (const forbidden of ['.git', '.env', 'CLAUDE.md', 'SKILL.md', 'readme.md', 'scripts', 'tests', 'node_modules', 'wrangler.json', 'package.json', 'ui_kits', 'templates']) {
    assert.ok(!names.includes(forbidden), `${forbidden} must not be public`);
  }
  for (const page of pages) {
    assert.deepEqual(await readFile(resolve(output, page, 'index.html')), await readFile(resolve(root, page, 'index.html')));
  }
  for (const filename of ['header.html', 'footer.html', 'floating-whatsapp.html', 'back-to-top.html']) {
    assert.deepEqual(await readFile(resolve(output, 'components', filename)), await readFile(resolve(root, 'components', filename)));
  }
  const headers = await readFile(resolve(output, '_headers'), 'utf8');
  assert.match(headers, /X-Content-Type-Options: nosniff/);
  assert.match(headers, /frame-ancestors 'self'/);
  assert.match(await readFile(resolve(output, '404.html'), 'utf8'), /noindex/);
});
