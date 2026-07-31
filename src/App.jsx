import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from '@/components/layout/Layout'

/**
 * Every route is code-split. The homepage is eager because it is the most
 * common entry point and we do not want a spinner on first paint.
 */
import Home from '@/pages/Home'

const ScooterRental = lazy(() => import('@/pages/ScooterRental'))
const CargoLoader = lazy(() => import('@/pages/CargoLoader'))
const EvForDelivery = lazy(() => import('@/pages/EvForDelivery'))
const RentToOwn = lazy(() => import('@/pages/RentToOwn'))
const DeliverAndEarn = lazy(() => import('@/pages/DeliverAndEarn'))
const Franchise = lazy(() => import('@/pages/Franchise'))
const Advertising = lazy(() => import('@/pages/Advertising'))
const BeatTheHeat = lazy(() => import('@/pages/BeatTheHeat'))
const InvestorRelations = lazy(() => import('@/pages/InvestorRelations'))

const About = lazy(() => import('@/pages/About'))
const Technology = lazy(() => import('@/pages/Technology'))
const Esg = lazy(() => import('@/pages/Esg'))
const Environment = lazy(() => import('@/pages/Environment'))
const News = lazy(() => import('@/pages/News'))
const Blog = lazy(() => import('@/pages/Blog'))
const Careers = lazy(() => import('@/pages/Careers'))
const Gallery = lazy(() => import('@/pages/Gallery'))
const Contact = lazy(() => import('@/pages/Contact'))

const PrivacyPolicy = lazy(() => import('@/pages/legal/PrivacyPolicy'))
const TermsOfService = lazy(() => import('@/pages/legal/TermsOfService'))
const CookiePolicy = lazy(() => import('@/pages/legal/CookiePolicy'))
const Sitemap = lazy(() => import('@/pages/Sitemap'))
const NotFound = lazy(() => import('@/pages/NotFound'))

/** Route-level loading state — a brand-tinted shell, not a bare spinner. */
function RouteFallback() {
  return (
    <div
      className="grid min-h-[70vh] place-items-center bg-ink-900"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex items-center">
          {/* cell */}
          <div className="relative h-16 w-28 overflow-hidden rounded-xl border-2 border-white/25 p-1.5">
            <motion.div
              className="current-flow relative h-full overflow-hidden rounded-md bg-gradient-to-r from-brand-500 to-volt-500"
              initial={{ width: '10%' }}
              animate={{ width: '100%' }}
              transition={{
                duration: 1.6,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </div>
          {/* terminal */}
          <span className="ml-1 h-6 w-2 rounded-r bg-white/25" />

          {/* Bolt sitting over the cell. White with a dark outline so it stays
              legible over both the unfilled (dark) and filled (bright green)
              parts of the battery as the level animates past it. */}
          <svg
            viewBox="0 0 24 24"
            className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2"
            fill="#fff"
            stroke="#06120C"
            strokeWidth="1.4"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M13.5 2 4 13.2h6.1L9.6 22 20 10.6h-6.4L13.5 2Z" />
          </svg>
        </div>

        <p className="text-sm tracking-wide text-white/60">Charging up…</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="*"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                {/* Rent */}
                <Route path="/scooter-rental" element={<ScooterRental />} />
                <Route path="/cargo-loader" element={<CargoLoader />} />
                <Route path="/ev-for-delivery" element={<EvForDelivery />} />
                <Route path="/rent-to-own" element={<RentToOwn />} />
                <Route path="/deliver-and-earn" element={<DeliverAndEarn />} />
                <Route path="/beat-the-heat" element={<BeatTheHeat />} />

                {/* Partner */}
                <Route path="/franchise" element={<Franchise />} />
                <Route path="/advertising" element={<Advertising />} />
                <Route path="/investor-relations" element={<InvestorRelations />} />

                {/* Company */}
                <Route path="/about" element={<About />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/esg" element={<Esg />} />
                <Route path="/environment" element={<Environment />} />
                <Route path="/news" element={<News />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />

                {/* Legal + utility */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/sitemap" element={<Sitemap />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
