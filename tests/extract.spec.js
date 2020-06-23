const { getData } = require('../src/extract');
const { getMonthName } = require('../src/hijri');

jest.mock('../src/api');

describe('Extracting data from web page', () => {
  it('Should get the expected month length and name', async () => {
    const result = await getData();
    // expect(result.expected).toBe(29);
    // expect(result.today).toBe(1);
    // expect(result.month).toBe(MONTHS_AR[10]);

    expect(result).toEqual({
      expected: 29,
      month: getMonthName(11),
      today: 1,
    });
  });
});
