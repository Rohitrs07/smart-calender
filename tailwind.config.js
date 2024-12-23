/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, #FF6754, #FF9148)',
        'secondary-gradient': 'linear-gradient(90deg, #7690FF, #4073C4)',
      },
      textColor: {
        'primary-text': '#2B2B2B',
        'secondary-text': '#777777'
      },
    },
    screens: {
      'mobile': '320px',
      'xs': '530px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px'

    },
  },
  plugins: [],
}