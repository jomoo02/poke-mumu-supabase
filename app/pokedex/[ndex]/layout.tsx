// import SpeciesLayoutLoading from '@/app/features/species/containers/species-layout-loading';
import SpeciesLayout from '@/app/features/species/containers/species-layout';
// import { Suspense } from 'react';
import Toc from '@/app/features/poke/components/toc';

export default async function NdexLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ ndex: string }>;
}) {
  const ndex = Number((await params).ndex);

  return (
    // <div className="px-3 lg:px-10">
    //   {/* <Suspense fallback={<SpeciesLayoutLoading ndex={ndex} />}> */}
    //   <SpeciesLayout ndex={ndex} />
    //   {/* </Suspense> */}
    //   {children}
    // </div>

    <div className="max-w-screen mx-auto lg:flex relative">
      <div className="hidden xl:block min-w-40 w-40" />

      <div className="w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-3 sm:px-6">
        <SpeciesLayout ndex={ndex} />
        {/* </Suspense> */}
        {children}
      </div>
      <Toc />
    </div>
  );
}
