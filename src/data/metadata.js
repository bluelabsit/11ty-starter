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
  },
  en: {
    url,
    title: title,
    description: "TODO",
    feed: {
      subtitle: "TODO",
      filename: "feed.xml",
      path: "/feed/en.feed.xml",
      id: "TODO",
    },
    jsonfeed: {
      path: "/feed/en.feed.json",
      url: `${url}/feed/en.feed.json`,
    },
    source: {
      label: 'github',
      link: 'https://github.com/moody-person/11ty-starter'
    },
    author: {
      url,
      name: "Your name",
      email: "example@mail.com",
    },
    posts: {
      title: `Posts | ${title}`,
      description: "Blog posts list",
    },
    about: {
      title: `About | ${title}`,
    },
  },
};
