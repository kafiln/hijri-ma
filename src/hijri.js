const MONTHS_AR = 'محرم_صفر_ربيع الأول_ربيع الثاني_جمادى الأولى_جمادى الثانية_رجب_شعبان_رمضان_شوّال_ذو القعدة_ذو الحجة'.split(
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
  'Sha’ban',
  'Ramadhan',
  'Shawwal',
  'Thul-Qi’dah',
  'Thul-Hijjah',
];

//FIXME: Disclaimer, I don't like the i18n, it needs to be handled properly

// export const translateMonthName = monthName =>
//   MONTHS_AR.includes(monthName)
//     ? MONTHS[MONTHS_AR.indexOf(monthName)]
//     : MONTHS_AR[MONTHS.indexOf(monthName)];

export const getMonthName = (number, lang = 'ar') => {
  const months = lang === 'ar' ? MONTHS_AR : MONTHS;
  return months[number - 1];
};

// from 1 ==> 12
export const getMonthNumber = arabicName => MONTHS_AR.indexOf(arabicName) + 1;

export const parse = date => {
  const [day, month, year] = date.split('/');
  const monthName = getMonthName(month, 'fr');
  return [day, monthName, year].join(' ');
};
