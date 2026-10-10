# Asheville Mardi Gras website

Static Astro rebuild of ashevillemardigras.org. See `DESIGN.md` for the redesign rationale.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Updating content
- **Events:** `src/data/events.ts`. Past events hide automatically in the browser.
- **Parade facts / countdown:** the `parade` object in `src/data/events.ts`
- **Theme & royalty history:** `src/data/history.ts`
- **Sponsors:** `src/data/sponsors.ts` (logos in `public/images/site/`)
- **Gallery:** `src/data/gallery.json` (photos in `public/images/gallery/<album>/`)
- **Links & emails:** `src/data/site.ts`

## Before going live
- Forms (contact, volunteer, mailing list) open the visitor's email app until `FORM_ENDPOINT`
  in `src/data/site.ts` is set to a form service.
- `public/_redirects` maps old Wix URLs to their new pages (Netlify / Cloudflare Pages format).
