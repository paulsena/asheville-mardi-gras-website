# AGENTS.md

Instructions for AI coding agents (OpenAI Codex CLI, Claude Code, etc.) working in this repo.

## Project
Static website for **Asheville Mardi Gras**, an all-volunteer 501(c)(3) non-profit. It is a rebuild of
the old Wix site (ashevillemardigras.org). Built with **Astro 7**. It outputs plain static HTML with no
server, database, or UI framework. `DESIGN.md` explains the design direction; `README.md` covers content updates.

## Commands
```sh
npm install        # once
npm run dev        # dev server at http://localhost:4321 (Astro 7 daemonizes it; stop with `npx astro dev stop`)
npm run build      # static build into dist/ — MUST pass before you finish any change
npm run preview    # serve dist/
```
There is no test suite or linter. `npm run build` is the check: it type-checks `.astro` frontmatter and fails on broken imports.

## Layout
```
src/
  pages/        one .astro file per route (file path = URL), e.g. parade.astro -> /parade
  layouts/      Base.astro: <head>, header/nav, footer, sponsors. Every page wraps itself in <Base>
  components/   reusable pieces: EventTickets, Countdown, Ridge (mountain divider), MailForm, Icon, ...
  data/         ALL editable content: events.ts, history.ts, sponsors.ts, site.ts (links/emails), gallery.json, image-dims.json
  styles/       global.css: the single stylesheet with design tokens on :root
public/
  images/site/      page images, logos, sponsor logos
  images/gallery/   <album-slug>/NN.webp (1800px) + NN-thumb.webp (640px)
  _redirects        old Wix URLs -> new routes (Netlify/Cloudflare format)
```

## Rules
1. **Content changes go in `src/data/`, not in page markup**, whenever a data file already covers it
   (events, parade facts and countdown, sponsors, history, links, gallery).
2. **Preserve the organization's wording.** Copy came from the original site. Don't rewrite, "improve", or
   shorten existing text unless asked. Flag stale or conflicting facts (dates, times) instead of guessing.
3. **Event times** are ISO-8601 with the Asheville offset: `-04:00` during daylight time (mid-March to early November),
   `-05:00` otherwise. Past events are hidden client-side, so never delete an event just because its date has passed.
4. **Styling:** use the existing tokens (`--cream`, `--purple`, `--green`, `--gold`, `--teal`, …) and existing
   classes (`.btn`, `.panel`, `.card`, `.ticket`, `.section--parchment`, …) in `global.css`. Don't add new
   colors, fonts, CSS frameworks, or per-page `<style>` blocks unless asked.
5. **No new dependencies** (npm packages, UI frameworks, CDN scripts) without asking. Keep the site static.
   No server-side code.
6. **Images:** store them locally under `public/images/` as `.webp` (convert with `cwebp -q 80`). Never hotlink
   `static.wixstatic.com`. When adding a page image, add its width and height to `src/data/image-dims.json`.
   When adding gallery photos, add `{src, thumb, w, h}` entries to `src/data/gallery.json`.
7. **Accessibility and mobile:** keep alt text on images, keep `aria-*` attributes on interactive components,
   and make sure pages don't scroll sideways at 360px width.
8. **Forms** (`MailForm.astro`) fall back to `mailto:` until `FORM_ENDPOINT` in `src/data/site.ts` is set.
   Don't wire up a form service without asking.
9. **Never commit** `dist/`, `node_modules/`, or `.astro/` (already in `.gitignore`).
   Don't commit or push unless the user asks.

## Done means
- `npm run build` succeeds, with 14+ pages built and no errors.
- Changed pages render correctly in `npm run dev`, on both desktop and mobile widths.
- Your summary lists which files changed and any content conflicts you noticed.
