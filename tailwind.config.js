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
          primary: '#A48F64',       // Signature Accent (Golden Bronze)
          primaryLight: '#B8A378',  // Soft Accent
          primaryDark: '#8A764D',   // Deep Accent
          secondary: '#F5EFE6',     // Warm Off-White Accent
          gold: '#A48F64',          // Signature #A48F64
          brightGold: '#8A764D',    // Deep Gold Accent for high contrast
          goldLight: '#C5AF84',     // Light Gold
          deep: '#FAF8F5',          // Main Luxury Off-White Page Background
          card: '#FFFFFF',          // Pure White Card
          cardLight: '#FCFAF7',     // Off-White Card Layer
          cream: '#241E17',         // Primary Rich Dark Text
          creamMuted: '#6B6255',    // Secondary Muted Text
          offWhite: '#FAF8F5',      // Background Off-White
          white: '#FFFFFF',
          black: '#1A1510',
          darkMuted: '#2D261E',
          amberGlow: '#A48F64',
          redBadge: '#D32F2F',
        }
      },
      fontFamily: {
        jooza: ['"flat-jooza"', '"Cairo"', '"Tajawal"', 'sans-serif'],
        arabic: ['"flat-jooza"', '"Cairo"', '"Tajawal"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(164, 143, 100, 0.3)',
        'gold-lg': '0 10px 30px -5px rgba(164, 143, 100, 0.35)',
        'luxury': '0 15px 35px -10px rgba(164, 143, 100, 0.15), 0 0 1px 1px rgba(164, 143, 100, 0.1)',
        'card-hover': '0 20px 40px -10px rgba(164, 143, 100, 0.22), 0 0 15px rgba(164, 143, 100, 0.1)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'luxury-pattern': 'radial-gradient(rgba(164, 143, 100, 0.1) 1px, transparent 1px)',
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
