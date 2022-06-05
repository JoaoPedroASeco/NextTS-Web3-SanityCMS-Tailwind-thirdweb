module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}
