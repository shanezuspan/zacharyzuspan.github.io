/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'park-sky': '#4fc3ff',
        'park-deep-blue': '#003c71',
        'park-teal': '#00b6b0',
        'park-yellow': '#ffd85a',
        'park-magenta': '#ff4f81',
        'park-cloud': '#f5f7fa',
        'park-card': '#ffffff',
      },
      fontFamily: {
        'display': ['"Baloo 2"', 'cursive'],
        'body': ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'sky-gradient': 'radial-gradient(circle at top left, #ffffff 0, #ffffff 30%, #c4e9ff 70%, #9bd5ff 100%)',
        'hero-gradient': 'linear-gradient(135deg, #4fc3ff, #00b6b0)',
      },
    },
  },
  plugins: [],
}