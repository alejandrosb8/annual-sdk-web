/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'off-gray': '#333636',
        'off-orange': '#ed581e',
        'off-white': '#f3f5f3',
      },
      backgroundImage: {
        'loading-image': "url('src/assets/loading.png')",
      },
    },
  },
  plugins: [],
};
