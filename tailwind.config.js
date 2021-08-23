// tailwind.config.js controls finer details in TailwindCSS
// See https://tailwindcss.com/docs/configuration

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: '#fcfcfd',
        dark: '#141416',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        mono: ['Source Code Pro', fontFamily.mono],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
