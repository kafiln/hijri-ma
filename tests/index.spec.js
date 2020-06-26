const { getCurrentDate, getCurrentMonth } = require('../src');
const arDate = '‪1441‬ ‫ذو القعدة‬ ‪1‬';
const date = "1 Thul-Qi'dah 1441";

jest.mock('../src/api');

//FIXME: correct the test name
describe('The main functionnalities', () => {
  it.each([
    [, arDate],
    [true, arDate],
    [false, date],
  ])('Result in %s should be %s', async (lang, expectedDate) => {
    const result = await getCurrentDate(lang);
    expect(result).toBe(expectedDate);
  });

  it('Should get the whole current month data', async () => {
    const result = await getCurrentMonth();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(29);
  });
});
