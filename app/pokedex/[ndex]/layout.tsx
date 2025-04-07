import { Suspense } from 'react';
import PokeNavigation from './_navigation';
import PokeVariant from './_variant';
import NavigationLoading from './_navigation/components/loading';
import PokeSpecies from './_species';
import SpeciesLoading from './_species/components/loading';

export default async function NdexLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ ndex: string }>;
}>) {
  const ndex = Number((await params).ndex);

  return (
    <div>
      <Suspense fallback={<NavigationLoading ndex={ndex} />}>
        <PokeNavigation ndex={ndex} />
      </Suspense>
      <Suspense fallback={<SpeciesLoading />}>
        <PokeSpecies ndex={ndex} />
      </Suspense>

      <PokeVariant ndex={ndex} />
      {children}
    </div>
  );
}
