// import PokedexAllPage from '@/app/pages/pokedex-all';
import PokedexAllPage2 from '@/app/pages/pokedex-all-2';
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    sortBy: string | undefined;
    direction: string | undefined;
    type: string | undefined;
  }>;
}) {
  const filters = await searchParams;
  const { sortBy, direction, type } = filters;
  console.log('ww', sortBy);
  return <PokedexAllPage2 sortBy={sortBy} direction={direction} type={type} />;
}
