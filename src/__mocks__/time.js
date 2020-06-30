const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);
const config = require('../config');

export const localTime = time => {
  const date = time || '2020-06-22T23:00:00.000Z';
  return dayjs(date).utc().utcOffset(config.TIMEZONE_OFFSET);
};
