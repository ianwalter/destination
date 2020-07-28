const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const { version } = require('./package.json')

module.exports = eleventyConfig => {
  eleventyConfig.addWatchTarget('./destination.css')
  eleventyConfig.addPassthroughCopy({ './destination.css': './destination.css' })
  eleventyConfig.addShortcode('meta', prop => {
    if (prop === 'version') return version
  })
  eleventyConfig.addPlugin(syntaxHighlight)
}
