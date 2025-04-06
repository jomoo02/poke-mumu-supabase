import { Suspense } from 'react';
import Loading from './_navigation/components/loading';
import PokeNavigation from './_navigation';

export default async function NdexPage({
  params,
}: {
  params: Promise<{ ndex: string }>;
}) {
  const { ndex } = await params;

  return (
    <div>
      <Suspense fallback={<Loading ndex={ndex} />}>
        <PokeNavigation ndex={ndex} />
      </Suspense>
    </div>
  );
}
