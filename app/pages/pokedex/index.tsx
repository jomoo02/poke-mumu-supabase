import NationalDex from './ui/national-dex';
import RegionalDexList from './ui/regional-dex-list';

export default function PokedexPage() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col w-full px-2 sm:px-4 py-6 sm:py-10 min-w-0 flex-1 gap-8">
      <h1 className="scroll-m-20 text-3xl font-semibold text-foreground">
        도감
      </h1>
      <NationalDex />
      <RegionalDexList />
    </div>
  );
}
