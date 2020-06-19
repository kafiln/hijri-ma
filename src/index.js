const { JSDOM } = require('jsdom');

const MONTHS = {
  شوّال: 9,
};

export const nodeFromUrl = async (config) => {
  const document = await JSDOM.fromURL(config.websiteUrl);
  const node = document.window.document.querySelector(config.textNode);
  return node;
};

export const monthNumber = (name) => MONTHS[name];
export const zeroFill = (n) => (('' + n).length < 2 ? '0' + n : '' + n);

export const stringDateFromText = (textContent) =>
  textContent.split(' ').splice(0, 4).join(' ');

export const dateFromtext = (textContent, separator = '/') => {
  let [_day, date, month, year] = stringDateFromText(textContent).split(' ');
  year = year.match(/\d*/g)[0];
  month = monthNumber(month); //TODO: Should handle exception where name not found

  return [date, month, year].map(zeroFill).join(separator);
};
