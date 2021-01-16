const { getMonthNumber, translateMonthName } = require('../src/hijri');

// Testing all the data to detect regression
//TODO: Using constants for names

describe.only('Hijri data', () => {
  it.each([
    ['محرم', 1],
    ['صفر', 2],
    ['ربيع الأول', 3],
    ['ربيع الآخر', 4],
    ['جمادى الأولى', 5],
    ['جمادى الآخرة', 6],
    ['رجب', 7],
    ['شعبان', 8],
    ['رمضان', 9],
    ['شوّال', 10],
    ['ذو القعدة', 11],
    ['ذو الحجة', 12],
    ['Muharram', 1],
    ['Safar', 2],
    ["Rabi' al-Awwal", 3],
    ["Rabi' al-Thani", 4],
    ['Jumada al-Ula', 5],
    ['Jumada al-Thania', 6],
    ['Rajab', 7],
    ["Sha'ban", 8],
    ['Ramadhan', 9],
    ['Shawwal', 10],
    ["Thul-Qi'dah", 11],
    ['Thul-Hijjah', 12],
  ])("%s 's number is %d", (name, number) => {
    expect(getMonthNumber(name)).toBe(number);
    //TODO: Handle not found case
  });

  it.each([
    ['محرم', 'Muharram'],
    ['Muharram', 'محرم'],

    ['صفر', 'Safar'],
    ['Safar', 'صفر'],

    ['ربيع الأول', "Rabi' al-Awwal"],
    ["Rabi' al-Awwal", 'ربيع الأول'],

    ['ربيع الآخر', "Rabi' al-Thani"],
    ["Rabi' al-Thani", 'ربيع الآخر'],

    ['جمادى الأولى', 'Jumada al-Ula'],
    ['Jumada al-Ula', 'جمادى الأولى'],

    ['جمادى الآخرة', 'Jumada al-Thania'],
    ['Jumada al-Thania', 'جمادى الآخرة'],

    ['رجب', 'Rajab'],
    ['Rajab', 'رجب'],

    ['شعبان', "Sha'ban"],
    ["Sha'ban", 'شعبان'],

    ['رمضان', 'Ramadhan'],
    ['Ramadhan', 'رمضان'],

    ['شوّال', 'Shawwal'],
    ['Shawwal', 'شوّال'],

    ['ذو القعدة', "Thul-Qi'dah"],
    ["Thul-Qi'dah", 'ذو القعدة'],

    ['ذو الحجة', 'Thul-Hijjah'],
    ['Thul-Hijjah', 'ذو الحجة'],
    //TODO: Handle not found case
  ])('%s is the correct translation for %s', (original, translated) => {
    expect(translateMonthName(original)).toBe(translated);
  });
});
