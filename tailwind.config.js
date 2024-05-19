/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        'custom-lightGreen': 'hsl(148, 38%, 91%)',
        'custom-Green': 'hsl(169, 82%, 27%)',
        'custom-red': 'hsl(0, 66%, 56%)',
        'custom-mideumGrey': 'hsl(186, 15%, 59%)',
        'custom-darkGrey': 'hsl(187, 24%, 22%)'
      },
      fontFamily: {
        bold: ['Karla-Bold', 'sans-serif'],
        regular: ['Karla-Regular', 'sans-serif'],
        italic: ['Karla-Italic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

