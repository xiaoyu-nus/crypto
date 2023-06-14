/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      // ...

      ringWidth: ["hover", "active"],
    },
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
