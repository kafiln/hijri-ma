const { fetchData, ApiError } = require('../src/api');
const config = require('../src/config');
const { getData } = require('../src/extract');
const { getCurrentDate } = require('../src');

describe('Scrapping the website', () => {
  it('Should return a result', async () => {
    const result = await fetchData(config.url);
    expect(result).toEqual(expect.anything());
  });

  it('test scrapping the data', async () => {
    const result = await getData();
    expect([30, 29]).toContain(result.expected);
  });

  // Test real web calls

  // it.only('Should display the current date in Arabic', async () => {
  //   const result = await getCurrentDate();
  //   console.log(result);
  //   expect(result).toContain(config.year);
  // });
  // it.only('Should display the current date', async () => {
  //   const result = await getCurrentDate(false);
  //   console.log(result);
  //   expect(result).toContain(config.year);
  // });

  it('Should throw an error', async () => {
    expect(() => fetchData('http://localhost:3000/').toThrow(ApiError));
  });
  it('Should throw an error', async () => {
    try {
      const _ = await fetchData('http://localhost:3000/');
    } catch (err) {
      expect(err.message).toBe('API Error');
      expect(err.status).toBe(500);
    }
  });
});
