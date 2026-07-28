# Zapp Electric — Frontend

Marketing and product website for **Zapp Electric**, an EV rental platform for last-mile delivery
in India. React + Vite + Tailwind, 22 pages, fully responsive.

Backend (Node.js) is not built yet — see [Wiring the backend](#wiring-the-backend).

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to /dist
npm run preview  # serve the production build
```

Node 18+ required (developed on Node 20).

## Project structure

```
src/
├─ data/                 ← ALL content lives here. Edit copy without touching JSX.
│  ├─ site.js            ← navigation, contact details, cities, footer, headline stats
│  ├─ content.js         ← page copy: features, plans, FAQs, testimonials, jobs, blog, news
│  └─ media.js           ← every image and video URL (see "Swapping the media")
├─ lib/
│  ├─ cn.js              ← className joiner
│  └─ format.js          ← date and ₹ currency formatting (en-IN)
├─ components/
│  ├─ ui/                ← primitives: Button, Icon, Img, Reveal, Counter, Marquee,
│  │                       Accordion, Tilt, Section, Logo, Seo, AppBadges
│  ├─ layout/            ← Navbar (mega-menu), Footer, Layout (transitions, scroll progress)
│  ├─ sections/          ← reusable page sections: PageHero, FeatureGrid, SpecGrid,
│  │                       PricingPlans, StepList, SplitFeature, StatBand, CTABand, LegalLayout
│  └─ home/              ← homepage-only sections incl. the savings calculator
└─ pages/                ← one file per route
```

### Design system

Tokens live in `tailwind.config.js` and `src/index.css`.

| Token | Use |
| --- | --- |
| `brand-50…950` | Primary green. Every CTA, accent and active state. |
| `volt-300…600` | High-voltage lime. Energy highlights on dark surfaces only — never body text on light. |
| `ink-700…950` | Deep forest near-black. Dark sections, footer, hero scrims. |
| `font-display` | Sora — all headings. |
| `font-sans` | Inter — all body copy. |

Utility classes worth knowing: `.card` / `.card-hover`, `.card-dark` / `.card-dark-hover`,
`.eyebrow` / `.eyebrow-dark`, `.glass`, `.noise` (film grain), `.mask-x` (edge fade),
`.text-gradient-volt`.

Every animation collapses under `prefers-reduced-motion` — handled globally in `index.css`
and per-component via framer-motion's `useReducedMotion`.

## Swapping the media

All imagery is centralised in `src/data/media.js`. Every URL there was verified to return 200 and
comes from **Pexels**, whose licence permits free commercial use and hotlinking with no attribution.

To use your own photography, replace the values in that one file. For local assets, drop files in
`public/media/` and reference them as `/media/your-file.jpg`. Nothing else needs to change —
`<Img>` renders a shimmer while loading and falls back to a brand gradient if a URL ever fails,
so a broken link never shows a broken-image icon.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/scooter-rental` | 2-wheeler rental + pricing |
| `/cargo-loader` | 3-wheeler cargo, diesel comparison |
| `/ev-for-delivery` | Enterprise managed fleets, SLAs |
| `/rent-to-own` | Ownership programme |
| `/deliver-and-earn` | Rider recruitment, earnings tiers |
| `/beat-the-heat` | Seasonal rider campaign |
| `/franchise` | Hub franchise tiers |
| `/advertising` | Fleet advertising formats |
| `/investor-relations` | Fleet leasing for investors |
| `/about` `/technology` `/esg` `/environment` | Company |
| `/news` `/blog` `/careers` `/contact` | Resources |
| `/privacy-policy` `/terms-of-service` `/cookie-policy` `/sitemap` | Legal + utility |
| `*` | 404 |

All routes except `/` are code-split via `React.lazy`.

## Deployment

Static build — deploy `/dist` anywhere. SPA fallback config is already included:

- **Netlify** — `public/_redirects`
- **Vercel** — `vercel.json`
- **nginx** — add `try_files $uri $uri/ /index.html;`

Without a fallback, deep links like `/about` will 404 on refresh.

## Wiring the backend

Two places currently hold placeholder submit handlers, ready for the Node API:

1. `src/pages/Contact.jsx` → `ContactForm.handleSubmit` — currently a simulated 900 ms delay.
2. `src/pages/Blog.jsx` → `NewsletterCard` submit — currently sets local state only.

Replace each with a `fetch` to your endpoint. Everything else on the site is presentational, so no
other component needs to change when the API lands.

## Accessibility notes

- All interactive elements are real `<button>` / `<a>` with visible focus rings.
- Breadcrumbs, nav landmarks and form labels are present; decorative images use empty `alt`.
- Text over imagery sits on layered scrims sized to hold AA contrast on any video frame.
- Reduced-motion users get static images instead of autoplaying video in every hero.
