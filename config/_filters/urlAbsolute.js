module.exports = (url) => {
  // remove last slash if present
  const base_url = (process.env.URL ?? 'http://localhost:3000').replace(/\/$/, '');

  // remove first slash if present
  const url_path = url.replace(/^\//, '');

  return `${base_url}/${url_path}`;
};
