module.exports = {
  mode: 'jit',
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        'b-primary': 'rgb(139, 232, 220)',
        'b-secondary': 'rgb(255, 252, 214)'
      }
    },
  },
  plugins: [],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
}
