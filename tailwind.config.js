/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./testimonials-grid-section-main/*.{html,js}"],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      fontFamily: {
        sans: 'Barlow Semi Condensed, sans-serif'
      }
    }
  },
  plugins: [],
}