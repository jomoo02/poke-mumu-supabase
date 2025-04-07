'use server';

import { createClient } from '@/app/utils/supabase/server';
import { Tables } from '@/types_db';

export type SpeciesPoke = Tables<'species'>;

export async function fetchNavPoke(
  ndex: number,
): Promise<{ prev: SpeciesPoke | null; next: SpeciesPoke | null } | null> {
  const supabase = await createClient();

  if (isNaN(ndex)) {
    return null;
  }

  const { data: speciesData, error } = await supabase
    .from('species')
    .select('*')
    .in('no', [ndex - 1, ndex + 1]);

  if (error || !speciesData) return null;

  const prev = speciesData.find(({ no }) => no === ndex - 1) || null;
  const next = speciesData.find(({ no }) => no === ndex + 1) || null;

  return { prev, next };
}
