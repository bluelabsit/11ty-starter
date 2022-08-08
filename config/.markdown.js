const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
// const markdownItContainer = require("markdown-it-container");
const fs = require("fs");
const eleventyConfig = require("./_eleventy.js");
const linkIcon = fs.readFileSync(
  `./${eleventyConfig.dir.input}/${eleventyConfig.dir.includes}/icons/link.svg`
);

module.exports = {
  markdownLibrary: markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: linkIcon
  })
}
