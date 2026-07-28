/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
      screens: { '2xl': '1320px' },
    },
    extend: {
      colors: {
        // Core brand green — used for every primary action and accent.
        brand: {
          50: '#ECFDF3',
          100: '#D1FADF',
          200: '#A6F4C5',
          300: '#6CE9A6',
          400: '#32D583',
          500: '#12B76A',
          600: '#039855',
          700: '#027A48',
          800: '#05603A',
          900: '#054F31',
          950: '#032D1D',
        },
        // High-voltage lime — energy highlights, never for body text on light.
        volt: {
          300: '#E4FF7A',
          400: '#D2FF3A',
          500: '#BFF700',
          600: '#9BD300',
        },
        // Deep forest ink — dark sections, footer, hero overlays.
        ink: {
          700: '#0F231A',
          800: '#0A1A13',
          900: '#06120C',
          950: '#030907',
        },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // Light italic monospace, used for editorial flourishes such as drop caps.
        caps: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        '7.5xl': ['5.25rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(18,183,106,.25), 0 18px 60px -20px rgba(18,183,106,.55)',
        volt: '0 18px 60px -20px rgba(191,247,0,.6)',
        card: '0 2px 4px -2px rgba(6,18,12,.06), 0 12px 40px -16px rgba(6,18,12,.18)',
        lift: '0 8px 12px -8px rgba(6,18,12,.12), 0 30px 70px -30px rgba(6,18,12,.35)',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(6,18,12,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,18,12,.05) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.05) 1px, transparent 1px)',
        'brand-sheen':
          'linear-gradient(120deg, transparent 20%, rgba(255,255,255,.28) 50%, transparent 80%)',
      },
      backgroundSize: {
        grid: '44px 44px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(.85)', opacity: '.7' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        sheen: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
        dash: {
          to: { strokeDashoffset: '0' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'marquee-slow': 'marquee 62s linear infinite',
        'marquee-rev': 'marquee-rev 46s linear infinite',
        float: 'float 7s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.4s cubic-bezier(.2,.6,.3,1) infinite',
        sheen: 'sheen 1.1s ease-out',
      },
    },
  },
  plugins: [],
}
