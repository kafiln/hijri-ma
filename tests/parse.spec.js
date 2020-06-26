const { parse } = require('../src/parse');

describe('Parsing hijri dates', () => {
  it.each([
    ['27/10/1441', '27 Shawwal 1441', false],
    ['30/1/1441', '30 Muharram 1441', false],
    ['30/1/1441', '30 محرم 1441', true],
  ])('%s is %s', (date, expectedResult, inArabic) => {
    expect(parse(date, inArabic)).toBe(expectedResult);
  });

  it('Should be parsed in Arabic by default', () => {
    const date = '30/1/1441',
      expectedResult = '30 محرم 1441';
    expect(parse(date)).toBe(expectedResult);
  });
});
