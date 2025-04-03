import { createClient } from '@/app/utils/supabase/server';
import { fetchAbility, fetchEvolution, fetchMove, fetchStat } from './lib/poke';

export default async function SpeciesPage({
  params,
}: {
  params: Promise<{ species: string }>;
}) {
  const supabase = await createClient();

  const { species } = await params;

  const { data: speciesData, error: speciesError } = await supabase
    .from('species')
    .select()
    .eq('species', species)
    .maybeSingle();

  if (speciesError || !speciesData) {
    return null;
  }

  const speciesId = speciesData.id;

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
    evolution_id,
    poke_stat (
      hp, attack, defense, special_attack, special_defense, speed
    ),
    poke_ability (
      ability (
        id,
        name_ko,
        flavor_text
      )
    ),
    poke_moves_2 (
      moves
    )
    `,
    )
    .eq('species_id', speciesId);
  if (error) {
    return null;
  }
  console.log(data);

  const evolutionIdList = data.map(({ evolution_id }) => evolution_id);

  // const ability = await Promise.all(idList.map(fetchAbility));
  // console.log(ability);

  // const stat = await Promise.all(idList.map(fetchStat));
  // console.log(stat);

  const evolution = await Promise.all(evolutionIdList.map(fetchEvolution));
  console.log(evolution);

  // const move = await Promise.all(idList.map(fetchMove));

  // console.log(move);
  return null;
}
