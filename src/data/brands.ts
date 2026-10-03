export type Cat = 'tmt' | 'angle' | 'channel' | 'pipe'
export type Brand = {
  key: string; cat: Cat; short: string; h1: string; sub: string; ov: string
  apps: string[]; feat: string[]; adv: string[]; faq: [string, string][]; rel: string[]
  spec: [string, string][]; card: string; badge?: string
}
export const CATS: Record<Cat, { base: string; title: string; h1: string; sub: string; h2: string; body: string; faq: [string, string][]; label: string }> = {
  tmt: { base: '/tmt-bars', label: 'TMT Bars', title: 'TMT Rebar Brands', h1: 'TMT Rebar Brands - Sanghvi Agency Bhuj, Kutch & Gujarat',
    sub: "Authorized dealer & supplier of India's leading TMT steel bar brands in Bhuj, Kutch & Gujarat.", h2: 'Certified TMT Bars Brands in Bhuj.',
    body: 'TMT and grades Fe500, Fe550, Fe550D, Fe550 CRS, Fe550D CRS.',
    faq: [['Which brands are available?', 'Tata, SAIL, JSW, Vizag, JSPL, Panther, Jindal, ET, Gallantt, Nilkanth, ASR, German, Kemo, Mono, Welspun, National, Poddar.'],
      ['What are the common sizes?', '8, 10, 12, 16, 20, 25, 32 + custom.'], ['What grades are available?', 'Fe500, Fe550, Fe550D, Fe550 CRS, Fe550D CRS.'], ['Do you deliver?', 'Delivery across Gujarat.']] },
  angle: { base: '/ms-angle', label: 'MS Angles', title: 'MS Angles', h1: 'Structural Mild Steel Angles - Sanghvi Agency Bhuj, Kutch & Gujarat',
    sub: 'Quality equal and unequal MS angle sections from leading manufacturers for fabrication & framing.', h2: 'Certified MS Angles Brands in Bhuj.',
    body: 'Mild Steel (MS) angles are L-shaped structural steel sections used extensively in building frames, industrial trusses, towers, fabrication across Bhuj/Kutch/Gujarat.',
    faq: [['What sizes are available?', '25x25 up to 200x200, thickness 3-20mm.'], ['Are test certificates available?', 'Test certificates available; official manufacturer MTC complying IS 2062.']] },
  channel: { base: '/ms-channel', label: 'MS Channels', title: 'MS Channels', h1: 'ISMC Steel Channels - Sanghvi Agency Bhuj, Kutch & Gujarat',
    sub: 'Heavy-duty C-channel for structural framing, purlins, industrial.', h2: 'Certified MS Channels Brands in Bhuj.',
    body: 'ISMC are C-shaped structural steel sections; uses include shed purlins, vehicle chassis, industrial platforms, and frameworks.',
    faq: [['What sizes are standard?', 'Standard ISMC75 (75x40mm) up to ISMC400 (400x100mm).'], ['Which grade?', 'IS 2062 grade E250 (Fe 410 W).']] },
  pipe: { base: '/pipes', label: 'Steel Pipes', title: 'Steel Pipes', h1: 'Structural & ERW Steel Pipes - Sanghvi Agency Bhuj, Kutch & Gujarat',
    sub: 'Round, square, rectangular steel pipes & hollow sections from premier brands.', h2: 'Certified Steel Pipes Brands in Bhuj.',
    body: 'High-tensile SHS, RHS, round ERW for framing, scaffolding, solar mounting, plumbing.',
    faq: [['Which brands?', 'Apollo, Goodluck, Surya.'], ['Which shapes?', 'CHS, SHS, RHS.'], ['Which finishes?', 'Black and GI finishes.']] },
}
const SIZES = '8, 10, 12, 16, 20, 25, 32 + custom bulk'
const ALLG = 'All Gujarat Delivery / Transport Available'
const FULL = 'Fe500, Fe550, Fe550D, Fe550 CRS, Fe550D CRS'
const tmtSpec = (m: string, grades: string, std: string, stock: string, len = '12m / custom bulk', log = ALLG, manuLabel = 'Manufacturer / Brand'): [string, string][] =>
  [[manuLabel, m], ['Category', 'TMT Bars'], ['Available sizes', SIZES], ['Available grades', grades], ['Standard length', len], ['Manufacturing standard', std], ['Stock', stock], ['Logistics', log]]
