/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { screens: {
      'mobile': {'min': '260px', 'max': '639px'},
    },},
  },
  plugins: [
  ],
}

