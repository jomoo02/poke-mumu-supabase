'use server';

import { createClient } from '@/app/utils/supabase/client';
import { Tables } from '@/types_db';

type PokeStat = Tables<'poke_stat'>;
type Poke = Tables<'poke'>;
type Species = Tables<'species'>;

type TargetSpecies = Pick<Species, 'id' | 'species'>;

type TargetPoke = Omit<
  Poke,
  'created_at' | 'evolution_id' | 'name_en' | 'name_ja'
>;

export type TargetPokeStat = Omit<
  PokeStat,
  'id' | 'poke_id' | 'created_at'
> | null;

export type PokeList = (TargetPoke & { poke_stat: TargetPokeStat } & {
  species: TargetSpecies;
})[];

export async function getPokeList(): Promise<PokeList> {
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
      species_id,
      species (
        id,
        species
      ),
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
