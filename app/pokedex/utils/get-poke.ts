'use server';

import { createClient } from '@/app/utils/supabase/server';

export async function getPokeList() {
  const supabase = await createClient();

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
