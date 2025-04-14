import { fetchEvolution, fetchEvolutionPoke } from '../api/evolution';
import Chain from '../components/chain';
import type { EvolutionData } from '../types/evolution';

interface EvolutionTreeProps {
  evolutionId: number;
}

export default async function EvolutionTree({
  evolutionId,
}: EvolutionTreeProps) {
  const evolution = await fetchEvolution(evolutionId);

  if (!evolution || !evolution.evolution_data) {
    return null;
  }

  const evolutionData = evolution.evolution_data as EvolutionData[];

  const pokeIdList = evolutionData.map(({ to_poke_id }) => to_poke_id);

  const evolutionPokeList = await fetchEvolutionPoke(pokeIdList);

  if (!evolutionPokeList) {
    return null;
  }

  return (
    <div>
      <Chain
        evolutionData={evolutionData}
        evolutionPokeList={evolutionPokeList}
      />
    </div>
  );
}
