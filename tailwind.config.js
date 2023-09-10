/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary':"#a663cc",
        'secondary':"#f61379",
        'black':"#252422"
      }
    },
  },
  plugins: [require("daisyui"),require('tailwind-scrollbar')],
  daisyui: {
    darkTheme: "light"
  },
}

