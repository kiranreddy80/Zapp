import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import cn from '@/lib/cn'
import { NAV, CONTACT } from '@/data/site'
import { useHeroThemeValue } from '@/context/HeroTheme'
import Logo from '@/components/ui/Logo'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'

/* ------------------------------------------------------------------ */
/* Mega-menu panel                                                     */
/* ------------------------------------------------------------------ */

function MegaPanel({ item, onMouseEnter, onMouseLeave }) {
  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      /*
        The x offset is part of the animated transform, not a Tailwind class.
        Framer writes `transform` inline to animate `y`, which silently
        overrides `-translate-x-1/2` and leaves the panel anchored at the
        viewport centre instead of centred on it — overflowing the right edge.
      */
      initial={{ opacity: 0, y: 10, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      exit={{ opacity: 0, y: 6, x: '-50%' }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-1/2 top-full hidden w-[min(64rem,calc(100vw-3rem))] pt-3 lg:block"
    >
      <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-lift">
        <div
          className={cn(
            'grid gap-8 p-8',
            item.featured ? 'lg:grid-cols-[1fr_1fr_.85fr]' : 'lg:grid-cols-2',
          )}
        >
          {item.columns.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.16em] text-neutral-500">
                {col.title}
              </p>
              <ul className="space-y-1">
                {col.items.map((sub) => (
                  <li key={sub.to}>
                    <Link
                      to={sub.to}
                      className="group flex gap-3.5 rounded-2xl p-3 transition-colors hover:bg-brand-50"
                    >
                      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-all duration-300 group-hover:bg-brand-500 group-hover:text-white">
                        <Icon name={sub.icon} className="h-[18px] w-[18px]" />
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-center gap-1 font-semibold text-ink-900">
                          {sub.label}
                          <Icon
                            name="ArrowUpRight"
                            className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                          />
                        </span>
                        <span className="mt-0.5 block text-[13px] leading-snug text-neutral-500">
                          {sub.desc}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {item.featured && (
            <Link
              to={item.featured.to}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-ink-900 p-6 text-white"
            >
              <div className="absolute inset-0 animate-gradient-pan bg-[linear-gradient(135deg,#05603A,#039855,#032D1D)] opacity-90" />
              <div className="noise absolute inset-0" />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-volt-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-900">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink-900 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink-900" />
                  </span>
                  {item.featured.badge}
                </span>
                <p className="mt-4 font-display text-xl font-bold">{item.featured.title}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-white/70">
                  {item.featured.desc}
                </p>
              </div>
              <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-volt-400">
                See the prize ladder
                <Icon
                  name="ArrowRight"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-100 bg-neutral-50 px-8 py-4">
          <p className="text-[13px] text-neutral-500">
            Not sure which plan fits? Our team will size it with you.
          </p>
          <a
            href={CONTACT.phoneHref}
            className="link-underline text-[13px] font-semibold text-brand-700"
          >
            <Icon name="Phone" className="h-3.5 w-3.5" />
            {CONTACT.phone}
          </a>
        </div>
      </div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* Mobile drawer                                                       */
/* ------------------------------------------------------------------ */

function MobileMenu({ open, onClose }) {
  const [section, setSection] = useState(null)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] lg:hidden"
        >
          <div className="absolute inset-0 bg-ink-900" />
          <div className="noise absolute inset-0" />

          <div className="relative flex h-full flex-col">
            <div className="flex items-center justify-between px-5 py-5">
              <Logo light />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
              >
                <Icon name="X" className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 pb-8">
              <ul className="divide-y divide-white/10">
                {NAV.map((item) => (
                  <li key={item.label}>
                    {item.to ? (
                      <Link
                        to={item.to}
                        onClick={onClose}
                        className="flex items-center justify-between py-5 font-display text-2xl font-semibold text-white"
                      >
                        {item.label}
                        <Icon name="ArrowUpRight" className="h-5 w-5 text-white/60" />
                      </Link>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => setSection(section === item.label ? null : item.label)}
                          aria-expanded={section === item.label}
                          className="flex w-full items-center justify-between py-5 font-display text-2xl font-semibold text-white"
                        >
                          {item.label}
                          <Icon
                            name="ChevronDown"
                            className={cn(
                              'h-5 w-5 text-white/60 transition-transform duration-300',
                              section === item.label && 'rotate-180 text-volt-400',
                            )}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {section === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-5 pb-6">
                                {item.columns.map((col) => (
                                  <div key={col.title}>
                                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.18em] text-white/60">
                                      {col.title}
                                    </p>
                                    <ul className="space-y-1">
                                      {col.items.map((sub) => (
                                        <li key={sub.to}>
                                          <Link
                                            to={sub.to}
                                            onClick={onClose}
                                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                                          >
                                            <Icon
                                              name={sub.icon}
                                              className="h-4 w-4 text-brand-400"
                                            />
                                            <span className="text-[15px] font-medium">
                                              {sub.label}
                                            </span>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-3">
                <Button to="/deliver-and-earn" variant="volt" size="lg" full onClick={onClose}>
                  Become a rider
                </Button>
                <Button
                  href={CONTACT.phoneHref}
                  variant="outline-light"
                  size="lg"
                  full
                  icon="Phone"
                  iconPosition="left"
                >
                  {CONTACT.phone}
                </Button>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ------------------------------------------------------------------ */
/* Navbar                                                              */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef(null)
  const { pathname } = useLocation()
  const heroTheme = useHeroThemeValue()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close everything on navigation.
  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && (setOpenMenu(null), setMobileOpen(false))
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Small delay on close so the pointer can cross the gap into the panel.
  const scheduleClose = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140)
  }
  const cancelClose = () => clearTimeout(closeTimer.current)

  // `solid` drives the bar's own background; `darkText` drives its contents,
  // which also need to go dark when floating over a light hero.
  const solid = scrolled || openMenu !== null
  const darkText = solid || heroTheme === 'light'

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          solid
            ? 'border-b border-neutral-200/80 bg-white/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
        onMouseLeave={scheduleClose}
      >
        <div className="container">
          <div className="flex h-[84px] items-center justify-between gap-6">
            <Logo light={!darkText} />

            {/* desktop nav */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {NAV.map((item) => {
                  const isOpen = openMenu === item.label

                  if (item.to) {
                    return (
                      <li key={item.label}>
                        <NavLink
                          to={item.to}
                          onMouseEnter={() => {
                            cancelClose()
                            setOpenMenu(null)
                          }}
                          className={({ isActive }) =>
                            cn(
                              'rounded-full px-4 py-2.5 text-[15px] font-medium transition-colors',
                              darkText
                                ? isActive
                                  ? 'text-brand-700'
                                  : 'text-ink-900 hover:text-brand-700'
                                : isActive
                                  ? 'text-volt-400'
                                  : 'text-white/85 hover:text-white',
                            )
                          }
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    )
                  }

                  return (
                    <li key={item.label} className="static">
                      <button
                        type="button"
                        onMouseEnter={() => {
                          cancelClose()
                          setOpenMenu(item.label)
                        }}
                        onClick={() => setOpenMenu(isOpen ? null : item.label)}
                        aria-expanded={isOpen}
                        className={cn(
                          'flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[15px] font-medium transition-colors',
                          darkText
                            ? isOpen
                              ? 'text-brand-700'
                              : 'text-ink-900 hover:text-brand-700'
                            : isOpen
                              ? 'text-volt-400'
                              : 'text-white/85 hover:text-white',
                        )}
                      >
                        {item.label}
                        <Icon
                          name="ChevronDown"
                          className={cn(
                            'h-3.5 w-3.5 transition-transform duration-300',
                            isOpen && 'rotate-180',
                          )}
                        />
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* actions */}
            <div className="flex items-center gap-2.5">
              <a
                href={CONTACT.phoneHref}
                className={cn(
                  'hidden items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors xl:flex',
                  darkText ? 'text-ink-900 hover:text-brand-700' : 'text-white/85 hover:text-white',
                )}
              >
                <Icon name="Phone" className="h-4 w-4" />
                {CONTACT.phone}
              </a>

              <Button
                to="/deliver-and-earn"
                size="sm"
                variant={darkText ? 'primary' : 'volt'}
                className="hidden sm:inline-flex"
              >
                Become a rider
              </Button>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className={cn(
                  'grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden',
                  darkText
                    ? 'border-neutral-300 text-ink-900 hover:bg-neutral-100'
                    : 'border-white/25 text-white hover:bg-white/10',
                )}
              >
                <Icon name="Menu" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* mega menus */}
        <AnimatePresence>
          {NAV.map((item) =>
            openMenu === item.label && item.columns ? (
              <MegaPanel
                key={item.label}
                item={item}
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
              />
            ) : null,
          )}
        </AnimatePresence>
      </header>

      {/* backdrop behind an open mega menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 hidden bg-ink-900/25 backdrop-blur-[2px] lg:block"
            onMouseEnter={scheduleClose}
          />
        )}
      </AnimatePresence>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
