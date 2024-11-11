/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        sidebar: "#0E0E0E",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        main: "#CFC5C5",
        basepPink: "#FF5656",
      },
    },
  },
  plugins: [],
};
