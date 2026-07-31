/**
 * Editorial content for every page. Kept out of components so copy can be
 * changed (or later swapped for a CMS / API response) without touching JSX.
 */
import { IMG, avatar } from './media'

/* ==================================================================
   Home
   ================================================================== */

export const HERO_ROTATING = ['Charge less.', 'Earn more.', 'Emit nothing.']

/**
 * Client wordmarks, each tinted with that company's brand colour.
 *
 * `color` is the on-light value used for the wordmark. Where a brand's own
 * colour is a pale yellow it would fail contrast on our near-white band, so
 * those carry a darkened variant instead of the literal brand hex.
 * `onDark` is the value used when the strip sits on a dark section.
 */
export const PARTNERS = [
  { name: 'Swiggy', color: '#E8730E', onDark: '#FC8019' },
  { name: 'Zomato', color: '#E23744', onDark: '#FF5A67' },
  { name: 'Blinkit', color: '#B08800', onDark: '#F8CB46' },
  { name: 'Zepto', color: '#7B2D8E', onDark: '#C77BD8' },
  { name: 'Flipkart', color: '#2874F0', onDark: '#5C9BFF' },
  { name: 'Amazon', color: '#C77400', onDark: '#FF9900' },
  { name: 'BigBasket', color: '#5C9A36', onDark: '#8CCB5E' },
  { name: 'Dunzo', color: '#00907A', onDark: '#22D3B4' },
  { name: 'Delhivery', color: '#E31E24', onDark: '#FF5A5F' },
  { name: 'Instamart', color: '#E05C14', onDark: '#F98A4B' },
  { name: 'Licious', color: '#E4002B', onDark: '#FF476B' },
  { name: 'Rapido', color: '#AD8A00', onDark: '#F5C518' },
]

/**
 * Benefit tiles for the "Why choose SGD" section.
 *
 * Figures are deliberately kept in step with the rest of the site — the rental
 * pages quote ₹129/day, the hero quotes ₹9,400 saved and 24,000 riders, and the
 * swap network is 90 seconds. Quoting different numbers here would contradict
 * those pages.
 */
export const WHY_CHOOSE = [
  { title: 'Affordable daily rentals', value: '₹129', unit: '/day', note: 'All-inclusive, cancel any day' },
  { title: 'Own your scooter', value: '24', unit: 'mo', note: 'Rent to own, no credit check' },
  { title: 'Accidental insurance', value: '₹5', unit: 'lakh', note: 'Personal accident cover' },
  { title: 'High earnings', value: '₹9,400', unit: '', note: 'Typically saved every month' },
  { title: 'Extra savings', value: '₹0', unit: '', note: 'Servicing and spares included' },
  { title: '24/7 roadside support', value: '45', unit: 'min', note: 'Average response time' },
  { title: 'Fast battery swap', value: '90', unit: 'sec', note: 'At any of 900+ points' },
  { title: 'Trusted community', value: '24,000', unit: '+', note: 'Riders on the platform' },
  { title: 'Eco-friendly', value: '68M', unit: 'kg', note: 'CO₂ avoided to date' },
  { title: 'Zero fuel cost', value: '100', unit: '%', note: 'Electric, no petrol bills' },
]

export const WHY_SGD = [
  {
    icon: 'Fuel',
    title: 'No fuel bills, ever',
    body: 'A full charge costs about ₹18 and carries you 110 km. The same distance on petrol costs ₹340 — that gap is your salary increase.',
    stat: '₹9,400',
    statLabel: 'saved per rider / month',
  },
  {
    icon: 'Wrench',
    title: 'Maintenance is on us',
    body: 'Servicing, spares, tyres, brakes and battery health are all included in the rental. Breakdown support reaches you in under 45 minutes.',
    stat: '45 min',
    statLabel: 'average roadside response',
  },
  {
    icon: 'BatteryCharging',
    title: '900+ swap points',
    body: 'Never wait for a charge. Pull into any SGD point, swap a depleted pack for a full one and be back on the road in 90 seconds.',
    stat: '90 sec',
    statLabel: 'battery swap time',
  },
  {
    icon: 'ShieldCheck',
    title: 'Insurance included',
    body: 'Comprehensive vehicle cover plus ₹5 lakh personal accident cover for the rider, bundled into every plan at no extra cost.',
    stat: '₹5 L',
    statLabel: 'rider accident cover',
  },
  {
    icon: 'FileCheck',
    title: 'No licence needed',
    body: 'Our low-speed models are road-legal without a driving licence or registration. Onboard with just an Aadhaar and a smartphone.',
    stat: '24 hrs',
    statLabel: 'from KYC to keys',
  },
  {
    icon: 'CalendarClock',
    title: 'Flexible, always',
    body: 'Daily, weekly or monthly. Pause your plan when you travel home, resume when you are back. No lock-in and no exit penalty.',
    stat: '0',
    statLabel: 'lock-in months',
  },
]

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Download & sign up',
    body: 'Install the SGD Rider app, enter your mobile number and pick the city and hub closest to you. Takes about two minutes.',
    icon: 'Smartphone',
    image: IMG.riderBike,
  },
  {
    step: '02',
    title: 'Finish digital KYC',
    body: 'Aadhaar OTP, a PAN check and a selfie. Everything is verified inside the app — no paperwork, no branch visit, no agent.',
    icon: 'ScanFace',
    image: IMG.analyticsScreen,
  },
  {
    step: '03',
    title: 'Choose your plan',
    body: 'Daily, weekly or monthly rental — or Rent to Own if you want the vehicle in your name at the end of the term.',
    icon: 'ClipboardList',
    image: IMG.evCharging,
  },
  {
    step: '04',
    title: 'Collect and start earning',
    body: 'Pick up your scooter from the hub, get a 30-minute orientation, and take your first order the same day.',
    icon: 'Rocket',
    image: IMG.riderScooter,
  },
]

/**
 * The seven steps from installing the app to being paid, used by the
 * interactive Get Started section. `screen` selects which mock app screen is
 * drawn in the phone beside the list.
 */
export const APP_STEPS = [
  {
    title: 'Download the app',
    sub: 'Free on iOS and Android',
    icon: 'Smartphone',
    screen: 'welcome',
  },
  {
    title: 'Select your vehicle',
    sub: 'Compare range and daily rate',
    icon: 'Bike',
    screen: 'vehicles',
  },
  {
    title: 'Complete KYC',
    sub: 'Aadhaar and PAN, about 6 minutes',
    icon: 'ScanFace',
    screen: 'kyc',
  },
  {
    title: 'Choose your plan',
    sub: 'Daily, monthly or rent to own',
    icon: 'ClipboardList',
    screen: 'plans',
  },
  {
    title: 'Pay the deposit',
    sub: '₹3,000, fully refundable',
    icon: 'IndianRupee',
    screen: 'payment',
  },
  {
    title: 'Collect and ride',
    sub: 'Pick up at your nearest hub',
    icon: 'Rocket',
    screen: 'collect',
  },
  {
    title: 'Get paid daily',
    sub: 'Earnings settled every night',
    icon: 'TrendingUp',
    screen: 'earnings',
  },
]

