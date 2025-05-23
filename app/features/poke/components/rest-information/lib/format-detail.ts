import { getStatKo } from '@/app/lib/stat';
import type { EffortValue, Detail } from '../types';
import { getGrowthCurve } from './growth-rate';

const NULL_CASE_CHAR = '—';

const formatEffortValue = (effortValues: EffortValue[]) =>
  effortValues.map(
    ({ stat_name, stat_value }) => `${stat_value} ${getStatKo(stat_name)}`,
  );

export const formatDetail = (
  detail: Detail | null,
  effortValues: EffortValue[],
) => {
  if (!detail) {
    return {
      growthCurve: getGrowthCurve(null),
      baseFriendShip: NULL_CASE_CHAR,
      captureRate: NULL_CASE_CHAR,
      effortValues: [NULL_CASE_CHAR],
    };
  }

  const { base_friendship, capture_rate, growth_rate } = detail;

  return {
    growthCurve: getGrowthCurve(growth_rate),
    baseFriendShip: base_friendship ? String(base_friendship) : NULL_CASE_CHAR,
    captureRate: capture_rate !== null ? String(capture_rate) : NULL_CASE_CHAR,
    effortValues: formatEffortValue(effortValues),
  };
};
