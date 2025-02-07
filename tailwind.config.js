/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#1b6da8'
      },
      fontFamily:{
        'display': ['Poppins' , 'sans-serif'],
        'body' : ['inter' , 'sans-serif']

      }
    },
  },
  plugins: [],
}

