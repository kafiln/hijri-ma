const { getMonthName } = require('./hijri');

export const parse = (date, inArabic = true) => {
  const [day, month, year] = date.split('/');
  const monthName = getMonthName(month, inArabic);
  return [day, monthName, year].join(' ');
};
