import { createMapGetter } from '@/app/utils/create-map-getter';

export type Stat =
  | 'hp'
  | 'attack'
  | 'defense'
  | 'special_attack'
  | 'special_defense'
  | 'speed'
  | 'special-attack'
  | 'special-defense'
  | 'default';

const statKoMap: Record<Stat, string> = {
  hp: '체력',
  attack: '공격',
  defense: '방어',
  special_attack: '특수공격',
  special_defense: '특수방어',
  speed: '스피드',
  'special-attack': '특수공격',
  'special-defense': '특수방어',
  default: '',
};

export const getStatKo = createMapGetter(statKoMap, 'default');
