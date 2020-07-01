const { getCurrentDate, getCurrentMonth, getAll } = require('../src');
const { localTime } = require('../src/time');
const { DATEFORMAT } = require('../src/config');
const arDate = '‪1441‬ ‫ذو القعدة‬ ‪1‬';
const date = "1 Thul-Qi'dah 1441";

jest.mock('../src/api');
jest.mock('../src/time');

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
    let day = localTime().format(DATEFORMAT);
    const result = await getCurrentMonth();
    expect(result).toMatchSnapshot();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(29);
    for (let i = 0; i < 29; i++) {
      expect(result[i].day).toBe(i + 1);
      expect(result[i].month).toBe(11);
      expect(result[i].year).toBe(1441);
      expect(result[i].gregorianDate).toBe(day);
      day = localTime(day).add(1, 'day').format(DATEFORMAT);
    }
  });
});
