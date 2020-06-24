import config from './config';
import { getData } from './extract';
import { generateMonth } from './generate';

/**
 *Used to correctly wrap a string to use in a concatenation with different direction ( rtl and ltr)
 *
 * @param {String} str the string to wrap
 * @param {Boolean} isRtl true if direction === 'rtl', false otherwise
 * @returns {String} the wrapped string
 */
const wrapString = (str, isRtl) =>
  isRtl ? '\u202B' + str + '\u202C' : '\u202A' + str + '\u202C';

//FIXME: The format logic should be moved to a separate file/module
export const getCurrentDate = async () => {
  const { today, month } = await getData();
  return (
    [
      {
        name: config.YEAR,
      },
      {
        name: month,
        isRtl: true,
      },
      {
        name: today,
      },
    ]
      // .reverse()
      .map(e => wrapString(e.name, e.isRtl))
      .join(' ')
  );
};
export const getCurrentMonth = async () => {
  const { today, month, expected } = await getData();
  return generateMonth(today, month, expected);
};
