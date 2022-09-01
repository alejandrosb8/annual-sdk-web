/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'off-gray': '#333636',
        'off-orange': '#ed581e',
        'off-white': '#f3f5f3',
        'blue-saint': '#46a2fd',
        'orange-saint': '#ff741c',
      },
      backgroundImage: {
        'loading-image': "url('src/assets/loading.png')",
        background: 'url(public/background.jpg)',
      },
    },
  },
  plugins: [],
};
