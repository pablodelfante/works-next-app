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
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '5rem',
      },
    }
  },
  
  variants: {
    extend: {},
  },
  plugins: [
    // ...
    require('@tailwindcss/line-clamp'),
  ],
}
