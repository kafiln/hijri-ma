import { getMonthName, getMonthNumber } from './hijri';
import { localTime } from './time';

const config = require('./config');

export /**
 *
 *
 * @param {*} today
 * @param {*} month
 * @param {*} expected
 * @returns
 */
const generateMonth = (today, month, expected) => {
  const differenceToFirstDay = today - 1;
  const monthIndex = getMonthNumber(month);
  let currentDate = localTime().subtract(differenceToFirstDay, 'day');
  let result = [];
  for (let day = 1; day <= expected; day++) {
    result.push({
      day,
      year: config.YEAR,
      month: {
        ar: month,
        fr: getMonthName(monthIndex, false),
      },
      georgianDate: localTime(currentDate).format('DD-MM-YYYY'),
    });
    currentDate = localTime(currentDate).add(1, 'day');
  }

  return result;
};
