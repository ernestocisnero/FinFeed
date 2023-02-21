/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,ts,tsx}"],
  purge: [
    "./src/components/**/*.{js,jsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
