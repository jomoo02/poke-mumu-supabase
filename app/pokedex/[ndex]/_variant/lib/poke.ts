'use server';

import { createClient } from '@/app/utils/supabase/server';
import { Tables } from '@/types_db';

type Poke = Tables<'poke'>;

export type VariantPoke = Pick<Poke, 'poke_key' | 'name_ko' | 'form'>;

export async function fetchVariantPokeList(ndex: number) {
  const supabase = await createClient();

  const { data: variantPokeList, error: variantPokeError } = await supabase
    .from('poke')
    .select(
      `
      poke_key,
      name_ko,
      form
    `,
    )
    .eq('no', ndex)
    .order('id', { ascending: true });

  if (variantPokeError) {
    return null;
  }

  return variantPokeList;
}
