const { parse } = require('../src/parse');

it.each([
  ['27/10/1441', '27 Shawwal 1441'],
  ['30/1/1441', '30 Muharram 1441'],
])('%s is %s', (date, expectedResult) => {
  expect(parse(date, false)).toBe(expectedResult);
});
