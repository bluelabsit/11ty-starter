module.exports = {
  eleventy: process.env.ELEVENTY_ENV ?? 'development',
  url: process.env.URL ?? "http://localhost:3000",
}
