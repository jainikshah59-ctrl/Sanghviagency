export type InfoRow = { label: string; value: string };
export type Question = { question: string; answer: string };

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products/' },
  { label: 'Brands', to: '/brands' },
  { label: 'Projects', to: '/projects' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

export const contact = {
  primaryName: 'Dhaval Sanghvi',
  primaryPhone: '+91 94282 20385',
  primaryDigits: '919428220385',
  secondaryName: 'Vinesh Sanghvi',
  secondaryPhone: '+91 94262 14737',
  secondaryDigits: '919426214737',
  email: 'sanghviagency@gmail.com',
  address: '11 Ambika Society, Lane No 2, Hospital Road (Landmark: Shantiniketan), Bhuj, Gujarat 370001',
  hours: 'Mon–Sun 9:00 AM–9:00 PM',
  gstin: '24AGGPS5586F1Z2',
  businessType: 'Proprietorship – Sanghvi Agency',
  mapSearch: 'https://maps.google.com/?q=11+Ambika+Society%2C+Lane+No+2%2C+Hospital+Road%2C+Bhuj%2C+Gujarat+370001',
};

export const images = {
  warehouse: '/images/warehouse.jpg',
  tmtBars: '/images/tmtBars.jpg',
  steelAngles: '/images/steelAngles.jpg',
  steelSections: '/images/steelSections.jpg',
  steelBeams: '/images/steelBeams.jpg',
  construction: '/images/construction.jpg',
  bindingWire: '/images/bindingWire.jpg',
  msChannels: '/images/msChannels.jpg',
  hardware: '/images/hardware.jpg',
  steelPipes: '/images/steelPipes.jpg',
  constructionFrame: '/images/constructionFrame.jpg',
  gandhidhamPlant: '/images/gandhidhamPlant.jpg',
  bhujTowers: '/images/bhujTowers.jpg',
  mundraPlaza: '/images/mundraPlaza.jpg',
  anjarLogistics: '/images/anjarLogistics.jpg',
  bhachauShed: '/images/constructionFrame.jpg',
  mandviVilla: '/images/mandviVilla.jpg',
  portLoading: '/images/portLoading.jpg',
}

export const metrics = [
  { value: '2001', label: 'Trusted Since' },
  { value: '1000+', label: 'Customers' },
  { value: '500+', label: 'Projects Supplied' },
  { value: '20+', label: 'Years of Trust' },
];

export const products = [
  {
    name: 'TMT Bars',
    route: '/products/tmt-bars',
    categoryRoute: '/tmt-bars/',
    description: 'Thermo Mechanically Treated bars in Fe500, Fe550 and Fe550D grades. High strength, earthquake resistant, corrosion proof. Available in 8mm to 32mm.',
    short: 'Fe500, Fe550, Fe550D · 8–32mm',
    image: images.tmtBars,
    alt: 'Close view of ribbed TMT reinforcement bars in a warehouse bundle',
    icon: 'bars',
  },
  {
    name: 'Steel Angles',
    route: '/products/steel-angles',
    categoryRoute: '/ms-angle/',
    description: 'Mild steel equal and unequal angles for structural framing, supports, brackets and fabrication. 25x25mm to 200x200mm.',
    short: 'MS equal & unequal · 25x25–200x200mm',
    image: images.steelAngles,
    alt: 'Stacked structural steel sections and angle profiles in an industrial yard',
    icon: 'angles',
  },
  {
    name: 'MS Channels',
    route: '/products/steel-channels',
    categoryRoute: '/ms-channel/',
    description: 'Indian Standard Medium Channels (ISMC) for structural frames, supports, purlins and industrial applications. ISMC 75 to ISMC 400.',
    short: 'ISMC 75–400',
    image: images.msChannels,
    alt: 'MS channel sections in warehouse stock',
    icon: 'channels',
  },
  {
    name: 'Steel Beams',
    route: '/products/steel-beams',
    categoryRoute: '/products/steel-beams',
    description: 'ISMB, H-Beams and I-Beams for heavy structural load-bearing applications in commercial and industrial construction.',
    short: 'ISMB · H-Beams · I-Beams',
    image: images.steelBeams,
    alt: 'Stacked structural steel beams in an industrial warehouse',
    icon: 'beams',
  },
  {
    name: 'Binding Wire',
    route: '/products/',
    categoryRoute: '/products/',
    description: 'High-quality annealed binding wire for tying rebar in RCC construction work. Available in various gauges.',
    short: 'Annealed · various gauges',
    image: images.bindingWire,
    alt: 'Coils of binding wire stored in a warehouse',
    icon: 'wire',
  },
  {
    name: 'Steel Nails & Hardware',
    route: '/products/',
    categoryRoute: '/products/',
    description: 'Construction-grade steel nails, bolts and hardware for framing, formwork and general construction use.',
    short: 'Construction-grade nails & hardware',
    image: images.hardware,
    alt: 'Steel screws and construction hardware arranged as industrial fastener inventory',
    icon: 'hardware',
  },
];

export const tmtWeightRows: string[][] = [
  ['8mm', '0.395 kg/m', 'Stirrups, light slabs'],
  ['10mm', '0.617 kg/m', 'Slabs, lintels'],
  ['12mm', '0.888 kg/m', 'Slabs, beams'],
  ['16mm', '1.580 kg/m', 'Beams, columns'],
  ['20mm', '2.469 kg/m', 'Columns, footings'],
  ['25mm', '3.858 kg/m', 'Heavy columns, retaining walls'],
  ['28mm', '4.834 kg/m', 'Heavy structures'],
  ['32mm', '6.313 kg/m', 'Industrial, bridges'],
];

export const repeatedStructuralRows: string[][] = [
  ['25x25mm', '3–5mm', '1.1–1.8 kg/m'],
  ['40x40mm', '3–6mm', '1.8–3.5 kg/m'],
  ['50x50mm', '5–6mm', '3.8–4.5 kg/m'],
  ['65x65mm', '5–8mm', '4.9–7.7 kg/m'],
  ['75x75mm', '6–10mm', '6.8–11.0 kg/m'],
  ['100x100mm', '6–12mm', '9.2–17.8 kg/m'],
  ['150x150mm', '10–16mm', '22.6–35.0 kg/m'],
  ['200x200mm', '12–24mm', '36.2–60.0 kg/m'],
];

export const productsDetail = {
  '/products/tmt-bars': {
    title: 'TMT Bars',
    subtitle: 'High-strength thermo mechanically treated steel reinforcement bars for construction.',
    sectionTitle: 'TMT Steel Reinforcement Bars',
    body: 'Authorized distributor for Mono TMT, custom-length Fe500, Fe550D, CRS for residential/commercial/export. TMT is the backbone in foundations, columns, beams, slabs and all RCC. Stocks trusted manufacturers, BIS standards for strength, ductility and corrosion.',
    badge: 'Authorized Distribution Partner',
    callout: 'Mono TMT Steel Bars & Custom Lengths',
    grades: ['Fe500: Standard Structural', 'Fe550D: High Ductility', 'CRS: Corrosion Resistant'],
    benefits: ['High Strength — yield 500+ MPa', 'Earthquake Resistant — high elongation/ductility absorb seismic energy', 'Corrosion Resistant — tempered martensite outer layer', 'Fire Resistant — maintains integrity up to 600°C', 'Superior Weldability — low carbon equivalent'],
    table: tmtWeightRows,
    tableHeaders: ['Size', 'Weight', 'Typical use'],
    brands: ['Mono', 'Utkarsh', 'Varrsana', 'National', 'Tata', 'SAIL', 'JSW', 'RINL', 'JSPL', 'Panther', 'Jindal', 'ET', 'Gallantt', 'Nilkanth', 'ASR', 'German', 'Kemo', 'Welspun', 'Poddar', 'UltraGold'],
  },
  '/products/steel-angles': {
    title: 'Steel Angles',
    subtitle: 'Mild steel equal and unequal structural framing/fabrication sections.',
    sectionTitle: 'Mild Steel Angles',
    body: 'Steel angles are L-shaped structural sections used across construction and fabrication. Equal and unequal angles are offered in a wide range.',
    benefits: ['Versatile Sizing', 'High Load Capacity', 'Easy Fabrication', 'BIS Certified (IS 2062)'],
    table: repeatedStructuralRows,
    tableHeaders: ['Size', 'Thickness', 'Weight'],
  },
  '/products/steel-channels': {
    title: 'MS Channels',
    subtitle: 'Mild steel standard channel sections (ISMC) for framing/fabrication.',
    sectionTitle: 'MS Channels (ISMC)',
    body: 'U-shaped structural sections for structural frames, supports, purlins and industrial applications; standard ISMC sizes are stocked in a wide range.',
    benefits: ['Versatile Sizing', 'High Load Capacity', 'Easy Fabrication', 'BIS Certified (IS 2062)'],
    table: repeatedStructuralRows,
    tableHeaders: ['Size', 'Thickness', 'Weight'],
  },
  '/products/steel-beams': {
    title: 'Steel Beams',
    subtitle: 'Mild steel ISMB, I-beams, and H-beams for structural framing and fabrication.',
    sectionTitle: 'Structural Steel Beams',
    body: 'Steel beams are I-shaped, L-shaped structural sections and H-shaped structural sections widely used for structural framing and fabrication. Stocked in ISMB/I/H ranges.',
    benefits: ['Versatile Sizing', 'High Load Capacity', 'Easy Fabrication', 'BIS Certified (IS 2062)'],
    table: repeatedStructuralRows,
    tableHeaders: ['Size', 'Thickness', 'Weight'],
  },
};

export type BrandProfile = {
  brand: string;
  route: string;
  group: 'TMT Bars' | 'Steel Angles' | 'MS Channels' | 'Steel Pipes';
  title: string;
  subtitle: string;
  overview: string;
  applications: string[];
  features: string[];
  advantages: string[];
  specs: InfoRow[];
  faq: Question[];
  related: string[];
  relationship?: string;
};

const tmtSizes = '8, 10, 12, 16, 20, 25, 32 + custom bulk';
const tmtDefaultRows = (
  brand: string,
  grades: string,
  standard: string,
  stock = 'In Stock - Ready for Dispatch',
  length = '12m / custom bulk',
  logistics = 'All Gujarat Delivery / Transport Available',
  labels: { brand?: string; sizes?: string; grades?: string } = {},
): InfoRow[] => [
  { label: labels.brand ?? 'Manufacturer / Brand', value: brand },
  { label: 'Category', value: 'TMT Bars' },
  { label: labels.sizes ?? 'Available sizes', value: tmtSizes },
  { label: labels.grades ?? 'Available grades', value: grades },
  { label: 'Standard length', value: length },
  { label: 'Manufacturing standard', value: standard },
  { label: 'Stock', value: stock },
  { label: 'Logistics', value: logistics },
];

export const brands: BrandProfile[] = [
  {
    brand: 'Mono TMT', route: '/tmt-bars/mono-tmt-bars/', group: 'TMT Bars', relationship: 'Authorized distributor',
    title: 'Mono TMT Bars Authorized Distributor in Bhuj, Kutch & Gujarat',
    subtitle: 'Primary distribution partner offering Fe550, Fe550D, CRS grade Mono TMT bars with custom length options.',
    overview: 'Advanced German Tempcore technology with a tough outer martensite rim and ductile ferrite-pearlite core. 100% genuine factory-certified steel is supplied.',
    applications: ['Residential Construction', 'Commercial Complexes', 'Industrial Buildings', 'Custom Pre-Cut Construction Projects'],
    features: ['German Tempcore Quenching Technology', 'Custom Length Ordering to Reduce On-Site Scrap', 'High Elongation & Seismic Resistance', 'Corrosion Resistant Steel (CRS) Variants'],
    advantages: ['Direct Factory Wholesale Rates', 'Zero Wastage with Custom Length Cuts', 'Official Manufacturer Certification', 'Immediate Delivery Stock'],
    specs: tmtDefaultRows('Mono TMT', 'Fe500, Fe550, Fe550D, Fe550 CRS, Fe550D CRS', 'IS1786:2008 Grade Fe500/Fe550D', 'In Stock - Ready for Dispatch', 'Customized pre-cut / standard 12m', 'All Over Gujarat Delivery Transport Available', { brand: 'Manufacturer', sizes: 'Sizes', grades: 'Grades' }),
    faq: [
      { question: 'Authorized distributor?', answer: 'Yes.' },
      { question: 'Custom lengths?', answer: 'Yes — tailored to engineering drawing to eliminate cutting wastage.' },
    ], related: ['Tata Tiscon', 'National TMX'],
  },
  {
    brand: 'Utkarsh TMX', route: '/tmt-bars/utkarsh-tmt-bars/', group: 'TMT Bars', relationship: 'Authorized distributor',
    title: 'Utkarsh TMX Bars Authorized Distributor in Bhuj',
    subtitle: 'Authorized distributor supplying heavy-duty Utkarsh TMX bars across Bhuj/Kutch/Gujarat.',
    overview: 'Engineered for high-load applications with full certificates.',
    applications: ['Heavy Infrastructure', 'Commercial High-Rises', 'Industrial Structures', 'Residential Projects'],
    features: ['High Tensile Strength', 'Advanced Metallurgical Structure', 'Uniform Rib Profile for Concrete Bonding', 'High Fire & Heat Resistance'],
    advantages: ['BIS Certified Quality', 'Superior Bendability & Weldability', 'Reliable Supply for Large Contractors', 'Competitive Wholesale Pricing'],
    specs: tmtDefaultRows('Utkarsh TMX', 'Fe500D, Fe550D', 'IS1786:2008 Fe500D/Fe550D', 'In Stock - Ready for Immediate Supply'),
    faq: [
      { question: 'What is Utkarsh?', answer: 'Premium thermo-mechanically treated steel with high strength, elongation, and concrete bond.' },
      { question: 'Where to buy?', answer: 'Authorized distributor in Bhuj with bulk stock.' },
      { question: 'Sizes?', answer: '8 to 32mm.' },
    ], related: ['Mono TMT', 'Varrsana TMX', 'National TMX', 'JSW Steel'],
  },
  {
    brand: 'Varrsana TMX', route: '/tmt-bars/varrsana-tmt-bars/', group: 'TMT Bars', relationship: 'Authorized channel partner',
    title: 'Varrsana TMX Bars Authorized Channel Partner in Bhuj',
    subtitle: 'High performance Varrsana TMX bars across Kutch/Gujarat.',
    overview: 'Automated rolling mills; 100% original factory material with test certificates.',
    applications: ['RCC Framed Structures', 'Commercial Buildings', 'Industrial Shed Foundations', 'Housing Projects'],
    features: ['Superior Ductility & Bendability', 'High Yield Strength', 'Excellent Corrosion Resistance', 'Clean Surface Finish'],
    advantages: ['Authorized Channel Partner Guarantee', 'Fast On-Site Vehicle Dispatch', 'Transparent Billing & Weightment', 'Bulk Quantity Discounts'],
    specs: tmtDefaultRows('Varrsana TMX', 'Fe500D, Fe550', 'IS1786', 'In Stock - Ready for Dispatch'),
    faq: [
      { question: 'Authorized channel partner?', answer: 'Yes.' },
      { question: 'Earthquake zones?', answer: 'Fe500D offers high UTS/YS ratio and elongation.' },
    ], related: ['Mono TMT', 'Utkarsh TMX', 'National TMX', 'SAIL'],
  },
  {
    brand: 'National TMX', route: '/tmt-bars/national-tmt-bars/', group: 'TMT Bars', relationship: 'Authorized dealer',
    title: 'National TMX Bars Authorized Dealer in Bhuj, Kutch & Gujarat',
    subtitle: 'Authorized dealer supplying genuine National TMX for foundations.',
    overview: 'Dependable reinforcement strength with authentic quality testing.',
    applications: ['Home Construction', 'Commercial Shops', 'RCC Slabs & Beams', 'Warehouse Foundations'],
    features: ['Strict Weight & Diameter Tolerance', 'Uniform Rib Pattern', 'Strong Concrete Grip', 'High Weather Endurance'],
    advantages: ['Authorized Dealer Trust', 'Best Market Rates', 'All Over Gujarat Delivery Transport Available', 'Flexible Order Quantities'],
    specs: tmtDefaultRows('National TMX', 'Fe500, Fe550, Fe550D, Fe550 CRS, Fe550D CRS', 'IS1786:2008 Grade Fe500/550D'),
    faq: [{ question: 'Authorized dealer?', answer: 'Yes.' }], related: ['Jindal Steel', 'Mono TMT'],
  },
  {
    brand: 'Tata Tiscon', route: '/tmt-bars/tata-tmt-bars/', group: 'TMT Bars',
    title: 'Tata TMT Bars Supplier in Bhuj, Kutch & Gujarat',
    subtitle: 'Supplier of Tata Tiscon 550D TMT Bars — India’s leading rebar brand for seismic safety.',
    overview: 'Tata GreenPro certified steel; factory-grade quality for structural applications.',
    applications: ['Seismic Zone5 Structures', 'Bridge Works & Dams', 'High-Rise Apartments', 'Luxury Residential Homes'],
    features: ['Super Ductile 550D', 'GreenPro certified', 'Superior Rib Profile', 'Enhanced Corrosion Resistance'],
    advantages: ['Tata Steel brand trust', 'Exact standard weight per meter', '100% genuine certified', 'Prompt site delivery'],
    specs: tmtDefaultRows('Tata Tiscon', 'Fe500, Fe550, Fe550D, CRS', 'IS1786:2008 Fe550D/Fe550D CRS', 'In Stock - Available on Order', '12m / custom', 'All Gujarat', { brand: 'Manufacturer', sizes: 'Sizes', grades: 'Grades' }),
    faq: [
      { question: 'What are Tata TMT bars?', answer: 'Produced by Tata Steel using virgin iron ore.' },
      { question: 'Available sizes?', answer: '8mm to 32mm + custom.' },
      { question: 'Grades?', answer: 'Fe500/550/550D/CRS.' },
    ], related: ['SAIL', 'JSW', 'Jindal', 'Mono'],
  },
  {
    brand: 'SAIL TMT', route: '/tmt-bars/sail-tmt-bars/', group: 'TMT Bars',
    title: 'SAIL TMT Bars Dealer in Bhuj, Kutch & Gujarat',
    subtitle: 'Public sector SAIL for heavy / government applications.',
    overview: 'Steel Authority of India Ltd steel focused on structural integrity and code compliance.',
    applications: ['Government Projects', 'Bridge Construction', 'Heavy Foundations', 'RCC Framing'],
    features: ['PSU Quality', 'High Impact Resistance', 'Exceptional Thermal Stability', 'Strict ISO Compliance'],
    advantages: ['Government-approved brand', 'Maximum Structural Reliability', 'MTC Guarantee', 'Wholesale Rates'],
    specs: tmtDefaultRows('SAIL', 'Fe500, Fe550, Fe550D, Fe550 CRS, Fe550D CRS', 'IS1786:2008 Grade Fe500/550D'),
    faq: [{ question: 'Are SAIL bars approved for government projects?', answer: 'Yes. SAIL is a PSU brand used across government/defense tenders.' }], related: ['Tata', 'JSW', 'RINL Vizag', 'Mono'],
  },
  {
    brand: 'JSW Steel', route: '/tmt-bars/jsw-tmt-bars/', group: 'TMT Bars',
    title: 'JSW TMT Bars Supplier in Bhuj, Kutch & Gujarat',
    subtitle: 'High-purity primary steel TMT bars.',
    overview: 'JSW Neosteel produced from high-purity virgin steel via blast furnaces, with low tramp elements.',
    applications: ['Commercial High-Rises', 'Industrial Warehouses', 'Infrastructure Works', 'Residential Buildings'],
    features: ['High Purity Virgin Steel', 'Uniform Rib Spacing', 'Superior Fatigue Resistance', 'Excellent Weldability'],
    advantages: ['Highest Tensile Strength', 'Consistent Quality across Batches', 'BIS Certification', 'Competitive Pricing'],
    specs: tmtDefaultRows('JSW Steel', 'Fe500, Fe550, Fe550D, Fe550 CRS, Fe550D CRS', 'IS1786:2008 Grade Fe500/550D'),
    faq: [{ question: 'What is JSW Neosteel?', answer: 'Flagship TMT made from high-purity virgin steel ore.' }], related: ['Tata', 'SAIL', 'Jindal'],
  },
  {
    brand: 'RINL Vizag', route: '/tmt-bars/vizag-tmt-bars/', group: 'TMT Bars',
    title: 'Vizag TMT Bars Dealer in Bhuj, Kutch & Gujarat',
    subtitle: 'RINL Vizag Steel TMT bars.',
    overview: 'Clean steel with low sulfur/phosphorus.',
    applications: ['Industrial Units', 'Port & Marine', 'Residential Buildings', 'Commercial Infrastructure'],
    features: ['Low sulfur/phosphorus', 'Superior Bend Ability', 'High Resistance to Corrosion', 'PSU Certified'],
    advantages: ['Top choice for heavy engineering', 'Consistent meter weight', 'Factory direct', 'Competitive bulk rates'],
    specs: tmtDefaultRows('RINL Vizag', 'Fe500D', 'IS1786:2008 Grade Fe500D', 'In Stock'),
    faq: [{ question: 'What makes Vizag special?', answer: '100% primary liquid steel with minimal impurities for higher toughness.' }], related: ['Tata', 'SAIL', 'JSW', 'National'],
  },
  {
    brand: 'JSPL TMT', route: '/tmt-bars/jspl-tmt-bars/', group: 'TMT Bars',
    title: 'JSPL TMT Bars Supplier in Bhuj, Kutch & Gujarat',
    subtitle: 'Jindal Steel & Power Ltd structural TMT rebar.',
    overview: 'State-of-the-art rolling technology with high yield and elongation.',
    applications: ['Heavy Bridges', 'Industrial Complexes', 'High Rise Towers', 'Infrastructure Projects'],
    features: ['High Tensile Strength', 'Advanced Thermal Treatment', 'Uniform Rib Design', 'High Weldability'],
    advantages: ['JSPL Brand Reliability', 'Strict Quality Testing', 'All Gujarat Delivery', 'Bulk Rates'],
    specs: tmtDefaultRows('JSPL', 'Fe500, Fe550, Fe550D, Fe550 CRS, Fe550D CRS', 'IS1786:2008 Grade Fe500/550D'),
    faq: [{ question: 'Where to buy?', answer: 'Genuine JSPL bars in Bhuj with site delivery across Gujarat.' }], related: ['Tata', 'Panther', 'Jindal'],
  },
  {
    brand: 'Panther TMT', route: '/tmt-bars/panther-tmt-bars/', group: 'TMT Bars',
    title: 'Panther TMT Bars Dealer in Bhuj, Kutch & Gujarat',
    subtitle: 'High-ductility engineered earthquake resistance.',
    overview: 'Outer tempered skin with a ductile core.',
    applications: ['High Rise Apartments', 'Commercial Centers', 'RCC Slabs & Columns', 'Residential Homes'],
    features: ['HYQST Technology', 'High Ductility', 'Superior Concrete Grip', 'Thermal Endurance'],
    advantages: ['Earthquake Protection', 'Consistent Weight', 'Wholesale Rates', 'Quick Site Delivery'],
    specs: tmtDefaultRows('Panther', 'Fe500, Fe550, Fe550D, Fe550 CRS, Fe550D CRS', 'IS1786:2008 Grade Fe500/550D'),
    faq: [{ question: 'Why select Panther?', answer: 'High elongation to absorb earthquake shocks.' }], related: ['JSW', 'JSPL', 'Jindal'],
  },
  {
    brand: 'Jindal Steel', route: '/tmt-bars/jindal-tmt-bars/', group: 'TMT Bars',
    title: 'Jindal TMT Bars Dealer in Bhuj, Kutch & Gujarat',
    subtitle: 'Jindal Steel TMT produced using advanced quenching/self-tempering.',
    overview: 'Modern automated mills.',
    applications: ['High-Rise Structures', 'Heavy Foundations', 'Commercial Complexes', 'Residential Villas'],
    features: ['Advanced Quenching Technology', 'High Bond Strength', 'Superior Elongation', 'Excellent Weldability'],
    advantages: ['Jindal Brand Authority', 'Uniform Grain Structure', 'Full Test Certificate', 'Quick Delivery'],
    specs: tmtDefaultRows('Jindal Steel', 'Fe500, Fe550, Fe550D, Fe550 CRS, Fe550D CRS', 'IS1786:2008 Grade Fe500/550D'),
    faq: [{ question: 'What is Jindal TMT?', answer: 'A trusted structural rebar brand produced by Jindal Steel.' }], related: ['Tata', 'JSW', 'Panther', 'Mono'],
  },
  {
    brand: 'ET TMT', route: '/tmt-bars/et-tmt-bars/', group: 'TMT Bars',
    title: 'ET TMT Bars Supplier in Bhuj, Kutch & Gujarat',
    subtitle: 'High-strength ET TMT for reliable RCC.',
    overview: 'High resilience and cost-efficient reinforcement.',
    applications: ['Residential RCC Slabs', 'Commercial Sheds', 'Foundation Footings', 'General Contracting'],
    features: ['High Tensile Strength', 'Good Weldability', 'Uniform Rib Spacing', 'Corrosion Resistant'],
    advantages: ['Economical Wholesale Rate', 'Reliable Quality', 'All Gujarat Delivery'],
    specs: tmtDefaultRows('ET TMT', 'Fe500, Fe550D', 'IS1786:2008 Grade Fe500/Fe550', 'In Stock'),
    faq: [{ question: 'Where to get ET TMT?', answer: 'Genuine ET bars with all-Gujarat delivery.' }], related: ['Gallantt', 'ASR Steel', 'Mono'],
  },
  {
    brand: 'Gallantt TMT', route: '/tmt-bars/gallantt-tmt-bars/', group: 'TMT Bars',
    title: 'Gallantt TMT Bars Supplier in Bhuj, Kutch & Gujarat',
    subtitle: 'High strength and cost-efficient TMT bars.',
    overview: 'Modern integrated steel plants balancing tensile strength, elongation, and affordability.',
    applications: ['Housing Projects', 'Commercial Shops', 'Industrial Sheds', 'RCC Foundations'],
    features: ['Integrated Steel Production', 'Consistent Quality', 'Corrosion Resistance', 'Good Bendability'],
    advantages: ['Cost Effective', 'BIS Certified', 'Reliable Local Availability', 'Bulk Rates'],
    specs: tmtDefaultRows('Gallantt', 'Fe500, Fe550, Fe550D, Fe550 CRS, Fe550D CRS', 'IS1786:2008 Grade Fe500/550D'),
    faq: [{ question: 'Suitable for residential work?', answer: 'Yes; Fe550D can be used for slabs, beams, and columns.' }], related: ['Mono', 'Welspun', 'National'],
  },
  {
    brand: 'Nilkanth TMT', route: '/tmt-bars/nilkanth-tmt-bars/', group: 'TMT Bars',
    title: 'Nilkanth TMT Bars Supplier in Bhuj, Kutch & Gujarat',
    subtitle: 'Durable/high-strength reinforcement for RCC.',
    overview: 'Accurate section weight, uniform ribs, and weather resistance.',
    applications: ['Residential Villas', 'Commercial Premises', 'Column Footings', 'Boundary Walls'],
    features: ['ISI Marked Standard', 'High Bonding Strength', 'Excellent Elongation', 'Corrosion Resistant'],
    advantages: ['Value for Money', 'Consistent Quality', 'All Gujarat Delivery'],
    specs: tmtDefaultRows('Nilkanth TMT', 'Fe500, Fe550, Fe550D, Fe550 CRS, Fe550D CRS', 'IS1786:2008 Grade Fe500/550D'),
    faq: [{ question: 'Where to purchase?', answer: 'Genuine Nilkanth with transport delivery all Gujarat.' }], related: ['Gallantt', 'ASR', 'Mono'],
  },
  {
    brand: 'ASR TMT', route: '/tmt-bars/asr-tmt-bars/', group: 'TMT Bars',
    title: 'ASR TMT Bars Dealer in Bhuj, Kutch & Gujarat',
    subtitle: 'Economical and reliable TMT reinforcement.',
    overview: 'Affordable and sturdy TMT bars.',
    applications: ['Boundary Walls', 'Residential Foundations', 'Commercial Shops', 'Agricultural Sheds'],
    features: ['ISI Marked Quality', 'Ductile Core', 'Uniform Diameter', 'Standard Weight'],
    advantages: ['Pocket Friendly', 'Ready Local Stock', 'All Gujarat Delivery'],
    specs: tmtDefaultRows('ASR Steel', 'Fe500, Fe550, Fe550D, Fe550 CRS, Fe550D CRS', 'IS1786:2008 Grade Fe500/550D'),
    faq: [{ question: 'Where to buy?', answer: 'Available at Sanghvi Agency Bhuj with instant dispatch across Gujarat.' }], related: ['Gallantt', 'Mono', 'National'],
  },
  {
    brand: 'German TMT', route: '/tmt-bars/german-tmt-bars/', group: 'TMT Bars',
    title: 'German TMT Bars Supplier in Bhuj, Kutch & Gujarat',
    subtitle: 'German technology thermo-mechanical TMT bars.',
    overview: 'Cooling technology creates a hard outer rim and tough core for earthquake resistance.',
    applications: ['High Rise Buildings', 'Heavy Bridges', 'Industrial Infrastructure', 'Residential RCC Structures'],
    features: ['German Quenching Technology', 'High Tensile Strength', 'Seismic Shock Absorption', 'Corrosion Resistant'],
    advantages: ['High Ductility', 'Clean Steel Quality', 'All Gujarat Delivery'],
    specs: tmtDefaultRows('German TMT', 'Fe500D, Fe550D', 'IS1786', 'In Stock'),
    faq: [{ question: 'What is unique?', answer: 'Advanced quenching for tensile strength and ductility.' }], related: ['Mono'],
  },
  {
    brand: 'Kemo TMT', route: '/tmt-bars/kemo-tmt-bars/', group: 'TMT Bars',
    title: 'Kemo TMT Bars Supplier in Bhuj, Kutch & Gujarat',
    subtitle: 'High-durability TMT bars.',
    overview: 'Strong concrete grip and corrosion resistance.',
    applications: ['Residential Buildings', 'Commercial Complexes', 'Factory Foundations', 'Slabs & Beams'],
    features: ['High Tensile Rating', 'Uniform Rib Pattern', 'Ductile Core', 'Weather Resistant'],
    advantages: ['Affordable Bulk Pricing', 'Trusted Structural Quality', 'All Gujarat Delivery'],
    specs: tmtDefaultRows('Kemo TMT', 'Fe500, Fe550D', 'IS1786:2008 Fe500/550D', 'In Stock'),
    faq: [{ question: 'Where to buy?', answer: 'Bhuj stock with transport across Gujarat.' }], related: ['Gallantt', 'ASR', 'National'],
  },
  {
    brand: 'Welspun TMT', route: '/tmt-bars/welspun-tmt-bars/', group: 'TMT Bars',
    title: 'Welspun TMT Bars Dealer in Bhuj, Kutch & Gujarat',
    subtitle: 'Welspun Group TMT for industrial/coastal applications.',
    overview: 'Metallurgical expertise focused on corrosion resistance and high-load use.',
    applications: ['Coastal Construction', 'Industrial Plants', 'Warehouses', 'RCC Buildings'],
    features: ['High Corrosion Endurance', 'Tough Core Structure', 'Superior Rib Design', 'High Bendability'],
    advantages: ['Welspun reliability', 'Great for Saline Coastal Air', 'Full Quality Guarantee', 'Wholesale Rates'],
    specs: tmtDefaultRows('Welspun', 'Fe500, Fe550, Fe550D, Fe550 CRS, Fe550D CRS', 'IS1786:2008 Grade Fe500/550D'),
    faq: [{ question: 'Why popular in Kutch/Gujarat?', answer: 'Coastal saline environments such as Mundra and Kandla are explicitly referenced.' }], related: ['JSW', 'Mono'],
  },
  {
    brand: 'Poddar TMT', route: '/tmt-bars/poddar-tmt-bars/', group: 'TMT Bars',
    title: 'Poddar TMT Bars Supplier in Bhuj, Kutch & Gujarat',
    subtitle: 'Strong and cost-effective TMT for RCC.',
    overview: 'Dependable bond strength, exact weight, and corrosion protection.',
    applications: ['Residential Houses', 'Commercial Buildings', 'Foundation Footings', 'RCC Columns'],
    features: ['High Ductility', 'Clean Surface Finish', 'Corrosion Resistant', 'Uniform Rib Spacing'],
    advantages: ['Economical Pricing', 'Strict Section Weight', 'All Gujarat Delivery'],
    specs: tmtDefaultRows('Poddar TMT', 'Fe500, Fe550D', 'IS1786:2008 Fe500/550D', 'In Stock'),
    faq: [{ question: 'Where to buy?', answer: 'Sanghvi Agency Bhuj stocks and delivers across Gujarat.' }], related: ['Gallantt', 'ASR', 'Kemo'],
  },
  {
    brand: 'ASR MS Angles', route: '/ms-angle/asr-angle/', group: 'Steel Angles',
    title: 'ASR MS Angles Supplier in Bhuj, Kutch & Gujarat',
    subtitle: 'Structural equal & unequal MS angles for fabrication & framing.',
    overview: 'Hot-rolled L sections for trusses, towers, industrial frames, and fabrication.',
    applications: ['Roof Trusses', 'Industrial Shed Frames', 'Solar Panel Mounting Racks', 'General Gate & Grill Fabrication'],
    features: ['IS2062 Certified', 'Equal & Unequal Flange Dimensions', 'High Dimensional Accuracy', 'Easy Weldability & Cutting'],
    advantages: ['Wide Range of Thicknesses', 'Straight Section Finish', 'Bulk Inventory in Bhuj Yard', 'Direct Wholesale Rates'],
    specs: [
      { label: 'Brand', value: 'ASR Steel' }, { label: 'Sizes', value: '25x25, 35x35, 40x40, 50x50, 65x65, 75x75, 100x100' },
      { label: 'Grade', value: 'E250 / Fe410W' }, { label: 'Lengths', value: '6m / 12m' },
      { label: 'Standard', value: 'IS2062:2011 Grade E250 (Fe410W)' }, { label: 'Stock', value: 'In Stock - Ready' }, { label: 'Logistics', value: 'All Gujarat' },
    ],
    faq: [{ question: 'What are they used for?', answer: 'Roof trusses, equipment frames, shed supports, and towers.' }], related: ['Mittal Steel'],
  },
  {
    brand: 'Mittal MS Angles', route: '/ms-angle/mittal-angle/', group: 'Steel Angles',
    title: 'Mittal MS Angles Dealer in Bhuj, Kutch & Gujarat',
    subtitle: 'Heavy-duty MS angles for industrial and structural applications.',
    overview: 'Supreme load bearing capacity for heavy industrial sheds, machinery bases, and framework.',
    applications: ['Heavy Factory Sheds', 'Power Substation Frameworks', 'Crane Gantry Supports', 'Industrial Platforms'],
    features: ['High Tensile Yield Strength', 'Uniform Flange Thickness', 'Excellent Weld Capability', 'IS2062 Compliance'],
    advantages: ['Tested Load Tolerance', 'Full Test Certificates', 'Wholesale Warehouse Stock', 'All Gujarat Delivery'],
    specs: [
      { label: 'Brand', value: 'Mittal Steel' }, { label: 'Sizes', value: '40x40, 50x50, 65x65, 75x75, 90x90, 100x100, 130x130' },
      { label: 'Grade', value: 'E250' }, { label: 'Lengths', value: '6m / 12m' },
      { label: 'Standard', value: 'IS2062 E250' }, { label: 'Stock', value: 'In Stock' }, { label: 'Logistics', value: 'All Gujarat' },
    ],
    faq: [{ question: 'Test certificates?', answer: 'Yes — mill test certificates.' }], related: ['ASR Steel'],
  },
  {
    brand: 'ASR MS Channels', route: '/ms-channel/asr-channel/', group: 'MS Channels',
    title: 'ASR MS Channels (ISMC) Supplier in Bhuj, Kutch & Gujarat',
    subtitle: 'Purlins, sheds, transport, and structural framing.',
    overview: 'C-sections manufactured to Indian standards.',
    applications: ['Industrial Shed Purlins', 'Mezzanine Floors', 'Heavy Machinery Base Frames', 'Truck/Trailer Fabrication'],
    features: ['Standard ISMC Profile', 'High Moment of Inertia', 'Clean Edge Profile', 'Uniform Flange Web Joint'],
    advantages: ['High Structural Endurance', 'Wide Range of Standard Weights', 'Warehouse Ready', 'Competitive Bulk'],
    specs: [
      { label: 'Brand', value: 'ASR Steel' }, { label: 'Sizes', value: 'ISMC75, 100, 125, 150, 200, 250' },
      { label: 'Grade', value: 'E250 / Fe410W' }, { label: 'Lengths', value: '6m / 12m' },
      { label: 'Standard', value: 'IS2062:2011 E250 ISMC' }, { label: 'Stock', value: 'In Stock' }, { label: 'Logistics', value: 'All Gujarat' },
    ],
    faq: [{ question: 'What does ISMC mean?', answer: 'Indian Standard Medium Channel.' }], related: ['Mittal Steel'],
  },
  {
    brand: 'Mittal MS Channels', route: '/ms-channel/mittal-channel/', group: 'MS Channels',
    title: 'Mittal MS Channels Dealer in Bhuj, Kutch & Gujarat',
    subtitle: 'Heavy-duty industrial MS channels.',
    overview: 'Load distribution for large span industrial roofs, crane gantries, and commercial frames.',
    applications: ['Factory Infrastructure', 'Warehouse Roof Purlins', 'Bridge Approach Frameworks', 'Heavy Fabrication'],
    features: ['High Structural Load Rating', 'Uniform Web & Flange Dimensions', 'IS2062 Certification', 'Great Weldability'],
    advantages: ['Mill Certified Quality', 'High Deflection Resistance', 'Immediate Stock Access', 'Wholesale Rates'],
    specs: [
      { label: 'Brand', value: 'Mittal Steel' }, { label: 'Sizes', value: 'ISMC100, 125, 150, 200, 250, 300' },
      { label: 'Grade', value: 'E250' }, { label: 'Lengths', value: '6m / 12m' },
      { label: 'Standard', value: 'IS2062 E250' }, { label: 'Stock', value: 'In Stock' }, { label: 'Logistics', value: 'All Gujarat' },
    ],
    faq: [{ question: 'Where to buy?', answer: 'Genuine stock from Bhuj with site delivery.' }], related: ['ASR Steel'],
  },
  {
    brand: 'Apollo Steel Pipes', route: '/pipes/apollo-pipes/', group: 'Steel Pipes',
    title: 'Apollo Steel Pipes Dealer in Bhuj, Kutch & Gujarat',
    subtitle: 'APL Apollo ERW structural pipes, SHS/RHS.',
    overview: 'India’s largest structural steel pipe manufacturer reference; round, square, and rectangular pipes for modern architecture and industrial uses.',
    applications: ['Solar Panel Structure Framing', 'Industrial Shed Structures', 'Architectural Gates & Railings', 'Scaffolding & Plumbing Work'],
    features: ['High Strength-to-Weight Ratio', 'Precision Dimensions', 'Smooth Surface Finish', 'Available in Black & GI'],
    advantages: ['Apollo Brand Trust', 'Clean Aesthetic Finish', 'Full Size Variety', 'Competitive Wholesale Pricing'],
    specs: [
      { label: 'Brand', value: 'Apollo Pipes' }, { label: 'Sizes', value: '15mm–150mm Round NB; 20x20–150x150 Square; 40x20–200x100 Rectangular' },
      { label: 'Grades', value: 'YSt210/240/310' }, { label: 'Length', value: '6m' },
      { label: 'Standard', value: 'IS4923 / IS1161' }, { label: 'Stock', value: 'In Stock' }, { label: 'Logistics', value: 'All Gujarat' },
    ],
    faq: [{ question: 'What are CHS/SHS/RHS?', answer: 'Circular, square, and rectangular hollow sections.' }], related: ['Goodluck', 'Surya'],
  },
  {
    brand: 'Goodluck Steel Pipes', route: '/pipes/goodluck-pipes/', group: 'Steel Pipes',
    title: 'Goodluck Steel Pipes Supplier in Bhuj, Kutch & Gujarat',
    subtitle: 'High durability ERW/GI steel pipes.',
    overview: 'Exact wall thickness and high-pressure performance for water, industrial, and structural applications.',
    applications: ['Water Supply / Plumbing', 'Industrial Framing', 'Shed Structures', 'Fencing / Posts'],
    features: ['Pressure Resistance', 'Uniform Zinc GI', 'Accurate Wall Thickness', 'IS1239 / IS3589'],
    advantages: ['Durable Rust Resistance', 'High Structural Strength', 'Cost Effective', 'Prompt Logistics'],
    specs: [
      { label: 'Brand', value: 'Goodluck Steel' }, { label: 'Sizes', value: '15mm (1/2 inch) to 200mm (8 inch) NB' },
      { label: 'Grades', value: 'Light / Medium / Heavy' }, { label: 'Length', value: '6m' },
      { label: 'Standard', value: 'IS1239 / IS4923' }, { label: 'Stock', value: 'In Stock' }, { label: 'Logistics', value: 'All Gujarat' },
    ],
    faq: [{ question: 'Classes?', answer: 'Light (A), Medium (B), Heavy (C).' }], related: ['Apollo', 'Surya'],
  },
  {
    brand: 'Surya Roshni Steel Pipes', route: '/pipes/surya-pipes/', group: 'Steel Pipes',
    title: 'Surya Roshni Steel Pipes Supplier in Bhuj, Kutch & Gujarat',
    subtitle: 'Premium GI/ERW pipes for agriculture, commercial, and structural use.',
    overview: 'Premier Indian manufacturer; GI and black ERW products focused on weather resistance and long life.',
    applications: ['Agricultural Borewell & Irrigation', 'Commercial Firefighting Systems', 'Structural Shed Framing', 'Handrails & Gates'],
    features: ['Heavy Hot-Dip Galvanization', 'High Burst Pressure Safety', 'Smooth Inner Bore', 'BIS Quality Mark'],
    advantages: ['Surya Brand Prestige', 'Zero Rust Protection', 'Bulk Availability', 'Competitive Rates'],
    specs: [
      { label: 'Brand', value: 'Surya Roshni' }, { label: 'Sizes', value: '15–150mm NB' },
      { label: 'Grades', value: 'Medium & Heavy' }, { label: 'Length', value: '6m' },
      { label: 'Standard', value: 'IS1239 / IS4923' }, { label: 'Stock', value: 'In Stock' }, { label: 'Logistics', value: 'All Gujarat' },
    ],
    faq: [{ question: 'Underground water lines?', answer: 'Yes — hot-dip galvanized pipes resist soil corrosion and high water pressure.' }], related: ['Apollo', 'Goodluck'],
  },
];

export const routeBrandNames = [
  'Mono TMT', 'Utkarsh TMX', 'Varrsana TMX', 'National TMX', 'Tata Tiscon', 'SAIL TMT', 'JSW Steel', 'RINL Vizag', 'JSPL TMT', 'Panther TMT', 'Jindal Steel', 'ET TMT', 'Gallantt TMT', 'Nilkanth TMT', 'ASR TMT', 'German TMT', 'Kemo TMT', 'Welspun TMT', 'Poddar TMT', 'ASR MS Angles', 'Mittal MS Angles', 'ASR MS Channels', 'Mittal MS Channels', 'Apollo Steel Pipes', 'Goodluck Steel Pipes', 'Surya Roshni Steel Pipes',
];

export const allBrandNames = [
  'Mono TMT', 'Utkarsh TMX', 'Varrsana TMX', 'National TMX', 'Tata Tiscon', 'SAIL TMT', 'JSW Steel',
  'RINL (Vizag)', 'JSPL TMT', 'Panther TMT', 'Jindal Steel', 'ET TMT', 'Gallantt TMT', 'Nilkanth TMT',
  'ASR TMT', 'German TMT', 'Kemo TMT', 'Welspun TMT', 'Poddar TMT', 'ASR MS Angle & Channel',
  'Mittal MS Angle & Channel', 'Apollo Pipes', 'Goodluck Pipes', 'Surya Pipes', 'UltraGold', 'Essar',
  'Ambica', 'KB TMT', 'Parasakti',
];

export const brandRouteForName: Record<string, string> = Object.fromEntries(
  brands.map((brand) => [brand.brand.toLowerCase(), brand.route]),
);

const brandNameKey = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const brandRouteAliases: Record<string, string> = {
  tata: '/tmt-bars/tata-tmt-bars/',
  sail: '/tmt-bars/sail-tmt-bars/',
  jsw: '/tmt-bars/jsw-tmt-bars/',
  jspl: '/tmt-bars/jspl-tmt-bars/',
  jindal: '/tmt-bars/jindal-tmt-bars/',
  ultragold: '/tmt-bars/',
  'asr ms angle channel': '/ms-angle/asr-angle/',
  'mittal ms angle channel': '/ms-angle/mittal-angle/',
  'apollo pipes': '/pipes/apollo-pipes/',
  'goodluck pipes': '/pipes/goodluck-pipes/',
  'surya pipes': '/pipes/surya-pipes/',
  'mittal steel': '/ms-angle/mittal-angle/',
};

export const getBrandRoute = (name: string) => {
  const key = brandNameKey(name);
  const exact = brands.find((brand) => brandNameKey(brand.brand) === key);
  if (exact) return exact.route;
  if (brandRouteAliases[key]) return brandRouteAliases[key];
  const prefix = brands.find((brand) => brandNameKey(brand.brand).startsWith(`${key} `));
  if (prefix) return prefix.route;
  if (key.includes('pipe')) return '/pipes/';
  if (key.includes('channel')) return '/ms-channel/';
  if (key.includes('angle')) return '/ms-angle/';
  return '/tmt-bars/';
};

export const categoryPages = [
  {
    route: '/tmt-bars/', title: 'TMT Rebar Brands - Sanghvi Agency Bhuj, Kutch & Gujarat',
    subtitle: 'Authorized dealer & supplier of India’s leading TMT steel bar brands in Bhuj, Kutch & Gujarat.',
    heading: 'Certified TMT Bars Brands in Bhuj.',
    body: 'TMT and grades Fe500, Fe550, Fe550D, Fe550 CRS, Fe550D CRS.',
    brands: ['Tata Tiscon', 'SAIL', 'JSW Steel', 'RINL Vizag', 'JSPL', 'Panther TMT', 'Jindal Steel', 'ET TMT', 'Gallantt TMT', 'Nilkanth TMT', 'ASR TMT', 'German TMT', 'Kemo TMT', 'Mono TMT', 'Welspun', 'National TMX', 'Poddar TMT'],
    notes: ['Common sizes: 8mm, 10mm, 12mm, 16mm, 20mm; 8, 10, 12, 16, 20, 25, 32mm + custom.', 'Grades: Fe500, Fe550, Fe550D, Fe550 CRS, Fe550D CRS.', 'Delivery across Gujarat.'],
  },
  {
    route: '/ms-angle/', title: 'Structural Mild Steel Angles - Sanghvi Agency Bhuj, Kutch & Gujarat',
    subtitle: 'Quality equal and unequal MS angle sections from leading manufacturers for fabrication & framing.',
    heading: 'Certified MS Angles Brands in Bhuj.',
    body: 'Mild Steel (MS) angles are L-shaped structural steel sections used extensively in building frames, industrial trusses, towers, fabrication across Bhuj/Kutch/Gujarat.',
    brands: ['ASR MS Angles', 'Mittal MS Angles'],
    notes: ['ASR Steel: 25x25, 35x35, 40x40, 50x50, 65x65.', 'Mittal Steel: 40x40, 50x50, 65x65, 75x75, 90x90.', 'Sizes 25x25 up to 200x200, thickness 3–20mm.', 'Test certificates available; official manufacturer MTC complying IS 2062.'],
  },
  {
    route: '/ms-channel/', title: 'ISMC Steel Channels - Sanghvi Agency Bhuj, Kutch & Gujarat',
    subtitle: 'Heavy-duty C-channel for structural framing, purlins, industrial.',
    heading: 'MS Channels (ISMC)',
    body: 'ISMC are C-shaped structural steel sections; uses include shed purlins, vehicle chassis, industrial platforms, and frameworks.',
    brands: ['ASR MS Channels', 'Mittal MS Channels'],
    notes: ['ASR Steel: ISMC75, 100, 125, 150, 200.', 'Mittal Steel: ISMC100, 125, 150, 200, 250.', 'Standard ISMC75 (75x40mm) up to ISMC400 (400x100mm).', 'IS 2062 grade E250 (Fe 410 W).'],
  },
  {
    route: '/pipes/', title: 'Structural & ERW Steel Pipes - Sanghvi Agency Bhuj, Kutch & Gujarat',
    subtitle: 'Round, square, rectangular steel pipes & hollow sections from premier brands.',
    heading: 'Structural & ERW Steel Pipes',
    body: 'High-tensile SHS, RHS, round ERW for framing, scaffolding, solar mounting, plumbing.',
    brands: ['Apollo Steel Pipes', 'Goodluck Steel Pipes', 'Surya Roshni Steel Pipes'],
    notes: ['Apollo Pipes: APL Apollo ERW structural pipes, SHS/RHS. 15mm–150mm Round NB; 20x20–150x150 Square; 40x20–200x100 Rectangular.', 'Goodluck Steel: ERW/GI pipes, 15mm (1/2 inch) to 200mm (8 inch) NB.', 'Surya Roshni: premium GI/ERW, 15mm to 150mm NB.', 'Brands Apollo/Goodluck/Surya; shapes CHS, SHS, RHS; black and GI finishes.'],
  },
];

export const projects = [
  { title: 'Industrial Plant Steelwork', location: 'Gandhidham, Kutch', supply: '120 Tonnes Steel Supplied', sector: 'Industrial', image: images.gandhidhamPlant, alt: 'Representative industrial steel facility imagery for Gandhidham, Kutch; not a photograph of the named project' },
  { title: 'Multi-Story Residential Towers', location: 'Bhuj', supply: 'TMT Fe550D Supplied', sector: 'Residential', image: images.bhujTowers, alt: 'Representative Gujarati high-rise residential architecture for the Bhuj project; not a photograph of the named project' },
  { title: 'Commercial Plaza Framework', location: 'Mundra', supply: 'MS Channels & Beams', sector: 'Commercial', image: images.mundraPlaza, alt: 'Representative commercial construction imagery for the Mundra project; not a photograph of the named project' },
  { title: 'Logistics Storage Facility', location: 'Anjar', supply: 'Structural Sections', sector: 'Warehouses', image: images.anjarLogistics, alt: 'Representative Indian logistics warehouse imagery for the Anjar project; not a photograph of the named facility' },
  { title: 'Factory Expansion Shed', location: 'Bhachau', supply: 'Structural Angles & Beams', sector: 'Industrial', image: images.bhachauShed, alt: 'Representative steel-frame construction imagery for the Bhachau factory shed; not a photograph of the named project' },
  { title: 'Private Villa Gated Community', location: 'Mandvi', supply: 'High Ductility TMT Bars', sector: 'Residential', image: images.mandviVilla, alt: 'Representative Mandvi, Kutch residential architecture for the villa project; not a photograph of the named project' },
];

export const galleryItems = [
  { title: 'Steel Supply Warehouse', image: images.warehouse, alt: 'Industrial steel supply warehouse stocked with structural sections' },
  { title: 'TMT Rebar Bundles', image: images.tmtBars, alt: 'Bundled ribbed TMT reinforcement bars for concrete construction' },
  { title: 'Steel Angles & Structural Sections', image: images.steelAngles, alt: 'Stacked structural steel sections and angles in an industrial yard' },
  { title: 'Steel Beam Stock', image: images.steelBeams, alt: 'Stacked steel beams in a warehouse for structural fabrication' },
  { title: 'Construction & Crane Loading', image: images.portLoading, alt: 'Heavy industrial crane and steel logistics loading operation' },
  { title: 'Binding Wire Coils', image: images.bindingWire, alt: 'Large coils of steel wire used for construction tying applications' },
  { title: 'MS Channel Section Storage', image: images.msChannels, alt: 'Neatly stacked U-channel steel sections in industrial storage' },
  { title: 'Steel Pipe Inventory', image: images.steelPipes, alt: 'Steel pipes organized in an industrial warehouse for dispatch' },
  { title: 'Construction Hardware', image: images.hardware, alt: 'Assorted steel screws and bolts used for construction and fabrication' },
];

export const faqItems: Question[] = [
  { question: 'Do you supply bulk orders for large projects?', answer: 'Yes, absolutely. We handle orders of any scale — from individual bundles to full truckloads. We have supplied steel for some of the largest construction projects in the Kutch region. Contact us with your BOQ (Bill of Quantities) and we’ll provide a competitive quote within 24 hours.' },
  { question: 'Do you deliver outside Bhuj?', answer: 'Yes, across Kutch + Gujarat. Service areas: Bhuj, Gandhidham, Mundra, Mandvi, Nakhatrana, Anjar, Bhachau, Morbi, Rajkot. Site delivery. Charges vary based on location/order volume.' },
  { question: 'Which brands do you stock?', answer: 'Mono TMT, Utkarsh TMX, Varrsana TMX, National TMX, Tata Tiscon, SAIL TMT, JSW Steel, RINL (Vizag), JSPL TMT, Panther TMT, Jindal Steel, ET TMT, Gallantt TMT, Nilkanth TMT, ASR TMT, German TMT, Kemo TMT, Welspun TMT, Poddar TMT, ASR MS Angle & Channel, Mittal MS Angle & Channel, Apollo Pipes, Goodluck Pipes, Surya Pipes, UltraGold. Contact to confirm stock.' },
  { question: 'Can I request custom quantities?', answer: 'Yes. Standard bundles are available, but the business can accommodate specific requirements, from a few bars to hundreds of tonnes.' },
  { question: 'How do I get quotation?', answer: 'Use the Request Quote page, select products/quantities, and send directly to WhatsApp. You can also call/WhatsApp. Typical response is within 30 minutes during business hours.' },
  { question: 'What are payment terms?', answer: 'Cash, NEFT/RTGS/IMPS, cheque, and UPI. Terms vary by order size/customer. New customers: advance/COD. Long-standing customers may have credit.' },
  { question: 'Do you offer direct-to-site delivery?', answer: 'Yes, across Kutch/Gujarat, subject to road access and minimum order. Contact for feasibility and charges.' },
  { question: 'Are products ISI/BIS certified?', answer: 'Yes. TMT and structural stock are ISI/BIS compliant; IS 1786 for TMT and IS 2062 for structural steel. MTC is available.' },
  { question: 'Do you sell to homeowners?', answer: 'Yes. The business serves homeowners, contractors, engineers, fabricators, and industries, with retail and wholesale supply.' },
];

export const testimonials = [
  { name: 'Rajesh Patel', role: 'Building Contractor, Bhuj', quote: 'We have been buying TMT bars from Sanghvi Agency for over 10 years. Always reliable quality and competitive rates. They understand the needs of large contractors.', stars: 5 },
  { name: 'Mehul Shah', role: 'Industrial Builder, Gandhidham', quote: 'Excellent service and prompt delivery. Sanghvi Agency supplied all the steel for our warehouse project in Gandhidham. Very professional team.', stars: 5 },
  { name: 'Arjun Desai', role: 'Factory Owner, Mundra', quote: 'Best steel dealer in Kutch. We needed a mix of steel angles and channels for our factory expansion — Sanghvi Agency handled it perfectly.', stars: 5 },
  { name: 'Viral Joshi', role: 'Homeowner, Bhuj', quote: 'I built my house last year and got all the TMT bars and binding wire from Sanghvi Agency. Great rates compared to other dealers, and they delivered on time.', stars: 4 },
  { name: 'Kartik Mehta', role: 'Structural Engineer, Rajkot', quote: 'Our engineering firm has been working with Sanghvi Agency for years. Their range of structural steel sections is excellent. Genuine products with proper certification.', stars: 5 },
];

export const history = [
  { year: '2001', title: 'Founded in Bhuj', copy: 'Started as a small steel dealership serving local builders and contractors.' },
  { year: '2005', title: 'Expanded Product Range', copy: 'Added angles, channels and beams as industrial demand grew.' },
  { year: '2010', title: 'Regional Reach', copy: 'Delivery across entire Kutch — Gandhidham, Mundra, Mandvi, Anjar and beyond.' },
  { year: '2015', title: 'Multi-Brand Dealership', copy: 'Authorized dealer for Tata Tiscon, JSW and Jindal.' },
  { year: '2020', title: '1000+ Customers Milestone', copy: 'Over 1000 residential, commercial and industrial customers.' },
  { year: 'Today', title: 'Gujarat-Wide Service', copy: 'Customers across Gujarat with construction materials and trusted partnerships.' },
];

export const mission = 'Deliver quality construction materials, maintain competitive pricing, ensure timely deliveries, support builders with dependable supply, build lasting customer relationships, and contribute to stronger, safer construction projects.';
export const vision = 'To be the most trusted name in construction material supply across Gujarat—known for integrity, quality, and customer-first service. We aim to be the first call for every builder in the region.';
export const coreValues = ['Quality', 'Trust', 'Commitment', 'Reliability', 'Customer Satisfaction', 'Professional Service'];
export const advantage = ['20+ Years Experience', 'Retail & Wholesale Supply', 'Trusted by Builders & Contractors', 'Competitive Market Pricing', 'Reliable Product Availability & Delivery'];

export const privacySections = [
  { title: '1. Information We Collect', copy: 'Name, phone, email if provided, and product enquiry details. Collected solely via website forms and transmitted directly to the WhatsApp business number; no server storage.' },
  { title: '2. Use', copy: 'Respond to enquiries/quotes; product/pricing; orders/deliveries; improve products/services.' },
  { title: '3. Data Sharing', copy: 'The site states it does not sell/trade/rent data; information is shared only with WhatsApp (Meta) as a platform.' },
  { title: '4. Cookies & Analytics', copy: 'May use cookies/Google Analytics; anonymous usage; users can disable cookies.' },
  { title: '5. Third-party links', copy: 'The site disclaims responsibility for third-party links.' },
  { title: '6. Data Security', copy: 'Reasonable measures are used; WhatsApp end-to-end encryption during transmission is referenced.' },
  { title: '7. Rights', copy: 'Users may request access/correction/deletion via the contact details.' },
  { title: '8. Contact', copy: 'Business address, phone, and email.' },
];
export const termsSections = [
  { title: '1. Use of Website', copy: 'Informational and communication purposes.' },
  { title: '2. Product Information & Pricing', copy: 'Reference only; prices, stock, and specifications may change; users must confirm; not a binding offer.' },
  { title: '3. Quotations', copy: 'WhatsApp quotes are estimates, valid for a limited period, typically 24–48 hours, due to fluctuating steel prices; final price at order/payment.' },
  { title: '4. Intellectual Property', copy: 'Website content, logo, text, images, graphics, and design are the IP of Sanghvi Agency unless stated; unauthorized reproduction prohibited; third-party brand names/logos belong to their owners.' },
  { title: '5. Limitation', copy: 'No warranties regarding accuracy, completeness, or reliability; no liability as described on the page.' },
  { title: '6. Third-party links', copy: 'Includes WhatsApp, Google Maps, and social links; the site is not responsible for third-party destinations.' },
  { title: '7. Governing law', copy: 'India; disputes subject to exclusive jurisdiction of Bhuj courts.' },
  { title: '8. Changes', copy: 'Terms may be modified at any time; updated date will be posted; continued use constitutes acceptance.' },
  { title: '9. Contact', copy: 'Business address and phone.' },
];

export const footerBrandNames = ['Mono TMT', 'Utkarsh TMX', 'Varrsana TMX', 'National TMX'];
export const categoryFooterLinks = [
  { label: 'TMT Bars', to: '/tmt-bars/' },
  { label: 'MS Angles', to: '/ms-angle/' },
  { label: 'MS Channels', to: '/ms-channel/' },
  { label: 'Steel Pipes', to: '/pipes/' },
];
export const serviceLocations = ['Bhuj', 'Gandhidham', 'Mundra', 'Mandvi', 'Nakhatrana', 'Anjar', 'Bhachau', 'Morbi', 'Rajkot'];
