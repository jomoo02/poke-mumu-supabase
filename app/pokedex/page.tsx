import { getPokeList } from './lib/poke';
import Pokedex from './components/pokedex';
import setPokedexPokeList from './utils/set-pokedex-poke-list';

export default async function PokedexPage() {
  const pokeList = await getPokeList();

  // const pokeTest = pokeList.slice(0, 100);

  return (
    <div className="max-w-[70rem] mx-auto sm:px-10 md:px-32 lg:px-0">
      <Pokedex pokeList={setPokedexPokeList(pokeList)} />
    </div>
  );
}