const secSpec = (b: string, sizes: string, grade: string, std: string, stock: string): [string, string][] =>
  [['Brand', b], ['Sizes', sizes], ['Grade', grade], ['Lengths', '6m / 12m'], ['Standard', std], ['Stock', stock], ['Logistics', 'All Gujarat']]
const pipeSpec = (b: string, sizes: string, grades: string, std: string): [string, string][] =>
  [['Brand', b], ['Sizes', sizes], ['Grades', grades], ['Length', '6m'], ['Standard', std], ['Stock', 'In Stock'], ['Logistics', 'All Gujarat']]
const RDY = 'In Stock - Ready for Dispatch'
const STD = 'IS1786:2008 Grade Fe500/550D'
const CARD = '8mm, 10mm, 12mm, 16mm, 20mm'
const tmt = (key: string, short: string, h1: string, sub: string, ov: string, apps: string[], feat: string[], adv: string[], faq: [string, string][], rel: string[], spec: [string, string][], badge?: string): Brand =>
  ({ key, cat: 'tmt', short, h1, sub, ov, apps, feat, adv, faq, rel, spec, card: CARD, badge })

export const BRANDS: Brand[] = [
  tmt('mono', 'Mono TMT', 'Mono TMT Bars Authorized Distributor in Bhuj, Kutch & Gujarat', 'Primary distribution partner offering Fe550, Fe550D, CRS grade Mono TMT bars with custom length options.',
    'Advanced German Tempcore technology with a tough outer martensite rim and ductile ferrite-pearlite core. 100% genuine factory-certified steel is supplied.',
    ['Residential Construction', 'Commercial Complexes', 'Industrial Buildings', 'Custom Pre-Cut Construction Projects'],
    ['German Tempcore Quenching Technology', 'Custom Length Ordering to Reduce On-Site Scrap', 'High Elongation & Seismic Resistance', 'Corrosion Resistant Steel (CRS) Variants'],
    ['Direct Factory Wholesale Rates', 'Zero Wastage with Custom Length Cuts', 'Official Manufacturer Certification', 'Immediate Delivery Stock'],
    [['Authorized distributor?', 'Yes.'], ['Custom lengths?', 'Yes - tailored to engineering drawing to eliminate cutting wastage.']], ['Tata Tiscon', 'National TMX'],
    tmtSpec('Mono TMT', FULL, 'IS1786:2008 Grade Fe500/Fe550D', RDY, 'Customized pre-cut / standard 12m', 'All Over Gujarat Delivery Transport Available', 'Manufacturer'), 'Authorised Distributor'),
  tmt('utkarsh', 'Utkarsh TMX', 'Utkarsh TMX Bars Authorized Distributor in Bhuj', 'Authorized distributor supplying heavy-duty Utkarsh TMX bars across Bhuj/Kutch/Gujarat.',
    'Engineered for high-load applications with full certificates.', ['Heavy Infrastructure', 'Commercial High-Rises', 'Industrial Structures', 'Residential Projects'],
    ['High Tensile Strength', 'Advanced Metallurgical Structure', 'Uniform Rib Profile for Concrete Bonding', 'High Fire & Heat Resistance'],
    ['BIS Certified Quality', 'Superior Bendability & Weldability', 'Reliable Supply for Large Contractors', 'Competitive Wholesale Pricing'],
    [['What is Utkarsh?', 'Premium thermo-mechanically treated steel with high strength, elongation, and concrete bond.'], ['Where to buy?', 'Authorized distributor in Bhuj with bulk stock.'], ['Sizes?', '8 to 32mm.']],
    ['Mono TMT', 'Varrsana TMX', 'National TMX', 'JSW Steel'], tmtSpec('Utkarsh TMX', 'Fe500D, Fe550D', 'IS1786:2008 Fe500D/Fe550D', 'In Stock - Ready for Immediate Supply'), 'Authorised Distributor'),
  tmt('varrsana', 'Varrsana TMX', 'Varrsana TMX Bars Authorized Channel Partner in Bhuj', 'High performance Varrsana TMX bars across Kutch/Gujarat.',
    'Automated rolling mills; 100% original factory material with test certificates.', ['RCC Framed Structures', 'Commercial Buildings', 'Industrial Shed Foundations', 'Housing Projects'],
    ['Superior Ductility & Bendability', 'High Yield Strength', 'Excellent Corrosion Resistance', 'Clean Surface Finish'],
    ['Authorized Channel Partner Guarantee', 'Fast On-Site Vehicle Dispatch', 'Transparent Billing & Weightment', 'Bulk Quantity Discounts'],
    [['Authorized channel partner?', 'Yes.'], ['Earthquake zones?', 'Fe500D offers high UTS/YS ratio and elongation.']], ['Mono TMT', 'Utkarsh TMX', 'National TMX', 'SAIL'],
    tmtSpec('Varrsana TMX', 'Fe500D, Fe550', 'IS1786', RDY), 'Authorised Channel Partner'),
  tmt('national', 'National TMX', 'National TMX Bars Authorized Dealer in Bhuj, Kutch & Gujarat', 'Authorized dealer supplying genuine National TMX for foundations.',
    'Dependable reinforcement strength with authentic quality testing.', ['Home Construction', 'Commercial Shops', 'RCC Slabs & Beams', 'Warehouse Foundations'],
    ['Strict Weight & Diameter Tolerance', 'Uniform Rib Pattern', 'Strong Concrete Grip', 'High Weather Endurance'],
    ['Authorized Dealer Trust', 'Best Market Rates', 'All Over Gujarat Delivery Transport Available', 'Flexible Order Quantities'],
    [['Authorized dealer?', 'Yes.']], ['Jindal Steel', 'Mono TMT'], tmtSpec('National TMX', FULL, STD, RDY), 'Authorised Dealer'),
  tmt('tata', 'Tata TMT', 'Tata TMT Bars Supplier in Bhuj, Kutch & Gujarat', 'Supplier of Tata Tiscon 550D TMT Bars - India\u2019s leading rebar brand for seismic safety.',
    'Tata GreenPro certified steel; factory-grade quality for structural applications.', ['Seismic Zone5 Structures', 'Bridge Works & Dams', 'High-Rise Apartments', 'Luxury Residential Homes'],
    ['Super Ductile 550D', 'GreenPro certified', 'Superior Rib Profile', 'Enhanced Corrosion Resistance'],
    ['Tata Steel brand trust', 'Exact standard weight per meter', '100% genuine certified', 'Prompt site delivery'],
    [['What are Tata TMT bars?', 'Produced by Tata Steel using virgin iron ore.'], ['Available sizes?', '8mm to 32mm + custom.'], ['Grades?', 'Fe500/550/550D/CRS.']], ['SAIL', 'JSW', 'Jindal', 'Mono'],
    tmtSpec('Tata Tiscon', 'Fe500, Fe550, Fe550D, CRS', 'IS1786:2008 Fe550D/Fe550D CRS', 'In Stock - Available on Order', '12m / custom', 'All Gujarat', 'Manufacturer')),
  tmt('sail', 'SAIL TMT', 'SAIL TMT Bars Dealer in Bhuj, Kutch & Gujarat', 'Public sector SAIL for heavy / government applications.',
    'Steel Authority of India Ltd steel focused on structural integrity and code compliance.', ['Government Projects', 'Bridge Construction', 'Heavy Foundations', 'RCC Framing'],
    ['PSU Quality', 'High Impact Resistance', 'Exceptional Thermal Stability', 'Strict ISO Compliance'], ['Government-approved brand', 'Maximum Structural Reliability', 'MTC Guarantee', 'Wholesale Rates'],
    [['Are SAIL bars approved for government projects?', 'Yes. SAIL is a PSU brand used across government/defense tenders.']], ['Tata', 'JSW', 'RINL Vizag', 'Mono'], tmtSpec('SAIL', FULL, STD, RDY)),
  tmt('jsw', 'JSW TMT', 'JSW TMT Bars Supplier in Bhuj, Kutch & Gujarat', 'High-purity primary steel TMT bars.',
    'JSW Neosteel produced from high-purity virgin steel via blast furnaces, with low tramp elements.', ['Commercial High-Rises', 'Industrial Warehouses', 'Infrastructure Works', 'Residential Buildings'],
    ['High Purity Virgin Steel', 'Uniform Rib Spacing', 'Superior Fatigue Resistance', 'Excellent Weldability'], ['Highest Tensile Strength', 'Consistent Quality across Batches', 'BIS Certification', 'Competitive Pricing'],
    [['What is JSW Neosteel?', 'Flagship TMT made from high-purity virgin steel ore.']], ['Tata', 'SAIL', 'Jindal'], tmtSpec('JSW Steel', FULL, STD, RDY)),
  tmt('vizag', 'Vizag TMT', 'Vizag TMT Bars Dealer in Bhuj, Kutch & Gujarat', 'RINL Vizag Steel TMT bars.',
    'Clean steel with low sulfur/phosphorus.', ['Industrial Units', 'Port & Marine', 'Residential Buildings', 'Commercial Infrastructure'],
    ['Low sulfur/phosphorus', 'Superior Bend Ability', 'High Resistance to Corrosion', 'PSU Certified'], ['Top choice for heavy engineering', 'Consistent meter weight', 'Factory direct', 'Competitive bulk rates'],
    [['What makes Vizag special?', '100% primary liquid steel with minimal impurities for higher toughness.']], ['Tata', 'SAIL', 'JSW', 'National'], tmtSpec('RINL Vizag', 'Fe500D', 'IS1786:2008 Grade Fe500D', 'In Stock')),
  tmt('jspl', 'JSPL TMT', 'JSPL TMT Bars Supplier in Bhuj, Kutch & Gujarat', 'Jindal Steel & Power Ltd structural TMT rebar.',
    'State-of-the-art rolling technology with high yield and elongation.', ['Heavy Bridges', 'Industrial Complexes', 'High Rise Towers', 'Infrastructure Projects'],
    ['High Tensile Strength', 'Advanced Thermal Treatment', 'Uniform Rib Design', 'High Weldability'], ['JSPL Brand Reliability', 'Strict Quality Testing', 'All Gujarat Delivery', 'Bulk Rates'],
    [['Where to buy?', 'Genuine JSPL bars in Bhuj with site delivery across Gujarat.']], ['Tata', 'Panther', 'Jindal'], tmtSpec('JSPL', FULL, STD, RDY)),
  tmt('panther', 'Panther TMT', 'Panther TMT Bars Dealer in Bhuj, Kutch & Gujarat', 'High-ductility engineered earthquake resistance.',
    'Outer tempered skin with a ductile core.', ['High Rise Apartments', 'Commercial Centers', 'RCC Slabs & Columns', 'Residential Homes'],
    ['HYQST Technology', 'High Ductility', 'Superior Concrete Grip', 'Thermal Endurance'], ['Earthquake Protection', 'Consistent Weight', 'Wholesale Rates', 'Quick Site Delivery'],
    [['Why select Panther?', 'High elongation to absorb earthquake shocks.']], ['JSW', 'JSPL', 'Jindal'], tmtSpec('Panther', FULL, STD, RDY)),
  tmt('jindal', 'Jindal TMT', 'Jindal TMT Bars Dealer in Bhuj, Kutch & Gujarat', 'Jindal Steel TMT produced using advanced quenching/self-tempering.',
    'Modern automated mills.', ['High-Rise Structures', 'Heavy Foundations', 'Commercial Complexes', 'Residential Villas'],
    ['Advanced Quenching Technology', 'High Bond Strength', 'Superior Elongation', 'Excellent Weldability'], ['Jindal Brand Authority', 'Uniform Grain Structure', 'Full Test Certificate', 'Quick Delivery'],
    [['What is Jindal TMT?', 'A trusted structural rebar brand produced by Jindal Steel.']], ['Tata', 'JSW', 'Panther', 'Mono'], tmtSpec('Jindal Steel', FULL, STD, RDY)),
  tmt('et', 'ET TMT', 'ET TMT Bars Supplier in Bhuj, Kutch & Gujarat', 'High-strength ET TMT for reliable RCC.',
    'High resilience and cost-efficient reinforcement.', ['Residential RCC Slabs', 'Commercial Sheds', 'Foundation Footings', 'General Contracting'],
    ['High Tensile Strength', 'Good Weldability', 'Uniform Rib Spacing', 'Corrosion Resistant'], ['Economical Wholesale Rate', 'Reliable Quality', 'All Gujarat Delivery'],
    [['Where to get ET TMT?', 'Genuine ET bars with all-Gujarat delivery.']], ['Gallantt', 'ASR Steel', 'Mono'], tmtSpec('ET TMT', 'Fe500, Fe550D', 'IS1786:2008 Grade Fe500/Fe550', 'In Stock')),
  tmt('gallantt', 'Gallantt TMT', 'Gallantt TMT Bars Supplier in Bhuj, Kutch & Gujarat', 'High strength and cost-efficient TMT bars.',
    'Modern integrated steel plants balancing tensile strength, elongation, and affordability.', ['Housing Projects', 'Commercial Shops', 'Industrial Sheds', 'RCC Foundations'],
    ['Integrated Steel Production', 'Consistent Quality', 'Corrosion Resistance', 'Good Bendability'], ['Cost Effective', 'BIS Certified', 'Reliable Local Availability', 'Bulk Rates'],
    [['Suitable for residential work?', 'Yes; Fe550D can be used for slabs, beams, and columns.']], ['Mono', 'Welspun', 'National'], tmtSpec('Gallantt', FULL, STD, RDY)),
  tmt('nilkanth', 'Nilkanth TMT', 'Nilkanth TMT Bars Supplier in Bhuj, Kutch & Gujarat', 'Durable/high-strength reinforcement for RCC.',
    'Accurate section weight, uniform ribs, and weather resistance.', ['Residential Villas', 'Commercial Premises', 'Column Footings', 'Boundary Walls'],
    ['ISI Marked Standard', 'High Bonding Strength', 'Excellent Elongation', 'Corrosion Resistant'], ['Value for Money', 'Consistent Quality', 'All Gujarat Delivery'],
    [['Where to purchase?', 'Genuine Nilkanth with transport delivery all Gujarat.']], ['Gallantt', 'ASR', 'Mono'], tmtSpec('Nilkanth TMT', FULL, STD, RDY)),
  tmt('asr', 'ASR TMT', 'ASR TMT Bars Dealer in Bhuj, Kutch & Gujarat', 'Economical and reliable TMT reinforcement.',
    'Affordable and sturdy TMT bars.', ['Boundary Walls', 'Residential Foundations', 'Commercial Shops', 'Agricultural Sheds'],
    ['ISI Marked Quality', 'Ductile Core', 'Uniform Diameter', 'Standard Weight'], ['Pocket Friendly', 'Ready Local Stock', 'All Gujarat Delivery'],
    [['Where to buy?', 'Available at Sanghvi Agency Bhuj with instant dispatch across Gujarat.']], ['Gallantt', 'Mono', 'National'], tmtSpec('ASR Steel', FULL, STD, RDY)),
  tmt('german', 'German TMT', 'German TMT Bars Supplier in Bhuj, Kutch & Gujarat', 'German technology thermo-mechanical TMT bars.',
    'Cooling technology creates a hard outer rim and tough core for earthquake resistance.', ['High Rise Buildings', 'Heavy Bridges', 'Industrial Infrastructure', 'Residential RCC Structures'],
    ['German Quenching Technology', 'High Tensile Strength', 'Seismic Shock Absorption', 'Corrosion Resistant'], ['High Ductility', 'Clean Steel Quality', 'All Gujarat Delivery'],
    [['What is unique?', 'Advanced quenching for tensile strength and ductility.']], ['Mono'], tmtSpec('German TMT', 'Fe500D, Fe550D', 'IS1786', 'In Stock')),
  tmt('kemo', 'Kemo TMT', 'Kemo TMT Bars Supplier in Bhuj, Kutch & Gujarat', 'High-durability TMT bars.',
    'Strong concrete grip and corrosion resistance.', ['Residential Buildings', 'Commercial Complexes', 'Factory Foundations', 'Slabs & Beams'],
    ['High Tensile Rating', 'Uniform Rib Pattern', 'Ductile Core', 'Weather Resistant'], ['Affordable Bulk Pricing', 'Trusted Structural Quality', 'All Gujarat Delivery'],
    [['Where to buy?', 'Bhuj stock with transport across Gujarat.']], ['Gallantt', 'ASR', 'National'], tmtSpec('Kemo TMT', 'Fe500, Fe550D', 'IS1786:2008 Fe500/550D', 'In Stock')),
  tmt('welspun', 'Welspun TMT', 'Welspun TMT Bars Dealer in Bhuj, Kutch & Gujarat', 'Welspun Group TMT for industrial/coastal applications.',
    'Metallurgical expertise focused on corrosion resistance and high-load use.', ['Coastal Construction', 'Industrial Plants', 'Warehouses', 'RCC Buildings'],
    ['High Corrosion Endurance', 'Tough Core Structure', 'Superior Rib Design', 'High Bendability'], ['Welspun reliability', 'Great for Saline Coastal Air', 'Full Quality Guarantee', 'Wholesale Rates'],
    [['Why popular in Kutch/Gujarat?', 'Coastal saline environments such as Mundra and Kandla are explicitly referenced.']], ['JSW', 'Mono'], tmtSpec('Welspun', FULL, STD, RDY)),
  tmt('poddar', 'Poddar TMT', 'Poddar TMT Bars Supplier in Bhuj, Kutch & Gujarat', 'Strong and cost-effective TMT for RCC.',
    'Dependable bond strength, exact weight, and corrosion protection.', ['Residential Houses', 'Commercial Buildings', 'Foundation Footings', 'RCC Columns'],
    ['High Ductility', 'Clean Surface Finish', 'Corrosion Resistant', 'Uniform Rib Spacing'], ['Economical Pricing', 'Strict Section Weight', 'All Gujarat Delivery'],
    [['Where to buy?', 'Sanghvi Agency Bhuj stocks and delivers across Gujarat.']], ['Gallantt', 'ASR', 'Kemo'], tmtSpec('Poddar TMT', 'Fe500, Fe550D', 'IS1786:2008 Fe500/550D', 'In Stock')),

  { key: 'asr', cat: 'angle', short: 'ASR MS Angles', h1: 'ASR MS Angles Supplier in Bhuj, Kutch & Gujarat', sub: 'Structural equal & unequal MS angles for fabrication & framing.',
    ov: 'Hot-rolled L sections for trusses, towers, industrial frames, and fabrication.', apps: ['Roof Trusses', 'Industrial Shed Frames', 'Solar Panel Mounting Racks', 'General Gate & Grill Fabrication'],
    feat: ['IS2062 Certified', 'Equal & Unequal Flange Dimensions', 'High Dimensional Accuracy', 'Easy Weldability & Cutting'],
    adv: ['Wide Range of Thicknesses', 'Straight Section Finish', 'Bulk Inventory in Bhuj Yard', 'Direct Wholesale Rates'],
    faq: [['What are they used for?', 'Roof trusses, equipment frames, shed supports, and towers.']], rel: ['Mittal Steel'],
    spec: secSpec('ASR Steel', '25x25, 35x35, 40x40, 50x50, 65x65, 75x75, 100x100', 'E250 / Fe410W', 'IS2062:2011 Grade E250 (Fe410W)', 'In Stock - Ready'), card: '25x25, 35x35, 40x40, 50x50, 65x65' },
  { key: 'mittal', cat: 'angle', short: 'Mittal MS Angles', h1: 'Mittal MS Angles Dealer in Bhuj, Kutch & Gujarat', sub: 'Heavy-duty MS angles for industrial and structural applications.',
    ov: 'Supreme load bearing capacity for heavy industrial sheds, machinery bases, and framework.', apps: ['Heavy Factory Sheds', 'Power Substation Frameworks', 'Crane Gantry Supports', 'Industrial Platforms'],
    feat: ['High Tensile Yield Strength', 'Uniform Flange Thickness', 'Excellent Weld Capability', 'IS2062 Compliance'],
    adv: ['Tested Load Tolerance', 'Full Test Certificates', 'Wholesale Warehouse Stock', 'All Gujarat Delivery'],
    faq: [['Test certificates?', 'Yes - mill test certificates.']], rel: ['ASR Steel'],
    spec: secSpec('Mittal Steel', '40x40, 50x50, 65x65, 75x75, 90x90, 100x100, 130x130', 'E250', 'IS2062 E250', 'In Stock'), card: '40x40, 50x50, 65x65, 75x75, 90x90' },
  { key: 'asr', cat: 'channel', short: 'ASR MS Channels', h1: 'ASR MS Channels (ISMC) Supplier in Bhuj, Kutch & Gujarat', sub: 'Purlins, sheds, transport, and structural framing.',
    ov: 'C-sections manufactured to Indian standards.', apps: ['Industrial Shed Purlins', 'Mezzanine Floors', 'Heavy Machinery Base Frames', 'Truck/Trailer Fabrication'],
    feat: ['Standard ISMC Profile', 'High Moment of Inertia', 'Clean Edge Profile', 'Uniform Flange Web Joint'],
    adv: ['High Structural Endurance', 'Wide Range of Standard Weights', 'Warehouse Ready', 'Competitive Bulk'],
    faq: [['What does ISMC mean?', 'Indian Standard Medium Channel.']], rel: ['Mittal Steel'],
    spec: secSpec('ASR Steel', 'ISMC75, 100, 125, 150, 200, 250', 'E250 / Fe410W', 'IS2062:2011 E250 ISMC', 'In Stock'), card: 'ISMC75, 100, 125, 150, 200' },
  { key: 'mittal', cat: 'channel', short: 'Mittal MS Channels', h1: 'Mittal MS Channels Dealer in Bhuj, Kutch & Gujarat', sub: 'Heavy-duty industrial MS channels.',
    ov: 'Load distribution for large span industrial roofs, crane gantries, and commercial frames.', apps: ['Factory Infrastructure', 'Warehouse Roof Purlins', 'Bridge Approach Frameworks', 'Heavy Fabrication'],
    feat: ['High Structural Load Rating', 'Uniform Web & Flange Dimensions', 'IS2062 Certification', 'Great Weldability'],
    adv: ['Mill Certified Quality', 'High Deflection Resistance', 'Immediate Stock Access', 'Wholesale Rates'],
    faq: [['Where to buy?', 'Genuine stock from Bhuj with site delivery.']], rel: ['ASR Steel'],
    spec: secSpec('Mittal Steel', 'ISMC100, 125, 150, 200, 250, 300', 'E250', 'IS2062 E250', 'In Stock'), card: 'ISMC100, 125, 150, 200, 250' },
  { key: 'apollo', cat: 'pipe', short: 'Apollo Steel Pipes', h1: 'Apollo Steel Pipes Dealer in Bhuj, Kutch & Gujarat', sub: 'APL Apollo ERW structural pipes, SHS/RHS.',
    ov: "India's largest structural steel pipe manufacturer reference; round, square, and rectangular pipes for modern architecture and industrial uses.",
    apps: ['Solar Panel Structure Framing', 'Industrial Shed Structures', 'Architectural Gates & Railings', 'Scaffolding & Plumbing Work'],
    feat: ['High Strength-to-Weight Ratio', 'Precision Dimensions', 'Smooth Surface Finish', 'Available in Black & GI'],
    adv: ['Apollo Brand Trust', 'Clean Aesthetic Finish', 'Full Size Variety', 'Competitive Wholesale Pricing'],
    faq: [['What are CHS/SHS/RHS?', 'Circular, square, and rectangular hollow sections.']], rel: ['Goodluck', 'Surya'],
    spec: pipeSpec('Apollo Pipes', '15mm-150mm Round NB; 20x20-150x150 Square; 40x20-200x100 Rectangular', 'YSt210/240/310', 'IS4923 / IS1161'),
    card: 'APL Apollo ERW structural pipes, SHS/RHS. 15mm-150mm Round NB; 20x20-150x150 Square; 40x20-200x100 Rectangular.' },
  { key: 'goodluck', cat: 'pipe', short: 'Goodluck Steel Pipes', h1: 'Goodluck Steel Pipes Supplier in Bhuj, Kutch & Gujarat', sub: 'High durability ERW/GI steel pipes.',
    ov: 'Exact wall thickness and high-pressure performance for water, industrial, and structural applications.', apps: ['Water Supply / Plumbing', 'Industrial Framing', 'Shed Structures', 'Fencing / Posts'],
    feat: ['Pressure Resistance', 'Uniform Zinc GI', 'Accurate Wall Thickness', 'IS1239 / IS3589'], adv: ['Durable Rust Resistance', 'High Structural Strength', 'Cost Effective', 'Prompt Logistics'],
    faq: [['Classes?', 'Light (A), Medium (B), Heavy (C).']], rel: ['Apollo', 'Surya'],
    spec: pipeSpec('Goodluck Steel', '15mm (1/2 inch) to 200mm (8 inch) NB', 'Light / Medium / Heavy', 'IS1239 / IS4923'), card: 'Goodluck India ERW/GI pipes, 15mm (1/2 inch) to 200mm (8 inch) NB.' },
  { key: 'surya', cat: 'pipe', short: 'Surya Roshni Steel Pipes', h1: 'Surya Roshni Steel Pipes Supplier in Bhuj, Kutch & Gujarat', sub: 'Premium GI/ERW pipes for agriculture, commercial, and structural use.',
    ov: 'Premier Indian manufacturer; GI and black ERW products focused on weather resistance and long life.', apps: ['Agricultural Borewell & Irrigation', 'Commercial Firefighting Systems', 'Structural Shed Framing', 'Handrails & Gates'],
    feat: ['Heavy Hot-Dip Galvanization', 'High Burst Pressure Safety', 'Smooth Inner Bore', 'BIS Quality Mark'], adv: ['Surya Brand Prestige', 'Zero Rust Protection', 'Bulk Availability', 'Competitive Rates'],
    faq: [['Underground water lines?', 'Yes - hot-dip galvanized pipes resist soil corrosion and high water pressure.']], rel: ['Apollo', 'Goodluck'],
    spec: pipeSpec('Surya Roshni', '15-150mm NB', 'Medium & Heavy', 'IS1239 / IS4923'), card: 'Premium GI/ERW, 15mm to 150mm NB.' },
]

