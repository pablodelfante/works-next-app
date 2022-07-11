const colors = require('tailwindcss/colors')

module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}',
    ],
  
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // defino color personalizado, inicial fue colors.indigo['600']
        primary: 'hwb(243deg 30% 0%)',
        dark: '#100f38'
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
