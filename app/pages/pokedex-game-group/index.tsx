import { fetchRegionalPokedex } from './api';
import RegionalDex from './ui/regional-dex';

interface PokedexGameGameGroupPageProps {
  gameGroup: string;
}

export default async function PokedexGameGameGroupPage({
  gameGroup,
}: PokedexGameGameGroupPageProps) {
  const {
    dexRegion,
    description,
    gameGroup: gameGroupKo,
  } = await fetchRegionalPokedex(gameGroup);

  return (
    <div className="max-w-6xl mx-auto flex flex-col w-full px-2 sm:px-4 py-6 sm:py-14 min-w-0 flex-1 gap-8">
      <h1 className="scroll-m-20 text-3xl font-semibold text-foreground">
        {gameGroupKo} 도감
      </h1>
      <div className="text-foreground my-6 whitespace-pre-line break-keep text-pretty">
        {description}
      </div>
      {dexRegion.map((dex) => (
        <div key={dex.id}>
          <div>{dex.regionKo}</div>
          <RegionalDex pokes={dex.entries} />
        </div>
      ))}
    </div>
  );
}
