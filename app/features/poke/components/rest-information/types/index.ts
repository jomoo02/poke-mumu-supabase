import { Tables } from '@/types_db';

export type PokedexNumber = Pick<
  Tables<'pokedex_number'>,
  'id' | 'dex_type' | 'dex_number'
>;

export type EffortValue = Pick<
  Tables<'poke_effort_value'>,
  'id' | 'stat_name' | 'stat_value'
>;

export type Detail = Omit<Tables<'poke_detail'>, 'poke_id' | 'created_at'>;

export type Breeding = Omit<Tables<'poke_breeding'>, 'poke_id' | 'created_at'>;
