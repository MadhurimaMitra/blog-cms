/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        'white': '#F9F7F7',
        'light-grey': '#DBE2EF',
        'blue': '#3F72AF',
        'navy': '#112D4E'
      },
      screens: {
        'sm': '360px'
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif']
      },
    },
  },
  plugins: [],
}

