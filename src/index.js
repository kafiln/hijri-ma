const { getData } = require('./extract');
const { formatDate } = require('./format');
const { generateMonth } = require('./generate');
const { getMonthNumber } = require('./hijri');

/**
 *
 *
 * @param {boolean} [inArabic=true]
 * @returns
 */
export const getCurrentDate = async (inArabic = true) => {
  const { today, month } = await getData();
  const monthIndex = getMonthNumber(month);
  return formatDate(today, monthIndex, inArabic);
};

/**
 *
 *
 * @returns
 */
export const getCurrentMonth = async options => {
  const { today, month, expected } = await getData();
  const result = generateMonth(today, month, expected, options).map(e => ({
    day: e.day,
    year: e.year,
    month: getMonthNumber(e.month.ar),
    gregorianDate: e.gregorianDate,
  }));

  return result;
};
