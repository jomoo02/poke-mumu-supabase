import { Suspense } from 'react';
import PokeNavigation from './_navigation';
import Loading from './_navigation/components/loading';

export default async function Page({
  params,
}: {
  params: Promise<{ species: string }>;
}) {
  const { species } = await params;

  return (
    <div>
      <Suspense fallback={<Loading species={species} />}>
        <PokeNavigation species={species} />
      </Suspense>
    </div>
  );
}
