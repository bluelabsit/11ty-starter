const { markdownLibrary } = require("./.markdown.js");

const eleventyPlugins = require("./config/plugins.js");
const eleventyFilters = require("./config/filters.js");
const browserSync = require("./config/browserSync.js");

module.exports = function(eleventyConfig) {
    // Init Plugins
    eleventyPlugins(eleventyConfig);

    // Add filters
    eleventyFilters(eleventyConfig);

    // https://www.11ty.dev/docs/data-deep-merge/
    eleventyConfig.setDataDeepMerge(true);

    eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

    eleventyConfig.addCollection("tagList", function(collection) {
        let tagSet = new Set();
        collection.getAll().forEach(item => {
            (item.data.tags || []).forEach(tag => tagSet.add(tag));
        });

        return [...tagSet];
    });

    eleventyConfig.addPassthroughCopy("static");
    eleventyConfig.addPassthroughCopy("./src/assets/css/prism.css");

    eleventyConfig.setLibrary("md", markdownLibrary);

    eleventyConfig.setBrowserSyncConfig(browserSync);

    /**
     * Watchers
     */
    // JS
    eleventyConfig.addWatchTarget("./src/**/*.js")

    // SCSS
    eleventyConfig.addWatchTarget("./src/assets/css/**/*.scss")

    // MD
    eleventyConfig.addWatchTarget("./src/**/*.md")

    return {
        templateFormats: [
            "md",
            "njk",
            "html",
        ],
        pathPrefix: "/",
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: false,
        dir: {
            input: "src",
            includes: "_includes",
            data: "../_data",
        }
    };
};
