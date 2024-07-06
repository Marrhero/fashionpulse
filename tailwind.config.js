/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/Header.jsx",
    "./src/main.jsx",
    "./src/Promo_banner.jsx",

  ],
  theme: {
    extend: {
      colors: {
        'bold-green' : '#9FD62F',
        'warm-brown' : '#817664',
        'faint-grey' : '#E5E5E5'
      },

      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif']
      }
    },
  },
  plugins: [],
}

