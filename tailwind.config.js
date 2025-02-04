/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
         //Neutrales
         'neutral-25': '#F1F1F1',
         'neutral-50': '#E3E3E3',
         'neutral-75': '#C9C9C9',
         'neutral-100': '#989898',
      }
    },
  },
  plugins: [],
}

