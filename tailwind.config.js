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

      boxShadow: {
        'custom-glow': '0 0 4px rgba(104, 87, 255, 0.9), 0 0 15px rgba(104, 87, 255, 0.6)', // Adjust the color and blur values to suit the glow
        'custom-glow-dark': '0 0 6px rgba(75, 0, 130, 1), 0 0 25px rgba(75, 0, 130, 0.8)', // Darker and more purple glow
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

