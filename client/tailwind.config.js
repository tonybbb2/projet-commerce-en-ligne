/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["GT", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}