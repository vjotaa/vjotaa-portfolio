module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'pixel': ['VT323', 'system-ui'],
    },
    extend:{
      colors: {
        'gold': '#ffc300',
        'blacky': '#333',
      },
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}