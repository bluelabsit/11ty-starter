const fs = require("fs");
const { markdownLibrary } = require("./.markdown.js");

const eleventyPlugins = require("./config/plugins.js");
const eleventyFilters = require("./config/filters.js");

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

    eleventyConfig.addWatchTarget("./src/**/*.js")
    eleventyConfig.addWatchTarget("./src/assets/css/**/*.scss")
    eleventyConfig.addWatchTarget("./src/**/*.md")

    eleventyConfig.setLibrary("md", markdownLibrary);

    eleventyConfig.setBrowserSyncConfig({
        files: '*',
        ignore: ['_site', '.gitignore', 'node_modules'],
        callbacks: {
            ready: function(err, browserSync) {
                const content_404 = fs.readFileSync('_site/404.html');

                browserSync.addMiddleware("*", (req, res) => {
                    // Provides the 404 content without redirect.
                    res.writeHead(404, {"Content-Type": "text/html; charset=UTF-8"});
                    res.write(content_404);
                    res.end();
                });
            },
        },
        ui: false,
        ghostMode: false
    });

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
