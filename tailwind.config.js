/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#00D27D',
        secondary: '#2D2D2D',
        accent: '#0078D4',
      },
    },
  },
  plugins: [],
};