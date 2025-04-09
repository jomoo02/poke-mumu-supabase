import { fetchPoke } from '../api/poke';
import Stats from '../modules/stats';
import SectionHeader from '../components/section-header';
import TypeDefense from '../modules/type-defense';

interface PokeDetailProps {
  pokeKey: string;
}

export default async function PokeDetail({ pokeKey }: PokeDetailProps) {
  const data = await fetchPoke(pokeKey);

  if (!data) {
    return null;
  }

  const { type_1, type_2, poke_stat: pokeStats } = data;

  const types = type_2 ? [type_1, type_2] : [type_1];

  return (
    <div>
      <div>
        <SectionHeader sectionTitle="능력치" />
        <div className="grid c-border-outer divide-y divide-slate-300 rounded-lg bg-white">
          <Stats stats={pokeStats} />
        </div>
      </div>
      <div>
        <SectionHeader sectionTitle="방어 상성" />
        <div className="c-border-outer rounded-lg bg-white">
          <TypeDefense types={types} />
        </div>
      </div>
    </div>
  );
}
