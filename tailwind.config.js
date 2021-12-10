const colors = require('tailwindcss/colors')

module.exports = {
  //mode: 'jit',
  
    content: [
      './public/**/*.html',
      './components/**/*.{js,jsx,ts,tsx}',
      './conectors/**/*.{js,jsx,ts,tsx}',
      './contexts/**/*.{js,jsx,ts,tsx}',
      './helpers/**/*.{js,jsx,ts,tsx}',
      './hooks/**/*.{js,jsx,ts,tsx}',
      './pages/**/*.{js,jsx,ts,tsx}',
      './public/**/*.{js,jsx,ts,tsx}',
      './utils/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
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
