const { JSDOM } = require('jsdom');

export class ApiError extends Error {
  constructor(message = 'API Error', status = 500) {
    super(message);
    this.status = status;
  }
}

/**
 *
 *
 * @param {*} url
 * @param {*} [extractorFn=_ => _]
 * @returns
 */
export const fetchData = (url, extractorFn = _ => _) => {
  return (
    JSDOM.fromURL(url)
      .then(document => document.window.document)
      .then(document => {
        return extractorFn(document);
      })
      //TODO: replace this by a better error handling 👇
      .catch(_ => {
        throw new ApiError();
      })
  );
};
