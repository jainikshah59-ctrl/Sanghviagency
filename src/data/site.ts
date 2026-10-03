export const PHONE_PRIMARY = '+91 94282 20385'
export const PHONE_SECONDARY = '+91 94262 14737'
export const TEL_PRIMARY = 'tel:+919428220385'
export const TEL_SECONDARY = 'tel:+919426214737'
export const WA_NUMBER = '919428220385'
export const EMAIL = 'sanghviagency@gmail.com'
export const GSTIN = '24AGGPS5586F1Z2'
export const ADDRESS = '11 Ambika Society, Lane No 2, Hospital Road (Landmark: Shantiniketan), Bhuj, Gujarat 370001'
export const HOURS = 'Mon-Sun 9:00 AM-9:00 PM'
export const waLink = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
export const HERO_IMG = 'https://sanghviagency.com/assets/images/hero-warehouse.png'

export const NAV = [
  { label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Products', to: '/products' },
  { label: 'Brands', to: '/brands' }, { label: 'Projects', to: '/projects' }, { label: 'Gallery', to: '/gallery' },
  { label: 'FAQ', to: '/faq' }, { label: 'Contact', to: '/contact' },
]

export const STATS = [
  ['Trusted Since', '2001'], ['Customers', '1000+'], ['Projects Supplied', '500+'], ['Service', 'Gujarat-Wide'],
]

export const JOURNEY = [
  ['2001', 'Founded in Bhuj', 'Started small steel dealership serving local builders/contractors.'],
  ['2005', 'Expanded Product Range', 'Added angles, channels, beams; growing industrial demand.'],
  ['2010', 'Regional Reach', 'Delivery across entire Kutch - Gandhidham, Mundra, Mandvi, Anjar and beyond.'],
  ['2015', 'Multi-Brand Dealership', 'Authorized dealer for Tata Tiscon, JSW, Jindal.'],
  ['2020', '1000+ Customers Milestone', 'Over 1000 residential/commercial/industrial customers.'],
  ['Today', 'Gujarat-Wide Service', 'Customers across Gujarat with construction materials and trusted partnerships.'],
]

export const WHY = [
  ['Certified Quality', "ISI-marked, BIS-certified products from India's top steel manufacturers."],
  ['Competitive Pricing', 'Best market rates for retail and wholesale. No hidden costs, transparent billing.'],
  ['Timely Delivery', 'Prompt dispatch across Kutch and Gujarat. Site delivery available.'],
  ['20+ Years of Trust', ''],
  ['Bulk Order Ready', 'From single bundles to full truckloads. We handle projects of any scale.'],
  ['Expert Guidance', ''],
]

export const TESTIMONIALS = [
  ['Rajesh Patel', 'Building Contractor, Bhuj', 'We have been buying TMT bars from Sanghvi Agency for over 10 years. Always reliable quality and competitive rates. They understand the needs of large contractors.', 5],
  ['Mehul Shah', 'Industrial Builder, Gandhidham', 'Excellent service and prompt delivery. Sanghvi Agency supplied all the steel for our warehouse project in Gandhidham. Very professional team.', 5],
  ['Arjun Desai', 'Factory Owner, Mundra', 'Best steel dealer in Kutch. We needed a mix of steel angles and channels for our factory expansion - Sanghvi Agency handled it perfectly.', 5],
  ['Viral Joshi', 'Homeowner, Bhuj', 'I built my house last year and got all the TMT bars and binding wire from Sanghvi Agency. Great rates compared to other dealers, and they delivered on time.', 4],
  ['Kartik Mehta', 'Structural Engineer, Rajkot', 'Our engineering firm has been working with Sanghvi Agency for years. Their range of structural steel sections is excellent. Genuine products with proper certification.', 5],
] as const

export const PROJECTS = [
  { title: 'Industrial Plant Steelwork', loc: 'Gandhidham, Kutch', supply: '120 Tonnes Steel Supplied', sector: 'Industrial' },
  { title: 'Multi-Story Residential Towers', loc: 'Bhuj', supply: 'TMT Fe550D Supplied', sector: 'Residential' },
  { title: 'Commercial Plaza Framework', loc: 'Mundra', supply: 'MS Channels & Beams', sector: 'Commercial' },
  { title: 'Logistics Storage Facility', loc: 'Anjar', supply: 'Structural Sections', sector: 'Warehouses' },
  { title: 'Factory Expansion Shed', loc: 'Bhachau', supply: 'Structural Angles & Beams', sector: 'Industrial' },
  { title: 'Private Villa Gated Community', loc: 'Mandvi', supply: 'High Ductility TMT Bars', sector: 'Residential' },
]
export const PROJECT_FILTERS = ['All Projects', 'Industrial', 'Residential', 'Commercial', 'Warehouses']

export const GALLERY = [
  'Steel Warehouse Interior', 'TMT Bar Inventory Bundles', 'Structural Steel Sections Storage',
  'On-Site Steel Delivery & Crane Loading', 'Binding Wire Coils Stock', 'MS Channel Section Storage',
]

export const FAQ: [string, string][] = [
  ['Do you supply bulk orders for large projects?', "Yes, absolutely. We handle orders of any scale - from individual bundles to full truckloads. We have supplied steel for some of the largest construction projects in the Kutch region. Contact us with your BOQ (Bill of Quantities) and we'll provide a competitive quote within 24 hours."],
  ['Do you deliver outside Bhuj?', 'Yes, across Kutch + Gujarat. Service areas: Bhuj, Gandhidham, Mundra, Mandvi, Nakhatrana, Anjar, Bhachau, Morbi, Rajkot. Site delivery. Charges vary based on location/order volume.'],
  ['Which brands do you stock?', 'Mono TMT, Utkarsh TMX, Varrsana TMX, National TMX, Tata Tiscon, SAIL TMT, JSW Steel, RINL (Vizag), JSPL TMT, Panther TMT, Jindal Steel, ET TMT, Gallantt TMT, Nilkanth TMT, ASR TMT, German TMT, Kemo TMT, Welspun TMT, Poddar TMT, ASR MS Angle & Channel, Mittal MS Angle & Channel, Apollo Pipes, Goodluck Pipes, Surya Pipes, UltraGold. Contact to confirm stock.'],
  ['Can I request custom quantities?', 'Yes. Standard bundles are available, but we can accommodate specific requirements, from a few bars to hundreds of tonnes.'],
  ['How do I get quotation?', 'Use the Request Quote page, select products/quantities, and send directly to WhatsApp. You can also call/WhatsApp. Typical response is within 30 minutes during business hours.'],
  ['What are payment terms?', 'Cash, NEFT/RTGS/IMPS, cheque, and UPI. Terms vary by order size/customer. New customers: advance/COD. Long-standing customers may have credit.'],
  ['Do you offer direct-to-site delivery?', 'Yes, across Kutch/Gujarat, subject to road access and minimum order. Contact for feasibility and charges.'],
  ['Are products ISI/BIS certified?', 'Yes. TMT and structural stock are ISI/BIS compliant; IS 1786 for TMT and IS 2062 for structural steel. MTC is available.'],
  ['Do you sell to homeowners?', 'Yes. We serve homeowners, contractors, engineers, fabricators, and industries, with retail and wholesale supply.'],
]

export const TRUSTED_BRANDS: [string, string][] = [
  ['Mono TMT', 'Distributor'], ['Utkarsh TMX', 'Distributor'], ['Varrsana TMX', 'Partner'], ['National TMX', 'Dealer'],
]
