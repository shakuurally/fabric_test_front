/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      skeletonScreen: {
        DEFAULT: {
          // .loading
          baseColor: "#c7c7c7",
          movingColor:
            "linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%)",
          duration: "1s",
          timing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
        },
        // specify another color to have multiple loading colors.
        blue: {
          // .loading-blue
          baseColor: "blue",
          movingColor:
            "linear-gradient(to right, transparent 0%, lightblue 50%, transparent 100%)",
          duration: ".3s",
          timing: "ease",
        },
      },
    },
  },
  plugins: [require("@gradin/tailwindcss-skeleton-screen")],
};
