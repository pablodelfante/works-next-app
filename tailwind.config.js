module.exports = {
  purge: {
    // enabled: process.env.PURGUE_CSS || false,
    enabled: true,
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
