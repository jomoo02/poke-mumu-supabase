import SectionHeader from '../section-header';
import { fetchEvolution, fetchEvolutionPoke } from './api/evolution';
import Chain from './components/chain';
// import Chain2 from './components/chain-v2';
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
      <div className="my-4 pb-4">
        <Chain
          evolutionData={evolutionData}
          evolutionPokeList={evolutionPokeList}
        />
      </div>
    </div>
  );
}
