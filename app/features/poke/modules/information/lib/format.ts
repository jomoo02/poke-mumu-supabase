import { formatPokedexNumber } from '@/app/utils/format-pokdex-number';
import { getStatKo } from '@/app/lib/stat';
import type {
  PokedexNumber,
  EffortValue,
  Detail,
  Breeding,
  PokedexInfo,
} from '../types';
import { getEggGroupKo } from './egg-group';
import { getGrowthCurve } from './growth-rate';
import { getPokedexLabelKo } from './pokdex-number';

const NULL_CASE_CHAR = '—';

const formatMeasurement = (value: number, unit: string) => {
  const meters = value / 10;

  const formattedMeters = meters.toFixed(1);

  return `${formattedMeters} ${unit}`;
};

const formatPokedexInfo = (pokedexInfo: PokedexInfo | null) => {
  if (!pokedexInfo) {
    return {
      height: '0 m',
      weight: '0 kg',
      genera: '포켓몬',
    };
  }

  return {
    height: formatMeasurement(pokedexInfo.height, 'm'),
    weight: formatMeasurement(pokedexInfo.weight, 'kg'),
    genera: pokedexInfo.genera,
  };
};

const formatPokedexNumbers = (pokedexNumbers: PokedexNumber[]) => {
  return pokedexNumbers
    .filter(({ dex_type }) => dex_type !== 'national')
    .map(({ dex_type, dex_number, id }) => ({
      id,
      dex: getPokedexLabelKo(dex_type),
      dexNumber: formatPokedexNumber(dex_number),
    }));
};

export const formatBasic = ({
  pokedexNumbers,
  types,
  ndex,
  name,
  form,
  pokedexInfo,
}: {
  pokedexNumbers: PokedexNumber[];
  types: string[];
  ndex: number;
  name: string;
  form: string | null;
  pokedexInfo: PokedexInfo | null;
}) => {
  return {
    ...formatPokedexInfo(pokedexInfo),
    types,
    ndex: formatPokedexNumber(ndex),
    name,
    form,
    pokedexNumbers: formatPokedexNumbers(pokedexNumbers),
  };
};

const formatEffortValue = (effortValues: EffortValue[]) =>
  effortValues.map(
    ({ stat_name, stat_value }) => `${getStatKo(stat_name)} - ${stat_value}`,
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
