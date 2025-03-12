export default async function Page({
  params,
}: {
  params: Promise<{ pokekey: string }>;
}) {
  const { pokekey } = await params;
  return <div>{pokekey}</div>;
}
