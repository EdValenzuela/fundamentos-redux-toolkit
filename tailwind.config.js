const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        "special-gray": '#F5F0F0'
      }
    },
    
  },
  variant: {
    extend: {
      backgroundColor: ['hover']
    },
  },
  plugins: [],
}
