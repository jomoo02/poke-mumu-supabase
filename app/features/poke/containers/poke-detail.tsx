import { fetchPoke } from '../api/poke';
import Stats from '../modules/stats';
import SectionHeader from '../components/section-header';

interface PokeDetailProps {
  pokeKey: string;
}

export default async function PokeDetail({ pokeKey }: PokeDetailProps) {
  const data = await fetchPoke(pokeKey);

  if (!data) {
    return null;
  }

  const pokeStats = data.poke_stat;

  return (
    <div>
      <div>
        <SectionHeader sectionTitle="능력치" />
        <div className="grid c-border-outer divide-y divide-slate-300 rounded-lg bg-white">
          <Stats stats={pokeStats} />
        </div>
      </div>
    </div>
  );
}
