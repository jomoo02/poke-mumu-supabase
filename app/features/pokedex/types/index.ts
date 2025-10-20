import { Tables } from '@/types_db';

type PokeStat = Tables<'poke_stat'>;

type Poke = Tables<'poke'>;

type TargetPoke = Omit<
  Poke,
  'created_at' | 'evolution_id' | 'name_en' | 'name_ja' | 'species_id'
>;

export type TargetPokeStat = Omit<
  PokeStat,
  'id' | 'poke_id' | 'created_at'
> | null;

export type PokeList = (TargetPoke & { poke_stat: TargetPokeStat })[];

// export type PokedexPoke = {
//   form: string | null;
//   id: number;
//   name: string;
//   no: number;
//   pokeKey: string;
//   sprite: string;
//   type1: string;
//   type2: string | null;
//   attack: number;
//   defense: number;
//   hp: number;
//   special_attack: number;
//   special_defense: number;
//   speed: number;
//   total: number;
// };

export type PokedexPoke = {
  form: string | null;
  id: number;
  name: string;
  no: number;
  pokeKey: string;
  sprite: string;
  type1: string;
  type2: string | null;
  attack: number;
  defense: number;
  hp: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  total: number;
};
