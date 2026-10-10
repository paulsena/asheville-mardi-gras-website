import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

// Wix's generic static host serves exact file paths, without directory indexes.
// Prepare only generated output; Astro source and other hosting builds stay portable.
const source = 'dist';
const target = '.wix-static/dist';
async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(path) : path.endsWith('.html') ? [path] : [];
  }));
  return files.flat();
}

const files = await htmlFiles(source);
const routes = new Map(files.filter((file) => file.endsWith('/index.html')).map((file) => {
  const path = '/' + relative(source, file).split('\\').join('/');
  return [path.replace(/\/index\.html$/, '') || '/', path];
}));
routes.set('/', '/');
function staticUrl(url) {
  const [, path, suffix] = url.match(/^([^?#]*)(.*)$/);
  return (routes.get(path.replace(/\/$/, '') || '/') ?? path) + suffix;
}

await mkdir('.wix-static', { recursive: true });
// Recreate the generated directory so removed pages cannot survive a later deploy.
await rm(target, { recursive: true, force: true });
await cp(source, target, { recursive: true });
for (const file of files) {
  const html = await readFile(file, 'utf8');
  const prepared = html.replace(/\bhref="(\/[^\"]*)"/g, (attribute, url) => `href="${staticUrl(url)}"`);
  await writeFile(join(target, relative(source, file)), prepared);
}

const redirects = new Map([...routes].filter(([path]) => path !== '/'));
const legacy = await readFile('public/_redirects', 'utf8');
for (const line of legacy.split('\n')) {
  const [from, to] = line.trim().split(/\s+/);
  if (!from || from.startsWith('#') || from.includes('*')) continue;
  redirects.set(from, staticUrl(to));
}
const csv = ['Old URL,New URL', ...[...redirects].map(([from, to]) => `${from},${to}`)].join('\n') + '\n';
await writeFile('.wix-static/redirects.csv', csv);
console.log(`Prepared ${files.length} HTML pages and ${redirects.size} Wix redirects.`);
