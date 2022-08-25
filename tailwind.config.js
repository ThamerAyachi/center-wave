/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#8A2BE2", dark: "#222225", darked: "#171719" },
    },
  },
  plugins: [],
};
