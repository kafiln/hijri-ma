const { generateMonth } = require('../src/generate');
const config = require('../src/config');

jest.mock('../src/time');

describe('Generation of the hijri month', () => {
  it('Result should be an array containing all the days in the months', () => {
    const expected = 29,
      today = 1,
      month = 'ذو القعدة';
    const result = generateMonth(today, month, expected, { year: 1442 });
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(expected);

    result.forEach(e => {
      expect(e.month.ar).toBe(month);
      expect(e.month.fr).toBe("Thul-Qi'dah");
      expect(e.year).toBe(1442);
    });

    expect(result[0].gregorianDate).toBe('2020-06-23');
    expect(result[1].gregorianDate).toBe('2020-06-24');
    expect(result[2].gregorianDate).toBe('2020-06-25');
    expect(result[3].gregorianDate).toBe('2020-06-26');
    expect(result[4].gregorianDate).toBe('2020-06-27');
    expect(result[5].gregorianDate).toBe('2020-06-28');
    expect(result[6].gregorianDate).toBe('2020-06-29');
    expect(result[7].gregorianDate).toBe('2020-06-30');
    expect(result[8].gregorianDate).toBe('2020-07-01');
    expect(result[9].gregorianDate).toBe('2020-07-02');
    expect(result[10].gregorianDate).toBe('2020-07-03');
    expect(result[11].gregorianDate).toBe('2020-07-04');
    expect(result[12].gregorianDate).toBe('2020-07-05');
    expect(result[13].gregorianDate).toBe('2020-07-06');
    expect(result[14].gregorianDate).toBe('2020-07-07');
    expect(result[15].gregorianDate).toBe('2020-07-08');
    expect(result[16].gregorianDate).toBe('2020-07-09');
    expect(result[17].gregorianDate).toBe('2020-07-10');
    expect(result[18].gregorianDate).toBe('2020-07-11');
    expect(result[19].gregorianDate).toBe('2020-07-12');
    expect(result[20].gregorianDate).toBe('2020-07-13');
    expect(result[21].gregorianDate).toBe('2020-07-14');
    expect(result[22].gregorianDate).toBe('2020-07-15');
    expect(result[23].gregorianDate).toBe('2020-07-16');
    expect(result[24].gregorianDate).toBe('2020-07-17');
    expect(result[25].gregorianDate).toBe('2020-07-18');
    expect(result[26].gregorianDate).toBe('2020-07-19');
    expect(result[27].gregorianDate).toBe('2020-07-20');
    expect(result[28].gregorianDate).toBe('2020-07-21');
  });
});
