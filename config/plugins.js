/**
 * Eleventy Plugins
 *
 * @see https://www.11ty.dev/docs/plugins/
 */
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    // https://www.11ty.dev/docs/plugins/rss/
    eleventyConfig.addPlugin(pluginRss);

    // https://www.11ty.dev/docs/plugins/syntaxhighlight/
    eleventyConfig.addPlugin(pluginSyntaxHighlight);

    // https://www.11ty.dev/docs/plugins/navigation/
    eleventyConfig.addPlugin(pluginNavigation);
}

