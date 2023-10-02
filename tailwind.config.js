/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#2DC4EA",
        secondary:"#3AE7AB",
        "bg-grey":"#F5F5F5",
        "bg-grey-1":"#C5CDD3",
        "bg-grey-2":"#58595B",
      },

      boxShadow: {
        'custom': '0px 3px 10px #0000004D',
      }
    },
  },
  plugins: [],
}