/** Vehicle rows shown on the mock "select vehicle" screen. */
export const APP_VEHICLES = [
  { name: 'SGD City 25', range: '95 km', price: '₹129', note: 'no licence' },
  { name: 'SGD Sprint 65', range: '130 km', price: '₹179', note: 'licence required' },
  { name: 'SGD Haul', range: '110 km', price: '₹199', note: '90 L box' },
]

export const TESTIMONIALS = [
  {
    name: 'Ramesh Yadav',
    role: 'Rider · Gurugram',
    since: 'With SGD since 2022',
    quote:
      'I used to spend ₹380 a day on petrol and servicing. With SGD my whole cost is the rental, and my take-home went from ₹19,000 to ₹34,000 a month. I bought my daughter a laptop last Diwali.',
    metric: '₹34,000',
    metricLabel: 'monthly take-home',
    avatar: avatar(34423732),
  },
  {
    name: 'Sunita Devi',
    role: 'Rider · Bengaluru',
    since: 'With SGD since 2023',
    quote:
      'I was nervous about riding at first. The low-speed scooter needs no licence, the training at the hub was patient, and now I do 40 orders a day. Two other women from my colony joined after me.',
    metric: '40',
    metricLabel: 'orders per day',
    avatar: avatar(30004322),
  },
  {
    name: 'Imran Sheikh',
    role: 'Fleet owner · Mumbai',
    since: 'Franchise partner',
    quote:
      'I run 60 SGD vehicles out of one hub in Andheri. The dashboard tells me exactly which vehicle is idle, which battery is weak, and what I earned yesterday. It runs itself.',
    metric: '60',
    metricLabel: 'vehicles managed',
    avatar: avatar(2324638),
  },
  {
    name: 'Anjali Menon',
    role: 'Ops lead · Quick commerce',
    since: 'Enterprise client',
    quote:
      'We moved 300 dark-store deliveries a day onto SGD loaders. Cost per drop fell 31% and we finally have clean Scope 3 numbers for our sustainability report.',
    metric: '-31%',
    metricLabel: 'cost per delivery',
    avatar: avatar(34381970),
  },
  {
    name: 'Vikram Singh',
    role: 'Rider · Delhi NCR',
    since: 'With SGD since 2021',
    quote:
      'Four years, zero breakdown days that cost me money. If something goes wrong they swap the vehicle at the hub and I keep riding. That reliability is the whole business for us.',
    metric: '4 yrs',
    metricLabel: 'on the platform',
    avatar: avatar(15854251),
  },
  {
    name: 'Priya Nair',
    role: 'Rider · Pune',
    since: 'With SGD since 2024',
    quote:
      'Rent to Own was the reason I joined. Twenty-four months of the same payment I was making anyway, and the scooter becomes mine. My family could never have financed that upfront.',
    metric: '24 mo',
    metricLabel: 'to ownership',
    avatar: avatar(29852895),
  },
]

/**
 * Short rider reviews for the wall below the savings calculator.
 *
 * PLACEHOLDER — every name, city and quote here was written during the build.
 * Real reviews need the rider's signed consent before publication, and the
 * aggregate below has to match whatever store or listing it is taken from.
 * Tracked in docs/CONTENT-REQUEST.md.
 */
export const REVIEW_SUMMARY = {
  score: 4.8,
  outOf: 5,
  count: 3412,
  note: 'Verified riders across twelve cities',
}

export const REVIEWS = [
  { name: 'Arun P.', city: 'Chennai', stars: 5, text: 'Switched three months back. My fuel bill was ₹9,000 a month. Now it is nothing.' },
  { name: 'Farhan S.', city: 'Hyderabad', stars: 5, text: 'Battery swap takes under two minutes. I have never had to wait at a hub.' },
  { name: 'Deepak R.', city: 'Noida', stars: 5, text: 'My scooter failed on a Tuesday. They handed me another one the same morning.' },
  { name: 'Kavita M.', city: 'Pune', stars: 5, text: 'No licence needed on the low-speed model. That is the only reason I could start.' },
  { name: 'Sameer T.', city: 'Mumbai', stars: 5, text: 'Earnings land in my account every night. No arguments, no follow-up calls.' },
  { name: 'Rohit K.', city: 'Jaipur', stars: 4, text: 'Insurance was already included. I did not expect that at this rental price.' },
  { name: 'Nasir A.', city: 'Ahmedabad', stars: 5, text: 'I run eight vehicles now. The dashboard tells me which one is idle before I ask.' },
  { name: 'Lakshmi V.', city: 'Bengaluru', stars: 5, text: 'Servicing costs me nothing. That alone is ₹1,500 back in my pocket each month.' },
  { name: 'Gurpreet S.', city: 'Delhi NCR', stars: 5, text: 'Two years on the platform and not one day lost to a breakdown.' },
  { name: 'Manoj B.', city: 'Lucknow', stars: 5, text: 'Rent to own means it becomes mine. My father did not believe me until he saw the papers.' },
  { name: 'Srinivas D.', city: 'Hyderabad', stars: 5, text: 'Support answered me in Telugu. Small thing, but it made the whole difference.' },
  { name: 'Imtiaz H.', city: 'Kolkata', stars: 5, text: 'A full day of riding costs me about ₹20 to charge. Petrol was ₹300.' },
]

export const FAQS = [
  {
    q: 'Do I need a driving licence to ride a SGD scooter?',
    a: 'Not for our low-speed models. Vehicles capped at 25 km/h are classified as non-registrable under Indian rules, so no licence or RC is required. Our higher-speed models and all 3-wheeler cargo loaders do require a valid licence.',
  },
  {
    q: 'What does the rental actually include?',
    a: 'The vehicle, comprehensive insurance, ₹5 lakh personal accident cover, all servicing and spares, roadside assistance, and unlimited battery swaps at any SGD point. You pay one rental amount and nothing else.',
  },
  {
    q: 'How much can I realistically earn?',
    a: 'Riders doing 30–45 orders a day on quick-commerce platforms typically take home ₹28,000–₹42,000 a month after paying rent. Earnings depend on your city, hours and platform, so treat these as a range rather than a guarantee.',
  },
  {
    q: 'What is the security deposit?',
    a: '₹3,000 for 2-wheelers and ₹12,000 for 3-wheeler cargo loaders, fully refundable within seven working days of returning the vehicle in normal condition. Deposits can be paid in two instalments.',
  },
  {
    q: 'How far does one charge go?',
    a: 'Between 95 and 130 km depending on the model, load and riding style. Because you can swap batteries in about 90 seconds at any of our 900+ points, effective daily range is unlimited.',
  },
  {
    q: 'Can I pause my rental?',
    a: 'Yes. Pause any plan for up to 30 days a year through the app — useful when you go home for a festival or a family emergency. You are not billed for paused days.',
  },
  {
    q: 'What happens if the vehicle breaks down?',
    a: 'Raise a ticket in the app or call the 24×7 helpline. Our average roadside response is 45 minutes. If a repair takes more than two hours, we hand you a replacement vehicle so you keep earning.',
  },
  {
    q: 'Is Rent to Own different from a loan?',
    a: 'Yes. There is no bank, no CIBIL check and no interest quoted separately. You pay a fixed daily or monthly amount for 24 months, and ownership transfers to you at the end. Miss a payment and the plan simply reverts to a standard rental — your record is never reported to a credit bureau.',
  },
]

/* ==================================================================
   Services
   ================================================================== */

