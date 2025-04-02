'use server';

import { createClient } from '@/app/utils/supabase/server';
import { Tables } from '@/types_db';

type Poke = Tables<'poke'>;

export type VariantPoke = Pick<Poke, 'poke_key' | 'name_ko' | 'form'>;

export async function fetchVariantPokeList(species: string) {
  const supabase = await createClient();

  const { data: speciesData, error: speciesError } = await supabase
    .from('species')
    .select('id')
    .eq('species', species)
    .maybeSingle();

  if (speciesError || !speciesData) {
    return null;
  }

  const speciesId = speciesData.id;

  const { data: variantPokeList, error: variantPokeError } = await supabase
    .from('poke')
    .select(
      `
      poke_key,
      name_ko,
      form
    `,
    )
    .eq('species_id', speciesId)
    .order('id', { ascending: true });

  if (variantPokeError) {
    return null;
  }

  return variantPokeList;
}
