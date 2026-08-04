/**
 * Site-wide configuration: identity, navigation, contact, footer.
 * Anything that appears in more than one place lives here.
 */

/**
 * The brand lockup — mark and wordmark together in one file.
 *
 * Drop the files in `public/` and set the paths. <Logo> then renders the image
 * on its own and stops drawing the inline mark and the "SGD Electric" type, so
 * the wordmark is never doubled up.
 *
 * Two files are needed because the header sits on the dark banner at the top of
 * the page and turns white further down, and the footer is dark:
 *   onLight — the normal version, for white and pale surfaces
 *   onDark  — a reversed version, for the dark banner and the footer
 *
 * If only `onLight` is supplied it is used on both, which will look wrong on the
 * dark surfaces. Leave both null to keep the inline mark.
 *
 * The files must have a TRANSPARENT background. A white-background image shows
 * a white rectangle everywhere except the white header.
 */
export const LOGO = {
  onLight: '/logo.png',
  onDark: '/logo-reversed.png',
  /** Width-to-height of the file, so space is reserved before it loads. */
  aspect: '1040/514',
  /**
   * The same artwork split in two so the cog can turn on its own: `gear` is the
   * ring, `body` is the lettering and the arrow. Both are full-size canvases, so
   * stacking them reproduces the logo exactly.
   *
   * `origin` is the cog's centre as a percentage of the whole lockup — it is
   * well left of centre, so rotating without it would swing the ring in an arc.
   *
   * Delete this block to fall back to the flat single-file logo.
   */
  layers: {
    onLight: { gear: '/logo-gear.png', body: '/logo-body.png' },
    onDark: { gear: '/logo-reversed-gear.png', body: '/logo-reversed-body.png' },
    origin: '21.9% 49.7%',
  },
}

/** @deprecated use LOGO. Kept so nothing breaks if it is still referenced. */
export const LOGO_SRC = null

export const SITE = {
  name: 'SGD Electric',
  shortName: 'SGD',
  tagline: 'Charge Less. Earn More.',
  description:
    "India's electric fleet for last-mile delivery. Rent a scooter or cargo loader with zero fuel bills, zero maintenance and zero emissions.",
  legalName: 'SGD Electric Mobility Pvt. Ltd.',
  founded: 2019,
}

export const CONTACT = {
  phone: '+91 85000 85120',
  phoneHref: 'tel:+918500085120',
  /*
   * Note the domain: the client's address is on sgdlogistics.in, not the
   * sgdelectric.in this site assumes elsewhere (see Seo.jsx, which builds every
   * canonical URL from it). Only one address was supplied, so support, sales,
   * press and careers all point at it for now.
   */
  supportEmail: 'communication@sgdlogistics.in',
  salesEmail: 'communication@sgdlogistics.in',
  pressEmail: 'communication@sgdlogistics.in',
  careersEmail: 'communication@sgdlogistics.in',
  hq: {
    line1: 'Manjeera Trinity Corporate, KPHB Phase 3',
    line2: 'Kukatpally Housing Board Colony, Kukatpally',
    city: 'Hyderabad, Telangana 500072',
    country: 'India',
  },
  hours: [
    { days: 'Office', time: '10:00 AM – 7:00 PM' },
    { days: 'Customer support', time: '5:00 AM – 11:00 PM' },
    // the client said one day off a week but did not say which — asked
    { days: 'Weekly off', time: 'One day a week' },
  ],
}

/**
 * Offices shown in the Get In Touch map. `query` is passed to Google Maps'
 * keyless embed endpoint, so no API key or billing account is needed.
 *
 * Only the head office has a street address — the client listed the other
 * regions by state alone, so those pins land on the region rather than a
 * building. Replace `address` and `query` as each branch address arrives.
 */
export const CITY_HUBS = [
  {
    city: 'Hyderabad',
    label: 'Hyderabad',
    address:
      'Manjeera Trinity Corporate, Kukatpally Housing Board Colony, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072',
    query: 'Manjeera Trinity Corporate, KPHB Phase 3, Kukatpally, Hyderabad',
  },
  {
    city: 'Andhra Pradesh',
    label: 'Andhra Pradesh',
    address: 'Andhra Pradesh — branch address to follow',
    query: 'Andhra Pradesh, India',
  },
  {
    city: 'Karnataka',
    label: 'Karnataka',
    address: 'Karnataka — branch address to follow',
    query: 'Karnataka, India',
  },
  {
    city: 'Tamil Nadu',
    label: 'Tamil Nadu',
    address: 'Tamil Nadu — branch address to follow',
    query: 'Tamil Nadu, India',
  },
  {
    city: 'Delhi',
    label: 'Delhi',
    address: 'Delhi — branch address to follow',
    query: 'Delhi, India',
  },
  {
    city: 'Mumbai',
    label: 'Mumbai',
    address: 'Mumbai — branch address to follow',
    query: 'Mumbai, Maharashtra, India',
  },
]

/**
 * Where the company operates, used by the contact form's city picker.
 *
 * The client gave regions rather than cities, so these are the states and metros
 * they named. Anything quoting "12 cities" elsewhere on the site predates this
 * and is still unverified.
 */
export const CITIES = [
  'Telangana',
  'Andhra Pradesh',
  'Karnataka',
  'Tamil Nadu',
  'Delhi',
  'Mumbai',
]

