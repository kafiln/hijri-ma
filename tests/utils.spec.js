const config = require('../config');
const {
  nodeFromUrl,
  stringDateFromText,
  dateFromtext,
  zeroFill,
  monthNumber,
} = require('..');

const TEXT_CONTENT = 'الجمعة 27 شوّال 1441هـ الموافق لـ 19 يونيو 2020';
const HIJRI_TEXT_DATE = 'الجمعة 27 شوّال 1441هـ';
const HIJRI_DATE = '27/09/1441';

describe('Steps to get the text', () => {
  it('Should get the node from the config', async () => {
    const node = await nodeFromUrl(config); //TODO: Mock this
    expect(node.textContent).toMatchSnapshot();
  });

  it('Should add zero only when necessary', () => {
    expect(zeroFill(9)).toBe('09');
    expect(zeroFill(27)).toBe('27');
    expect(zeroFill(1441)).toBe('1441');
  });

  it('Should take only the necessary data', () => {
    const result = stringDateFromText(TEXT_CONTENT);
    expect(result).toBe(HIJRI_TEXT_DATE);
  });
  it('Should parse correct date', () => {
    const result = dateFromtext(TEXT_CONTENT);
    expect(result).toBe(HIJRI_DATE);
  });

  it('Should return the right month number', () => {
    //TODO: Add other months
    //TODO: Handle not found case
    expect(monthNumber('شوّال')).toBe(9);
  });
});
