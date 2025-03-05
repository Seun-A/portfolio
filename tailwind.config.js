/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sugar': '#C57B57',
        'sugar-dark': '#5B331F',
        'tangerine': '#F1AB86',
        'peach': '#F7DBA7',
        'burnt': '#251605',
        'grey': '#9CAFB7',
        'pop': '#893168',
        'forest': '#7B9E87',
        'olivine': '#B6D094',
        'violet': '#856084',
        
        
        'teagreen': '#CCD5AE',
        'beige': '#E9EDC9',
        'cornsilk': '#FEFAE0',
        'papaya': '#FAEDCD',
        'buff': '#D4A373',
        'raisin': '#1E1E24',
        'off-white': '#F5F5F5',
      },
      fontFamily: {
        'montserrat': ['var(--font-montserrat)'],
        'garamond': ['var(--font-garamond)']
      }
    },
  },
  plugins: [],
}
