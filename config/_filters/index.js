const slugify = require('slugify');
const fs = require('fs');
const filterFiles = fs.readdirSync(__dirname);
const replacement = '_';

module.exports = (eleventyConfig) => {
  filterFiles.forEach((file) => {
    if (file === 'index.js') {
      return;
    }

    const filter = require(`./${file}`);

    // remove extension and special chars from filename
    const filterName =
      filter.name ||
      slugify(file.slice(0, file.lastIndexOf('.')).replace('.', replacement), {
        replacement,
      });

    console.log(` * Filter: '${filterName}' added.`);
    eleventyConfig.addFilter(filterName, filter.render || filter);
  });
};
