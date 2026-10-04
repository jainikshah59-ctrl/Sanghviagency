# Sanghvi Agency Website — Outcome Checklist

This project uses this repository checklist because no native WebDev TODO tool is available. Criteria are carried forward from the approved plan and the attached master prompt. Preserve the source inventory as the factual source of truth.

## 1. Implement the specified visual system and the exact three-section homepage

- The homepage has exactly three main sections, in this order: a full-viewport hero, a white About section, and a light-gray Featured Supply & Projects section. Do not add homepage sections for products, brands, FAQs, or testimonials.
- Preserve the reference system described by the prompt: hero background #EFEFEF and full-screen animated shader overlay; Swirl colorA #ffffff/colorB #f0f0f0/detail 1.7; ChromaFlow baseColor #ffffff, directional colors #ff5f03, momentum 13, radius 3.5; FlutedGlass aberration .61, angle 31, frequency 8, highlight .12, highlightSoftness 0, lightAngle -90, refraction 4, rounded shape, softness 1, speed .15; FilmGrain strength .05. Preserve `.liquid-glass` and `.liquid-glass-strong` utilities.
- Keep the 1440px max width, specified section padding/spacing, system font, Tailwind breakpoints, reference clamp sizing/line breaks, and content geometry. Keep the specified orange #F26522 accent; the follow-up glassmorphism outcome below updates the former flat surface treatment.
- Build the white pill navbar with circular dark SA monogram, Sanghvi labels Home, About, Products, Brands, Projects, Gallery, FAQ, Contact, right-side “Serving Kutch & Gujarat”, a live Asia/Kolkata clock displayed HH:MM IST, and the “Request Quote” CTA with text-roll/arrow treatment. On mobile preserve Menu/Close behavior and the black/60 fixed overlay with animated white bottom sheet, time badge, Sanghvi links, and “Request a Quote”.
- Hero text is exactly: “Premium Steel & Construction Material Supplier”; “Building Strong Foundations Since 2001”; “Serving Builders, Contractors & Industries Across Kutch & Gujarat with trusted quality steel.” Keep primary CTA “Request a Quote”, and the white-pill proof badge “20+ Years of Trust” with dark secondary “2001” badge and the exact supplied SVG.
- Keep hero metrics available: Trusted Since 2001; 1000+ Customers; 500+ Projects Supplied; Gujarat-Wide Service.
- About heading: “Your Trusted Partner in Construction Steel.” Use the requested responsive mobile/tablet stacking and desktop `grid-cols-[26%_1fr_48%]` composition, source-based positioning and “Learn Our Story” CTA. Feature Bhuj/2001 origin, quality/timely delivery/customer service and keep fuller company story on `/about`.
- The homepage About copy includes the supplied service scope “From individual homeowners ... to multi-crore projects” within the existing About section; do not add a fourth homepage section.
- Featured section badge number is 2 and label “Featured Supply & Projects”; heading is “Steel That Builds the Region.” Keep the two-column card grid, reference card dimensions, rounded media, hover CTA expansion/cursor/transition behavior; include all six exact prompt cards: Industrial Plant Steelwork — Gandhidham, Kutch — 120 Tonnes Steel Supplied; Multi-Story Residential Towers — Bhuj — TMT Fe550D Supplied; Commercial Plaza Framework — Mundra — MS Channels & Beams; Logistics Storage Facility — Anjar — Structural Sections; Factory Expansion Shed — Bhachau — Structural Angles & Beams; Private Villa Gated Community — Mandvi — High Ductility TMT Bars. Use “View Project” / “Learn More” only.
- No Axion Studio/AX/old navigation, London time, “Book a strategy call”, Narrativ, Luminar, Axion copy or Axion media remains.

## 2. Implement all listed public routes with synchronized route manifest

