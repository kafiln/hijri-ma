const { fetchData } = require('../src/api');
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
  //   expect(result).toContain(config.YEAR);
  // });
  // it.only('Should display the current date', async () => {
  //   const result = await getCurrentDate(false);
  //   console.log(result);
  //   expect(result).toContain(config.YEAR);
  // });

  it('Should throw an error', async () => {
    try {
      const _ = await fetchData('http://localhost:3000/');
    } catch (error) {
      expect(error).toBe('Some Error');
    }
  });
});
