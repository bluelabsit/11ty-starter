/**
 * Eleventy Filters
 */
const { DateTime } = require('luxon');
const filters = require('./_filters');

module.exports = function (eleventyConfig) {
  filters(eleventyConfig);

  // Custom filters here
  const getReadableDate = (locale, dateObj) =>
    DateTime.fromJSDate(dateObj, {
      zone: 'utc',
      locale,
    }).toFormat('dd LLL yyyy');

  eleventyConfig.addFilter('ru_readableDate', (dateObj) => {
    return getReadableDate('ru', dateObj);
  });

  eleventyConfig.addFilter('en_readableDate', (dateObj) => {
    return getReadableDate('en', dateObj);
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc', locale: 'ru' }).toFormat('yyyy-LL-dd');
  });

  eleventyConfig.addFilter('filterTagList', (tags) => {
    return (tags || []).filter((tag) => ['all', 'nav', 'post', 'posts'].indexOf(tag) === -1);
  });
};
