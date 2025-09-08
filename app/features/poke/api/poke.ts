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
        no,
        name_ko,
        form,
        sprite,
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
        poke_moves (
          id,
          version_group (
            id,
            generation,
            identifier,
            order
          ),
          moves
        ),
        pokedex_info (
          id,
          weight,
          height,
          genera
        ),
        pokedex_number (
          id,
          dex_type,
          dex_number
        ),
        poke_breeding (
          id,
          egg_group_1,
          egg_group_2,
          gender_rate,
          hatch_counter
        ),
        poke_effort_value (
          id,
          stat_name,
          stat_value
        ),
        poke_detail (
          id,
          capture_rate,
          growth_rate,
          base_friendship
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
