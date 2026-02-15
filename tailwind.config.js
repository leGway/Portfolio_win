// tailwind.config.js
module.exports = {
  mode: 'jit',
  darkMode: 'class',    // ← active le mode sombre via la classe "dark"
  plugins: [
    require('@tailwindcss/typography'),
    // autres plugins…
  ],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"]
    },
    extend: {
      colors: {
        ...require('tailwindcss/colors')
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
