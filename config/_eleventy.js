module.exports = {
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
        includes: "html",
        data: "data",
        output: 'public',
    },
};
