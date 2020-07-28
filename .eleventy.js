const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const { version } = require('./package.json')

module.exports = eleventyConfig => {
  eleventyConfig.addWatchTarget('./src/destination.css')
  const from = process.env.NODE_ENV === 'production'
    ? './destination.min.css'
    : './destination.css'
  eleventyConfig.addPassthroughCopy({ [from]: './destination.css' })
  eleventyConfig.addShortcode('meta', prop => {
    if (prop === 'version') return version
  })
  eleventyConfig.addPlugin(syntaxHighlight)
}
