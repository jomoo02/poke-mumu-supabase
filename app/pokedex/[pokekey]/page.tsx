import PokeNavigation from './_navigation';

export default async function Page({
  params,
}: {
  params: Promise<{ pokekey: string }>;
}) {
  const { pokekey } = await params;

  return <PokeNavigation pokeKey={pokekey} />;
}
