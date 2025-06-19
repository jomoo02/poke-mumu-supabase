import PokeDetail from '@/app/features/poke/containers/poke-detail';
import { Suspense } from 'react';
import Loading from './loading';

export default async function FormPage({
  params,
}: {
  params: Promise<{ form: string }>;
}) {
  const { form } = await params;

  return (
    <Suspense fallback={<Loading />}>
      <PokeDetail pokeKey={form} />
    </Suspense>
  );
}