export const PLANS_2W = [
  {
    name: 'Daily',
    price: '₹129',
    unit: '/ day',
    blurb: 'Best for trying SGD or riding a few days a week.',
    features: [
      'Any low-speed scooter model',
      'Unlimited battery swaps',
      'Insurance + accident cover',
      'All servicing included',
      'Cancel any day',
    ],
    cta: 'Start daily',
  },
  {
    name: 'Monthly',
    price: '₹3,299',
    unit: '/ month',
    blurb: 'The plan four out of five riders choose.',
    features: [
      'Choice of scooter model',
      'Unlimited battery swaps',
      'Insurance + accident cover',
      'All servicing included',
      'Pause up to 30 days a year',
      'Priority hub queue',
    ],
    cta: 'Go monthly',
    featured: true,
    badge: 'Most popular',
  },
  {
    name: 'Rent to Own',
    price: '₹4,150',
    unit: '/ month',
    blurb: 'Same money, but the vehicle ends up in your name.',
    features: [
      'Ownership after 24 months',
      'Unlimited battery swaps',
      'Insurance + accident cover',
      'Servicing for the full term',
      'No CIBIL check',
      'Switch back to rental anytime',
    ],
    cta: 'Own it',
  },
]

export const SPECS_2W = [
  { label: 'Top speed', value: '25 / 65', unit: 'km/h', note: 'low-speed and high-speed models' },
  { label: 'Certified range', value: '110', unit: 'km', note: 'per full charge' },
  { label: 'Battery', value: '2.3', unit: 'kWh', note: 'swappable LFP pack' },
  { label: 'Payload', value: '150', unit: 'kg', note: 'rider plus delivery box' },
  { label: 'Charge time', value: '3.5', unit: 'hrs', note: 'or a 90-second swap' },
  { label: 'Box capacity', value: '60', unit: 'L', note: 'insulated, weatherproof' },
]

export const SPECS_3W = [
  { label: 'Payload', value: '550', unit: 'kg', note: 'certified gross capacity' },
  { label: 'Certified range', value: '140', unit: 'km', note: 'loaded, per charge' },
  { label: 'Cargo volume', value: '180', unit: 'cu ft', note: 'closed container deck' },
  { label: 'Battery', value: '8.2', unit: 'kWh', note: 'liquid-cooled LFP' },
  { label: 'Top speed', value: '50', unit: 'km/h', note: 'governed for city use' },
  { label: 'Charge time', value: '4', unit: 'hrs', note: 'fast charge to 80% in 90 min' },
]

export const CARGO_USE_CASES = [
  {
    icon: 'Store',
    title: 'Dark store replenishment',
    body: 'Move 400–550 kg of inventory between your warehouse and dark stores on a fixed morning loop, at roughly a third of the running cost of a diesel tempo.',
  },
  {
    icon: 'Package',
    title: 'E-commerce middle mile',
    body: 'Bulk-drop parcels from a sorting hub to neighbourhood delivery agents. Closed container, tamper-evident lock and live GPS on every leg.',
  },
  {
    icon: 'Refrigerator',
    title: 'Cold chain',
    body: 'Insulated and refrigerated deck options hold 2–8 °C for up to nine hours — built for dairy, pharma, meat and ready-to-eat.',
  },
  {
    icon: 'Recycle',
    title: 'Reverse logistics',
    body: 'Returns, empty crates and packaging collection on the same route as the outbound trip, so the vehicle never runs empty.',
  },
]

export const ENTERPRISE_FEATURES = [
  {
    icon: 'Users',
    title: 'Riders, not just vehicles',
    body: 'We recruit, verify, train and manage the rider. You get filled shifts against an SLA, not a parking lot of scooters you have to staff yourself.',
  },
  {
    icon: 'Gauge',
    title: 'Live fleet visibility',
    body: 'Every vehicle streams location, battery state, speed and geofence events into your dashboard and into your systems over our REST API.',
  },
  {
    icon: 'CalendarRange',
    title: 'Elastic capacity',
    body: 'Scale up for Big Billion Days or a festival weekend and scale back down after. Commit weekly, not annually.',
  },
  {
    icon: 'FileBarChart',
    title: 'Audit-ready ESG data',
    body: 'Per-shipment CO₂e avoided, exported monthly in a format your sustainability auditor will accept for Scope 3 reporting.',
  },
  {
    icon: 'Headphones',
    title: 'A named account team',
    body: 'One ops manager, one escalation number, a 30-minute response commitment during your operating hours.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Compliance handled',
    body: 'Background verification, police checks, insurance and statutory registers maintained for every rider on your account.',
  },
]

export const RTO_STEPS = [
  {
    step: '01',
    title: 'Pick your vehicle',
    body: 'Choose the scooter you want to end up owning. Test-ride it at the hub before you commit to anything.',
  },
  {
    step: '02',
    title: 'Pay a small deposit',
    body: '₹9,999 upfront, or split across your first three months. No bank, no guarantor, no credit-bureau check.',
  },
  {
    step: '03',
    title: 'Ride and pay as you earn',
    body: 'A fixed ₹4,150 a month for 24 months, auto-debited on a date you choose. Servicing and insurance stay included throughout.',
  },
  {
    step: '04',
    title: 'The RC comes to you',
    body: 'At month 24 we transfer the registration certificate into your name. The vehicle is yours, free of any lien.',
  },
]

export const FRANCHISE_TIERS = [
  {
    name: 'Starter Hub',
    investment: '₹6–9 lakh',
    fleet: '25–40 vehicles',
    space: '800 sq ft',
    payback: '16–20 months',
    features: [
      'Territory rights for one pin-code cluster',
      'Vehicles supplied on lease',
      'Charging and swap infrastructure',
      'Rider sourcing handled by SGD',
      'Training for you and two staff',
    ],
  },
  {
    name: 'City Hub',
    investment: '₹18–25 lakh',
    fleet: '80–150 vehicles',
    space: '2,500 sq ft',
    payback: '14–18 months',
    features: [
      'Exclusive rights across a city zone',
      'Priority vehicle allocation',
      'On-site service bay and spares stock',
      'Dedicated SGD ops manager',
      'Co-funded local marketing',
      'Advertising revenue share',
    ],
    featured: true,
    badge: 'Best returns',
  },
  {
    name: 'Master Franchise',
    investment: '₹60 lakh+',
    fleet: '400+ vehicles',
    space: '10,000 sq ft',
    payback: '12–16 months',
    features: [
      'Rights to an entire tier-2 city',
      'Sub-franchise appointment rights',
      'Enterprise client introductions',
      'Full SGD OS licence',
      'Board-level quarterly reviews',
      'First refusal on adjacent districts',
    ],
  },
]

export const AD_FORMATS = [
  {
    icon: 'Bike',
    title: 'Vehicle wraps',
    body: 'Full-body branding on scooters and loaders moving through the highest-footfall corridors of a city, 10 hours a day.',
    metric: '₹0.09',
    metricLabel: 'per thousand impressions',
  },
  {
    icon: 'Box',
    title: 'Delivery box branding',
    body: 'The 60-litre box sits at eye level for every pedestrian and every car behind it. The single highest-recall surface we sell.',
    metric: '4.2x',
    metricLabel: 'recall vs static OOH',
  },
  {
    icon: 'Smartphone',
    title: 'In-app placements',
    body: 'Reach 24,000+ riders inside the SGD Rider app — a hard-to-target audience for finance, insurance, telecom and FMCG brands.',
    metric: '61%',
    metricLabel: 'daily active riders',
  },
  {
    icon: 'MapPin',
    title: 'Geo-fenced campaigns',
    body: 'Restrict your wrap fleet to specific pin codes, or trigger in-app offers only when riders enter a catchment you care about.',
    metric: '12',
    metricLabel: 'cities available',
  },
]

