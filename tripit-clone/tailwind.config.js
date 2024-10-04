/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tripit-blue': '#0070c9',
        'primary': '#107ac5',
        'secondary': '#1172C5',
      },
    },
  },
  plugins: [],
}