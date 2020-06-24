// const TEXT_CONTENT = 'الجمعة 27 شوّال 1441هـ الموافق لـ 19 يونيو 2020';
const page = require('./data/page');
const { JSDOM } = require('jsdom');

export const fetchData = (_url, fn = _ => _) => {
  return new Promise((resolve, _reject) => {
    resolve(fn(new JSDOM(page).window.document));
  });
};
