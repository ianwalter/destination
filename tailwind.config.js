const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: false,
  theme: {
    corePlugins: {
      container: false
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue
    }
  },
  variants: {},
  plugins: [
    // require('@tailwindcss/typography')
  ]
}
