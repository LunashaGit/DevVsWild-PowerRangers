/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'orangeFox':'#E65728',
        'blackNero':'#1E1E1E',
        'greyNight':'#2D2D2D',
        'dimGray':'#6F6F6F',
        'lightGray':'#D9D9D9',
      },
    },
    plugins: [],
  }
};