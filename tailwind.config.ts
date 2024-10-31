import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'
import plugin from 'tailwindcss/plugin'

// Plugin to capitalise first letter of a string
const capitalizeFirst = plugin(function ({ addUtilities }) {
  const newUtilities = {
    '.capitalize-first:first-letter': {
      textTransform: 'uppercase',
    },
  }
  addUtilities(newUtilities)
})

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Theme colors
        primary: {
          DEFAULT: 'var(--primary-9)',
          foreground: 'var(--gray-1)',
          '1': 'var(--primary-1)',
          '2': 'var(--primary-2)',
          '3': 'var(--primary-3)',
          '4': 'var(--primary-4)',
          '5': 'var(--primary-5)',
          '6': 'var(--primary-6)',
          '7': 'var(--primary-7)',
          '8': 'var(--primary-8)',
          '9': 'var(--primary-9)',
          '10': 'var(--primary-10)',
          '11': 'var(--primary-11)',
          '12': 'var(--primary-12)',
          a1: 'var(--primary-a1)',
          a2: 'var(--primary-a2)',
          a3: 'var(--primary-a3)',
          a4: 'var(--primary-a4)',
          a5: 'var(--primary-a5)',
          a6: 'var(--primary-a6)',
          a7: 'var(--primary-a7)',
          a8: 'var(--primary-a8)',
          a9: 'var(--primary-a9)',
          a10: 'var(--primary-a10)',
          a11: 'var(--primary-a11)',
          a12: 'var(--primary-a12)',
        },

        gray: {
          '1': 'var(--gray-1)',
          '2': 'var(--gray-2)',
          '3': 'var(--gray-3)',
          '4': 'var(--gray-4)',
          '5': 'var(--gray-5)',
          '6': 'var(--gray-6)',
          '7': 'var(--gray-7)',
          '8': 'var(--gray-8)',
          '9': 'var(--gray-9)',
          '10': 'var(--gray-10)',
          '11': 'var(--gray-11)',
          '12': 'var(--gray-12)',
          a1: 'var(--gray-a1)',
          a2: 'var(--gray-a2)',
          a3: 'var(--gray-a3)',
          a4: 'var(--gray-a4)',
          a5: 'var(--gray-a5)',
          a6: 'var(--gray-a6)',
          a7: 'var(--gray-a7)',
          a8: 'var(--gray-a8)',
          a9: 'var(--gray-a9)',
          a10: 'var(--gray-a10)',
          a11: 'var(--gray-a11)',
          a12: 'var(--gray-a12)',
        },

        // Primitive variables
        whiteContrast: 'var(--white-contrast)',
        blackContrast: 'var(--black-contrast)',
        whiteToDark: 'var(--white-to-dark)',
        darkToWhite: 'var(--dark-to-white)',
        overlay: 'var(--overlay)',
        panel: 'var(--panel)',
        surface: 'var(--white-to-dark)',

        // Chad/cn colors
        background: 'var(--gray-1)',
        foreground: 'var(--gray-12)',
        card: {
          DEFAULT: 'var(--gray-a1)',
          foreground: 'var(--gray-12)',
        },
        popover: {
          DEFAULT: 'var(--white-to-dark)',
          foreground: 'var(--gray-12)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'var(--gray-a4)',
          foreground: 'var(--gray-a11)',
        },
        accent: {
          DEFAULT: 'var(--primary-a2)',
          foreground: 'var(--gray-12)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'var(--gray-a6)',
        input: 'var(--gray-a6)',
        ring: 'var(--gray-12)',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [tailwindcssAnimate, capitalizeFirst],
}
export default config
