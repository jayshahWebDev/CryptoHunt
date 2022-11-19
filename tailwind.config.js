/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    screens: {
      tablet: "480px",

      laptop: "768px",
    },
    colors: {
      headerBg: "#14161a",
      white: "#ffffff",
      yellow: "#eebc1d",
      logo: "#ffd700",
      gray: "#606060",
      dropDown: "#424242",
    },
    backgroundImage: {
      bannerImg: "url('/public/banner2.jpg')",
    },
  },
  plugins: [],
};
