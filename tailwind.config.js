/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    animatedSettings: {
      animatedSpeed: 1000,
      heartBeatSpeed: 500,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 500,
      classes: ['bounce', 'heartBeat']
  },

    extend: {
     
      fontFamily: {
        'dm-sanz': ['"DM-Sanz"', 'sans'],
        'roboto': ['Roboto', 'sans'],
        'lato': ['Lato', 'sans'],
      },
      margin: {
        '30rem': '30rem', //120px
        '125rem': '125rem', //500px
        '200rem': '200rem', //800px
        '250rem': '250rem', //1000px
        '800rem': '800rem', //3200px

      },
      backgroundImage: {
        'portada': "url('/img/3.jpeg')",
        'figuritasiell': "url('/img/SIELL2.png')",
        'portada-gradient': "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url('../img/3.jpeg')",
      },
      colors: {
        customYellow: '#ffedd3',
        azulnice: '#000428',
        azulclaro: 'rgb(18, 60, 91)',
        azulsimple:'#004e92',
        morado:'#364FDA',
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
  plugins: [
    require('tailwindcss-animatecss'),
  ],
  'safelist': [
    'animate-fade-in_1s_ease-in-out',
    'animate-fade-in-down_1s_ease-in-out'
],
}