export const EARN_TIERS = [
  { orders: '20–25 / day', gross: '₹24,000', net: '₹20,700', label: 'Part-time' },
  { orders: '30–35 / day', gross: '₹34,000', net: '₹30,700', label: 'Standard', featured: true },
  { orders: '40–50 / day', gross: '₹46,000', net: '₹42,700', label: 'Power rider' },
]

/* ==================================================================
   Company
   ================================================================== */

export const VALUES = [
  {
    icon: 'HeartHandshake',
    title: 'Rider first, always',
    body: 'Every product decision starts with one question: does this put more money in a rider’s pocket at the end of the month? If the answer is no, we do not ship it.',
  },
  {
    icon: 'Leaf',
    title: 'Measure the impact',
    body: 'We publish carbon avoided per kilometre and let auditors check it. Sustainability claims that cannot be verified are just marketing.',
  },
  {
    icon: 'Cpu',
    title: 'Build the boring things well',
    body: 'Battery health telemetry, hub inventory, payout reconciliation. Unglamorous systems are what make a fleet of 24,000 vehicles actually work.',
  },
  {
    icon: 'Scale',
    title: 'Dignity is non-negotiable',
    body: 'Written contracts, transparent deductions, accident cover and a grievance line that a human answers. Gig work does not have to mean precarious work.',
  },
]

export const MISSION_VISION = [
  {
    n: '01',
    ghost: 'Mission',
    kicker: 'Our mission',
    title: 'Make every delivery cheaper to make and cleaner to breathe',
    body: 'We replace petrol two-wheelers with electric ones on rent, so a rider stops losing 40% of their earnings to fuel and servicing — and a city stops paying for it in air quality. The environmental case only wins when the economic case wins first.',
    icon: 'Target',
    image: IMG.riderCityDay,
    proof: [
      { value: '₹9,400', label: 'back in a rider’s pocket, monthly' },
      { value: '68M kg', label: 'CO₂ avoided so far' },
    ],
  },
  {
    n: '02',
    ghost: 'Vision',
    kicker: 'Our vision',
    title: 'Last-mile logistics that no longer burns anything',
    body: 'A country where the vehicle behind every order is electric, the energy behind it is renewable, and the person riding it has a written contract, insurance and a real path to owning the asset. Twelve cities today, and building outwards.',
    icon: 'Globe',
    image: IMG.forestSun,
    proof: [
      { value: '200,000', label: 'vehicles targeted by 2029' },
      { value: 'FY 26-27', label: 'net-zero operations target' },
    ],
  },
]

/** Company-wide ledger. Figures reconcile with PARTNER_IMPACT below. */
export const IMPACT_LEDGER = [
  {
    label: 'Total distance covered',
    value: '1.39 Bn',
    unit: 'km',
    sub: 'every kilometre on an electric vehicle',
    icon: 'Route',
  },
  {
    label: 'Carbon avoided',
    value: '68',
    unit: 'M kg',
    sub: 'against an audited petrol baseline',
    icon: 'Leaf',
  },
  {
    label: 'Orders delivered',
    value: '132',
    unit: 'M',
    sub: 'since our first ride in 2019',
    icon: 'PackageCheck',
  },
  {
    label: 'Tree equivalent',
    value: '2.8',
    unit: 'M',
    sub: 'annual sequestration equivalent',
    icon: 'Sparkles',
  },
  {
    label: 'Our own emissions',
    value: '84.2',
    unit: 't CO₂e',
    sub: 'Scope 1 + 2, reported not netted',
    icon: 'FileBarChart',
  },
  {
    label: 'Vehicles in fleet',
    value: '26,400',
    unit: '',
    sub: '2-wheelers and cargo loaders',
    icon: 'Bike',
  },
  {
    label: 'Active riders',
    value: '24,000',
    unit: '+',
    sub: 'earning on the platform',
    icon: 'Users',
  },
  {
    label: '3-wheeler cargo fleet',
    value: '3,400',
    unit: '+',
    sub: 'moving bulk, emission-free',
    icon: 'Truck',
  },
]

/**
 * UN Sustainable Development Goals we map our work to.
 * Numbering follows the official UN SDG list.
 */
export const SDG_GOALS = [
  { n: 7, title: 'Affordable and clean energy', body: '61% of our hubs run on contracted renewable supply.' },
  { n: 8, title: 'Decent work and economic growth', body: 'Written contracts and insurance for 24,000 gig riders.' },
  { n: 9, title: 'Industry, innovation and infrastructure', body: '900+ battery swap points built as public infrastructure.' },
  { n: 10, title: 'Reduced inequalities', body: 'No credit score required to access a vehicle or ownership.' },
  { n: 11, title: 'Sustainable cities and communities', body: '68M kg of CO₂ and 38.6 tonnes of PM2.5 kept out of city air.' },
  { n: 12, title: 'Responsible consumption and production', body: '94% of retired battery mass recovered or given a second life.' },
  { n: 13, title: 'Climate action', body: 'Avoided emissions measured per kilometre, independently assessed.' },
  { n: 17, title: 'Partnerships for the goals', body: 'Working with 12 delivery platforms and 140 franchise partners.' },
]

/** Per-client impact. Totals reconcile to 68,000 t CO₂ and 132M deliveries. */
export const PARTNER_IMPACT = [
  { name: 'Swiggy', co2: '14,820 t', deliveries: '28.7 M' },
  { name: 'Zomato', co2: '13,460 t', deliveries: '26.1 M' },
  { name: 'Blinkit', co2: '9,940 t', deliveries: '19.3 M' },
  { name: 'Zepto', co2: '8,310 t', deliveries: '16.1 M' },
  { name: 'Flipkart', co2: '5,270 t', deliveries: '10.2 M' },
  { name: 'Amazon', co2: '4,880 t', deliveries: '9.5 M' },
  { name: 'BigBasket', co2: '3,640 t', deliveries: '7.1 M' },
  { name: 'Dunzo', co2: '2,510 t', deliveries: '4.9 M' },
  { name: 'Delhivery', co2: '2,180 t', deliveries: '4.2 M' },
  { name: 'Instamart', co2: '1,690 t', deliveries: '3.3 M' },
  { name: 'Licious', co2: '990 t', deliveries: '1.9 M' },
  { name: 'Rapido', co2: '310 t', deliveries: '0.7 M' },
]

/** Culture gallery for the "Life at SGD" section. */
export const LIFE_GALLERY = [
  { src: IMG.teamMeeting, caption: 'Monday fleet review, Gurugram' },
  { src: IMG.workshopTools, caption: 'Service bay training, Bengaluru hub' },
  { src: IMG.teamCollab, caption: 'Planning the tier-2 rollout' },
  { src: IMG.mechanicsChecking, caption: 'Technician certification week' },
  { src: IMG.teamProject, caption: 'SGD OS release retro' },
  { src: IMG.teamDiverse, caption: 'New joiner cohort, March' },
]

