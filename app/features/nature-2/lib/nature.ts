import { createMapGetter } from '@/app/utils/create-map-getter';
import { natures, naturesKoMap, type Nature } from '../data/nature';

export const getNatures = (): Nature[] => {
  return [...natures];
};

export const getNaturesKo = (nature: string) => {
  const fallbackKey = 'bold';

  return createMapGetter(naturesKoMap, fallbackKey)(nature);
};
