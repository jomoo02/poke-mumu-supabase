import { createMapGetter } from '@/app/utils/create-map-getter';

export type GrowthRate =
  | 'medium-slow'
  | 'medium'
  | 'fast'
  | 'slow'
  | 'slow-then-very-fast'
  | 'fast-then-very-slow';

const growthRateKoMap: Record<GrowthRate, string> = {
  slow: '항상 많음',
  'medium-slow': '초반 매우 적음, 후반 보통',
  medium: '항상 보통',
  fast: '항상 적음',
  'slow-then-very-fast': '초반 매우 많음, 후반 매우 적음',
  'fast-then-very-slow': '초반 매우 적음, 후반 매우 많음',
};

const expPointsAtLevel50: Record<GrowthRate, number> = {
  slow: 156250,
  'medium-slow': 117360,
  medium: 125000,
  fast: 100000,
  'slow-then-very-fast': 125000,
  'fast-then-very-slow': 142500,
};

const expPointsAtLevel100: Record<GrowthRate, number> = {
  slow: 1250000,
  'medium-slow': 1059860,
  medium: 1000000,
  fast: 800000,
  'slow-then-very-fast': 600000,
  'fast-then-very-slow': 1640000,
};

export const getGrowthRateKo = createMapGetter(growthRateKoMap, 'medium');
export const getExpPointAtLevel50 = createMapGetter(
  expPointsAtLevel50,
  'medium',
);
export const getExpPointAtLevel100 = createMapGetter(
  expPointsAtLevel100,
  'medium',
);

export const getGrowthCurve = (growthRate: string | null) => {
  return {
    growthRate: getGrowthRateKo(growthRate),
    expPointAtLevel50: getExpPointAtLevel50(growthRate),
    expPointAtLevel100: getExpPointAtLevel100(growthRate),
  };
};
