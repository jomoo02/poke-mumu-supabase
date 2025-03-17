import { getPokeList } from './utils/get-poke';
import Pokedex from './components/pokedex';

export default async function PokedexPage() {
  const pokeList = await getPokeList();

  const pokeTest = pokeList.slice(0, 50);

  return (
    <div className="max-w-[70rem] mx-auto sm:px-10 md:px-32 lg:px-0">
      <Pokedex pokeList={pokeTest} />
    </div>
  );
}
