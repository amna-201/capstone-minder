/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: 'rgba(89, 140, 152, 0.72)',
        customGreen: 'rgba(140, 179, 124, 0.72)',
        customPurple: '#8F61A3',
        customBig: '#F1E9E7',
      },

    },
    
  },
  plugins: [],
}
