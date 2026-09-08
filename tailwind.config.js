/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#003D32',
          deep: '#002A23',
          secondary: '#0A513F',
          card: '#03342B',
          cardLight: '#07483B',
          gold: '#D8D923',
          brightGold: '#F1E62A',
          cream: '#F2E8D5',
          offWhite: '#F8F5EC',
          black: '#080B09',
          darkMuted: '#12221D',
          amberGlow: '#E5A93C',
          redBadge: '#E02B2B',
        }
      },
      fontFamily: {
        jooza: ['"flat-jooza"', '"Cairo"', '"Tajawal"', 'sans-serif'],
        arabic: ['"flat-jooza"', '"Cairo"', '"Tajawal"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(216, 217, 35, 0.25)',
        'gold-lg': '0 10px 30px -5px rgba(216, 217, 35, 0.3)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'card-hover': '0 15px 35px -5px rgba(0, 42, 35, 0.9), 0 0 15px rgba(216, 217, 35, 0.15)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'luxury-pattern': 'radial-gradient(rgba(216, 217, 35, 0.05) 1px, transparent 1px)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
