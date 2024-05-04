/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/background.jpg')",
      },
      colors: {
        'dark-brown': '#57453d',
        'light-brown': '#e7e5e4',
      },
    },
    plugins: {},
  },
};
