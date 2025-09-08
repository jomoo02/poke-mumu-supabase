import { natureTableBodyData } from './data';

export const getNatureTableRawData = (inputValue: string) => {
  const bodyData = natureTableBodyData.map(({ en, ...rest }) => ({
    ...rest,
    en: `${en[0].toUpperCase() + en.slice(1)}`,
  }));

  if (!inputValue) return bodyData;

  // 숫자 제거 + 공백 제거
  const cleanInput = inputValue.replace(/[0-9\s]/g, '');
  if (!cleanInput) return [];

  const isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(cleanInput);

  return bodyData.filter(({ en, ko }) => {
    const target = isKorean ? ko : en;
    const cleanTarget = target.replace(/[0-9\s]/g, '');
    return cleanTarget.toLowerCase().includes(cleanInput.toLowerCase());
  });
};
