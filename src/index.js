import { getData } from './extract';
import { formatDate } from './format';
import { generateMonth } from './generate';
import { getMonthNumber } from './hijri';

//FIXME: The format logic should be moved to a separate file/module
export const getCurrentDate = async (inArabic = true) => {
  const { today, month } = await getData();
  const monthIndex = getMonthNumber(month);
  return formatDate(today, monthIndex, inArabic);
};
export const getCurrentMonth = async () => {
  const { today, month, expected } = await getData();
  return generateMonth(today, month, expected);
};
