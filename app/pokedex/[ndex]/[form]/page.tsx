import { Suspense } from 'react';
import Loading from './loading';

import PokedexDexnumberFormPage from '@/app/pages/pokedex-dexnumber-form';

export default async function FormPage({
  params,
}: {
  params: Promise<{ form: string }>;
}) {
  const { form } = await params;

  return (
    <div className="max-w-6xl mx-auto flex flex-col w-full px-3 sm:px-4 py-6 sm:py-10 min-w-0 flex-1 gap-8">
      <Suspense fallback={<Loading />}>
        <PokedexDexnumberFormPage pokeKey={form} />
      </Suspense>
    </div>
  );
}
