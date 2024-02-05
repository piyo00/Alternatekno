const tailwindcssAnimated = require('tailwindcss-animated');
const twElementsPlugin = require("tw-elements/dist/plugin.cjs");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./themes/**/*.{html,htm,js}'],
  theme: {
    extend: {
      textUnderlineOffset: {
        8: '23px',
      }
    },
  },
  plugins: [
    tailwindcssAnimated,
    twElementsPlugin
  ],
}


