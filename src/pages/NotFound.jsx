import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Seo from '@/components/ui/Seo'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { Glow } from '@/components/ui/Section'

const SUGGESTIONS = [
  { label: 'Rent a scooter', to: '/scooter-rental', icon: 'Bike' },
  { label: 'Become a rider', to: '/deliver-and-earn', icon: 'IndianRupee' },
  { label: 'Fleet for business', to: '/ev-for-delivery', icon: 'Truck' },
  { label: 'Contact us', to: '/contact', icon: 'Mail' },
]

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you were looking for does not exist." />

      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink-900 pb-20 pt-40">
        <div className="absolute inset-0 -z-10 bg-grid bg-grid-dark mask-b" />
        <div className="noise absolute inset-0 -z-10" />
        <Glow className="-left-24 top-1/4 h-96 w-96" />
        <Glow className="-right-24 bottom-1/4 h-80 w-80" color="volt" />

        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <motion.p
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[7rem] font-extrabold leading-none text-transparent sm:text-[11rem]"
              style={{
                WebkitTextStroke: '2px rgba(255,255,255,.18)',
              }}
            >
              404
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="-mt-6"
            >
              <span className="eyebrow-dark">
                <Icon name="Zap" className="h-3.5 w-3.5" />
                Out of charge
              </span>

              <h1 className="mt-6 text-3xl leading-tight text-white sm:text-4xl">
                This route does not exist
              </h1>
              <p className="mx-auto mt-5 max-w-md text-[16.5px] leading-relaxed text-white/55">
                The page you were looking for has moved, been renamed, or never made it out of the
                hub. Here is where most people were heading.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Button to="/" variant="volt" size="lg" icon="ArrowLeft" iconPosition="left">
                  Back to home
                </Button>
                <Button to="/sitemap" variant="outline-light" size="lg">
                  Browse the sitemap
                </Button>
              </div>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-14 grid gap-3 sm:grid-cols-2"
            >
              {SUGGESTIONS.map((s) => (
                <li key={s.to}>
                  <Link
                    to={s.to}
                    className="card-dark card-dark-hover group flex items-center gap-4 p-5 text-left"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-brand-400 transition-colors group-hover:border-volt-400/40 group-hover:text-volt-400">
                      <Icon name={s.icon} className="h-[18px] w-[18px]" />
                    </span>
                    <span className="flex-1 font-medium text-white">{s.label}</span>
                    <Icon
                      name="ArrowUpRight"
                      className="h-4 w-4 text-white/55 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>
    </>
  )
}
