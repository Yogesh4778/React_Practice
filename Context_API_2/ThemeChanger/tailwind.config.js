/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // here we got 2 properties media->based on system & 2nd class->base on class
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}

