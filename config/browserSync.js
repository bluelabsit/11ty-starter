const fs = require("fs");
const path = require("path");

const isSSL = process.env.SERVER_SCHEME === 'https';
const localServerKeyPath = path.resolve('./config/server.key')
const localServerKeyCert = path.resolve('./config/server.crt')

const https = (
  isSSL &&
  fs.existsSync(localServerKeyPath) &&
  fs.existsSync(localServerKeyCert)
) ? {
  key: localServerKeyPath,
  cert: localServerKeyCert,
} : false;

module.exports = {
  files: '*',
  ignore: ['public', '.gitignore', 'node_modules'],
  callbacks: {
    ready: function (err, browserSync) {
      const content_404 = fs.readFileSync('public/404.html');

      browserSync.addMiddleware("*", (req, res) => {
        // Provides the 404 content without redirect.
        res.writeHead(404, {"Content-Type": "text/html; charset=UTF-8"});
        res.write(content_404);
        res.end();
      });
    },
  },
  ui: false,
  ghostMode: false,
  snippet: true,
  notify: true,
  host: process.env.SERVER_HOST || 'localhost',
  port: process.env.SERVER_PORT || 3000,
  https
};
