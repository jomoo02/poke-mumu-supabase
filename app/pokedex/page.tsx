import PokedexServer from './components/pokedex-server';
import type { PokedexPoke } from '@/app/api/pokedex/route';

export const revalidate = 3600;

export default async function PokedexPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/pokedex`,
  ).then((res) => res.json());
  const pokeList: PokedexPoke[] = res.data;

  return <PokedexServer pokeList={pokeList} />;
}
