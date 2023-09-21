/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/*.{html,js}"],
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

