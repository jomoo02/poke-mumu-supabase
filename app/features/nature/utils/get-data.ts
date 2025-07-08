import {
  naturesKoMap,
  natures,
  naturesTable,
  type Nature,
} from '../data/nature';

export function getNatureKoNmae(value: string): string | null {
  if (value in naturesKoMap) {
    return naturesKoMap[value as Nature];
  }
  return null;
}

export function getNatureComboboxData() {
  const comboboxData = [...natures].map((nature) => {
    const koNature = getNatureKoNmae(nature);
    const label = `${koNature} · ${nature[0].toUpperCase() + nature.slice(1)}`;
    const value = nature;
    return { label, value };
  });
  return comboboxData;
}

export const getNatureTableData = () => {
  const headerData: {
    key: string;
    value: string;
    align: 'left' | 'center' | 'right' | 'justify' | 'char';
  }[] = [
    { key: 'nature', value: '성격', align: 'left' },
    { key: 'en', value: '영칭', align: 'left' },
    { key: 'increase', value: '상승', align: 'center' },
    { key: 'decrease', value: '하락', align: 'center' },
    { key: 'like', value: '좋아하는맛', align: 'center' },
    { key: 'dislike', value: '싫어하는맛', align: 'center' },
  ];

  const bodyData = naturesTable.map(({ en, ...rest }) => ({
    ...rest,
    en: `${en[0].toUpperCase() + en.slice(1)}`,
  }));

  return { headerData, bodyData };
};
