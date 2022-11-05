/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
        myFont: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}
