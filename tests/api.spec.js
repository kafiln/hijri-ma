const { fetchData } = require('../src/api');
const config = require('../src/config');
const { getData } = require('../src/extract');

describe('Scrapping the website', () => {
  it('Should return a result', async () => {
    const result = await fetchData(config.url);
    expect(result).toEqual(expect.anything());
  });

  it('test scrapping the data', async () => {
    const result = await getData();
    expect([30, 29]).toContain(result.expected);
  });

  it('Should throw an error', async () => {
    try {
      const _ = await fetchData('http://localhost:3000/');
    } catch (error) {
      expect(error).toBe('Some Error');
    }
  });
});
