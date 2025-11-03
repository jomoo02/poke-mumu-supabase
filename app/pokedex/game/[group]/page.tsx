import PokedexGameGroupPage from '@/app/pages/pokedex-game-group';

export default async function Page({
  params,
}: {
  params: Promise<{ group: string }>;
}) {
  const { group } = await params;

  return <PokedexGameGroupPage gameGroup={group} />;
}
