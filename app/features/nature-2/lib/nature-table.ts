import { natureTableBodyData } from '../data/nature';

export const getNatureTableBodyData = () => {
  return natureTableBodyData.map(({ en, ...rest }) => ({
    ...rest,
    en: `${en[0].toUpperCase() + en.slice(1)}`,
  }));
};
