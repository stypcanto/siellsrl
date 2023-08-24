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
        azulnice: '#000428'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hover:azulnice': {
          '&:hover': {
            backgroundColor: '#000428',
            // Puedes ajustar otros estilos aquí
          },
        },
      }

      addUtilities(newUtilities, ['group', 'responsive', 'hover'])
    },
  ],
}

