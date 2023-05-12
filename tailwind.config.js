/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
            "./index.html",
            "./src/**/*.{vue,js,ts,jsx,tsx}",
            "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/img/bg-top.png')",
        'small-pattern': "url('/src/assets/img/bg-small.png')"
      }
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs")
  ],
}

