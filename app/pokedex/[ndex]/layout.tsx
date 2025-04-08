import Loading from '@/app/features/species/loading';
import SpeciesLayout from '@/app/features/species/species-layout';
import { Suspense } from 'react';

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
      <Suspense fallback={<Loading ndex={ndex} />}>
        <SpeciesLayout ndex={ndex} />
      </Suspense>
      {children}
    </div>
  );
}
