/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
                "JosefinSans": ['Josefin Sans', 'sans-serif'] ,
                "PTSerif": ['PT Serif', 'sans-serif'] 
            } 
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}