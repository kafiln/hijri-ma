const { JSDOM } = require('jsdom');

export const fetchData = (url, extractorFn = _ => _) => {
  return (
    JSDOM.fromURL(url)
      .then(document => document.window.document)
      .then(document => {
        return extractorFn(document);
      })
      //TODO: replace this by a better error handling 👇
      .catch(err => {
        throw 'Some Error';
      })
  );
};
