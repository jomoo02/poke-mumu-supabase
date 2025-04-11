'use server';

import { createClient } from '@/app/utils/supabase/server';

export async function fetchPoke(pokeKey: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('poke')
    .select(
      `
        id,
        type_1,
        type_2,
        poke_stat (
          hp,
          attack,
          defense,
          special_attack,
          special_defense,
          speed
        ),
        poke_ability (
          slot,
          ability (
            name_ko,
            flavor_text,
            id
          )
        )
    `,
    )
    .eq('poke_key', pokeKey)
    .maybeSingle();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}
