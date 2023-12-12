/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-navy': '#020c1b',
        'light-navy': '#0a192f',
        'lightest-navy': '#112240',
        'slightly-desaturated-blue': '#ccd6f6',
        'desaturated-blue': '#8892b0',
        'very-desaturated-blue': '#a8b2d1',
        'very-pale-blue': '#e6f1ff',
        'desaturated-cyan': '#64ffda',
        'very-dark-blue': '#0a192f',
        'very-dark-black-blue': '#020c1b',
        'very-dark-desaturated-blue': '#233554',
        'primary': '#64ffda',
      }
    },
  },
  plugins: [],
}
