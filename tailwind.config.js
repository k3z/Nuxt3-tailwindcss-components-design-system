/** @type {import('tailwindcss').Config} */
const {
  iconsPlugin,
  getIconCollections,
} = require('@egoist/tailwindcss-icons');

export default {
  content: ['./components/**/*.{js,vue,ts}', './pages/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        dark: '#282828',
      },
      backgroundColor: {
        dark: '#282828',
      },
      borderColor: {
        dark: '#282828',
      },
    },
    fontFamily: {
      sans: ['"sf pro display", Helvetica, Arial, sans-serif'],
      serif: ['Georgia, "Times New Roman", Times, serif'],
      mono: ['"Courier New", monospace'],
      body: ['"sf pro display"'],
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['fa6-solid', 'heroicons']),
    }),
    require('@tailwindcss/forms')({
      strategy: 'base', // only generate global styles
    }),
    require('@tailwindcss/typography'),
  ],
};