/** Employee voices — deliberately separate from rider testimonials. */
export const TEAM_VOICES = [
  {
    name: 'Nikhil Ranjan',
    role: 'Senior Engineer, Fleet Platform',
    tenure: '3 years at SGD',
    quote:
      'I came from a payments company where a bug meant a failed transaction. Here a bug means a rider is stranded at 9pm with an order they cannot deliver. That changes how carefully you write things, and it is the reason I am still here.',
    photo: avatar(2324638),
  },
  {
    name: 'Shweta Kulkarni',
    role: 'Hub Manager, Pune',
    tenure: '4 years at SGD',
    quote:
      'I started on the counter handing out keys. I now run a 90-vehicle hub and I have hired six people myself. Nobody asked what college I went to — they asked whether the vehicles went out on time.',
    photo: avatar(29852895),
  },
  {
    name: 'Arun Pillai',
    role: 'Data Scientist, Battery Analytics',
    tenure: '2 years at SGD',
    quote:
      'There are very few places in India where you can train a model on 900 million kilometres of real vehicle data and then watch it stop a breakdown next week. The feedback loop is measured in days, not quarters.',
    photo: avatar(34423732),
  },
]

export const ABOUT_FAQS = [
  {
    q: 'What exactly does SGD Electric do?',
    a: 'We rent electric two-wheelers and three-wheeler cargo loaders to delivery riders and logistics businesses in India. The rental includes the vehicle, insurance, all servicing and unlimited battery swaps — so a rider pays one predictable amount and nothing else. We also place riders with delivery platforms, run a franchise network of hubs, and sell advertising space on the fleet.',
  },
  {
    q: 'Who founded the company and when?',
    a: 'SGD was founded in Gurugram in 2019 by Aditya Rao and Meera Krishnan, after a pilot with eleven delivery riders testing whether electric could beat petrol on rider economics rather than on emissions alone.',
  },
  {
    q: 'How does the business actually make money?',
    a: 'Primarily from rental income on the fleet, which is the large majority of revenue. Smaller lines come from managed enterprise fleets billed per shift, franchise revenue share, fleet advertising and the Rent to Own programme. We do not earn a commission on deliveries.',
  },
  {
    q: 'Do you manufacture the vehicles?',
    a: 'No. We design the specification and the telematics hardware, and contract manufacturing to Indian OEM partners. Our own engineering is concentrated on SGD OS, the battery swap network and the prediction models — the things that determine whether a fleet of this size stays reliable.',
  },
  {
    q: 'How big is the company now?',
    a: 'Around 1,000 employees plus 140 franchise partners, 26,400 vehicles, 24,000 active riders and 186 hubs across 12 cities. We reached operating profitability at the hub level in FY 2024-25.',
  },
  {
    q: 'What happens to the batteries at end of life?',
    a: '71% of retired packs are re-purposed into stationary storage at our own hubs. The remainder go to certified recyclers who recover 94% of pack mass. Every pack is serial-tracked from fitment to recycling certificate, so none enter the informal scrap market.',
  },
]

export const TIMELINE = [
  {
    year: '2018-19',
    short: "'19",
    title: 'Two scooters and a spreadsheet',
    body: 'Founded in Gurugram with a pilot fleet of two scooters and eleven riders, testing whether electric could beat petrol on rider economics.',
    metrics: ['Raised $250k seed', 'Fleet: 2 · Riders: 11'],
    image: IMG.riderBike,
  },
  {
    year: '2019-20',
    short: "'20",
    title: 'From sharing to long-term rental',
    body: 'Abandoned hourly sharing after the unit economics failed, and moved to monthly rentals aimed squarely at delivery riders.',
    metrics: ['Raised $2.4M Series A', 'Fleet: 210 · ARR: ₹1.1 Cr'],
    image: IMG.urbanScooterRider,
  },
  {
    year: '2020-21',
    short: "'21",
    title: 'Essential services through lockdown',
    body: 'Kept groceries and medicine moving across Delhi NCR when almost nothing else was. Crossed 1 million deliveries and opened our first swap station.',
    metrics: ['1M deliveries', 'Fleet: 640 · First swap station'],
    image: IMG.courierStreet,
  },
  {
    year: '2021-22',
    short: "'22",
    title: 'Four new cities and SGD OS v1',
    body: 'Launched in Bengaluru, Mumbai, Pune and Hyderabad, and shipped the first version of the platform that now runs the whole fleet.',
    metrics: ['Raised $9M Series A extension', 'Fleet: 3,100 · ARR: $2.1M'],
    image: IMG.mumbaiStreet,
  },
  {
    year: '2022-23',
    short: "'23",
    title: 'Cargo enters the fleet',
    body: 'Introduced the 3-wheeler loader for middle-mile logistics, and launched Rent to Own after riders asked for a path to ownership.',
    metrics: ['Raised $28M Series B', 'Fleet: 9,400 (2W) + 380 (3W)'],
    image: IMG.threeWheelerStreet,
  },
  {
    year: '2023-24',
    short: "'24",
    title: 'Franchise model opens up',
    body: 'Opened hub ownership to local entrepreneurs, which took us into neighbourhoods our own capital could never have reached fast enough.',
    metrics: ['140 franchise partners', 'Fleet: 17,200 · 78M deliveries'],
    image: IMG.garageBikes,
  },
  {
    year: '2024-25',
    short: "'25",
    title: 'Series C, profitability at the hub',
    body: 'Raised $95M to triple the swap network, entered our first tier-2 cities, and reached operating profitability at the hub level.',
    metrics: ['Raised $95M Series C', 'EBITDA-positive at hub level'],
    image: IMG.teamMeeting,
  },
  {
    year: '2025-26',
    short: 'Now',
    title: 'Where we are now',
    body: 'Twenty-six thousand vehicles, 24,000 riders and 132 million deliveries, with net-zero operations targeted for the end of FY 2026-27.',
    metrics: ['132M deliveries · 68M kg CO₂', 'Fleet: 26,400 · 12 cities'],
    image: IMG.evCharging,
  },
  {
    year: 'Next',
    short: 'Next',
    title: 'Aiming for 200,000 vehicles',
    body: 'Twenty-five cities, 2,000 swap points and a fleet that runs entirely on contracted renewable supply.',
    metrics: ['200,000 EVs', '25 cities by 2029'],
    image: IMG.forestAerial,
    future: true,
  },
]

/**
 * The letter shown above the journey section. Figures here are deliberately the
 * same ones the banner and the rider stories already use — 26,000 vehicles,
 * 24,000 riders, twelve cities, and the ₹15,000 a month Ramesh Yadav describes.
 */
