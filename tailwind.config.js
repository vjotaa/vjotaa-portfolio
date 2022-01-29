module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sora': ['Sora', 'system-ui'],
      'sora_bold': ['Sora-bold', 'system-ui'],
    },
    extend:{
      colors: {
        'gold': '#ffc300',
      },
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}