const { JSDOM } = require('jsdom');

export const fetchData = config => {
  return (
    JSDOM.fromURL(config.websiteUrl)
      .then(
        document =>
          document.window.document.querySelector(config.textNode).textContent
      )
      //TODO: replace this by a better error handling 👇
      .catch(err => {
        // console.log(err);
        throw 'Some Error';
      })
  );
};
