const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00C2FF',
        gray: {
          150: '#ECEEF1',
        },
      },
      dropShadow: {
        'lg-primary': '0 15px 15px rgba(0, 194, 255, 0.25)',
      }
    },
  },
  plugins: [],
}