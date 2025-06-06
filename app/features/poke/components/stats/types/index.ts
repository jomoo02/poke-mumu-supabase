import { Tables } from '@/types_db';

type PokeStat = Tables<'poke_stat'>;

export type PokeStats = Pick<
  PokeStat,
  'hp' | 'attack' | 'defense' | 'special_attack' | 'special_defense' | 'speed'
>;

export type Stat = keyof PokeStats;
