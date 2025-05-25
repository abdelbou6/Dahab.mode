/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F5E7C1',
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
        },
        cream: '#FFF8E1',
        sand: '#F5F5DC',
        teal: {
          light: '#4DB6AC',
          DEFAULT: '#00796B',
          dark: '#004D40',
        },
        navy: {
          light: '#546E7A',
          DEFAULT: '#37474F',
          dark: '#263238',
        },
        success: {
          light: '#81C784',
          DEFAULT: '#4CAF50',
          dark: '#2E7D32',
        },
        warning: {
          light: '#FFD54F',
          DEFAULT: '#FFC107',
          dark: '#FFA000',
        },
        error: {
          light: '#E57373',
          DEFAULT: '#F44336',
          dark: '#C62828',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Raleway', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
};