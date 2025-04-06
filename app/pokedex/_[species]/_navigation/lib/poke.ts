'use server';

import { createClient } from '@/app/utils/supabase/server';
import { Tables } from '@/types_db';

export type SpeciesPoke = Tables<'species'>;

export async function fetchNavPoke(
  species: string,
): Promise<{ prev: SpeciesPoke | null; next: SpeciesPoke | null } | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('species')
    .select('no')
    .eq('species', species);

  if (error || !data) {
    // console.error('현재 species 데이터를 찾을 수 없음:', currentError);
    return null;
  }

  const { no } = data[0];

  const { data: speciesData, error: speciesError } = await supabase
    .from('species')
    .select('*')
    .in('no', [no - 1, no + 1]);

  if (speciesError || speciesData.length === 0) {
    return null;
  }

  const prev = speciesData.find(({ no: prevNo }) => prevNo === no - 1) || null;
  const next = speciesData.find(({ no: nextNo }) => nextNo === no + 1) || null;

  return {
    prev,
    next,
  };
}