- Implement every path in the inventory route table: `/`, `/about`, `/products/`, `/products/tmt-bars`, `/products/steel-angles`, `/products/steel-channels`, `/products/steel-beams`, `/brands`, `/projects`, `/gallery`, `/faq`, `/contact`, `/request-quote`, `/privacy-policy`, `/terms-and-conditions`, `/tmt-bars/`, `/tmt-bars/mono-tmt-bars/`, `/tmt-bars/utkarsh-tmt-bars/`, `/tmt-bars/varrsana-tmt-bars/`, `/tmt-bars/national-tmt-bars/`, `/tmt-bars/tata-tmt-bars/`, `/tmt-bars/sail-tmt-bars/`, `/tmt-bars/jsw-tmt-bars/`, `/tmt-bars/vizag-tmt-bars/`, `/tmt-bars/jspl-tmt-bars/`, `/tmt-bars/panther-tmt-bars/`, `/tmt-bars/jindal-tmt-bars/`, `/tmt-bars/et-tmt-bars/`, `/tmt-bars/gallantt-tmt-bars/`, `/tmt-bars/nilkanth-tmt-bars/`, `/tmt-bars/asr-tmt-bars/`, `/tmt-bars/german-tmt-bars/`, `/tmt-bars/kemo-tmt-bars/`, `/tmt-bars/welspun-tmt-bars/`, `/tmt-bars/poddar-tmt-bars/`, `/ms-angle/`, `/ms-angle/asr-angle/`, `/ms-angle/mittal-angle/`, `/ms-channel/`, `/ms-channel/asr-channel/`, `/ms-channel/mittal-channel/`, `/pipes/`, `/pipes/apollo-pipes/`, `/pipes/goodluck-pipes/`, and `/pipes/surya-pipes/`.
- Note the inventory prose says 42 routes, but its enumerated route table contains 45 paths. Preserve all 45 paths explicitly listed above; do not drop routes to force the stated count.
- Provide `public/manus-routes.json` before starting the dev server. It must be valid JSON with a top-level `routes` array covering each implemented page route, and stay synchronized with the source router.
- All internal pages reuse the same visual language and component styling established on the homepage. Header, accessible navigation, page structure, CTAs, footers, rounded cards, type scale, responsive behavior and orange treatment remain consistent.

## 3. Preserve product, category, brand and project data without fabrication

- Main product taxonomy: TMT Bars; Steel Angles; MS Channels; Steel Beams; Binding Wire; Steel Nails & Hardware. Preserve the separate public Steel Pipes category route. The homepage products menu shows TMT Bars, Steel Angles, MS Channels and Steel Beams.
- Retain the source product details: TMT Fe500/Fe550/Fe550D, 8–32mm, stated benefits and 25mm/custom details where source specifies; Steel Angles equal/unequal mild steel, 25x25–200x200mm; MS Channels ISMC 75–400; Steel Beams ISMB/H/I beams; annealed binding wire; construction nails/hardware. Preserve source tables, units, grades, standards, weights, sizes, uses and availability exactly as supplied in the inventory.
- Preserve brand names and source relationships: Mono TMT (Distributor/authorized distribution partner); Utkarsh TMX (Distributor); Varrsana TMX (Partner); National TMX (Dealer); Tata Tiscon; SAIL TMT; JSW Steel; RINL/Vizag; JSPL TMT; Panther TMT; Jindal Steel; ET TMT; Gallantt TMT; Nilkanth TMT; ASR TMT; German TMT; Kemo TMT; Welspun TMT; Poddar TMT; UltraGold as listed; ASR and Mittal Steel angles/channels; Apollo, Goodluck and Surya pipes. Relationship wording must be as supported by the source, and availability caveats remain visible.
- For each brand and category route, retain its own supplied heading, subheading, overview, applications, technical features, Sanghvi Advantage, specifications/standards/stock/logistics rows where specified, FAQs, related-product links and quote prompts. Include the source TMT grade and size variants, TMT product weights/applications table, angle and channel brand tables, pipe shapes/sizes/grades/standards, and all source-specific brand information; do not invent missing size tables.
- `/projects` contains the source statement “500+ projects supplied across residential, commercial, industrial, and infrastructure sectors” and filters All Projects, Industrial, Residential, Commercial, Warehouses. Use the six prompt-listed featured projects without inventing outcomes beyond the named supplied steel.
- `/gallery` includes the six source image subjects and matching supplied or verified Sanghvi imagery: Steel Warehouse Interior; TMT Bar Inventory Bundles; Structural Steel Sections Storage; On-Site Steel Delivery & Crane Loading; Binding Wire Coils Stock; MS Channel Section Storage.
- Preserve five listed testimonials and their exact names, roles, locations, quotations and ratings if rendered on a page; do not invent additional testimonials. Preserve all FAQ questions and answers, including bulk, delivery, brands, custom quantities, quotation response, payment terms, site delivery, BIS/ISI and homeowner information.
- Preserve the source inconsistencies rather than silently correcting: main-site versus category-footer taxonomies; Pipes separate from the main product index; UltraGold destination mapping to `/tmt-bars/`; the repeated 25x25–200x200 structural table on steel-angle/channel/beam pages; the Steel Beams sentence that combines I-, L- and H-shaped sections; legal pages dated July 2025 despite 2026 footer copyright; and shorter category-page footer versus full main footer.

