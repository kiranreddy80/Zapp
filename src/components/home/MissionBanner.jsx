import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { BANNER_SLIDES } from '@/data/media'
import { useHeroTheme } from '@/context/HeroTheme'
import Img from '@/components/ui/Img'
import Button from '@/components/ui/Button'
import SplitText from '@/components/ui/SplitText'
import cn from '@/lib/cn'

const EASE = [0.22, 1, 0.36, 1]
const SLIDE_MS = 5000

/* The hero below this sits on #F6F8F7 — the notch is filled with the same
   colour so the angled edge reads as the page cutting into the photo. */
const NEXT_BG = '#F1FAF4'

/**
 * Full-bleed mission banner that opens the page.
 *
 * The background is a slow crossfading slideshow of the fleet, each slide
 * drifting slightly so the section never sits still. Being the topmost section
 * it also owns the navbar theme: the imagery is dark, so the bar keeps light
 * text until the reader scrolls.
 *
 * Under reduced-motion the slideshow stops on the first frame — an
 * auto-advancing background is exactly what that preference is asking us not
 * to do.
 */
export default function MissionBanner() {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const ref = useRef(null)

  useHeroTheme('dark')

  useEffect(() => {
    if (reduced) return
    const t = setInterval(() => setIndex((i) => (i + 1) % BANNER_SLIDES.length), SLIDE_MS)
    return () => clearInterval(t)
  }, [reduced])

  /*
   * Scroll-linked fold.
   *
   * The panel is hinged along its top edge and tips away from the reader as the
   * section leaves the viewport, then comes back as they scroll up. Because it
   * is driven by scroll position rather than a one-shot animation, it is
   * reversible and lands exactly where the reader stops.
   *
   * A spring smooths the raw scroll value so trackpad jitter does not make the
   * panel twitch.
   */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  const rotateX = useTransform(p, [0, 1], [0, -30])
  const scale = useTransform(p, [0, 1], [1, 0.9])
  const opacity = useTransform(p, [0, 0.75, 1], [1, 0.8, 0.3])
  const radius = useTransform(p, [0, 1], [0, 40])

  const slide = BANNER_SLIDES[index]

  const foldStyle = reduced
    ? undefined
    : {
        rotateX,
        scale,
        opacity,
        borderRadius: radius,
        transformPerspective: 1600,
        transformOrigin: 'top center',
      }

  return (
    // The outer box keeps its size while the panel inside scales down, so it
    // carries the page colour — otherwise the fold reveals bare white beneath.
    <section id="top" ref={ref} className="relative bg-[#F1FAF4]">
      <motion.div
        style={foldStyle}
        className="relative isolate flex min-h-[72vh] items-center justify-center overflow-hidden bg-ink-950 pb-32 pt-36 will-change-transform sm:min-h-[78vh] sm:pb-36"
      >
      {/* ---- slideshow ---- */}
      <div className="absolute inset-0 -z-20">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.src}
            initial={{ opacity: 0, scale: reduced ? 1 : 1.08 }}
            animate={{ opacity: 1, scale: reduced ? 1 : 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.4, ease: 'easeInOut' },
              // Slower than the interval, so the drift never visibly stops.
              scale: { duration: SLIDE_MS / 1000 + 1.6, ease: 'linear' },
            }}
            className="absolute inset-0"
          >
            <Img
              src={slide.src}
              fallbackSrc={slide.fallback}
              alt={slide.alt}
              wrapperClassName="absolute inset-0 bg-ink-950"
              // Dark placeholder: the default light shimmer flashes grey
              // through the scrim on every crossfade.
              skeletonClassName="bg-ink-950"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/*
        No colour wash. These are brand renders that are already the right
        green — multiplying more green over them only turns the vehicles olive.
        Legibility comes purely from the vertical scrim: strong at the top
        (behind the navbar and headline) and at the bottom (behind the angled
        edge), lighter across the middle so the vehicles keep their colour.
      */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/80 via-ink-950/40 to-ink-950/75" />
      <div className="noise absolute inset-0 -z-10" />

      {/* Preload the rest so a crossfade never lands on a blank frame. */}
      <div aria-hidden="true" className="pointer-events-none absolute h-0 w-0 overflow-hidden">
        {BANNER_SLIDES.slice(1).map((s) => (
          <img key={s.src} src={s.src} alt="" loading="lazy" />
        ))}
      </div>

      {/* ---- content ---- */}
      <div className="container relative text-center">
        <h2 className="mx-auto max-w-3xl font-display text-[2.4rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
          <SplitText text="Join us in our mission" />
          {/* Set apart from the Sora line above it: the mono caps face, wide
              tracking and lower case give it a different voice rather than
              just a different colour. Each letter drops in on its own, and a
              lime sheen travels across afterwards. */}
          <span className="mt-3 block font-caps text-[.62em] font-bold italic tracking-[.14em] text-volt-400 sm:mt-4">
            {'zero emission'.split('').map((ch, i) =>
              ch === ' ' ? (
                <span key={i} className="inline-block w-[.4em]" />
              ) : (
                <motion.span
                  key={i}
                  aria-hidden="true"
                  className="zero-sheen inline-block"
                  initial={reduced ? false : { opacity: 0, y: '0.5em', rotateX: -70 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.5 + i * 0.045,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ animationDelay: `${1.1 + i * 0.045}s` }}
                >
                  {ch}
                </motion.span>
              ),
            )}
            {/* the split above is decorative markup; this keeps it one readable
                phrase for a screen reader */}
            <span className="sr-only">zero emission</span>
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
          <Button to="/contact" size="lg" chip beam>
            Contact us
          </Button>
          <Button to="/about" variant="glass" size="lg" chip>
            Our story
          </Button>
        </motion.div>

        {/* ---- slide indicators ---- */}
        {!reduced && (
          <div className="mt-12 flex justify-center gap-2.5">
            {BANNER_SLIDES.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-500',
                  i === index ? 'w-9 bg-volt-400' : 'w-1.5 bg-white/40 hover:bg-white/70',
                )}
              />
            ))}
          </div>
        )}
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
      </motion.div>
    </section>
  )
}
