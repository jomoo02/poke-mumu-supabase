'use server';

import { createClient } from '@/app/utils/supabase/server';
import { Tables } from '@/types_db';

export type SpeciesPoke = Tables<'species'>;

export async function fetchNavPoke(
  ndex: string,
): Promise<{ prev: SpeciesPoke | null; next: SpeciesPoke | null } | null> {
  const supabase = await createClient();

  const pokeNumber = Number(ndex);

  if (isNaN(pokeNumber)) return null;

  const { data: speciesData, error } = await supabase
    .from('species')
    .select('*')
    .in('no', [pokeNumber - 1, pokeNumber + 1]);

  if (error || !speciesData) return null;

  const prev = speciesData.find(({ no }) => no === pokeNumber - 1) || null;
  const next = speciesData.find(({ no }) => no === pokeNumber + 1) || null;

  return { prev, next };
}
