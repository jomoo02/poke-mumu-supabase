import { getEggGroupKo } from './egg-group';
import type { Breeding } from '../types';

const NULL_CASE_CHAR = '—';

const formatGenderRatio = (genderRate: number | null) => {
  if (genderRate === null || genderRate === -1) {
    return '무성';
  }

  const female = genderRate * 12.5;
  const male = 100 - female;

  return `${male}-${female}`;
};
export const formatBreeding = (breeding: Breeding | null) => {
  if (!breeding) {
    return {
      eggGroups: [getEggGroupKo('no-eggs')],
      genderRatio: formatGenderRatio(-1),
      hatchCounter: NULL_CASE_CHAR,
    };
  }

  const { egg_group_1, egg_group_2, gender_rate, hatch_counter } = breeding;

  return {
    eggGroups: [egg_group_1, egg_group_2]
      .filter((eggGroup) => eggGroup)
      .map(getEggGroupKo),
    genderRatio: formatGenderRatio(gender_rate),
    hatchCounter: hatch_counter ? String(hatch_counter) : NULL_CASE_CHAR,
  };
};
