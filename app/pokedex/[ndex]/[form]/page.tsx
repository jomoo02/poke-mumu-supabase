import PokeDetail from '@/app/features/poke/containers/poke-detail';
import { Suspense } from 'react';

export default async function FormPage({
  params,
}: {
  params: Promise<{ form: string }>;
}) {
  const { form } = await params;

  return (
    <Suspense fallback={<div className="h-screen">loading</div>}>
      <PokeDetail pokeKey={form} />
    </Suspense>
  );
}
