const { generateMonth } = require('../src/generate');
const config = require('../src/config');

jest.mock('../src/time');

describe('Generation of the hijri month', () => {
  it('Result should be an array containing all the days in the months', () => {
    const expected = 29,
      today = 1,
      month = 'ذو القعدة';
    const result = generateMonth(today, month, expected);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(expected);

    result.forEach(e => {
      expect(e.month.ar).toBe(month);
      expect(e.month.fr).toBe("Thul-Qi'dah");
      expect(e.year).toBe(config.YEAR);
    });

    expect(result[0].georgianDate).toBe('2020-06-23T00:00:00.000Z');
    expect(result[1].georgianDate).toBe('2020-06-24T00:00:00.000Z');
    expect(result[2].georgianDate).toBe('2020-06-25T00:00:00.000Z');
    expect(result[3].georgianDate).toBe('2020-06-26T00:00:00.000Z');
    expect(result[4].georgianDate).toBe('2020-06-27T00:00:00.000Z');
    expect(result[5].georgianDate).toBe('2020-06-28T00:00:00.000Z');
    expect(result[6].georgianDate).toBe('2020-06-29T00:00:00.000Z');
    expect(result[7].georgianDate).toBe('2020-06-30T00:00:00.000Z');
    expect(result[8].georgianDate).toBe('2020-07-01T00:00:00.000Z');
    expect(result[9].georgianDate).toBe('2020-07-02T00:00:00.000Z');
    expect(result[10].georgianDate).toBe('2020-07-03T00:00:00.000Z');
    expect(result[11].georgianDate).toBe('2020-07-04T00:00:00.000Z');
    expect(result[12].georgianDate).toBe('2020-07-05T00:00:00.000Z');
    expect(result[13].georgianDate).toBe('2020-07-06T00:00:00.000Z');
    expect(result[14].georgianDate).toBe('2020-07-07T00:00:00.000Z');
    expect(result[15].georgianDate).toBe('2020-07-08T00:00:00.000Z');
    expect(result[16].georgianDate).toBe('2020-07-09T00:00:00.000Z');
    expect(result[17].georgianDate).toBe('2020-07-10T00:00:00.000Z');
    expect(result[18].georgianDate).toBe('2020-07-11T00:00:00.000Z');
    expect(result[19].georgianDate).toBe('2020-07-12T00:00:00.000Z');
    expect(result[20].georgianDate).toBe('2020-07-13T00:00:00.000Z');
    expect(result[21].georgianDate).toBe('2020-07-14T00:00:00.000Z');
    expect(result[22].georgianDate).toBe('2020-07-15T00:00:00.000Z');
    expect(result[23].georgianDate).toBe('2020-07-16T00:00:00.000Z');
    expect(result[24].georgianDate).toBe('2020-07-17T00:00:00.000Z');
    expect(result[25].georgianDate).toBe('2020-07-18T00:00:00.000Z');
    expect(result[26].georgianDate).toBe('2020-07-19T00:00:00.000Z');
    expect(result[27].georgianDate).toBe('2020-07-20T00:00:00.000Z');
    expect(result[28].georgianDate).toBe('2020-07-21T00:00:00.000Z');
  });
});
