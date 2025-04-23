import { createMapGetter } from '@/app/utils/create-map-getter';

export const pokeTypeList = [
  'normal',
  'fire',
  'water',
  'grass',
  'electric',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
  'unknown',
] as const;

export type PokeType = (typeof pokeTypeList)[number];

const pokeTypeKoMap: Record<PokeType, string> = {
  normal: '노말',
  fire: '불꽃',
  water: '물',
  grass: '풀',
  electric: '전기',
  ice: '얼음',
  fighting: '격투',
  poison: '독',
  ground: '땅',
  flying: '비행',
  psychic: '에스퍼',
  bug: '벌레',
  rock: '바위',
  ghost: '고스트',
  dragon: '드래곤',
  dark: '악',
  steel: '강철',
  fairy: '페어리',
  unknown: '???',
};

export const getPokeTypeList = () => [...pokeTypeList];

export const getPokeTypeObj = () =>
  Object.fromEntries(pokeTypeList.map((type) => [type, type])) as Record<
    PokeType,
    PokeType
  >;

export function isPokeType(type: string): type is PokeType {
  return (pokeTypeList as readonly string[]).includes(type);
}

export const getPokeTypeKo = createMapGetter(pokeTypeKoMap, 'unknown');