export const CEO_MESSAGE = {
  name: 'Aditya Rao',
  role: 'Co-founder & Chief Executive',
  photo: IMG.portraitExec,
  eyebrow: 'Message from our CEO',
  // split so the second half can carry the brand colour and its own reveal
  lead: [
    'We did not set out to sell electric vehicles.',
    'We set out to raise what a delivery rider takes home at the end of a day.',
  ],
  // company vitals shown beside the letter. Figures match the banner and the
  // impact ledger — nothing invented for this section alone.
  vitals: [
    { label: 'Founded', value: '2019' },
    { label: 'Cities live', value: '12' },
    { label: 'Vehicles on road', value: '26,000' },
    { label: 'Riders earning', value: '24,000' },
  ],
  body: [
    'When we started in 2019 the argument for going electric was environmental, and the answer from riders was always the same — it costs too much to switch. So we stopped selling vehicles and started renting them. Insurance, servicing and unlimited battery swaps included, for less than a rider was already handing over to fuel pumps and mechanics.',
    'Seven years later that one decision is what 26,000 vehicles and 24,000 riders are built on. A rider in Gurugram keeps around ₹15,000 a month that used to disappear into petrol and repairs. Twelve cities run on it. The emissions we avoid are real and we measure them honestly — but they follow from the economics, never the other way round.',
    'We are nowhere near finished. Most of India’s last mile still burns petrol, and the people riding it are the ones paying for that. Closing the gap is the whole job.',
  ],
}

/** Filter chips above the gallery. `all` is prepended by the component. */
export const GALLERY_TAGS = [
  'Celebrations',
  'Milestones',
  'Festivals',
  'Games',
  'Office',
  'Showroom',
  'Rides',
]

/**
 * Homepage gallery. Every tile is the same shape, so order here is only reading
 * order — no layout is encoded in the data. `tag` must be one of GALLERY_TAGS.
 */
export const GALLERY = [
  {
    src: IMG.cultureCheer,
    ratio: '1600/1067',
    // the sign in the photo reads "happy birthday" — captioning this as a city
    // launch would be visibly at odds with what is on screen
    alt: 'Colleagues in party hats holding up a birthday sign in the office',
    caption: 'Every excuse taken',
    tag: 'Celebrations',
  },
  {
    src: IMG.cultureSelfie,
    ratio: '1600/1067',
    alt: 'Colleagues taking a selfie together wearing party hats',
    caption: 'The group photo nobody escapes',
    tag: 'Celebrations',
  },
  {
    src: IMG.cultureNewHire,
    ratio: '1600/1067',
    alt: 'Colleagues applauding a new joiner in the office',
    caption: 'New joiners',
    tag: 'Milestones',
  },
  {
    src: IMG.cultureWin,
    ratio: '1600/1067',
    alt: 'A team celebrating a result together in the office',
    caption: 'City number twelve',
    tag: 'Milestones',
  },
  {
    src: IMG.cultureHoli,
    ratio: '1600/2400',
    alt: 'A person smiling with bright coloured powder on their hands and face at Holi',
    caption: 'Holi, no exceptions',
    tag: 'Festivals',
  },
  {
    src: IMG.cultureDiwali,
    ratio: '1600/1067',
    alt: 'Oil lamps and marigold flowers lit for Diwali',
    caption: 'Diwali at every hub',
    tag: 'Festivals',
  },
  {
    src: IMG.cultureSparkler,
    ratio: '1600/2400',
    alt: 'A person in traditional dress holding a lit sparkler',
    caption: 'Sparklers on the forecourt',
    tag: 'Festivals',
  },
  {
    src: IMG.cultureCricket,
    ratio: '1600/983',
    alt: 'A cricket match in progress on an open ground',
    caption: 'The inter-hub league',
    tag: 'Games',
  },
  {
    src: IMG.cultureTableTennis,
    ratio: '1600/1067',
    alt: 'People playing table tennis in a recreation room',
    caption: 'Settled over table tennis',
    tag: 'Games',
  },
  {
    src: IMG.cultureDesk,
    ratio: '1600/1067',
    alt: 'Colleagues working through a plan around a table',
    caption: 'Monday planning',
    tag: 'Office',
  },
  {
    src: IMG.cultureStandup,
    ratio: '1600/1068',
    alt: 'A team standing around a whiteboard during a discussion',
    caption: 'Standups that overrun',
    tag: 'Office',
  },
  {
    src: IMG.showroomLineup,
    ratio: '1600/2404',
    alt: 'A row of green scooters parked side by side',
    caption: 'The line-up',
    tag: 'Showroom',
  },
  {
    src: IMG.rideGreenMoped,
    ratio: '1600/1067',
    alt: 'A green electric moped parked on a street',
    caption: 'One rider, one scooter',
    tag: 'Rides',
  },
  {
    src: IMG.rideGreenBox,
    ratio: '1600/2400',
    alt: 'A green scooter fitted with a delivery box and helmet',
    caption: 'Loaded and out',
    tag: 'Rides',
  },
]

export const LEADERSHIP = [
  {
    name: 'Aditya Rao',
    role: 'Co-founder & Chief Executive',
    bio: 'Previously built the last-mile network at a national logistics firm. Believes rider economics, not vehicle specs, decide whether EVs win.',
    // matches CEO_MESSAGE so he is the same person on both pages
    photo: IMG.portraitExec,
  },
  {
    name: 'Meera Krishnan',
    role: 'Co-founder & Chief Technology Officer',
    bio: 'Ex-payments infrastructure engineer. Architected SGD OS and the telematics stack that keeps 24,000 vehicles observable in real time.',
    photo: avatar(34381970),
  },
  {
    name: 'Sanjay Gupta',
    role: 'Chief Operating Officer',
    bio: 'Twenty years running distribution networks across tier-2 and tier-3 India. Owns the hub and swap-station rollout.',
    photo: avatar(15854251),
  },
  {
    name: 'Nisha Bhatt',
    role: 'Chief Financial Officer',
    bio: 'Former infrastructure-fund investor. Designed the asset-leasing structure that lets franchise partners enter with modest capital.',
    photo: avatar(29852895),
  },
  {
    name: 'Rahul Iyer',
    role: 'Head of Sustainability',
    bio: 'Climate scientist turned operator. Runs the measurement methodology behind every carbon number we publish.',
    photo: avatar(34423732),
  },
  {
    name: 'Fatima Qureshi',
    role: 'Head of Rider Experience',
    bio: 'Started as a hub manager in Mumbai. Now responsible for onboarding, training and the rider grievance process nationwide.',
    photo: avatar(18809829),
  },
]

export const TECH_PILLARS = [
  {
    icon: 'Satellite',
    title: 'Telematics on every vehicle',
    body: 'An onboard unit streams location, battery voltage, cell temperature, motor load and rider behaviour to SGD OS every four seconds.',
    points: ['4-second telemetry interval', 'Geofence + theft alerts', 'Crash detection with auto-escalation'],
  },
  {
    icon: 'BrainCircuit',
    title: 'Predictive maintenance',
    body: 'Models trained on 900 million kilometres of ride data flag a failing cell or worn brake pad days before it strands a rider.',
    points: ['Battery degradation forecasting', 'Service scheduled by wear, not calendar', '73% fewer roadside failures'],
  },
  {
    icon: 'BatteryCharging',
    title: 'Swap network orchestration',
    body: 'We forecast demand per station per hour and pre-position charged packs, so a rider almost never finds an empty slot.',
    points: ['900+ swap points', '96% pack availability', '90-second average swap'],
  },
  {
    icon: 'Route',
    title: 'Route and range intelligence',
    body: 'Range estimates account for load, gradient, traffic and battery age — not a flat number from a brochure.',
    points: ['Live range prediction', 'Swap-aware routing', 'Heat-map based hub siting'],
  },
  {
    icon: 'Lock',
    title: 'Security and identity',
    body: 'Aadhaar and PAN verification, liveness-checked selfies, and vehicle handover bound to a rider identity with an OTP.',
    points: ['Digital KYC in under 6 minutes', 'Immobiliser on theft alert', 'ISO 27001 aligned controls'],
  },
  {
    icon: 'Plug',
    title: 'Open APIs',
    body: 'Enterprise clients pull fleet status, rider attendance and emissions data straight into their own WMS or ERP.',
    points: ['REST + webhook events', 'Sandbox environment', '99.95% uptime last 12 months'],
  },
]

