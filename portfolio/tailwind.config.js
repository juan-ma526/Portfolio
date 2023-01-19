/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        animate: {
          "0%,10%,100%": {
            width: "0%",
          },
          "70%,80%,90%": {
            width: "100%",
          },
        },
      },
    },
    animation: {
      animate: "animate 6s linear infinite",
    },
  },
  plugins: [],
};
