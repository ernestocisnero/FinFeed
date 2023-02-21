/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,ts,tsx}"],
  purge: [
    "./src/pages/**/*.tsx", "./src/components/**/*.tsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
