# Asheville Mardi Gras — Redesign Brainstorm

Reviewed: ashevillemardigras.org (Wix), 2026-10-10.

## What the current site does well
- The content is warm, funny, and specific ("Parades don't grow on trees", "Can you organize cats?").
- The new logo and event art already share a strong look: cream ground, purple, green, gold,
  and Blue Ridge ridgelines with masks and beads. **The redesign builds on that art.**
- There are a lot of good community photos (about 118 across six albums, plus krewe and cookoff shots).

## What gets in the way
| Problem | Effect |
|---|---|
| Home opens with a big logo on white, then a photo slider; the parade countdown sits below the fold | The single most important date is hidden |
| Upcoming events live on a separate page as a stock Wix events widget | Visitors don't see that the **Cajun Cookoff is tomorrow** |
| Narrow centered column, gray nav bar, one purple font size everywhere | Reads like a template, not like a funky festival |
| Gallery shows 2 photos per album until you open a slider | The community photography is mostly hidden |
| Theme and royalty history (2007–2025) sits in an iframe table at the bottom of Parade | A great story, buried |
| Key subpages (Twelfth Night, Cookoff, Royalty FAQ, Membership, Volunteer, A2L) only appear in "More…" or as inline links | Hard to find |
| Sponsor logos sit at mismatched sizes | Looks messy, and sponsors deserve better |

## Direction: "Mardi Gras in the Mountains"
A poster-shop, funky Asheville festival look: screen-printed cream paper, layered ridgelines,
bead strands, ticket stubs, and a photo wall.

**Palette** (from the logo and event art)
- Cream `#F7EFDD` (page), Parchment `#EFE2C4` (alternating bands)
- Purple `#4A1D6B` / Deep purple `#2B0F42` (ink, headers, footer)
- Green `#1E7A4C` / Deep green `#0F4A31`
- Gold `#E3A92B` / Soft gold `#F4CD62` (CTAs, highlights)
- Teal `#2D7C82`, used sparingly (from the mountains in the logo)

**Type:** *Shrikhand* (fat retro display, gives the funk) + *Bricolage Grotesque* (quirky but very readable body text).

**Motifs**
- Layered ridgeline dividers between sections (green → teal → purple)
- Bead-strand rules (purple/green/gold dots)
- Event cards styled as **ticket stubs** with perforations and a big date block
- Starburst badges: "Tomorrow!", "Next up", "Members: $35"
- Photo wall: taped, slightly rotated prints on the home page; full masonry and lightbox on the gallery page
- Countdown shown as gold flip tiles

## Priorities, mapped to the layout
1. **Upcoming events:** right below the hero on Home, auto-sorted. Past events hide themselves in the
   browser, so the site never shows stale dates; "Today" and "Tomorrow" badges appear automatically.
2. **Annual parade:** the hero itself: 2027 theme (The Roaring 20s), date, time, place, live countdown,
   and Parade Info. The Parade page gets the route map, line-up and start times, the Queen's Ball,
   ways to march or volunteer, and the full theme and royalty **timeline**.
3. **Community photography:** a photo wall on Home, plus a real gallery with album filter chips,
   a full-screen lightbox (keyboard and swipe), and photographer credits where the site provides them.

## Information architecture
```
Home ─ Events ─┬─ Cajun Cookoff
               └─ Twelfth Night
     ─ Parade (+ Queen's Ball, route map, history timeline)
     ─ Krewes
     ─ Get Involved ─┬─ Membership
                     ├─ Volunteer
                     ├─ Royalty (Rules for Royals)
                     └─ Asheville Second Line (A2L)
     ─ Gallery
     ─ Contact
```
The header CTA is "Become a Member", because memberships are the parade's biggest funding source.

## Content preservation
Every page's copy, links (Zeffy, Square, Eventbrite, SignUp, Google Forms and Docs, Facebook),
images, sponsor logos, and the 2007–2025 history table are carried over. Old Wix URLs redirect
(`public/_redirects`).

## Tech
Astro static site: plain HTML output and no server, so it can be hosted anywhere later
(Netlify, Cloudflare Pages, GitHub Pages). Events, sponsors, history, and gallery live in
`src/data/` so volunteers can update them without touching layouts.
