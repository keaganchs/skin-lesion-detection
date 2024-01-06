/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: colors.sky-700,
      secondary: colors.stone-700,
      text: colors.black,

      darkPrimary: colors.sky-300,
      darkSecondary: colors.stone-300,
      darkText: colors.white
    },
    // extend: {},
  },
  plugins: [],
}
