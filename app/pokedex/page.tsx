import PokedexServer from './components/pokedex-server';
import type { PokedexPoke } from '@/app/api/pokedex/route';
import { getPokeList } from './utils/get-poke';

export const revalidate = 3600;

export default async function PokedexPage() {
  const pokeList: PokedexPoke[] = await getPokeList();

  return <PokedexServer pokeList={pokeList} />;
}
