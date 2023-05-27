/** @type {import('tailwindcss').Config} */
/* <link rel="preconnect" href="https://fonts.googleapis.com"> */
/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */
/* <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;1,300;1,500;1,800&family=Raleway&display=swap" rel="stylesheet"> */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        gray: {
          50: '#F6F6F6',
          100: '#f7fafc',
          150: '#EEEEEE',
          200: '#E2E2E2',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#545454',
          700: '#4a5568',
          800: '#2d3748',
          850: '#999999',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        gold: '#DF9A57',
        backgroundAccent: '#276EF1',
        secondary: { green: '#3AA76D', orange: '#ED6E33' },
      },
    },
  },
  plugins: [],
};
