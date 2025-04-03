import { createClient } from '@/app/utils/supabase/server';

export async function fetchAbility(pokeId: number) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('poke_ability')
    .select(
      `
    ability (
      id,
      name_ko,
      flavor_text
    )`,
    )
    .eq('poke_id', pokeId);

  if (error) {
    return [];
  }

  return { poke_id: pokeId, ability: data.map(({ ability }) => ability) };
}

export async function fetchStat(pokeId: number) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('poke_stat')
    .select(
      `
    id,
    hp,
    attack,
    defense,
    special_attack,
    special_defense,
    speed`,
    )
    .eq('poke_id', pokeId);

  if (error) {
    return null;
  }

  return { poke_id: pokeId, stat: data };
}

export async function fetchEvolution(evolutionId: number | null) {
  if (!evolutionId) {
    return null;
  }

  const supabase = await createClient();

  const { data, error } = await supabase
    .from('evolution_mview')
    .select(`*`)
    .eq('evolution_id', evolutionId)
    .maybeSingle();

  if (error || !data) {
    return null;
  }
  return data;
}

export async function fetchMove(pokeId: number) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('poke_moves_2')
    .select('*')
    .eq('poke_id', pokeId);

  if (error) {
    return null;
  }
  return { pokeId, moves: data };
}

export async function fetchVariantPoke(poke: {
  id: number;
  evolution_id: number;
}) {
  const [ability, stat, move] = await Promise.all();
}
