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
        azulnice: '#000428',
        azulclaro: 'rgb(18, 60, 91)',
        azulsimple:'#004e92',
      },

    },
  },
  variants:{
    opacity: ['responsive','hover','focus','disabled'],
    backgroundColor: ['active','hover','focus','group-hover','disabled'],
    ringWidth:['active','focus'],
    textColor:['disabled'], 
     // Agrega 'group' a las variantes
     group: ['hover'],
  },
  plugins: [],
}