export const ESG_PILLARS = [
  {
    letter: 'E',
    title: 'Environmental',
    color: 'from-brand-400 to-brand-700',
    points: [
      { label: 'CO₂ avoided to date', value: '68M kg' },
      { label: 'Renewable-powered hubs', value: '61%' },
      { label: 'Battery packs recycled', value: '94%' },
      { label: 'Target for net-zero operations', value: 'FY 2026-27' },
    ],
    body: 'Every kilometre is logged against a petrol baseline audited by an independent assessor. We report avoided emissions, never offsets bought after the fact.',
  },
  {
    letter: 'S',
    title: 'Social',
    color: 'from-volt-500 to-brand-500',
    points: [
      { label: 'Livelihoods supported', value: '24,000+' },
      { label: 'Women riders', value: '9.4%' },
      { label: 'Riders with accident cover', value: '100%' },
      { label: 'Average income uplift', value: '+58%' },
    ],
    body: 'Our target is 20% women riders by 2027, supported by women-only training batches, safety escorts for night shifts and hub crèche pilots in three cities.',
  },
  {
    letter: 'G',
    title: 'Governance',
    color: 'from-brand-600 to-ink-800',
    points: [
      { label: 'Independent board seats', value: '3 of 7' },
      { label: 'Grievances closed in SLA', value: '97.2%' },
      { label: 'Data controls', value: 'ISO 27001 aligned' },
      { label: 'Annual impact report', value: 'Published' },
    ],
    body: 'Rider contracts are written in plain Hindi and English, deductions are itemised, and an ombudsperson independent of operations reviews every escalated dispute.',
  },
]

export const ENV_METRICS = [
  { value: 68, suffix: 'M kg', label: 'CO₂ avoided', sub: 'versus petrol two-wheelers' },
  { value: 28, suffix: 'M litres', label: 'Petrol not burned', sub: 'since inception' },
  { value: 3.1, suffix: 'M kg', label: 'Particulates avoided', sub: 'NOx, SOx and PM2.5' },
  { value: 2.8, suffix: 'M', label: 'Trees equivalent', sub: 'annual sequestration' },
]

export const NEWS = [
  {
    date: '2026-06-18',
    outlet: 'The Economic Times',
    title: 'SGD Electric raises $95M Series C to triple its battery-swap network',
    excerpt:
      'The Gurugram-based EV fleet operator will use the capital to add 2,000 swap points and enter eight new cities over the next eighteen months.',
    tag: 'Funding',
    image: IMG.evCharging,
  },
  {
    date: '2026-05-02',
    outlet: 'Mint',
    title: 'How SGD made electric cheaper than petrol for India’s delivery riders',
    excerpt:
      'A close look at the unit economics that let a rider cut ₹9,400 a month from running costs without buying the vehicle.',
    tag: 'Feature',
    image: IMG.riderScooter,
  },
  {
    date: '2026-03-27',
    outlet: 'Business Standard',
    title: 'SGD crosses 132 million deliveries, 24,000 active riders',
    excerpt:
      'The milestone makes SGD one of the largest electric two-wheeler fleet operators in the country by daily active vehicles.',
    tag: 'Milestone',
    image: IMG.riderCityDay,
  },
  {
    date: '2026-02-11',
    outlet: 'YourStory',
    title: '“Dignity is a product feature” — inside SGD’s rider welfare programme',
    excerpt:
      'Written contracts, itemised deductions and an independent ombudsperson. Why the company treats rider trust as infrastructure.',
    tag: 'Interview',
    image: IMG.teamDiscussion,
  },
  {
    date: '2025-12-05',
    outlet: 'CNBC-TV18',
    title: 'SGD partners with three quick-commerce platforms for dark-store logistics',
    excerpt:
      'The 3-wheeler cargo fleet will handle replenishment runs across 280 dark stores in six metros.',
    tag: 'Partnership',
    image: IMG.warehouseVan,
  },
  {
    date: '2025-10-21',
    outlet: 'Forbes India',
    title: 'SGD named to the 2025 Sustainable Mobility 50',
    excerpt:
      'Recognised for verifiable emissions reporting and for extending formal insurance cover to informal-sector workers.',
    tag: 'Award',
    image: IMG.forestSun,
  },
]

export const BLOG = [
  {
    slug: 'ev-vs-petrol-rider-economics',
    title: 'EV vs petrol: the real monthly maths for a delivery rider',
    excerpt:
      'We broke down fuel, servicing, insurance and downtime across 400 riders in Delhi NCR. Here is where every rupee actually goes.',
    category: 'Rider guides',
    readTime: '8 min read',
    date: '2026-07-14',
    author: 'Rahul Iyer',
    image: IMG.riderRoad,
  },
  {
    slug: 'battery-swapping-explained',
    title: 'Battery swapping, explained without the jargon',
    excerpt:
      'Why 90 seconds beats a fast charger, how pack health is tracked, and what happens to a cell at the end of its life.',
    category: 'Technology',
    readTime: '6 min read',
    date: '2026-06-30',
    author: 'Meera Krishnan',
    image: IMG.evCharging,
  },
  {
    slug: 'first-month-as-a-delivery-rider',
    title: 'Your first month as a delivery rider: an honest guide',
    excerpt:
      'Shift timing, order batching, which apps pay best in which city, and the five mistakes that cost new riders the most money.',
    category: 'Rider guides',
    readTime: '11 min read',
    date: '2026-06-09',
    author: 'Fatima Qureshi',
    image: IMG.riderBike,
  },
  {
    slug: 'cargo-loader-cost-per-km',
    title: 'What a 3-wheeler cargo loader really costs per kilometre',
    excerpt:
      'A side-by-side against diesel tempos on a 90 km dark-store replenishment loop, including driver, energy and downtime.',
    category: 'Business',
    readTime: '9 min read',
    date: '2026-05-22',
    author: 'Sanjay Gupta',
    image: IMG.threeWheelerStreet,
  },
  {
    slug: 'scope-3-reporting-last-mile',
    title: 'Getting Scope 3 last-mile emissions right',
    excerpt:
      'Most last-mile carbon reporting is an estimate multiplied by an assumption. Here is how to make it measurable per shipment.',
    category: 'Sustainability',
    readTime: '10 min read',
    date: '2026-05-03',
    author: 'Rahul Iyer',
    image: IMG.forestTop,
  },
  {
    slug: 'women-riders-on-the-road',
    title: 'What it takes to get more women on delivery routes',
    excerpt:
      'Safety, timing, training and family buy-in. Lessons from running women-only onboarding batches in four cities.',
    category: 'Impact',
    readTime: '7 min read',
    date: '2026-04-18',
    author: 'Fatima Qureshi',
    image: IMG.portraitWoman1,
  },
  {
    slug: 'franchise-unit-economics',
    title: 'Franchise unit economics, with the numbers shown',
    excerpt:
      'Rent, staff, energy, utilisation and payback for a 40-vehicle hub — the model we hand every prospective partner.',
    category: 'Business',
    readTime: '12 min read',
    date: '2026-03-29',
    author: 'Nisha Bhatt',
    image: IMG.garageBikes,
  },
  {
    slug: 'monsoon-riding-checklist',
    title: 'The monsoon riding checklist every EV rider should keep',
    excerpt:
      'Water ingress, brake behaviour on wet roads, visibility, and how to protect your battery connector through the season.',
    category: 'Rider guides',
    readTime: '5 min read',
    date: '2026-03-08',
    author: 'Sanjay Gupta',
    image: IMG.courierStreet,
  },
  {
    slug: 'predictive-maintenance-fleet',
    title: 'How predictive maintenance cut our roadside failures by 73%',
    excerpt:
      'The signals that actually predict a breakdown, the ones that looked promising and did not, and what we shipped in the end.',
    category: 'Technology',
    readTime: '9 min read',
    date: '2026-02-20',
    author: 'Meera Krishnan',
    image: IMG.mechanicsChecking,
  },
]