export const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'Linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'Instagram' },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'Youtube' },
  { label: 'X', href: 'https://x.com/', icon: 'Twitter' },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'Facebook' },
]

/**
 * Primary navigation. Items with `columns` render as a mega-menu panel.
 */
export const NAV = [
  {
    label: 'Rent',
    columns: [
      {
        title: 'For riders',
        items: [
          {
            label: '2-Wheeler Rental',
            to: '/scooter-rental',
            desc: 'Electric scooters from ₹129/day',
            icon: 'Bike',
          },
          {
            label: 'Rent to Own',
            to: '/rent-to-own',
            desc: 'Pay as you earn, own in 24 months',
            icon: 'KeyRound',
          },
          {
            label: 'Deliver & Earn',
            to: '/deliver-and-earn',
            desc: 'Get placed with a delivery partner',
            icon: 'IndianRupee',
          },
        ],
      },
      {
        title: 'For businesses',
        items: [
          {
            label: '3-Wheeler Cargo',
            to: '/cargo-loader',
            desc: '550 kg payload, 140 km range',
            icon: 'Truck',
          },
          {
            label: 'EV for Delivery',
            to: '/ev-for-delivery',
            desc: 'Managed rider fleets, SLA-backed',
            icon: 'PackageCheck',
          },
        ],
      },
    ],
    featured: {
      title: 'Beat The Heat',
      desc: 'Ride 100 orders a week and win up to ₹50,000 plus a 3-month free lease.',
      to: '/beat-the-heat',
      badge: 'Live now',
    },
  },
  {
    label: 'Partner',
    columns: [
      {
        title: 'Grow with SGD',
        items: [
          {
            label: 'Franchise',
            to: '/franchise',
            desc: 'Run a SGD hub in your city',
            icon: 'Store',
          },
          {
            label: 'Advertising',
            to: '/advertising',
            desc: 'Moving media across 12 cities',
            icon: 'Megaphone',
          },
          {
            label: 'Investor Relations',
            to: '/investor-relations',
            desc: 'Lease a fleet, earn monthly yield',
            icon: 'TrendingUp',
          },
        ],
      },
    ],
  },
  {
    label: 'Company',
    columns: [
      {
        title: 'About',
        items: [
          { label: 'Who We Are', to: '/about', desc: 'Our story and team', icon: 'Users' },
          {
            label: 'Life at SGD',
            to: '/about#life',
            desc: 'Culture, hubs and the people',
            icon: 'HeartHandshake',
          },
          {
            label: 'Gallery',
            to: '/gallery',
            desc: 'Celebrations, festivals and games',
            icon: 'Images',
          },
          {
            label: 'Technology',
            to: '/technology',
            desc: 'SGD OS, telematics and swap network',
            icon: 'Cpu',
          },
          { label: 'ESG', to: '/esg', desc: 'Governance and social impact', icon: 'ShieldCheck' },
          {
            label: 'Environment',
            to: '/environment',
            desc: 'Carbon avoided, tracked per km',
            icon: 'Leaf',
          },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'Newsroom', to: '/news', desc: 'Milestones and press', icon: 'Newspaper' },
          { label: 'Blog', to: '/blog', desc: 'Guides for riders and fleets', icon: 'BookOpen' },
          { label: 'Careers', to: '/careers', desc: "We're hiring across India", icon: 'Briefcase' },
        ],
      },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export const FOOTER_NAV = [
  {
    title: 'Rent',
    links: [
      { label: '2-Wheeler Rental', to: '/scooter-rental' },
      { label: '3-Wheeler Cargo', to: '/cargo-loader' },
      { label: 'Rent to Own', to: '/rent-to-own' },
      { label: 'Deliver & Earn', to: '/deliver-and-earn' },
      { label: 'Beat The Heat', to: '/beat-the-heat' },
    ],
  },
  {
    title: 'Business',
    links: [
      { label: 'EV for Delivery', to: '/ev-for-delivery' },
      { label: 'Franchise', to: '/franchise' },
      { label: 'Advertising', to: '/advertising' },
      { label: 'Investor Relations', to: '/investor-relations' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Who We Are', to: '/about' },
      { label: 'Our Journey', to: '/about#journey' },
      { label: 'Life at SGD', to: '/about#life' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'Technology', to: '/technology' },
      { label: 'ESG', to: '/esg' },
      { label: 'Environment', to: '/environment' },
      { label: 'Careers', to: '/careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Newsroom', to: '/news' },
      { label: 'Blog', to: '/blog' },
      { label: 'FAQs', to: '/about#faq' },
      { label: 'Contact', to: '/contact' },
      { label: 'Sitemap', to: '/sitemap' },
    ],
  },
]

export const LEGAL_NAV = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms-of-service' },
  { label: 'Cookie Policy', to: '/cookie-policy' },
]

/** Headline metrics. Single source of truth — reused on several pages. */
export const STATS = [
  { value: 24000, suffix: '+', label: 'Active riders', sub: 'on the road every day' },
  { value: 132, suffix: 'M+', label: 'Deliveries completed', sub: 'since 2019' },
  { value: 68, suffix: 'M kg', label: 'CO₂ avoided', sub: 'versus petrol equivalents' },
  { value: 12, suffix: '', label: 'Cities live', sub: 'across India' },
]
