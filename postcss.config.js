const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.vue'],
  whitelist: ['body', 'html', 'img', 'a'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

const tailwind = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    tailwind(),
    autoprefixer(),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ]
}
