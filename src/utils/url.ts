/** Prefix local URLs with Astro's deployment base; preserve external links. */
export function withBase(url: string): string {
  if (!url.startsWith('/') || url.startsWith('//')) return url;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${url}`;
}
