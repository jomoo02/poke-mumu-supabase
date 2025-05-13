import PokeDetail from '@/app/features/poke/containers/poke-detail';
import Toc from '@/app/features/poke/components/toc';
import { Suspense } from 'react';

export default async function FormPage({
  params,
}: {
  params: Promise<{ form: string }>;
}) {
  const { form } = await params;

  return (
    <div className="flex relative">
      <Suspense fallback={<div>loading</div>}>
        <PokeDetail pokeKey={form} />
      </Suspense>
      <Toc />
    </div>
  );
}
