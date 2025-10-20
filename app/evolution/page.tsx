import { fetchEvolutionChainAll } from '../features/poke/api/evolution-chain';
import Evolution from '../features/poke/components/evolution';
import LayoutV1 from '../components/page-layout/layout-v1';
import EvolutionV2 from '../features/poke/components/evolution-v2';

export default async function EvolutionPage() {
  const data = await fetchEvolutionChainAll();

  return (
    <div className="w-full max-w-6xl mx-auto">
      {data.slice(0, 10).map((d) => (
        <EvolutionV2 key={d.id} evolutionTree={d} />
      ))}
    </div>
  );
}
