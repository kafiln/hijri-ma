const { localTime } = require('../src/time');

describe('Time function', () => {
  it('Should correctly parse the time', async () => {
    const date = '01-02-2020';
    const expectedResult = '2020-01-01T23:00:00.000Z';
    expect(localTime(date).toISOString()).toBe(expectedResult);
  });
});
