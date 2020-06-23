const { JSDOM } = require('jsdom');

const innerDocument = document => document.window.document;

export const fetchData = (url, extractorFn = _ => _) => {
  return (
    JSDOM.fromURL(url)
      .then(innerDocument)
      .then(document => {
        return extractorFn(document);
      })
      //TODO: replace this by a better error handling 👇
      .catch(err => {
        throw 'Some Error';
      })
  );
};
