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
      },
      fontFamily: {
        'nunito': ['var(--font-nunito)'],
        'croissant': ['var(--font-croissant)'],
      }
    },
  },
  plugins: [],
}
