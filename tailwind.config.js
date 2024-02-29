/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,cjs,mjs}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FAFD7CFF",
        darkBrown: "#82491EFF",
        navyBlue: "#24325FFF",
        lightBlue: "#B7E4F9FF",
        lightRed: "#FB6467FF",
        darkGreen: "#526E2DFF",
        pink: "#E762D7FF",
        orange: "#E89242FF",
        darkYellow: "#FAE48BFF",
        cyan: "#A6EEE6FF",
        brown: "#917C5DFF",
        skyBlue: "#69C8ECFF",
        lightGreen: "#86FF4B",
        lighterGreen: '#8EFF8B',
        lightGray: "#AEAEAE",
        darkNavy: "#23232e",
      },
      backgroundImage: {
        'rickandmorty-bg': "url('./src/assets/bg-rickandmorty.png')",
        'rickandmorty-circle': "url('./src/assets/circle-rickandmorty.png)",
        'rickandmorty-title': "url('./src/assets/title-rickandmorty.png)",
        'rickandmorty-icon': "url('./src/assets/icon-rickandmorty.png)",
      },
      fontSize: {
        clamp: "clamp(1rem, 2vw, 3rem)",
      },
      animation: {
        'text-slide-in': 'text-slide-in 0.2s cubic-bezier(.17,.67,.83,.67) 0.1s both',
        'text-slide-out': 'text-slide-out 0.15s cubic-bezier(.17,.67,.83,.67) 0.1s both'
      },
      keyframes: {
        'text-slide-in': {
          '0%': {
            transform: 'translateX(-40%)',
            opacity: '0',
          },
          '50%': {
            transform: 'translateX(-20%)',
            opacity: '0.25',
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: '1',
          },
        },
        'text-slide-out': {
          '0%': {
            transform: 'translateX(0%)',
            opacity: '1',
          },
          '50%': {
            transform: 'translateX(-50%)',
            opacity: '0.25',
          },
          '100%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
        }         
    },
    },
  },
  plugins: [],
}