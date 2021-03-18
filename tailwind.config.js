const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    // enabled: process.env.PURGUE_CSS || false,
    enabled: process.env.PURGUE_CSS || false,
    content: ['./**/*.js'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // defino color personalizado
        primary: colors.indigo['600']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
