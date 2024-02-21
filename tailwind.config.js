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
    },
  },
  plugins: [],
}