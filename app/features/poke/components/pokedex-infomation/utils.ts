import { formatPokedexNumber } from '@/app/utils/format-pokdex-number';
import { getInfoPokeSpriteSrc } from '@/app/utils/sprite';
import type { PokedexData } from '.';
import type { PokedexInfo, PokedexNumber } from './types';
import { getPokedexLabelKo } from './lib/pokdex-number';

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
  return pokedexNumbers.map(({ dex_type, dex_number, id }) => ({
    id,
    dex: getPokedexLabelKo(dex_type),
    dexNumber: formatPokedexNumber(dex_number),
  }));
};

export const formatData = (data: PokedexData, sprite: string) => {
  const { pokedexInfo, no, pokedexNumbers, name_ko: name, ...rest } = data;

  const src = getInfoPokeSpriteSrc(sprite);

  return {
    src,
    name,
    ndex: formatPokedexNumber(no),
    pokedexNumbers: formatPokedexNumbers(pokedexNumbers),
    ...rest,
    ...formatPokedexInfo(pokedexInfo),
  };
};
