const config = require('../src/config');
const {
  nodeFromUrl,
  stringDateFromText,
  dateFromtext,
  zeroFill,
  monthNumber,
} = require('../src');

const TEXT_CONTENT = 'الجمعة 27 شوّال 1441هـ الموافق لـ 19 يونيو 2020';
const HIJRI_TEXT_DATE = 'الجمعة 27 شوّال 1441هـ';
const HIJRI_DATE = '27/10/1441';

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
    expect(monthNumber('محرم')).toBe(1);
    expect(monthNumber('صفر')).toBe(2);
    expect(monthNumber('ربيع الأول')).toBe(3);
    expect(monthNumber('ربيع الثاني')).toBe(4);
    expect(monthNumber('جمادى الأولى')).toBe(5);
    expect(monthNumber('جمادى الثانية')).toBe(6);
    expect(monthNumber('رجب')).toBe(7);
    expect(monthNumber('شعبان')).toBe(8);
    expect(monthNumber('رمضان')).toBe(9);
    expect(monthNumber('شوّال')).toBe(10);
    expect(monthNumber('ذو القعدة')).toBe(11);
    expect(monthNumber('ذو الحجة')).toBe(12);
    //TODO: Handle not found case
  });
});
