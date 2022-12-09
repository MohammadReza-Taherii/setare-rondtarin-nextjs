/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        22: "5.4rem",
      },
      boxShadow: {
        sm: "0px 2px 8px rgba(13, 13, 13, 0.1)",
      },
      colors: {
        default: "#FCFBFE",
        purple: {
          "purple-07": "#251354",
          "purple-05": "#6F59CA",
        },
      },
      fontFamily: {
        IRANYekan: ["IRANYEKAN", "sans-serif"],
      },
    },
  },
  plugins: [],
};
