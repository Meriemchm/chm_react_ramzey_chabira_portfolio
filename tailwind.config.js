/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#38D356 ",
        second: "#1E1E1E",
        third: "#F4F5F7",
        four: "#FFFFFF",
        five: "#000000",
      },
    },
  },
  plugins: [],
};