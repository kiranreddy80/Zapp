import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
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
const Contact = lazy(() => import('@/pages/Contact'))

const PrivacyPolicy = lazy(() => import('@/pages/legal/PrivacyPolicy'))
const TermsOfService = lazy(() => import('@/pages/legal/TermsOfService'))
const CookiePolicy = lazy(() => import('@/pages/legal/CookiePolicy'))
const Sitemap = lazy(() => import('@/pages/Sitemap'))
const NotFound = lazy(() => import('@/pages/NotFound'))

/** Route-level loading state — a brand-tinted shell, not a bare spinner. */
function RouteFallback() {
  return (
    <div className="grid min-h-[70vh] place-items-center bg-ink-900">
      <div className="flex flex-col items-center gap-5">
        <span className="relative grid h-14 w-14 place-items-center">
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-500/40" />
          <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand-500">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="white" aria-hidden="true">
              <path d="M13.5 2 4 13.2h6.1L9.6 22 20 10.6h-6.4L13.5 2Z" />
            </svg>
          </span>
        </span>
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
