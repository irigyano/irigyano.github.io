/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      animation: {
        "slide-in": "slide-in 0.5s linear",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateY(10px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
      },
      fontFamily: {
        "google-fonts": ["Noto Sans"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
