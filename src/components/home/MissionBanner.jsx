import { motion, useReducedMotion } from 'framer-motion'
import { IMG } from '@/data/media'
import { useHeroTheme } from '@/context/HeroTheme'
import Img from '@/components/ui/Img'
import Button from '@/components/ui/Button'
import SplitText from '@/components/ui/SplitText'

const EASE = [0.22, 1, 0.36, 1]

/* The hero below this sits on #F6F8F7 — the notch is filled with the same
   colour so the angled edge reads as the page cutting into the photo. */
const NEXT_BG = '#F6F8F7'

/**
 * Full-bleed mission banner that opens the page.
 *
 * Being the topmost section it owns the navbar theme: the photo is dark, so
 * the bar keeps light text until the reader scrolls.
 */
export default function MissionBanner() {
  const reduced = useReducedMotion()

  useHeroTheme('dark')

  return (
    <section className="relative isolate flex min-h-[72vh] items-center justify-center overflow-hidden bg-ink-950 pb-32 pt-36 sm:min-h-[78vh] sm:pb-36">
      {/* ---- backdrop ---- */}
      <Img
        src={IMG.garageBikes}
        alt=""
        wrapperClassName="absolute inset-0 -z-20"
        className={reduced ? '' : 'animate-ken-burns'}
        priority
      />

      {/* green-tinted scrims, so the photo reads as brand rather than stock */}
      <div className="absolute inset-0 -z-10 bg-brand-950/70 mix-blend-multiply" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/85 via-ink-950/45 to-ink-950/80" />
      <div className="noise absolute inset-0 -z-10" />

      {/* ---- content ---- */}
      <div className="container relative text-center">
        <h2 className="mx-auto max-w-3xl font-display text-[2.4rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
          <SplitText text="Join us in our mission" />
          <span className="mt-1 block text-volt-400">
            <SplitText text="zero emission" delay={0.35} />
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
          className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-white/75"
        >
          Twenty-six thousand electric vehicles, 24,000 riders and one target — last-mile delivery
          across India that burns nothing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          <Button to="/contact" size="lg">
            Contact us
          </Button>
          <Button to="/about" variant="glass" size="lg" icon="ArrowRight">
            Our story
          </Button>
        </motion.div>
      </div>

      {/* ---- angled bottom edge with a brand-green rule ---- */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-16 w-full sm:h-20"
      >
        {/* the page colour cutting up into the photo */}
        <path d="M0,26 L720,84 L1440,26 L1440,100 L0,100 Z" fill={NEXT_BG} />
        <path
          d="M0,26 L720,84 L1440,26"
          stroke="#12B76A"
          strokeWidth="5"
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </section>
  )
}
