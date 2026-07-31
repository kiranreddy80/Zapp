import { useEffect, useState } from 'react'
import cn from '@/lib/cn'

/**
 * Sections in document order. Ids must match the rendered sections — a missing
 * one is skipped rather than throwing, so reordering the page cannot break the
 * rail.
 */
const SECTIONS = [
  { id: 'top', label: 'Our mission' },
  { id: 'partners', label: 'Partners' },
  { id: 'hero', label: 'Rent an EV' },
  { id: 'mission', label: 'Mission & vision' },
  { id: 'ceo', label: 'From our CEO' },
  // { id: 'journey', label: 'Our journey' },  // section commented out in Home.jsx
  { id: 'gallery', label: 'Gallery' },
  { id: 'savings', label: 'Why choose SGD' },
  { id: 'get-started', label: 'Get started' },
  { id: 'impact', label: 'Impact' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'investors', label: 'Investors' },
  { id: 'faq', label: 'FAQ' },
  { id: 'get-in-touch', label: 'Contact' },
]

/**
 * Fixed rail marking progress through the page, with click-to-jump.
 *
 * Desktop only: on a phone it would sit over content and duplicate what
 * scrolling already makes obvious. Each dot is a real button with a label, so
 * it is reachable by keyboard and announced properly rather than being a
 * decorative row of divs.
 */
export default function SectionNav() {
  const [active, setActive] = useState(SECTIONS[0].id)
  const [present, setPresent] = useState([])

  useEffect(() => {
    const found = SECTIONS.filter((s) => document.getElementById(s.id))
    setPresent(found)

    const observer = new IntersectionObserver(
      (entries) => {
        // The section nearest the top of the viewport wins, so the rail does
        // not flicker when two sections overlap the middle of the screen.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    found.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  if (present.length === 0) return null

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="flex flex-col items-end gap-3">
        {present.map((s) => {
          const isActive = active === s.id
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() =>
                  document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
                aria-current={isActive ? 'true' : undefined}
                className="group flex items-center gap-2.5 outline-none"
              >
                <span
                  className={cn(
                    'whitespace-nowrap rounded-full bg-ink-900/90 px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 backdrop-blur-sm transition-all duration-300',
                    'group-hover:opacity-100 group-focus-visible:opacity-100',
                  )}
                >
                  {s.label}
                </span>

                <span
                  className={cn(
                    'block rounded-full transition-all duration-400',
                    isActive
                      ? 'h-6 w-1.5 bg-brand-600'
                      : 'h-1.5 w-1.5 bg-neutral-400/60 group-hover:bg-brand-500',
                  )}
                />
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
