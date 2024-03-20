/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Luxurious Roman"],
      },
      colors: {
        background: "#FFF0F3",
        navbar: "rgb(247 213 219)",
      }
    },
  },
  plugins: [],
}

