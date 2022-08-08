const url = process.env.URL ?? "http://localhost:3000";
const title = "Bluelabs Eleventy starter";

module.exports = {
  title,
  url,
  pages: {
    '/test/': {
      title: "Pagina di test",
      description: "Questa è una Pagina di test",
    }
  }
};
