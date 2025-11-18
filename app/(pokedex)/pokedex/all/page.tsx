// import PokedexAllPage from '@/app/pages/pokedex-all';
import PokedexAllPage2 from '@/app/pages/pokedex-all-2';

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{
    sortBy: string | undefined;
    direction: string | undefined;
    type: string | undefined;
  }>;
}) {
  return <PokedexAllPage2 searchParams={searchParams} />;
}
