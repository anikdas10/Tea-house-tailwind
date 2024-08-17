/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors:{
        "color-primary-dark":"#FF0000",
        "color-primary":"#FF8938",
        "color-bg-light":"#FF0000",
        "color-bg-dark":"#FF8938",
      }
    },
    container: {
       center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}

