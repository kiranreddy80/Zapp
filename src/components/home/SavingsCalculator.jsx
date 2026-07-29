import { useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import Section, { SectionHeading } from '@/components/ui/Section'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import WhyChooseOrbit from './WhyChooseOrbit'
import cn from '@/lib/cn'

/* Assumptions, stated openly beneath the widget so the number is defensible. */
const RATES = {
  petrol: { fuelPerKm: 2.7, servicePerMonth: 1400, insurancePerMonth: 560, emiPerMonth: 3100 },
  sgd: { energyPerKm: 0.16, rentPerMonth: 3299 },
  co2PerKm: 0.0489, // kg CO2e per km, petrol 110cc two-wheeler
}

const inr = (n) => `₹${Math.round(n).toLocaleString('en-IN')}`

/* ------------------------------------------------------------------ */
/* Controls                                                            */
/* ------------------------------------------------------------------ */

function Slider({ label, value, min, max, step, unit, onChange }) {
  const pct = ((value - min) / (max - min)) * 100

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-[12px] font-semibold uppercase tracking-[.14em] text-neutral-600">
          {label}
        </label>
        <span className="font-display text-xl font-bold text-ink-900">
          {value}
          <span className="ml-1 text-sm font-medium text-neutral-600">{unit}</span>
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="mt-3.5 h-1.5 w-full cursor-pointer appearance-none rounded-full outline-none
                   [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4
                   [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-brand-500
                   [&::-webkit-slider-thumb]:shadow-glow [&::-webkit-slider-thumb]:transition-transform
                   hover:[&::-webkit-slider-thumb]:scale-110
                   [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full
                   [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-brand-500"
        style={{
          background: `linear-gradient(to right, #12B76A 0%, #039855 ${pct}%, rgba(6,18,12,.10) ${pct}%, rgba(6,18,12,.10) 100%)`,
        }}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Receipt                                                             */
/* ------------------------------------------------------------------ */

function Receipt({ variant, title, subtitle, rows, total, note, km }) {
  const isSGD = variant === 'sgd'

  return (
    // Vertical movement is owned by the parent's scroll parallax — this only
    // handles the fade and the paper tilt, so the two do not fight.
    <motion.div
      initial={{ opacity: 0, rotate: isSGD ? 1.2 : -1.2 }}
      whileInView={{ opacity: 1, rotate: isSGD ? 1.2 : -1.2 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: isSGD ? 0.12 : 0, ease: [0.22, 1, 0.36, 1] }}
      /* The tear mask clips box-shadow, so the lift has to come from a
         drop-shadow filter on the wrapper — it follows the masked silhouette. */
      className="relative [filter:drop-shadow(0_18px_30px_rgba(6,18,12,.16))]"
    >
      <div
        className={cn(
          'receipt-tear relative overflow-hidden pb-8 font-mono',
          isSGD ? 'bg-white' : 'bg-[#F7F6F2]',
        )}
      >
        {/* paper grain */}
        <div className="noise pointer-events-none absolute inset-0 opacity-40" />

        <div className="relative px-7 pt-8 sm:px-9">
          {/* header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p
                className={cn(
                  'font-display text-[11px] font-bold uppercase tracking-[.22em]',
                  isSGD ? 'text-brand-700' : 'text-neutral-600',
                )}
              >
                {subtitle}
              </p>
              <h3 className="mt-1.5 font-display text-xl font-extrabold tracking-tight text-ink-900">
                {title}
              </h3>
            </div>

            <span
              className={cn(
                'grid h-11 w-11 shrink-0 place-items-center rounded-full',
                isSGD ? 'bg-brand-500 text-white' : 'bg-neutral-200 text-neutral-600',
              )}
            >
              <Icon name={isSGD ? 'Zap' : 'Fuel'} className="h-5 w-5" />
            </span>
          </div>

          <p className="mt-5 text-[11px] uppercase tracking-wider text-neutral-600">
            {km.toLocaleString('en-IN')} km · monthly statement
          </p>

          <div className="my-5 border-t border-dashed border-neutral-300" />

          {/* line items */}
          <dl className="space-y-3.5 text-[13.5px]">
            {rows.map((row) => (
              <div key={row.label} className="flex items-baseline gap-3">
                <dt className="shrink-0 text-neutral-600">{row.label}</dt>
                <span className="min-w-0 flex-1 translate-y-[-3px] border-b border-dotted border-neutral-300" />
                <dd
                  className={cn(
                    'shrink-0 font-semibold tabular-nums',
                    row.free ? 'text-brand-700' : 'text-ink-900',
                  )}
                >
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="my-5 border-t border-dashed border-neutral-300" />

          {/* total */}
          <div className="flex items-end justify-between gap-4">
            <p className="font-display text-[11px] font-bold uppercase tracking-[.18em] text-neutral-600">
              Total / month
            </p>
            <motion.p
              key={total}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                'font-display text-3xl font-extrabold tabular-nums tracking-tight',
                isSGD ? 'text-brand-700' : 'text-neutral-600 line-through decoration-2',
              )}
            >
              {total}
            </motion.p>
          </div>

          <p className="mt-3 text-[11px] leading-relaxed text-neutral-600">{note}</p>

          {/* barcode */}
          <div
            aria-hidden="true"
            className={cn(
              'barcode mt-7 h-10 w-full',
              isSGD ? 'text-brand-700/70' : 'text-neutral-600',
            )}
          />
          <p className="mt-2 text-center text-[10px] tracking-[.3em] text-neutral-600">
            {isSGD ? 'SGD-ELECTRIC-IN' : 'PETROL-110CC-IN'}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export default function SavingsCalculator() {
  const [kmPerDay, setKmPerDay] = useState(95)
  const [daysPerMonth, setDaysPerMonth] = useState(26)
  const reduced = useReducedMotion()

  /* The two statements drift past each other as the section scrolls — petrol
     rising, SGD falling — with the savings seal held between them. */
  const billsRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: billsRef,
    offset: ['start end', 'end start'],
  })
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 28, restDelta: 0.001 })
  const petrolY = useTransform(smooth, [0, 1], [70, -70])
  const sgdY = useTransform(smooth, [0, 1], [-70, 70])
  const sealRotate = useTransform(smooth, [0, 1], [-16, -2])
  const sealScale = useTransform(smooth, [0, 0.5, 1], [0.92, 1, 0.92])

  const r = useMemo(() => {
    const km = kmPerDay * daysPerMonth
    const p = RATES.petrol
    const z = RATES.sgd

    const petrolRows = [
      { label: 'Fuel', value: inr(km * p.fuelPerKm) },
      { label: 'Servicing', value: inr(p.servicePerMonth) },
      { label: 'Insurance', value: inr(p.insurancePerMonth) },
      { label: 'Vehicle EMI', value: inr(p.emiPerMonth) },
    ]
    const petrolTotal = km * p.fuelPerKm + p.servicePerMonth + p.insurancePerMonth + p.emiPerMonth

    const sgdRows = [
      { label: 'Charging', value: inr(km * z.energyPerKm) },
      { label: 'Servicing', value: 'Included', free: true },
      { label: 'Insurance', value: 'Included', free: true },
      { label: 'Monthly rental', value: inr(z.rentPerMonth) },
    ]
    const sgdTotal = km * z.energyPerKm + z.rentPerMonth

    return {
      km,
      petrolRows,
      sgdRows,
      petrolTotal,
      sgdTotal,
      saving: petrolTotal - sgdTotal,
      yearly: (petrolTotal - sgdTotal) * 12,
      co2: km * RATES.co2PerKm * 12,
    }
  }, [kmPerDay, daysPerMonth])

  return (
    <Section id="savings" tone="paper" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid bg-grid-light opacity-60 mask-b"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-brand-300/25 blur-[120px]"
      />

      <SectionHeading
        eyebrow="Why choose SGD"
        title="Everything included. Nothing hidden."
        lead="One rental covers the vehicle, the energy, the servicing and the insurance. Here is what that buys you — and below, exactly what it saves you."
      />

      {/* benefits as a hub-and-spoke network — see WhyChooseOrbit */}
      <WhyChooseOrbit />

      {/* ---- calculator ---- */}
      <Reveal className="mt-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <Icon name="IndianRupee" className="h-3.5 w-3.5" />
            Run the numbers
          </span>
          <h3 className="mt-5 text-2xl leading-tight sm:text-3xl">
            Two bills for the same month of riding
          </h3>
          <p className="mt-4 text-[16.5px] leading-relaxed text-neutral-600">
            Set the sliders to how you actually ride. Both statements recalculate live — one is what
            a petrol two-wheeler costs you, the other is what SGD costs.
          </p>
        </div>
      </Reveal>

      {/* ---- control strip ---- */}
      <Reveal delay={0.1}>
        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-neutral-200 bg-white p-7 shadow-card sm:p-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <Slider
              label="Distance per day"
              value={kmPerDay}
              min={20}
              max={180}
              step={5}
              unit="km"
              onChange={setKmPerDay}
            />
            <Slider
              label="Working days"
              value={daysPerMonth}
              min={10}
              max={30}
              step={1}
              unit="days"
              onChange={setDaysPerMonth}
            />
          </div>

          <p className="mt-7 flex flex-wrap items-center justify-center gap-2 border-t border-neutral-100 pt-6 text-sm text-neutral-600">
            <Icon name="Route" className="h-4 w-4 text-brand-500" />
            You ride
            <span className="font-display font-bold text-ink-900">
              {r.km.toLocaleString('en-IN')} km
            </span>
            a month — about
            <span className="font-display font-bold text-ink-900">
              {Math.round(r.co2).toLocaleString('en-IN')} kg
            </span>
            of CO₂ avoided a year.
          </p>
        </div>
      </Reveal>

      {/* ---- counter-scrolling statements ---- */}
      <div ref={billsRef} className="mx-auto mt-16 max-w-5xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          {/* petrol — drifts upward */}
          <motion.div style={reduced ? undefined : { y: petrolY }}>
            <Receipt
              variant="petrol"
              subtitle="What you pay now"
              title="Petrol 110cc"
              km={r.km}
              rows={r.petrolRows}
              total={inr(r.petrolTotal)}
              note="Fuel at ₹2.70/km (38 km/l), plus servicing, insurance and an EMI on a used vehicle."
            />
          </motion.div>

          {/* seal — held between the two, never overlapping a figure */}
          <motion.div
            style={reduced ? undefined : { rotate: sealRotate, scale: sealScale }}
            className="flex justify-center lg:w-52"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.3, type: 'spring', stiffness: 120, damping: 13 }}
              className="grid h-44 w-44 shrink-0 place-items-center rounded-full border-[3px] border-dashed border-brand-400 bg-ink-950 text-center shadow-lift sm:h-48 sm:w-48"
            >
              <div>
                <p className="font-display text-[10px] font-bold uppercase tracking-[.24em] text-volt-400">
                  You save
                </p>
                <motion.p
                  key={r.saving}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-1.5 font-display text-[2.1rem] font-extrabold leading-none tracking-tight text-white sm:text-[2.4rem]"
                >
                  {inr(r.saving)}
                </motion.p>
                <p className="mt-1.5 text-[11px] uppercase tracking-[.14em] text-white/65">
                  every month
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* sgd — drifts downward */}
          <motion.div style={reduced ? undefined : { y: sgdY }}>
            <Receipt
              variant="sgd"
              subtitle="What you would pay"
              title="SGD Electric"
              km={r.km}
              rows={r.sgdRows}
              total={inr(r.sgdTotal)}
              note="Charging at ₹0.16/km. Servicing, insurance and unlimited battery swaps are in the rental."
            />
          </motion.div>
        </div>
      </div>

      <Reveal delay={0.2}>
        <div className="mt-12 text-center">
          <p className="text-lg text-neutral-600">
            That is{' '}
            <span className="font-display font-bold text-brand-700">{inr(r.yearly)}</span> back in
            your pocket over a year.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button to="/scooter-rental" size="lg">
              Start renting
            </Button>
            <Button to="/rent-to-own" variant="outline" size="lg" icon="KeyRound" iconPosition="left">
              Rent to own
            </Button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.25}>
        <p className="mx-auto mt-12 max-w-3xl text-center text-xs leading-relaxed text-neutral-600">
          Petrol baseline assumes ₹2.70/km fuel at 38 km/l, ₹1,400 monthly servicing, ₹560 insurance
          and a ₹3,100 EMI. SGD assumes ₹0.16/km energy and a ₹3,299 monthly rental with servicing
          and insurance included. Emissions factor 0.0489 kg CO₂e/km. Your actual figures will vary
          by city, model and riding style.
        </p>
      </Reveal>
    </Section>
  )
}
