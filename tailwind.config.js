/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
         xs: '600px'
      },
      colors:{
         //Primary
         'primary-50': '#333',
         'primary-100': '#666',
         'primary-200': '#999',
         'primary-300': '#CCC',

         'secondary-50': 'rgb(81, 87, 95)',
         'secondary-100': 'rgb(105, 113, 120)',
         'secondary-200': 'rgb(127, 135, 142)',
         'secondary-300': 'rgb(149, 157, 164)',

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

