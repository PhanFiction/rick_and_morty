/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,cjs,mjs}",
  ],
  theme: {
    extend: {
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