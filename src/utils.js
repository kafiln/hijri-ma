/**
 * Adds 0 to the string representation for month that are less than 10,
 * leave it as it is otherwise
 *@example
 * // returns "07"
 * zeroFill(7)
 * // returns "11"
 * zeroFill(11)
 * @param {Number} monthNumber the month number
 * @returns {String} the month number as a string with a leading 0 if ncecessart
 */
export const zeroFill = n => (('' + n).length < 2 ? '0' + n : '' + n);

/**
 *Used to correctly wrap a string to use in a concatenation with different direction ( rtl and ltr)
 *
 * @param {String} str the string to wrap
 * @param {Boolean} isRtl true if direction === 'rtl', false otherwise
 * @returns {String} the wrapped string
 */
export const wrapString = (str, isRtl) =>
  isRtl ? '\u202B' + str + '\u202C' : '\u202A' + str + '\u202C';

// export const stringDateFromText = textContent =>
//   textContent.split(' ').splice(0, 4).join(' ');

// export const dateFromtext = (textContent, separator = '/') => {
//   let [_day, date, month, year] = stringDateFromText(textContent).split(' ');
//   year = year.match(/\d*/g)[0];
//   month = getMonthNumber(month); //FIXME: Should handle exception where name not found

//   return [date, month, year].map(zeroFill).join(separator);
// };
