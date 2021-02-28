module.exports = {
  purge: {
    enabled: process.env.PURGUE_CSS || false,
    content: ['./**/*.js'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
