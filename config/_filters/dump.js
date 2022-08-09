const nunjucks = require('nunjucks');
const env = nunjucks.configure();

module.exports = {
  name: 'dump',
  render: (obj, format = true) => {
    let response;

    try {
      response = format ? '<pre>' + JSON.stringify(obj, null, 2) + '</pre>' : JSON.stringify(obj);
    } catch (e) {
      response = '<pre style="color:red;">Error: ' + e.message + '</pre>';
    }

    return env.filters.safe(response);
  },
};
