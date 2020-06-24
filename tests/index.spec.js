const { getCurrentDate, getCurrentMonth } = require('../src');
const expectedDate = '‪1441‬ ‫ذو القعدة‬ ‪1‬';

jest.mock('../src/api');

describe('The main functionnalities', () => {
  it('Should get the current date', async () => {
    const result = await getCurrentDate();
    expect(result).toBe(expectedDate);
  });
  it('Should get the whole current month data', async () => {
    const result = await getCurrentMonth();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(29);
  });
});
