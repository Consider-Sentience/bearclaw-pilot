import { colors, fontFamily } from 'cs-design-system';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        'status-mid': colors.rust, // score 40-79%
      },
      fontFamily,
    },
  },
  plugins: [],
}
