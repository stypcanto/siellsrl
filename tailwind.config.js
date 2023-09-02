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
      classes: [
        // Clases para animaciones profesionales
        'fadeIn', 'fadeOut', 'slideIn', 'slideOut', 'zoomIn', 'zoomOut',
        'rotate', 'pulse', 'bounce', 'fadeScale', 'flip',
        'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight',
        'rotateIn', 'rotateOut','bounce', 'heartBeat', 'fade-in', 'rotate'
      ]
    },

    extend: {
      fontFamily: {
        'dm-sanz': ['"DM-Sanz"', 'sans'],
        'roboto': ['Roboto', 'sans'],
        'lato': ['Lato', 'sans'],
      },
      margin: {
        '30rem': '30rem', // 120px
        '125rem': '125rem', // 500px
        '200rem': '200rem', // 800px
        '250rem': '250rem', // 1000px
        '800rem': '800rem', // 3200px
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
        azulsimple: '#004e92',
        morado: '#364FDA',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeScale: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        flip: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(360deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        rotateIn: {
          '0%': { opacity: '0', transform: 'rotate(-90deg)' },
          '100%': { opacity: '1', transform: 'rotate(0deg)' },
        },
        rotateOut: {
          '0%': { opacity: '1', transform: 'rotate(0deg)' },
          '100%': { opacity: '0', transform: 'rotate(90deg)' },
        },
        heartBeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
        slideIn: 'slideIn 1s ease-in-out',
        slideOut: 'slideOut 1s ease-in-out',
        zoomIn: 'zoomIn 1s ease-in-out',
        zoomOut: 'zoomOut 1s ease-in-out',
        rotate: 'rotate 1s infinite',
        pulse: 'pulse 1s infinite',
        bounce: 'bounce 1s infinite',
        fadeScale: 'fadeScale 1s ease-in-out',
        flip: 'flip 1s infinite',
        fadeInUp: 'fadeInUp 1s ease-in-out',
        fadeInDown: 'fadeInDown 1s ease-in-out',
        fadeInLeft: 'fadeInLeft 1s ease-in-out',
        fadeInRight: 'fadeInRight 1s ease-in-out',
        rotateIn: 'rotateIn 1s ease-in-out',
        rotateOut: 'rotateOut 1s ease-in-out',
        heartBeat: 'heartBeat 1s infinite',
        'fade-in': 'fade-in 1s ease-in-out',
      },
      
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    backgroundColor: ['active', 'hover', 'focus', 'group-hover', 'disabled'],
    ringWidth: ['active', 'focus'],
    textColor: ['disabled'],
    group: ['hover'],
  },
  plugins: [
    require('tailwindcss-animatecss'),
  ],
  safelist: [
    'animate-fade-in_1s_ease-in-out',
    'animate-fade-in-down_1s_ease-in-out'
  ],
}
