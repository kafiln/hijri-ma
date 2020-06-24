const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);
const config = require('./config');

export const localTime = date =>
  dayjs(date).utc().utcOffset(config.TIMEZONE_OFFSET);
