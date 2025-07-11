import { fetchPokedexPokeList } from '../api/pokdex';
// import PokedexTable from '../components/pokedex-table';
import setPokedexPokeList from '../lib/set-pokedex-poke-list';
import Pokedex from '../components/pokedex';

export default async function PokedexContainer() {
  const pokeList = await fetchPokedexPokeList();

  // const pokeTest = pokeList.slice(0, 100);

  return <Pokedex pokeList={setPokedexPokeList(pokeList)} />;
}
