/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      colors: {
        'custom-orange': 'rgb(244,134,19)',
        'custom-blue': 'rgb(0, 33, 94)',
        'footer-blue': 'rgb(45, 44, 118)'
      }
    },
  },
  plugins: [],
}

