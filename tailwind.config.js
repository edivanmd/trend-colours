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
      'modak': ['Modak', 'cursive'],
      'neonderthaw': ['Neonderthaw', 'cursive'],
      'bungee': ['"Bungee Shade"', 'cursive'],
    }
  },
  plugins: [],
}
