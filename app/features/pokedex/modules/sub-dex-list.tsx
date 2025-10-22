import type { VersionGroupPoke } from '../api/pokdex-version-group';
import SubDexPokeCard from '../components/sub-dex-poke-card';

interface SubdexListProps {
  pokes: VersionGroupPoke[];
}

export default function SubDexList({ pokes }: SubdexListProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10">
      {pokes.map((poke) => (
        <SubDexPokeCard key={poke.id} poke={poke} />
      ))}
    </div>
  );
}
