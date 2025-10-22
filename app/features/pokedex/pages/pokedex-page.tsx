import Title from '../components/title';
import PokedexAllPokedex from '../modules/pokedex-all-pokedex';
import PokedexLocalPokedexList from '../modules/pokedex-local-pokedex-list';

export default function PokedexPage() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col w-full px-2 sm:px-4 py-6 sm:py-10 min-w-0 flex-1 gap-8">
      <Title title="포켓몬 도감" />
      <PokedexAllPokedex />
      <PokedexLocalPokedexList />
    </div>
  );
}
