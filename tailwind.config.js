/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/kiton/dist/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        courier: ['Courier New', 'monospace'],
        sans: ["Josefin Sans"],
      },
      colors: {
        base: '#D7E5FF',
        darkBase: '#000',
        primary: '#4C24DA',
        secondary: '#9982FF',
        darkSecondary: '#100C1D',
        lineClr: '#A5C0EE',
        darkLineClr: '#CBCDCF',
      },
    },

    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },

  plugins: [],
}

