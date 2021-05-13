const MONTHS_AR = 'محرم_صفر_ربيع الأول_ربيع الآخر_جمادى الأولى_جمادى الآخرة_رجب_شعبان_رمضان_شوال_ذو القعدة_ذو الحجة'.split(
  '_'
);

const MONTHS = [
  'Muharram',
  'Safar',
  "Rabi' al-Awwal",
  "Rabi' al-Thani",
  'Jumada al-Ula',
  'Jumada al-Thania',
  'Rajab',
  "Sha'ban",
  'Ramadhan',
  'Shawwal',
  "Thul-Qi'dah",
  'Thul-Hijjah',
];

//FIXME: Disclaimer, I don't like the i18n, it needs to be handled properly

/**
 *
 *
 * @param {*} monthName
 */
export const translateMonthName = monthName =>
  MONTHS_AR.includes(monthName)
    ? MONTHS[MONTHS_AR.indexOf(monthName)]
    : MONTHS_AR[MONTHS.indexOf(monthName)];

/**
 *
 *
 * @param {*} number
 * @param {boolean} [inArabic=true]
 * @returns
 */
export const getMonthName = (number, inArabic = true) => {
  const months = inArabic ? MONTHS_AR : MONTHS;
  return months[number - 1];
};

// from 1 ==> 12
/**
 *
 *
 * @param {*} arabicName
 */
export const getMonthNumber = arabicName =>
  MONTHS_AR.indexOf(arabicName) + 1 || MONTHS.indexOf(arabicName) + 1;