## 4. Implement company/about, contact and legal content

- `/about` retains the Bhuj 2001 origin; 2005 angles/channels/beams expansion; 2010 reach to Gandhidham, Mundra, Mandvi, Anjar and beyond; 2015 Tata Tiscon/JSW/Jindal milestone; 2020 1000+ customers milestone; Gujarat-wide service today; the supplied mission, vision, six core values and five Sanghvi Advantage facts; and the “Ready to Work Together?” CTA copy.
- Use source position copy about builders, contractors, engineers, fabricators, industries and homeowners across Bhuj/Kutch/Gujarat, focusing on quality, timely delivery, customer service, keeping promises, transparent pricing and recommendations aligned to project requirements.
- Contact/footer details: primary +91 94282 20385 (Dhaval Sanghvi); secondary +91 94262 14737 (Vinesh Sanghvi); `sanghviagency@gmail.com`; 11 Ambika Society, Lane No 2, Hospital Road (Landmark: Shantiniketan), Bhuj, Gujarat 370001; Mon–Sun 9:00 AM–9:00 PM; GSTIN 24AGGPS5586F1Z2; Proprietorship – Sanghvi Agency; copyright © 2026; Privacy Policy and Terms & Conditions links.
- `/privacy-policy` and `/terms-and-conditions` retain the source’s dated content, clauses, WhatsApp transmission/data-storage statements, pricing/quote limitations, India/Bhuj jurisdiction wording and explicit note that the source legal text is general template language and recommends legal review. Do not rewrite as legal advice or remove source caveats.

## 5. Implement accessible WhatsApp-led quote/contact flows

- `Request Quote` routes to `/request-quote`. WhatsApp actions open a prefilled conversation using the supplied business contact number and user-entered details; Call Now uses +91 94282 20385. Keep the secondary +91 94262 14737 for sales/orders.
- `/request-quote` supports these rows/fields: TMT Bars size (example 12mm) and quantity; Steel Angles size and quantity; MS Channels size (example ISMC 150) and quantity; Steel Beams size (example ISMB 200) and quantity; Binding Wire gauge and quantity (kg); Steel Nails size and quantity (kg); required Your Name and Phone Number. Include three steps: Select Products, Enter Details, Send via WhatsApp.
- `/contact` supports required Your Name and Phone Number, optional Email and Message, with the “Send via WhatsApp” action.
- Contact and quote forms explicitly state that submission opens a prefilled WhatsApp chat and no form data is stored on website servers. Do not add a backend or server-side persistence.
- Use semantic fields, visible labels, validation and accessible names, keyboard navigation/focus, and mobile-friendly persistent conversion affordances without changing the visual language.

## 6. Use real, accurate business imagery and ensure responsive behavior

- Use the supplied official hero asset `https://sanghviagency.com/assets/images/hero-warehouse.png` with alt text “Sanghvi Agency steel warehouse with organized TMT bar inventory” and the official source-site assets for TMT bars, structural sections, construction site, binding wire and MS channels. Use the selected photos only for their matching planned placements, copy them into project storage, and write descriptive alt text.
- Preserve the prompt’s aspect ratios, rounded corners, responsive placements and `object-cover` behavior. Do not fabricate people or project photos, imply that inventory imagery depicts a specific project, or substitute generic stock for business imagery. Where no project photograph is supplied, any CSS steel artwork is decorative, visibly labeled as an illustration, and never represented as a photo of the named project.
- Keep responsive navigation, hero typography and CTA stacking, About content/image stacking, two-column project cards at the specified breakpoint, responsive internal-page content and quote controls usable on mobile/tablet/desktop. Keep semantic HTML, accessible labels and keyboard interaction.

## 7. Deliver a working preview and source without public publication

