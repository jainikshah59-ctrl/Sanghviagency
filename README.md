# Sanghvi Agency — React + Vite + Tailwind

Content/identity transformation of the Axion reference design (3-section homepage, pill navbar, text-roll CTAs, shader hero, bottom-sheet mobile menu) for Sanghvi Agency, Bhuj.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build
```
Hosting note: this is a single-page app with client-side routes — configure your host to rewrite all paths to `index.html`.

## Routes (all 42 source routes)
`/`, `/about`, `/products`, `/products/{tmt-bars|steel-angles|steel-channels|steel-beams}`, `/brands`, `/projects`, `/gallery`, `/faq`, `/contact`, `/request-quote`, `/privacy-policy`, `/terms-and-conditions`,
`/tmt-bars/` (+19 brand pages), `/ms-angle/` (+2), `/ms-channel/` (+2), `/pipes/` (+3).

## Structure
- `src/data/` — all content (site, products, brands). Edit here, not in components.
- `src/components/` — `ui.tsx` (Btn text-roll CTA, SafeImg, tables, accordion), `HeroShader.tsx`, `Nav.tsx`, `Footer.tsx`, `Layout.tsx`.
- `src/pages/` — one file per route group.

## Assets to supply
- Gallery photos: put `1.jpg`–`6.jpg` in `public/gallery/` (order matches the source captions). Tiles fall back to a neutral placeholder until then.
- Project card photos: none were identified in the source inventory, so cards show the supply line on a neutral tile. Pass a `src` to `SafeImg` in `ProjectCard.tsx` when available.
- The only known source image is `hero-warehouse.png` (loaded from sanghviagency.com; self-host it in `public/` for production).

## Shader
`HeroShader.tsx` uses the `shaders` package with the exact parameters from the brief (Swirl, ChromaFlow, FlutedGlass, FilmGrain). If it fails to load, a CSS fallback renders.

## Source-review items (kept as source, per brief — confirm with the client)
1. Steel Angles / MS Channels / Steel Beams detail pages all use the same 25x25–200x200 size table.
2. Steel Beams copy: "I-shaped, L-shaped … and H-shaped structural sections" in one sentence.
3. Steel Pipes is a category route but not a card on the Products page (shown as a "Brand category routes" chip row).
4. UltraGold appears in brand lists/FAQ but has no dedicated page.
5. Footer in the source varies between main and category pages; one consistent footer is used here.
6. Legal pages say "Last updated July 2025" while the footer says © 2026. Legal copy is condensed from the inventory summaries, not verbatim — have it reviewed.
7. Project sector filters (Industrial/Residential/Commercial/Warehouses) are mapped to the six projects by us; the source lists the filter names but not per-project tags.
8. Source brand-spec tables use varying row labels; unified here where the values were identical.
