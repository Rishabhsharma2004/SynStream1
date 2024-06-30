const flowbite = require("flowbite-react/tailwind");
const tailwind_scrollbar = require('tailwind-scrollbar');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
    tailwind_scrollbar,
  ],
}