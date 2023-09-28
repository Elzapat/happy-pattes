/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./public/*.{html,js}", "./public/fill_gallerie.js"],
  theme: {
    extend: {},
    colors: {
        ...colors,
        "primary": "#c8f1c7"
    },
    fontFamily: {
      "ink-free": ["Inkfree", "sans-serif"]
    }
  },
  plugins: [],
}
