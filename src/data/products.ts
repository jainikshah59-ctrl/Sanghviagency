export type SizeRow = string[]
export const TMT_TABLE: SizeRow[] = [
  ['8mm', '0.395 kg/m', 'Stirrups, light slabs'], ['10mm', '0.617 kg/m', 'Slabs, lintels'], ['12mm', '0.888 kg/m', 'Slabs, beams'],
  ['16mm', '1.580 kg/m', 'Beams, columns'], ['20mm', '2.469 kg/m', 'Columns, footings'],
  ['25mm', '3.858 kg/m', 'Heavy columns, retaining walls'], ['28mm', '4.834 kg/m', 'Heavy structures'], ['32mm', '6.313 kg/m', 'Industrial, bridges'],
]
// NOTE: source site shows this identical table on Steel Angles, MS Channels and Steel Beams (see README "Source-review items").
export const SECTION_TABLE: SizeRow[] = [
  ['25x25mm', '3-5mm', '1.1-1.8 kg/m'], ['40x40mm', '3-6mm', '1.8-3.5 kg/m'], ['50x50mm', '5-6mm', '3.8-4.5 kg/m'],
  ['65x65mm', '5-8mm', '4.9-7.7 kg/m'], ['75x75mm', '6-10mm', '6.8-11.0 kg/m'], ['100x100mm', '6-12mm', '9.2-17.8 kg/m'],
  ['150x150mm', '10-16mm', '22.6-35.0 kg/m'], ['200x200mm', '12-24mm', '36.2-60.0 kg/m'],
]

export type Product = {
  slug?: string; name: string; desc: string; short: string; sub?: string; body?: string; benefits?: string[]; cta?: string
}
const BEN = ['Versatile Sizing', 'High Load Capacity', 'Easy Fabrication', 'BIS Certified (IS 2062)']

export const PRODUCTS: Product[] = [
  { slug: 'tmt-bars', name: 'TMT Bars', short: 'Fe500, Fe550, Fe550D grades. 8mm to 32mm sizes. Earthquake resistant, corrosion proof.',
    desc: 'Thermo Mechanically Treated bars in Fe500, Fe550, Fe550D grades. High strength, earthquake resistant, corrosion proof. Available in 8mm to 32mm.',
    sub: 'High-strength thermo mechanically treated steel reinforcement bars for construction.',
    benefits: ['High Strength - yield 500+ MPa', 'Earthquake Resistant - high elongation/ductility absorb seismic energy', 'Corrosion Resistant - tempered martensite outer layer', 'Fire Resistant - maintains integrity up to 600°C', 'Superior Weldability - low carbon equivalent'],
    cta: 'Request TMT Bar Quote on WhatsApp' },
  { slug: 'steel-angles', name: 'Steel Angles', short: 'Mild steel angles for structural framing. 25x25mm to 200x200mm range.',
    desc: 'Mild steel equal and unequal angles for structural framing, supports, brackets, and fabrication. 25x25mm to 200x200mm.',
    sub: 'Mild steel equal and unequal structural framing/fabrication sections.',
    body: 'Steel angles are L-shaped structural sections used across construction and fabrication. Equal and unequal angles are offered in a wide range.',
    benefits: BEN, cta: 'Request a quote on WhatsApp' },
  { slug: 'steel-channels', name: 'MS Channels', short: 'ISMC 75 to ISMC 400. Used in structural frames, supports, and purlins.',
    desc: 'Indian Standard Medium Channels (ISMC) for structural frames, supports, purlins, and industrial applications. ISMC 75 to ISMC 400.',
    sub: 'Mild steel standard channel sections (ISMC) for framing/fabrication.',
    body: 'U-shaped structural sections for structural frames, supports, purlins and industrial applications; standard ISMC sizes are stocked in a wide range.',
    benefits: BEN, cta: 'Request a quote on WhatsApp' },
  { slug: 'steel-beams', name: 'Steel Beams', short: 'ISMB, H-Beams, I-Beams for heavy structural load-bearing applications.',
    desc: 'ISMB, H-Beams, and I-Beams for heavy structural load-bearing applications in commercial and industrial construction.',
    sub: 'Mild steel ISMB, I-beams, and H-beams for structural framing and fabrication.',
    body: 'Steel beams are I-shaped, L-shaped structural sections and H-shaped structural sections widely used for structural framing and fabrication. Stocked in ISMB/I/H ranges.',
    benefits: BEN, cta: 'Request a quote on WhatsApp' },
  { name: 'Binding Wire', short: 'High-quality annealed binding wire for tying rebar in RCC.',
    desc: 'High-quality annealed binding wire for tying rebar in RCC construction work. Available in various gauges.' },
  { name: 'Steel Nails & Hardware', short: 'Construction-grade steel nails in various sizes for framing/formwork.',
    desc: 'Construction-grade steel nails, bolts, and hardware for framing, formwork, and general construction use.' },
]
export const TMT_GRADES: [string, string][] = [['Fe500', 'Standard Structural'], ['Fe550D', 'High Ductility'], ['CRS', 'Corrosion Resistant']]
export const TMT_BRANDS_LINE = 'Mono, Utkarsh, Varrsana, National, Tata, SAIL, JSW, RINL, JSPL, Panther, Jindal, ET, Gallantt, Nilkanth, ASR, German, Kemo, Welspun, Poddar, UltraGold'
