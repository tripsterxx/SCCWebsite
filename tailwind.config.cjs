/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custommonth: "#F18C00",
        orangeHeader: "#F18C00",
        primaryBackground: "#1D1D1D",
      },
    },
  },
  plugins: [],
};
