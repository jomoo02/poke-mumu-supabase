import PokedexGameVersionGroupPage from '@/app/features/pokedex/pages/pokedex-game-version-group-page';

export default async function Page({
  params,
}: {
  params: Promise<{ version_group: string }>;
}) {
  const { version_group: versionGroup } = await params;

  return <PokedexGameVersionGroupPage versionGroup={versionGroup} />;
}
