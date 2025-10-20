import { Tables } from '@/types_db';

export type PokedexNumber = Pick<
  Tables<'pokedex_number'>,
  'id' | 'dex_type' | 'dex_number'
>;

export type PokedexInfo = Omit<Tables<'pokedex_info'>, 'poke_id'>;
