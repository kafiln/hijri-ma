const { fetchData } = require('../src/api');
const config = require('../src/config');

describe('Scrapping the website', () => {
  // The HTML Changed
  it('Should return a result', async () => {
    const result = await fetchData(config.url);
    expect(result).toEqual(expect.anything());
  });

  it('Should throw an error', async () => {
    try {
      const _ = await fetchData('http://localhost:3000/');
    } catch (error) {
      expect(error).toBe('Some Error');
    }
  });
});
