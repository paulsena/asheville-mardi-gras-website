# Asheville Mardi Gras website

Static Astro rebuild of ashevillemardigras.org. See `DESIGN.md` for the redesign rationale.

```sh
npm install
npm run dev      # http://localhost:4321/asheville-mardi-gras-website/
npm run build    # static output in dist/
```

## GitHub Pages

The public project site is https://paulsena.github.io/asheville-mardi-gras-website/.
`.github/workflows/deploy.yml` builds and deploys it on pushes to `main`, or manually
from the Actions tab. Repository Settings → Pages must use **GitHub Actions** as
the publishing source. The workflow uses the Pages URL and base path automatically.

Local builds use the same project path. Internal links and image URLs use
`src/utils/url.ts` to respect that path. To build for the organization's domain instead:

```sh
SITE_URL=https://www.ashevillemardigras.org BASE_PATH=/ npm run build
```

GitHub Pages does not process `public/_redirects`; those legacy Wix redirects apply
only to Netlify / Cloudflare Pages hosting.

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
