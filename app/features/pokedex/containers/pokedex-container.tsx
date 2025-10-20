import { fetchPokedexPokeList } from '../api/pokdex';
// import setPokedexPokeList from '../lib/set-pokedex-poke-list';
import Pokedex from '../components/pokedex';

export default async function PokedexContainer() {
  const pokeList = await fetchPokedexPokeList();

  return <Pokedex pokeList={pokeList} />;
}
