/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7fa',
          100: '#cceef6',
          200: '#99dded',
          300: '#66cde3',
          400: '#33bcda',
          500: '#0891b2', // Primary blue from design
          600: '#0c7490',
          700: '#09576d',
          800: '#073b4a',
          900: '#041e27',
        },
        secondary: {
          50: '#f5f5f5',
          100: '#ebebeb',
          200: '#d6d6d6',
          300: '#c2c2c2',
          400: '#adadad',
          500: '#999999',
          600: '#7a7a7a',
          700: '#5c5c5c',
          800: '#3d3d3d',
          900: '#1f1f1f',
        },
        success: {
          50: '#e6f7e6',
          100: '#ccf0cc',
          200: '#99e099',
          300: '#66d166',
          400: '#33c133',
          500: '#00b200', // Success green
          600: '#008e00',
          700: '#006b00',
          800: '#004700',
          900: '#002400',
        },
        warning: {
          50: '#fff8e6',
          100: '#fff1cc',
          200: '#ffe299',
          300: '#ffd466',
          400: '#ffc533',
          500: '#ffb700', // Warning yellow
          600: '#cc9200',
          700: '#996e00',
          800: '#664900',
          900: '#332500',
        },
        error: {
          50: '#fce6e6',
          100: '#f9cccc',
          200: '#f39999',
          300: '#ec6666',
          400: '#e63333',
          500: '#e00000', // Error red
          600: '#b30000',
          700: '#860000',
          800: '#590000',
          900: '#2d0000',
        },
        accent: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0066ff', // Accent blue
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#001433',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 10px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};