const { parse, getMonthNumber } = require('../src/hijri');

describe('Formating a hijri date', () => {
  it('Should return the right month number', () => {
    expect(getMonthNumber('محرم')).toBe(1);
    expect(getMonthNumber('صفر')).toBe(2);
    expect(getMonthNumber('ربيع الأول')).toBe(3);
    expect(getMonthNumber('ربيع الثاني')).toBe(4);
    expect(getMonthNumber('جمادى الأولى')).toBe(5);
    expect(getMonthNumber('جمادى الثانية')).toBe(6);
    expect(getMonthNumber('رجب')).toBe(7);
    expect(getMonthNumber('شعبان')).toBe(8);
    expect(getMonthNumber('رمضان')).toBe(9);
    expect(getMonthNumber('شوّال')).toBe(10);
    expect(getMonthNumber('ذو القعدة')).toBe(11);
    expect(getMonthNumber('ذو الحجة')).toBe(12);
    //TODO: Handle not found case
  });

  it.each([
    ['27/10/1441', '27 Shawwal 1441'],
    ['30/1/1441', '30 Muharram 1441'],
  ])('%s is %s', (date, expectedResult) => {
    expect(parse(date, false)).toBe(expectedResult);
  });
});
