/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'portada': "url('/img/3.jpeg')",
        'portada-gradient': "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url('../img/3.jpeg')",
      },
      colors: {
        customYellow: '#ffedd3',
      },
    },
  },
  plugins: [],
}

