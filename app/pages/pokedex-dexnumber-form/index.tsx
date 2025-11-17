import { getPokeDetail } from './api';
import PokeAbilities from './ui/poke-abilities';
import PokedexDexNumberFormPageSkeleton from './ui/page-skeleton';
import PokeStats from './ui/poke-stats';

interface PokedexDexNumberFormPageProps {
  pokeKey: string;
}

export default async function PokedexDexnumberFormPage({
  pokeKey,
}: PokedexDexNumberFormPageProps) {
  const { abilities, stats } = await getPokeDetail(pokeKey);

  return (
    <div>
      {/* <PokedexDexNumberFormPageSkeleton /> */}
      {abilities && <PokeAbilities abilities={abilities} />}

      {stats && <PokeStats stats={stats} />}
    </div>
  );
}
