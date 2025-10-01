/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif'],
    },
    extend: {
      screens: {
        'sm-range': {'min': '400px', 'max': '600px'},
      },
    },
  },
  plugins: [],
}
