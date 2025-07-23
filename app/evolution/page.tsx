import { fetchEvolutionChainAll } from '../features/poke/api/evolution-chain';
import Evolution from '../features/poke/components/evolution';
import LayoutV1 from '../components/page-layout/layout-v1';

export default async function EvolutionPage() {
  const data = await fetchEvolutionChainAll();

  return (
    <LayoutV1>
      <div>
        {data.map((d) => (
          <Evolution key={d.id} evolutionTree={d} />
        ))}
      </div>
    </LayoutV1>
  );
}
