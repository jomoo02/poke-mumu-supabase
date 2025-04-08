import { Tables } from '@/types_db';

type Poke = Tables<'poke'>;

export type SpeciesPoke = Tables<'species'>;

export type VarietyPoke = Pick<Poke, 'poke_key' | 'name_ko' | 'form'>;
