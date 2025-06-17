import PokeDetail from '@/app/features/poke/containers/poke-detail';
import { Suspense } from 'react';
import LoadingNdexForm from '@/app/features/poke/components/loading-ndex-form';

export default async function FormPage({
  params,
}: {
  params: Promise<{ form: string }>;
}) {
  const { form } = await params;

  return (
    <Suspense fallback={<LoadingNdexForm />}>
      <PokeDetail pokeKey={form} />
    </Suspense>
  );
}