export const BLOG_CATEGORIES = [
  'All',
  'Rider guides',
  'Technology',
  'Business',
  'Sustainability',
  'Impact',
]

export const JOBS = [
  {
    title: 'Senior Frontend Engineer',
    team: 'Engineering',
    location: 'Gurugram',
    type: 'Full-time',
    exp: '4–7 years',
  },
  {
    title: 'Backend Engineer — Fleet Platform',
    team: 'Engineering',
    location: 'Gurugram / Remote',
    type: 'Full-time',
    exp: '3–6 years',
  },
  {
    title: 'Data Scientist — Battery Analytics',
    team: 'Data',
    location: 'Bengaluru',
    type: 'Full-time',
    exp: '3–5 years',
  },
  {
    title: 'City Operations Manager',
    team: 'Operations',
    location: 'Pune',
    type: 'Full-time',
    exp: '5–8 years',
  },
  {
    title: 'Hub Manager',
    team: 'Operations',
    location: 'Hyderabad',
    type: 'Full-time',
    exp: '2–4 years',
  },
  {
    title: 'Rider Experience Associate',
    team: 'Operations',
    location: 'Mumbai',
    type: 'Full-time',
    exp: '1–3 years',
  },
  {
    title: 'Enterprise Account Executive',
    team: 'Sales',
    location: 'Bengaluru',
    type: 'Full-time',
    exp: '4–8 years',
  },
  {
    title: 'Sustainability Analyst',
    team: 'ESG',
    location: 'Gurugram',
    type: 'Full-time',
    exp: '2–4 years',
  },
  {
    title: 'Product Designer',
    team: 'Design',
    location: 'Remote (India)',
    type: 'Full-time',
    exp: '3–6 years',
  },
  {
    title: 'Field Service Technician',
    team: 'Operations',
    location: 'Delhi NCR',
    type: 'Full-time',
    exp: '1–3 years',
  },
]

export const JOB_TEAMS = ['All', 'Engineering', 'Operations', 'Data', 'Sales', 'Design', 'ESG']

export const PERKS = [
  {
    icon: 'HeartPulse',
    title: 'Health cover for the whole family',
    body: '₹10 lakh floater including parents, plus mental-health sessions with no cap.',
  },
  {
    icon: 'GraduationCap',
    title: 'Learning budget',
    body: '₹75,000 a year for courses, conferences and certifications — approved by default.',
  },
  {
    icon: 'Baby',
    title: 'Real parental leave',
    body: '26 weeks primary, 8 weeks secondary, and a phased return over the following month.',
  },
  {
    icon: 'Bike',
    title: 'A SGD of your own',
    body: 'Every employee gets a SGD scooter for personal use, charging included.',
  },
  {
    icon: 'Home',
    title: 'Flexible where you work',
    body: 'Engineering and design run remote-first. Ops is field-first, because that is where the work is.',
  },
  {
    icon: 'TrendingUp',
    title: 'Equity for everyone',
    body: 'ESOPs from day one, at every level, with a four-year vest and no cliff after year one.',
  },
]

/**
 * Investors. Names are deliberately fictional — naming real funds as backers of
 * a company that does not exist would be a false claim about those firms.
 */
export const INVESTORS = [
  { name: 'Verdant Capital', role: 'Series C lead', since: '2025' },
  { name: 'Nexa Growth', role: 'Series B lead', since: '2022' },
  { name: 'Kinetic Ventures', role: 'Series A lead', since: '2020' },
  { name: 'BlueOak Partners', role: 'Seed', since: '2019' },
  { name: 'Harborline Ventures', role: 'Series C', since: '2025' },
  { name: 'Terra Impact Fund', role: 'Climate mandate', since: '2023' },
  { name: 'Meridian Impact', role: 'Series B', since: '2022' },
  { name: 'Anchor Climate Fund', role: 'Series C', since: '2025' },
]

export const FUNDING_STATS = [
  { value: '$134M', label: 'Raised to date' },
  { value: '4', label: 'Funding rounds' },
  { value: '8', label: 'Institutional backers' },
  { value: '2025', label: 'Latest round (Series C)' },
]

export const AWARDS = [
  { year: '2025', title: 'Sustainable Mobility 50', body: 'Forbes India' },
  { year: '2025', title: 'Best EV Fleet Operator', body: 'India Mobility Awards' },
  { year: '2024', title: 'Great Place to Work Certified', body: 'GPTW India' },
  { year: '2024', title: 'Startup of the Year — Logistics', body: 'ET Startup Awards' },
]

/* ==================================================================
   Campaign
   ================================================================== */

export const CAMPAIGN = {
  name: 'Beat The Heat',
  window: '1 April – 31 May',
  intro:
    'Summer is the hardest season to ride. So we made it the most rewarding one. Complete weekly order targets between April and May and climb a prize ladder worth over ₹40 lakh in total.',
  steps: [
    'Stay active on any SGD rental plan through the campaign window.',
    'Complete at least 100 delivered orders in a calendar week.',
    'Your rank updates live on the leaderboard in the SGD Rider app.',
    'Weekly winners are announced every Monday; grand prizes at the close of May.',
  ],
  prizes: [
    { rank: 'Grand prize', reward: '3-month free lease + ₹50,000 cash', winners: '1 rider' },
    { rank: 'Runner-up', reward: '₹25,000 cash + a smartphone', winners: '5 riders' },
    { rank: 'Third place', reward: '₹10,000 cash', winners: '25 riders' },
    { rank: 'Weekly streak', reward: '₹2,000 fuel-free bonus', winners: '400 riders' },
  ],
  perks: [
    { icon: 'Droplets', title: 'Hydration kits', body: 'Free electrolyte packs and a cooled water bottle at every hub.' },
    { icon: 'Shirt', title: 'Summer riding gear', body: 'UV-blocking sleeves, neck gaiter and a ventilated helmet liner.' },
    { icon: 'Umbrella', title: 'Rest points', body: 'Air-conditioned rest bays at 140 hubs, open through the afternoon peak.' },
    { icon: 'Stethoscope', title: 'Heat-stress checks', body: 'Free weekly health screening at hubs through April and May.' },
  ],
}

/* ==================================================================
   Legal
   ================================================================== */

export const LEGAL_UPDATED = '12 June 2026'
