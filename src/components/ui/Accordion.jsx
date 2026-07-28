import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import cn from '@/lib/cn'
import Icon from './Icon'

/**
 * Single-open accordion. Used for FAQs and long-form legal sections.
 */
export default function Accordion({ items, dark = false, defaultOpen = -1, className }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={cn('divide-y', dark ? 'divide-white/10' : 'divide-neutral-200', className)}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className={cn(
                  'group flex w-full items-start gap-5 py-6 text-left transition-colors',
                  dark ? 'text-white hover:text-volt-400' : 'text-ink-900 hover:text-brand-700',
                )}
              >
                <span className="flex-1 font-display text-lg font-semibold leading-snug sm:text-xl">
                  {item.q}
                </span>
                <span
                  className={cn(
                    'mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300',
                    isOpen
                      ? 'rotate-45 border-brand-500 bg-brand-500 text-white'
                      : dark
                        ? 'border-white/20 text-white/70 group-hover:border-volt-400'
                        : 'border-neutral-300 text-neutral-500 group-hover:border-brand-400',
                  )}
                >
                  <Icon name="Plus" className="h-4 w-4" />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      'max-w-3xl pb-7 pr-14 text-[15px] leading-relaxed',
                      dark ? 'text-white/60' : 'text-neutral-600',
                    )}
                  >
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
