const hijri = require('../src/hijri');
const { parse } = require('../src/hijri');

describe('Formating a hijri date', () => {
  it.each([
    ['27/10/1441', '27 Shawwal 1441'],
    ['30/1/1441', '30 Muharram 1441'],
  ])('%s is %s', (date, expectedResult) => {
    expect(parse(date)).toBe(expectedResult);
  });
});
