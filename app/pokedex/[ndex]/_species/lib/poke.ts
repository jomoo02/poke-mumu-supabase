'use server';

import { createClient } from '@/app/utils/supabase/server';

export async function fetchPokeSpecies(ndex: number) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('species')
    .select(`name_ko`)
    .eq('no', ndex)
    .maybeSingle();

  if (error || !data) {
    return '';
  }

  return data.name_ko;
}
