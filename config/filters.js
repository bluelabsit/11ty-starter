/**
 * Eleventy Filters
 */
const {DateTime} = require("luxon");
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
    const getReadableDate = (locale, dateObj) => DateTime.fromJSDate(dateObj, {
        zone: 'utc',
        locale
    }).toFormat("dd LLL yyyy");

    eleventyConfig.addFilter("ru_readableDate", dateObj => {
        return getReadableDate('ru', dateObj);
    });

    eleventyConfig.addFilter("en_readableDate", dateObj => {
        return getReadableDate('en', dateObj);
    });

    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc', locale: 'ru'}).toFormat('yyyy-LL-dd');
    });

    eleventyConfig.addFilter("head", (array, n) => {
        if (n < 0) {
            return array.slice(n);
        }

        return array.slice(0, n);
    });

    eleventyConfig.addFilter("min", (...numbers) => {
        return Math.min.apply(null, numbers);
    });

    eleventyConfig.addFilter("filterTagList", tags => {
        return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
    })

    eleventyConfig.addFilter("keys", obj => Object.keys(obj));

    eleventyConfig.addFilter("cssmin", (code) => {
        return new CleanCSS({}).minify(code);
    });
}

