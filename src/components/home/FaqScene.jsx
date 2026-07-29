import { motion, useReducedMotion } from 'framer-motion'

/*
 * Palette kept local to the drawing. These are illustration colours (skin,
 * denim, laptop shell) that don't belong in the Tailwind token set, so the
 * brand values are repeated here rather than pulled through a class.
 */
const GREEN = '#12B76A'
const GREEN_DEEP = '#039855'
const DENIM = '#1E2A32'
const SHOE = '#0F1418'
const SKIN = '#EFC3A0'
const SKIN_DEEP = '#D9A47C'
const HAIR = '#22272E'
const CITY = '#DCEBE1'
const DEVICE = '#E9F0EB'
const DEVICE_EDGE = '#A9BEB1'

const EASE = [0.22, 1, 0.36, 1]

/*
 * Positioning always lives on a plain <g transform>, never on a motion.g.
 * Framer computes its own `transform` attribute for animated SVG groups and
 * overwrites whatever static transform is on the same element — which silently
 * dumps the whole figure at the origin. Static outside, animated inside.
 */

/** Fades a group in on scroll. Adds no transform of its own beyond the lift. */
function Enter({ delay = 0, children }) {
  const reduced = useReducedMotion()
  return (
    <motion.g
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.g>
  )
}

/** Endless gentle bob. Separate element from <Enter> so the two tweens don't collide. */
function Float({ distance = 9, duration = 5, children }) {
  const reduced = useReducedMotion()
  return (
    <motion.g
      animate={reduced ? undefined : { y: [0, -distance, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.g>
  )
}

/** A seated figure, side view, facing right. Origin sits at the hip. */
function Sitter({ x, y, scale = 1, flip = false, hair = 'bun', holds = 'laptop', delay = 0 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale})`}>
      <Enter delay={delay}>
        {/* far leg, knocked back so the near leg reads in front */}
        <path
          d="M2 0 L30 2 L30 46"
          fill="none"
          stroke={DENIM}
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity=".55"
        />

        {/* near leg + shoe */}
        <path
          d="M0 0 L34 0 L34 44"
          fill="none"
          stroke={DENIM}
          strokeWidth="17"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M34 46 L46 47" fill="none" stroke={SHOE} strokeWidth="11" strokeLinecap="round" />

        {/* torso, with a shadow down the back edge to give the flat shape volume */}
        <path d="M1 -2 L5 -44" fill="none" stroke={GREEN} strokeWidth="27" strokeLinecap="round" />
        <path
          d="M-5 -8 L-2 -36"
          fill="none"
          stroke={GREEN_DEEP}
          strokeWidth="7"
          strokeLinecap="round"
          opacity=".45"
        />

        {/* head */}
        <circle cx="7" cy="-62" r="15" fill={SKIN} />
        <path d="M-8 -62 A15 15 0 0 1 22 -62 Z" fill={HAIR} />
        {hair === 'bun' && <circle cx="-9" cy="-67" r="8" fill={HAIR} />}
        {hair === 'long' && <path d="M-8 -63 q-7 15 -1 23 l11 0 q-5 -11 -2 -23 z" fill={HAIR} />}
        <circle cx="18" cy="-58" r="3.2" fill={SKIN_DEEP} />

        {holds === 'laptop' ? (
          <>
            <path d="M8 -6 L44 -6 L41 -13 L11 -13 Z" fill={DEVICE_EDGE} />
            <path
              d="M11 -14 L16 -40 L46 -40 L41 -14 Z"
              fill={DEVICE}
              stroke={DEVICE_EDGE}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path d="M5 -38 L20 -20" fill="none" stroke={GREEN} strokeWidth="13" strokeLinecap="round" />
            <path d="M20 -20 L28 -12" fill="none" stroke={SKIN} strokeWidth="10" strokeLinecap="round" />
          </>
        ) : (
          <>
            <path d="M5 -38 L22 -26" fill="none" stroke={GREEN} strokeWidth="13" strokeLinecap="round" />
            <path d="M22 -26 L33 -42" fill="none" stroke={SKIN} strokeWidth="10" strokeLinecap="round" />
            <rect x="28" y="-60" width="13" height="21" rx="3.5" fill={DENIM} transform="rotate(14 34 -50)" />
          </>
        )}
      </Enter>
    </g>
  )
}

/** Cross-legged figure seen from the front, sitting on the ground line. */
function GroundSitter({ x, y, scale = 1, delay = 0 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <Enter delay={delay}>
        {/* folded legs — kept shallow, a taller wedge just reads as a dark blob */}
        <path d="M-30 0 q5 -17 30 -17 q25 0 30 17 z" fill={DENIM} />
        <path d="M-17 -4 q17 -8 34 0" fill="none" stroke={SHOE} strokeWidth="6" strokeLinecap="round" />

        {/* torso, tall enough that the shoulders clear the laptop lid */}
        <path d="M0 -16 L0 -58" fill="none" stroke={GREEN} strokeWidth="32" strokeLinecap="round" />
        <path d="M0 -50 L0 -58" fill="none" stroke={GREEN_DEEP} strokeWidth="32" strokeLinecap="round" opacity=".25" />

        {/* head */}
        <circle cx="0" cy="-78" r="15" fill={SKIN} />
        <path d="M-15 -78 A15 15 0 0 1 15 -78 Z" fill={HAIR} />
        <path d="M-15 -78 q-3 11 0 16 l4 0 q-2 -9 -1 -16 z" fill={HAIR} />
        <path d="M15 -78 q3 11 0 16 l-4 0 q2 -9 1 -16 z" fill={HAIR} />

        {/* arms first, so the laptop closes over them */}
        <path d="M-15 -52 L-21 -26" fill="none" stroke={GREEN} strokeWidth="11" strokeLinecap="round" />
        <path d="M15 -52 L21 -26" fill="none" stroke={GREEN} strokeWidth="11" strokeLinecap="round" />

        {/* laptop on the lap */}
        <path d="M-21 -17 L21 -17 L18 -24 L-18 -24 Z" fill={DEVICE_EDGE} />
        <path
          d="M-18 -25 L-15 -46 L15 -46 L18 -25 Z"
          fill={DEVICE}
          stroke={DEVICE_EDGE}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </Enter>
    </g>
  )
}

/** Chat bubble with a question mark, drifting on a loop. */
function Bubble({ x, y, w = 96, h = 66, delay = 0, drift = 8, duration = 5, filled = false }) {
  const ink = filled ? '#FFFFFF' : GREEN
  const skin = filled ? GREEN : '#FFFFFF'

  return (
    <g transform={`translate(${x} ${y})`}>
      <Enter delay={delay}>
        <Float distance={drift} duration={duration}>
          <rect x="0" y="0" width={w} height={h} rx="16" fill={skin} stroke={GREEN} strokeWidth="3.5" />
          {/* tail, drawn over the bottom edge so the stroke doesn't cross the bubble */}
          <path d={`M${w * 0.2} ${h - 2} l0 20 l22 -20 z`} fill={skin} stroke={GREEN} strokeWidth="3.5" strokeLinejoin="round" />
          <rect x={w * 0.2 + 2} y={h - 5} width="20" height="6" fill={skin} />
          <text
            x={w / 2}
            y={h / 2}
            textAnchor="middle"
            dominantBaseline="central"
            className="font-display"
            fontSize={h * 0.58}
            fontWeight="800"
            fill={ink}
          >
            ?
          </text>
        </Float>
      </Enter>
    </g>
  )
}

/** Loose question mark floating in the air. */
function Query({ x, y, size, opacity = 1, delay = 0, duration = 6 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <Enter delay={delay}>
        <Float distance={10} duration={duration}>
          <text
            textAnchor="middle"
            className="font-display"
            fontSize={size}
            fontWeight="800"
            fill={GREEN}
            opacity={opacity}
          >
            ?
          </text>
        </Float>
      </Enter>
    </g>
  )
}

export default function FaqScene({ className = '' }) {
  return (
    <div className={className}>
      {/* The viewBox runs 80 units past the ground line: the Q's tail drops well
          below the baseline and gets sliced off at the frame edge otherwise. */}
      <svg
        viewBox="0 0 1000 500"
        className="h-auto w-full"
        role="img"
        aria-label="Illustration: riders and fleet managers sitting around a large FAQ, asking questions"
      >
        {/* ---- city behind ---- */}
        <g fill={CITY}>
          <rect x="16" y="300" width="66" height="120" rx="4" />
          <rect x="90" y="256" width="48" height="164" rx="4" />
          <rect x="146" y="316" width="80" height="104" rx="4" />
          <rect x="700" y="286" width="54" height="134" rx="4" />
          <rect x="762" y="330" width="74" height="90" rx="4" />
          <rect x="844" y="264" width="46" height="156" rx="4" />
          <rect x="898" y="308" width="66" height="112" rx="4" />
          {/* a domed roof, so the skyline reads as a city rather than a bar chart */}
          <path d="M596 420 L596 340 a32 32 0 0 1 64 0 L660 420 Z" />
          <rect x="624" y="300" width="8" height="28" rx="4" />
          <rect x="110" y="226" width="6" height="32" rx="3" />
        </g>

        {/* ---- ground ---- */}
        <line x1="0" y1="420" x2="1000" y2="420" stroke={CITY} strokeWidth="3" />

        {/* ---- the wordmark ----
             textLength locks the drawn width, so the figures stay parked on the
             letters even if Sora hasn't loaded and a fallback face is measured. */}
        <text
          x="500"
          y="410"
          textAnchor="middle"
          textLength="640"
          lengthAdjust="spacingAndGlyphs"
          className="font-display"
          fontSize="240"
          fontWeight="800"
          fill={GREEN}
        >
          FAQ
        </text>

        {/* ---- props ---- */}
        {/* potted plant */}
        <g transform="translate(158 420)">
          <path d="M-1 -26 q-21 -8 -24 -35 q24 3 27 32" fill={GREEN} opacity=".85" />
          <path d="M3 -26 q21 -11 21 -41 q-24 9 -24 38" fill={GREEN_DEEP} opacity=".75" />
          <path d="M0 -26 L0 -46" stroke={GREEN_DEEP} strokeWidth="3" opacity=".6" />
          <path d="M-18 0 L18 0 L14 -26 L-14 -26 Z" fill={GREEN_DEEP} opacity=".28" />
        </g>

        {/* Scooter silhouette. Drawn as a filled body rather than a frame of
            struts: small wheels plus the step-through well between seat and leg
            shield are what read as a scooter — a stroked outline reads as a bicycle. */}
        <g transform="translate(905 420)" opacity=".75">
          <path
            d="M-44 -20 L-44 -33 Q-44 -37 -40 -37 L-14 -37 Q-8 -37 -8 -31 L-8 -24
               L12 -24 Q16 -24 18 -30 L24 -48 Q26 -53 31 -53 L45 -53 L45 -45
               L35 -45 L27 -22 Q26 -18 22 -18 L-40 -18 Q-44 -18 -44 -20 Z"
            fill={GREEN_DEEP}
          />
          <path
            d="M29 -59 L49 -56"
            fill="none"
            stroke={GREEN_DEEP}
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="-32" cy="-12" r="12" fill="none" stroke={GREEN_DEEP} strokeWidth="6" />
          <circle cx="34" cy="-12" r="12" fill="none" stroke={GREEN_DEEP} strokeWidth="6" />
        </g>

        {/* ---- figures ---- */}
        <GroundSitter x={78} y={420} scale={1} delay={0.35} />
        <Sitter x={252} y={237} scale={1} hair="bun" holds="laptop" delay={0.1} />
        <Sitter x={688} y={237} scale={0.95} hair="long" holds="phone" delay={0.25} />

        {/* ---- questions in the air ---- */}
        <Bubble x={382} y={60} w={132} h={82} delay={0.15} drift={11} duration={5.4} filled />
        <Bubble x={228} y={118} w={80} h={56} delay={0.3} drift={7} duration={4.6} />
        <Bubble x={594} y={54} w={92} h={62} delay={0.45} drift={9} duration={6.2} />
        <Query x={150} y={104} size={54} opacity={0.45} delay={0.5} duration={5.8} />
        <Query x={556} y={196} size={38} opacity={0.32} delay={0.6} duration={6.6} />
        <Query x={868} y={168} size={62} opacity={0.4} delay={0.4} duration={5.2} />
      </svg>
    </div>
  )
}
