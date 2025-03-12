'use server';

import { createClient } from '@/app/utils/supabase/server';
import { Tables } from '@/types_db';
import { QueryData } from '@supabase/supabase-js';

type PokeStat = Tables<'poke_stat'>;
type Poke = Tables<'poke'>;

type TargetPoke = Omit<
  Poke,
  'created_at' | 'evolution_id' | 'name_en' | 'name_ja'
>;

export type PokedexPoke = TargetPoke & { poke_stat: PokeStat[] };

export async function getPokeList() {
  const supabase = await createClient();

  const pokeListQuery = supabase
    .from('poke')
    .select(
      `
      id,
      poke_key,
      no,
      name_ko,
      sprite,
      form,
      type_1,
      type_2,
      poke_stat (
        hp,
        attack,
        defense,
        special_attack,
        special_defense,
        speed
      )
    `,
    )
    .order('id', { ascending: true });

  type PokeList = QueryData<typeof pokeListQuery>;

  const { data, error } = await pokeListQuery;

  if (error) {
    console.error(error);
    return [];
  }

  const pokeList: PokeList = data;

  return pokeList;
}
