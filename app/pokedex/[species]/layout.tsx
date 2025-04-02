import { Suspense } from 'react';
import PokeNavigation from './_navigation';
import Loading from './_navigation/components/loading';
import PokeVariant from './_variant';

export default async function SpeciesLayout({
  params,
  children,
}: {
  params: Promise<{ species: string }>;
  children: React.ReactNode;
}) {
  const { species } = await params;

  return (
    <div>
      <Suspense fallback={<Loading species={species} />}>
        <PokeNavigation species={species} />
      </Suspense>
      <PokeVariant species={species} />
      {children}
    </div>
  );
}
