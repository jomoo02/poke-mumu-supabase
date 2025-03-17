'use server';

import { createClient } from '@/app/utils/supabase/client';
import { Tables } from '@/types_db';

type PokeStat = Tables<'poke_stat'>;
type Poke = Tables<'poke'>;

type TargetPoke = Omit<
  Poke,
  'created_at' | 'evolution_id' | 'name_en' | 'name_ja'
>;

export type TargetPokeStat = Omit<
  PokeStat,
  'id' | 'poke_id' | 'created_at'
> | null;

export type PokedexPoke = TargetPoke & { poke_stat: TargetPokeStat };

export async function getPokeList(): Promise<PokedexPoke[]> {
  const supabase = createClient();

  const { data, error } = await supabase
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

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
