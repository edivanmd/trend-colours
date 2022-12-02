/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'fascinate': ['"Fascinate Inline"', 'cursive'],
      'neonderthaw': ['Neonderthaw', 'cursive'],
      'finger': ['"Finger Paint"', 'cursive'],
      'squarePeg': ['"Square Peg"', 'cursive'],
      'roboto': ['Roboto', '"sans-serif"'],
    }
  },
  plugins: [],
}