- Use React 18, TypeScript, Vite, Tailwind CSS 3.4, `shaders` and `lucide-react` icons (ArrowRight, Clock, Menu, X plus only useful same-style icons). Keep default Tailwind configuration and system font; apply the approved glass material treatment to existing components without changing source facts or adding a heavy rendering dependency.
- Ensure TypeScript diagnostics are registered before writing application code. Install dependencies with a pinned package manager and checked-in lifecycle-script policy. Run the dev server on the configured WebDev runtime port, bound as required by the managed environment.
- Check successful build/type diagnostics and route manifest; verify the preview serves the app, routes, clock, responsive menu, interactive CTAs and WhatsApp handoff. Fix confirmed defects.
- Deliver the preview URL and project source. Do not enable auto-publish or publicly publish. If the existing checkpoint configuration would auto-publish, do not trigger that checkpoint; report the constraint rather than changing settings without authority.

## 8. [x] Add fluid animations, effects and transitions throughout the website

- Provide a lightweight, cohesive motion system across all routes: subtle page-entry transitions; one-time, staggered scroll reveals for page sections and repeatable content cards; and smooth hover/focus feedback for navigation, CTA buttons, product/brand/project/gallery cards, filters, links, FAQ accordions, forms, image crops and tables.
- Keep timings and easing smooth and consistent with the updated industrial-glass design. Preserve the reference CTA timing, pill geometry, page content, information hierarchy and responsive layouts; do not introduce a heavy animation dependency or hide essential information behind animation.
- Respect `prefers-reduced-motion`: skip scroll-reveal setup and disable page-entry and non-essential animations while keeping every section and control visible and usable. Re-check route changes, viewport scrolling, dynamically filtered project cards, mobile menu interactions and a production build.

## 9. [x] Restyle all routes with accessible 3D glassmorphism

- Apply frosted translucent surfaces, backdrop blur/saturation, reflective edge gradients, inset highlights, layered depth shadows and subtle 3D perspective across the header/navigation, hero copy and proof badge, featured and internal product/brand/project/gallery cards, technical information panels, testimonials, contact/quote forms, FAQ panels, and mobile menu/selected footer surfaces.
- Keep supplied copy, all 45 routes, factual data, official Sanghvi imagery, information hierarchy and the exact #F26522 brand accent unchanged. Use cool-steel, pearl-white and graphite atmosphere plus restrained orange glow behind glass; do not use generic stock or external search imagery as site content.
- Use CSS-only depth effects with a modest lift and no more than 2 degrees of tilt on fine-pointer hover; keep touch layouts stable, legible and tappable. Provide a readable fallback where backdrop filters are unavailable. Respect `prefers-reduced-motion` and never hide essential information behind an effect.

## 10. [x] Add an accessible, persistent dark-mode switch

- Provide a visible light/dark toggle in desktop navigation and the mobile navigation sheet, using a native keyboard-operable button, a descriptive action label, an icon, and an accurate `aria-pressed` state.
- Persist the chosen theme across route changes and reloads. Apply it before first paint to prevent a flash, update browser theme-color metadata, and default safely to light mode if storage is unavailable.
- Apply a readable graphite-glass dark palette across all 45 routes and shared surfaces, navigation/popovers, heroes, cards, technical tables, forms, contact/FAQ/legal panels, mobile menu, and footer. Preserve factual content and imagery, accessible focus, the #F26522 brand accent, and existing layout geometry.
- Keep theme changes smooth while respecting `prefers-reduced-motion`; keep all content and controls visible and usable in either theme.

## 11. [x] Interview-ready design elevation pass (2026-10-04)

- Cinematic dark hero: local poster + vendored hero video, line-mask headline reveals, eyebrow with orange rule, magnetic CTAs, animated count-up metrics, film grain.
- Brand ribbon: infinite marquee of supplied steel brands (Tata Tiscon, JSW, SAIL, Jindal, JSPL, Vizag, Mono TMT, Apollo/Surya/Goodluck pipes…) with orange "We supply" label; pauses on hover; disabled under prefers-reduced-motion.
- Type system: Archivo (display) + Inter (body) via Google Fonts; tight industrial tracking on headlines.
- Fully self-contained media: all 18 site images + hero video vendored into public/ (no Pexels/Cloudinary hotlinks) — the site now renders identically on any network.
- Micro-craft: button shine sweeps, card lift + image zoom + orange edge sweep on hover, nav link underlines, section-number orange chips, styled scrollbar, SA monogram SVG favicon, page transition, dark-mode verified.
- All 45 routes, copy, product/brand data, contact details and WhatsApp flows unchanged.
