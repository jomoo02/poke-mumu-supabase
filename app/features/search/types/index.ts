import { Tables } from '@/types_db';

type Poke = Tables<'poke'>;

export type SearchPoke = Omit<
  Poke,
  'created_at' | 'evolution_id' | 'name_ja' | 'species_id'
>;
