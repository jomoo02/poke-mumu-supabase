import PokeDetail from '@/app/features/poke/containers/poke-detail';

export default async function FormPage({
  params,
}: {
  params: Promise<{ form: string }>;
}) {
  const { form } = await params;

  return (
    <div>
      <PokeDetail pokeKey={form} />
    </div>
  );
}
