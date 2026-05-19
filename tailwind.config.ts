import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.{vue,ts}',
    './pages/**/*.{vue,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        // PALETTE OFFICIELLE HSV
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8D08A',
          dark: '#8B6914',
          50: '#FDF8EC',
          100: '#FAF0D4',
          200: '#F4E1A8',
          300: '#E8D08A',
          400: '#D9BD5E',
          500: '#C9A84C',
          600: '#B08C34',
          700: '#8B6914',
          800: '#6B4E0F',
          900: '#4A350A',
        },
        green: {
          deep: '#1B5E20',
          medium: '#2E7D32',
          light: '#66BB6A',
          50: '#E8F5E9',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#66BB6A',
          400: '#43A047',
          500: '#2E7D32',
          600: '#1B5E20',
          700: '#144A18',
          800: '#0D3611',
          900: '#07240A',
        },
        noir: {
          logo: '#1A1A1A',
          texte: '#333333',
        },
        brun: {
          dore: '#6B6050',
        },
        sable: {
          dore: '#D4C9A8',
        },
        creme: '#F4F1EC',
      },
      fontFamily: {
        georgia: ['Georgia', 'Times New Roman', 'serif'],
        arial: ['Arial', 'Helvetica', 'sans-serif'],
        montserrat: ['Montserrat', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config