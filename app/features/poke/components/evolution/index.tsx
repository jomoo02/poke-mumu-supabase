import SectionHeader from '../section-header';
import { fetchEvolution, fetchEvolutionPoke } from './api/evolution';
import Chain from './components/chain';
import type { EvolutionData } from './types/evolution';

interface EvolutionTreeProps {
  evolutionId: number | undefined | null;
}

function NullCase() {
  return null;
  // return (
  //   <div>
  //     <SectionHeader id="evolution" sectionTitle="진화" />
  //     <p className="font-medium text-slate-800">진화가 존재하지 않습니다.</p>
  //   </div>
  // );
}

export default async function EvolutionTree({
  evolutionId,
}: EvolutionTreeProps) {
  if (!evolutionId) {
    return <NullCase />;
  }

  const evolution = await fetchEvolution(evolutionId);

  if (!evolution || !evolution.evolution_data) {
    return <NullCase />;
  }

  const evolutionData = evolution.evolution_data as EvolutionData[];

  const pokeIdList = evolutionData.map(({ to_poke_id }) => to_poke_id);

  const evolutionPokeList = await fetchEvolutionPoke(pokeIdList);

  if (!evolutionPokeList) {
    return <NullCase />;
  }

  return (
    <div>
      <SectionHeader id="evolution" sectionTitle="진화" />
      <div className="border border-slate-300 bg-white rounded-lg shadow-md shadow-slate-300 grid divide-y divide-slate-300">
        <Chain
          evolutionData={evolutionData}
          evolutionPokeList={evolutionPokeList}
        />
      </div>
    </div>
  );
}
