const { getMonthName } = require('../src/hijri');
const { generateMonth } = require('../src/generate');
const config = require('../src/config');

jest.mock('../src/time');

describe('Generation of the hijri month', () => {
  it('Result should be an array containing all the days in the months', () => {
    const expected = 29,
      today = 1,
      month = getMonthName(11);
    const result = generateMonth(today, month, expected);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(expected);

    result.forEach(e => {
      expect(e.month.ar).toBe(month);
      expect(e.month.fr).toBe(getMonthName(11, 'fr'));
      expect(e.year).toBe(config.YEAR);
    });

    expect(result[0].georgianDate).toBe('23-06-2020');
    expect(result[1].georgianDate).toBe('24-06-2020');
    expect(result[2].georgianDate).toBe('25-06-2020');
    expect(result[3].georgianDate).toBe('26-06-2020');
    expect(result[4].georgianDate).toBe('27-06-2020');
    expect(result[5].georgianDate).toBe('28-06-2020');
    expect(result[6].georgianDate).toBe('29-06-2020');
    expect(result[7].georgianDate).toBe('30-06-2020');
    expect(result[8].georgianDate).toBe('01-07-2020');
    expect(result[9].georgianDate).toBe('02-07-2020');
    expect(result[10].georgianDate).toBe('03-07-2020');
    expect(result[11].georgianDate).toBe('04-07-2020');
    expect(result[12].georgianDate).toBe('05-07-2020');
    expect(result[13].georgianDate).toBe('06-07-2020');
    expect(result[14].georgianDate).toBe('07-07-2020');
    expect(result[15].georgianDate).toBe('08-07-2020');
    expect(result[16].georgianDate).toBe('09-07-2020');
    expect(result[17].georgianDate).toBe('10-07-2020');
    expect(result[18].georgianDate).toBe('11-07-2020');
    expect(result[19].georgianDate).toBe('12-07-2020');
    expect(result[20].georgianDate).toBe('13-07-2020');
    expect(result[21].georgianDate).toBe('14-07-2020');
    expect(result[22].georgianDate).toBe('15-07-2020');
    expect(result[23].georgianDate).toBe('16-07-2020');
    expect(result[24].georgianDate).toBe('17-07-2020');
    expect(result[25].georgianDate).toBe('18-07-2020');
    expect(result[26].georgianDate).toBe('19-07-2020');
    expect(result[27].georgianDate).toBe('20-07-2020');
    expect(result[28].georgianDate).toBe('21-07-2020');
  });
});
