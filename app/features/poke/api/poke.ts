'use server';

// import { createClient } from '@/app/utils/supabase/server';
import { createClient } from '@/app/utils/supabase/client';

export async function fetchPoke(pokeKey: string) {
  const supabase = createClient();

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
        ),
        evolution_id,
        poke_moves_2 (
          id,
          version_group (
            id,
            generation,
            identifier,
            order
          ),
          moves
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
