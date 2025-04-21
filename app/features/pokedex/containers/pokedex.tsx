import { fetchPokedexPokeList } from '../api/pokdex';
import PokedexTable from '../components/pokedex-table';
import setPokedexPokeList from '../lib/set-pokedex-poke-list';

export default async function Pokedex() {
  const pokeList = await fetchPokedexPokeList();

  // const pokeTest = pokeList.slice(0, 100);

  return <PokedexTable pokeList={setPokedexPokeList(pokeList)} />;
}
