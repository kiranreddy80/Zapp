import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import Icon from '@/components/ui/Icon'
import { HeroThemeProvider } from '@/context/HeroTheme'

/** Thin brand-coloured reading-progress bar pinned under the navbar. */
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[55] h-[3px] origin-left bg-gradient-to-r from-brand-500 via-volt-500 to-brand-400"
    />
  )
}

/** Jump-to-top button that appears once the hero is out of view. */
function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-ink-900 text-white shadow-lift transition-colors hover:bg-brand-600"
        >
          <Icon name="ArrowDown" className="h-5 w-5 rotate-180" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

/**
 * Reset scroll on route change — SPAs do not do this for you. When the link
 * carries a hash (e.g. /about#life) we scroll to that section instead, after a
 * frame so the target page has mounted.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      // Two frames: one for the route swap, one for layout.
      const raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }),
      )
      return () => cancelAnimationFrame(raf)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export default function Layout() {
  const { pathname } = useLocation()

  return (
    <HeroThemeProvider>
      <div className="flex min-h-screen flex-col">
        <ScrollToTop />
        <ScrollProgress />
        <Navbar />

        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </HeroThemeProvider>
  )
}
