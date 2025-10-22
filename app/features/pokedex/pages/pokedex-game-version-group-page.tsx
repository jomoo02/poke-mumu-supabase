import { fetchVersionGroupPokedex } from '../api/pokdex-version-group';
import PokedexGameVersionGroupTitle from '../modules/pokdex-game-version-group-title';
import SubDexList from '../modules/sub-dex-list';

interface PokedexGameVersionGroupPageProps {
  versionGroup: string;
}

export default async function PokedexGameVersionGroupPage({
  versionGroup,
}: PokedexGameVersionGroupPageProps) {
  const pokes = await fetchVersionGroupPokedex(versionGroup);

  return (
    <div className="max-w-6xl mx-auto flex flex-col w-full px-2 sm:px-4 py-6 sm:py-10 min-w-0 flex-1 gap-8">
      <PokedexGameVersionGroupTitle versionGroup={versionGroup} />
      <SubDexList pokes={pokes} />
    </div>
  );
}
