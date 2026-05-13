/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        people: { light: '#DBEAFE', DEFAULT: '#3B82F6', dark: '#1D4ED8' },
        process: { light: '#D1FAE5', DEFAULT: '#10B981', dark: '#065F46' },
        business: { light: '#FEF3C7', DEFAULT: '#F59E0B', dark: '#92400E' },
      },
      animation: {
        'flip-front': 'flipFront 0.3s ease-in-out',
        'flip-back': 'flipBack 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
}
