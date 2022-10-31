/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionDuration: {
        2000: '2000ms',
      },
      colors: {
        'paragraph-color': '#676767',
        'title-color': '#3f4246',
      },
      fontFamily: {
        'global-font': ' Graphik,ui-sans-serif,system-ui,sans-serif',
      },
      backgroundImage: {
        'page-gradient':
          'radial-gradient(50% 50% at 50% 50%,#8e9af9 0,rgba(127,208,231,0) 100%)',
      },
    },
  },
  plugins: [],
};
