'use server';

import { createClient } from '@/app/utils/supabase/server';

export async function fetchEvolution(evolutionId: number) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('evolution_mview')
    .select('*')
    .eq('evolution_id', evolutionId)
    .maybeSingle();

  if (error) {
    return null;
  }

  return data;
}

export async function fetchEvolutionPoke(pokeIdList: number[]) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('poke')
    .select(
      `
      id,
      name_ko,
      form,
      poke_key,
      no,
      sprite
      `,
    )
    .in('id', pokeIdList);

  if (error) {
    return null;
  }

  return data;
}
