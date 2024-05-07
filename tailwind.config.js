const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        brand: '#0e8c7f',
      }
    },
    fontFamily: {
      'sans': ['"Inter Tight"', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}

