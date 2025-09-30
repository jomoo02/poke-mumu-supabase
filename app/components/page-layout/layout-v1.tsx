// import Toc from '@/app/features/poke/components/toc';

interface LayoutV1Props {
  children: React.ReactNode;
  toc?: React.ReactNode;
}

export default function LayoutV1({ children, toc }: LayoutV1Props) {
  return (
    <div className="flex flex-col px-2 flex-1 xl:grid xl:grid-cols-[256px_minmax(0,1fr)]">
      <div className="hidden xl:block min-w-40 w-64" />

      <div className="w-full h-full flex">
        <div className="flex-1 min-w-0 flex flex-col max-w-4xl mx-auto">
          {children}
        </div>
        <div className="min-w-72 w-72 max-w-72 hidden xl:block">
          {toc ? toc : null}
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}
