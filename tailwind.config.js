/** @type {import('tailwindcss').Config} */
const heroPatterns = require('tailwindcss-hero-patterns/src/patterns');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        cursive: ['"Permanent Marker"', 'cursive'],
      },
    },
    heroPatterns: {
      topography: heroPatterns.topography,
      rain: heroPatterns.rain,
      bamboo: heroPatterns.bamboo,
    },
    heroPatternsShades: [
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
    ],
    heroPatternsColors: ['indigo'],
  },
  plugins: [require('tailwindcss-hero-patterns')],
};
