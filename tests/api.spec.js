const { fetchData } = require('../src/api');
const config = require('../src/config');

describe.only('Steps to get the text', () => {
  it('Should return a valid result', async () => {
    const result = await fetchData(config);
    expect(result).toContain('هـ');
  });

  it('Should return a response similar to snapshot', async () => {
    const result = await fetchData(config);
    expect(result).toMatchSnapshot();
  });

  it('Should throw an error', async () => {
    try {
      const result = await fetchData({
        websiteUrl: 'http://localhost:33/',
        textNode: 'not a valid node',
      });
    } catch (error) {
      expect(error).toBe('Some Error');
    }
  });
});
