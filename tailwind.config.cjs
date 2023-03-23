/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
  daisyui: {
    darkTheme: 'light',
    // themes: [
    //   {
    //     pokedex: {
    //       'primary': '#230088',
    //     }
    //   }
    // ],
  },
};

module.exports = config;
