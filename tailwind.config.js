/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Cuida: ['Cuida', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        PoppinsL: ['PoppinsL', 'sans-serif']
      },
    },
  },
  plugins: [],
}