export const brandPath = (b: Brand) => {
  const c = CATS[b.cat].base
  if (b.cat === 'tmt') return `${c}/${b.key}-tmt-bars/`
  if (b.cat === 'angle') return `${c}/${b.key}-angle/`
  if (b.cat === 'channel') return `${c}/${b.key}-channel/`
  return `${c}/${b.key}-pipes/`
}
export const brandName = (b: Brand) => b.short
export const byCat = (c: Cat) => BRANDS.filter((b) => b.cat === c)
export const findBrand = (cat: Cat, key: string) => BRANDS.find((b) => b.cat === cat && b.key === key)
/** resolve a "related brand" label (e.g. "Tata Tiscon", "ASR Steel", "Goodluck") to a brand within the same category */
export const resolveRelated = (cat: Cat, label: string): Brand | undefined => {
  const l = label.toLowerCase()
  const map: Record<string, string> = { 'tata tiscon': 'tata', tata: 'tata', 'national tmx': 'national', national: 'national', 'mono tmt': 'mono', mono: 'mono', 'utkarsh tmx': 'utkarsh', 'varrsana tmx': 'varrsana', 'jsw steel': 'jsw', jsw: 'jsw', sail: 'sail', 'rinl vizag': 'vizag', jindal: 'jindal', 'jindal steel': 'jindal', panther: 'panther', jspl: 'jspl', gallantt: 'gallantt', welspun: 'welspun', 'asr steel': 'asr', asr: 'asr', kemo: 'kemo', 'mittal steel': 'mittal', apollo: 'apollo', goodluck: 'goodluck', surya: 'surya' }
  const k = map[l]
  return k ? findBrand(cat, k) : undefined
}
export const ALL_BRAND_LABELS: [string, string][] = [
  ['Mono TMT', 'Distributor'], ['Utkarsh TMX', 'Distributor'], ['Varrsana TMX', 'Partner'], ['National TMX', 'Dealer'],
  ['Tata Tiscon', ''], ['SAIL TMT', ''], ['JSW Steel', ''], ['RINL (Vizag)', ''], ['JSPL TMT', ''], ['Panther TMT', ''], ['Jindal Steel', ''], ['ET TMT', ''],
  ['Gallantt TMT', ''], ['Nilkanth TMT', ''], ['ASR TMT', ''], ['German TMT', ''], ['Kemo TMT', ''], ['Welspun TMT', ''], ['Poddar TMT', ''],
]
