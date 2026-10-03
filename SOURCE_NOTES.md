# Implementation Source Notes

## Sanghvi Agency source material

Primary user-supplied content source: `/home/ubuntu/upload/Sanghvi_Agency_Modified_Master_Website_Prompt.md` (source inventory dated 03 October 2026). Use it as the factual authority for copy, routes, products, brand relationships, FAQ/legal text and documented source-site inconsistencies.

Public source pages read for imagery and current public wording:

- Homepage: https://sanghviagency.com/
- Gallery: https://sanghviagency.com/gallery

The homepage HTML lists the source image files below. The gallery lists the corresponding gallery subjects. The files were downloaded from the official site and uploaded to WebDev project storage. The source's `.png` paths currently return JPEG-encoded image data; preserve the storage path as returned by the project uploader and use the decoded asset in the browser.

| Source image URL | Project storage path | Source gallery subject |
| --- | --- | --- |
| https://sanghviagency.com/assets/images/hero-warehouse.png | `/manus-storage/sanghvi-hero-warehouse_57eef792.jpg` | Steel Warehouse Interior / organized TMT inventory |
| https://sanghviagency.com/assets/images/tmt-bars-closeup.png | `/manus-storage/sanghvi-tmt-bars-closeup_398e8335.png` | TMT Bar Inventory Bundles |
| https://sanghviagency.com/assets/images/steel-sections.png | `/manus-storage/sanghvi-steel-sections_825a7c8f.png` | Structural Steel Sections Storage |
| https://sanghviagency.com/assets/images/construction-site.png | `/manus-storage/sanghvi-construction-site_2b5e6c19.png` | On-Site Steel Delivery & Crane Loading / source project image |
| https://sanghviagency.com/assets/images/binding-wire.png | `/manus-storage/sanghvi-binding-wire_a1ef044d.png` | Binding Wire Coils Stock |
| https://sanghviagency.com/assets/images/ms-channels.png | `/manus-storage/sanghvi-ms-channels_9c69b7dc.png` | MS Channel Section Storage |

The official logo path is https://sanghviagency.com/assets/images/logo.jpg (verified HTTP 200). It is used as the WebDev project `logoUrl` and browser favicon; the on-page brand mark follows the prompt's circular SA monogram.

## Shader package API references

- React quickstart: https://shaders.com/docs/guide/react/quickstart — install package `shaders`, import `Shader` and shader components from `shaders/react`, and compose them as child layers in a canvas.
- Swirl: https://shaders.com/docs/components/swirl — `colorA`, `colorB`, `detail` props.
- ChromaFlow: https://shaders.com/docs/components/chromaflow — `baseColor`, `upColor`, `downColor`, `leftColor`, `rightColor`, `momentum`, `radius` props.
- FlutedGlass: https://shaders.com/docs/components/flutedglass — `shape`, `angle`, `frequency`, `softness`, `speed`, `refraction`, `aberration`, `lightAngle`, `highlight`, `highlightSoftness` props.
- FilmGrain: https://shaders.com/docs/components/filmgrain — `strength` prop.
- Installed package target: `shaders@3.2.475`; its package exports include the requested React components.

## Glassmorphism visual reference (inspiration only)

- Selected visual cue: Shutterstock result “Stylish Dark Glassmorphism Layout Translucent Frosted Stock Vector 2636914877,” image preview https://files.manuscdn.com/search-media/310519663997684082/QcptTFEN0MzC4Q0ZLrJMzM/2akERWUy4oq9ZN2pQLaBKJ.jpg (also returned as a duplicate result at https://files.manuscdn.com/search-media/310519663997684082/QcptTFEN0MzC4Q0ZLrJMzM/uKV5QLopM47CJzf2fiLr6i.jpg). Local reference previews: `/home/ubuntu/upload/search_images/UhRxfn4OXy18.jpg` and `/home/ubuntu/upload/search_images/L24AN7bVIe9R.jpg`.
- Use only its material cues—frosted transparency, layered dark depth, diffused highlights and luminous rims. These stock previews are design references only: they are not copied into the project or displayed on the Sanghvi site; no stock-asset license is assumed.
