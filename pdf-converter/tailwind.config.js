/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      spacing: {
        1: '8px',
        2: '12px',
        3: '16px',
        4: '24px',
        5: '32px',
        6: '48px',
      },
      borderRadius: {
        lg: '16px',
        md: '12px',
        sm: '8px',
      },
      colors: {
        blue: {
          DEFAULT: 'rgb(96 165 250 / 0.5);',
          light: 'rgb(191 219 254 / 0.5);',
          dark: 'rgb(30 64 175 / 0.2);',
          bright: '#4c9aff',
        },
        gray: {
          DEFAULT: '#8492a6',
          light: '#d3dce6',
          dark: '#5a6872',
        },
      },
    },
  },
  plugins: [],
};
