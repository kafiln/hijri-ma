const MONTHS = 'محرم_صفر_ربيع الأول_ربيع الثاني_جمادى الأولى_جمادى الثانية_رجب_شعبان_رمضان_شوّال_ذو القعدة_ذو الحجة'.split(
  '_'
);

//FIXME: Handle not found case
export const monthNumber = name => MONTHS.indexOf(name) + 1;

export const zeroFill = n => (('' + n).length < 2 ? '0' + n : '' + n);

export const stringDateFromText = textContent =>
  textContent.split(' ').splice(0, 4).join(' ');

export const dateFromtext = (textContent, separator = '/') => {
  let [_day, date, month, year] = stringDateFromText(textContent).split(' ');
  year = year.match(/\d*/g)[0];
  month = monthNumber(month); //FIXME: Should handle exception where name not found

  return [date, month, year].map(zeroFill).join(separator);
};
