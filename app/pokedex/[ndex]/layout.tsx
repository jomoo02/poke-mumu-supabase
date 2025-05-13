// import SpeciesLayoutLoading from '@/app/features/species/containers/species-layout-loading';
import SpeciesLayout from '@/app/features/species/containers/species-layout';
// import { Suspense } from 'react';

export default async function NdexLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ ndex: string }>;
}) {
  const ndex = Number((await params).ndex);

  return (
    <div className="px-3 lg:px-10">
      {/* <Suspense fallback={<SpeciesLayoutLoading ndex={ndex} />}> */}
      <SpeciesLayout ndex={ndex} />
      {/* </Suspense> */}
      {children}
    </div>
  );
}
