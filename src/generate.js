import { getMonthName, getMonthNumber } from './hijri';

const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);
const config = require('./config');

const localTime = _ => dayjs(_).utc().utcOffset(config.TIMEZONE_OFFSET);

export const generateMonth = (today, month, expected) => {
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
        fr: getMonthName(monthIndex, 'fr'),
      },
      georgianDate: localTime(currentDate).format('DD-MM-YYYY'),
    });
    currentDate = localTime(currentDate).add(1, 'day');
  }

  return result;
};
