/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/Header.jsx",
    "./src/main.jsx",
    "./src/PromoBanner.jsx",
    "./src/Footer.jsx",
    "./src/Sidebar.jsx",
    "./src/ItemCard.jsx",
    "./src/CategoriesBanner.jsx",
    "./src/NavRail.jsx",
    "./src/PageButton.jsx",
    "./src/Recommendations.jsx",

    "./src/pages/Cart.jsx",
    "./src/pages/Checkout.jsx",
    "./src/pages/ProductListing.jsx",
    "./src/pages/Product.jsx"
  ],
  theme: {
    extend: {
      colors: {
        'bold-green' : '#9FD62F',
        'warm-brown' : '#817664',
        'dark-green' : '#2A8703',
        'faint-grey' : '#E5E5E5',
        'dark-grey' : '#888888',
        'check-grey' : '#5E5E5E',
        'mild-green' : '#EAF3E6',
        'ultra-faint-grey' : '#F9F9F9',

      },

      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        helvetica: ['Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

