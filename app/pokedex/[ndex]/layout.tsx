import SpeciesLayout from '@/app/features/species/containers/species-layout';
import { Suspense } from 'react';
import SpeciesLayoutSkeleton from '@/app/features/species/components/skeleton';
import Toc from '@/app/features/poke/components/toc';
import LayoutV1 from '@/app/components/page-layout/layout-v1';

export default async function NdexLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ ndex: string }>;
}) {
  const ndex = Number((await params).ndex);

  return (
    <LayoutV1 toc={<Toc />}>
      <Suspense fallback={<SpeciesLayoutSkeleton />}>
        <SpeciesLayout ndex={ndex} />
      </Suspense>
      {children}
    </LayoutV1>
    // <div className="max-w-screen mx-auto lg:flex relative my-8">
    //   <div className="hidden xl:block min-w-40 w-40" />
    //   <div className="w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-3 sm:px-6 lg:px-10">
    //     <Suspense fallback={<SpeciesLayoutSkeleton />}>
    //       <SpeciesLayout ndex={ndex} />
    //     </Suspense>
    //     {children}
    //   </div>
    //   <Toc />
    // </div>
  );
}
