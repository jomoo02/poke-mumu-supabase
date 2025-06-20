import { fetchPokedexPokeList } from '../api/pokdex';
// import PokedexTable from '../components/pokedex-table';
import setPokedexPokeList from '../lib/set-pokedex-poke-list';
import PokedexTableV2 from '../components/pokedex-table-v2';

export default async function Pokedex() {
  const pokeList = await fetchPokedexPokeList();

  // const pokeTest = pokeList.slice(0, 100);

  return <PokedexTableV2 pokeList={setPokedexPokeList(pokeList)} />;
}
