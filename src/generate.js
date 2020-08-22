const { getMonthName, getMonthNumber } = require('./hijri');
const { localTime } = require('./time');

const defaultConfig = require('./config');

export /**
 *
 *
 * @param {*} today
 * @param {*} month
 * @param {*} expected
 * @returns
 */
const generateMonth = (today, month, expected, options) => {
  const config = { ...defaultConfig, ...options };
  const differenceToFirstDay = today - 1;
  const monthIndex = getMonthNumber(month);
  let currentDate = localTime().subtract(differenceToFirstDay, 'day');
  let result = [];
  for (let day = 1; day <= expected; day++) {
    result.push({
      day,
      year: config.year,
      month: {
        ar: month,
        fr: getMonthName(monthIndex, false),
      },
      gregorianDate: localTime(currentDate).format(config.DATEFORMAT),
    });
    currentDate = localTime(currentDate).add(1, 'day');
  }

  return result;
};
