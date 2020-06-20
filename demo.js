const { fetchData, dateFromtext, stringDateFromText } = require('./src');
// import moment from 'moment-hijri';

// moment.locale('ar-ma', {
//   iMonths: 'محرم_صفر_ربيع الأول_ربيع الثاني_جمادى الأولى_جمادى الثانية_رجب_شعبان_رمضان_شوال_ذو القعدة_ذو الحجة'.split(
//     '_'
//   ),
// });
// console.log(moment.locale());
// console.log(moment().format('dddd iD iMMMM iYYYYهـ'));
// console.log(moment().format('LLLL'));

export const main = async () => {
  const node = await fetchData(require('./src/config'));
  console.log(stringDateFromText(node.textContent));
  console.log(dateFromtext(node.textContent));
};

(async () => {
  await main();
})();
