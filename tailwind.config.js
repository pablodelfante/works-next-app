const colors = require('tailwindcss/colors')

module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}',
    ],
  
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
  plugins: [
    // ...
    require('@tailwindcss/line-clamp'),
  ],
}
