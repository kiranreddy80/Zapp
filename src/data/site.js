/**
 * Site-wide configuration: identity, navigation, contact, footer.
 * Anything that appears in more than one place lives here.
 */

/**
 * Drop the real logo file in `public/` and set this to its path (e.g.
 * '/logo.svg'). <Logo> uses the file when present and falls back to the inline
 * SVG below it, so nothing else needs changing.
 */
export const LOGO_SRC = null

export const SITE = {
  name: 'Zapp Electric',
  shortName: 'Zapp',
  tagline: 'Charge Less. Earn More.',
  description:
    "India's electric fleet for last-mile delivery. Rent a scooter or cargo loader with zero fuel bills, zero maintenance and zero emissions.",
  legalName: 'Zapp Electric Mobility Pvt. Ltd.',
  founded: 2019,
}

export const CONTACT = {
  phone: '+91 98100 44 220',
  phoneHref: 'tel:+919810044220',
  supportEmail: 'help@zappelectric.in',
  salesEmail: 'partners@zappelectric.in',
  pressEmail: 'press@zappelectric.in',
  careersEmail: 'careers@zappelectric.in',
  hq: {
    line1: 'Zapp Electric Mobility Pvt. Ltd.',
    line2: 'Tower B, Cyber Greens, DLF Phase 3',
    city: 'Gurugram, Haryana 122002',
    country: 'India',
  },
  hours: [
    { days: 'Monday – Saturday', time: '8:00 AM – 9:00 PM' },
    { days: 'Sunday', time: '10:00 AM – 6:00 PM' },
  ],
}

/**
 * Hubs shown in the Get In Touch map. `query` is passed to Google Maps'
 * keyless embed endpoint, so no API key or billing account is needed.
 */
export const CITY_HUBS = [
  {
    city: 'Gurugram',
    label: 'Delhi NCR',
    address: 'Tower B, Cyber Greens, DLF Phase 3, Gurugram, Haryana 122002',
    query: 'DLF Phase 3, Gurugram, Haryana',
  },
  {
    city: 'Mumbai',
    label: 'Mumbai',
    address: 'Unit 4, Andheri East Industrial Estate, Mumbai, Maharashtra 400069',
    query: 'Andheri East, Mumbai, Maharashtra',
  },
  {
    city: 'Bengaluru',
    label: 'Bengaluru',
    address: '2nd Floor, Koramangala 5th Block, Bengaluru, Karnataka 560095',
    query: 'Koramangala, Bengaluru, Karnataka',
  },
  {
    city: 'Hyderabad',
    label: 'Hyderabad',
    address: 'Plot 12, HITEC City, Madhapur, Hyderabad, Telangana 500081',
    query: 'HITEC City, Hyderabad, Telangana',
  },
  {
    city: 'Pune',
    label: 'Pune',
    address: 'Ground Floor, Baner Road, Pune, Maharashtra 411045',
    query: 'Baner, Pune, Maharashtra',
  },
]

export const CITIES = [
  'Delhi NCR',
  'Gurugram',
  'Noida',
  'Bengaluru',
  'Mumbai',
  'Pune',
  'Hyderabad',
  'Chennai',
  'Kolkata',
  'Ahmedabad',
  'Jaipur',
  'Lucknow',
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
        title: 'Grow with Zapp',
        items: [
          {
            label: 'Franchise',
            to: '/franchise',
            desc: 'Run a Zapp hub in your city',
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
            label: 'Life at Zapp',
            to: '/about#life',
            desc: 'Culture, hubs and the people',
            icon: 'HeartHandshake',
          },
          {
            label: 'Technology',
            to: '/technology',
            desc: 'ZappOS, telematics and swap network',
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
      { label: 'Life at Zapp', to: '/about#life' },
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
