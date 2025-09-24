// import Toc from '@/app/features/poke/components/toc';

interface LayoutV1Props {
  children: React.ReactNode;
  toc?: React.ReactNode;
}

export default function LayoutV1({ children, toc }: LayoutV1Props) {
  return (
    <div className="max-w-screen mx-auto flex relative my-8">
      <div className="hidden xl:block min-w-40 w-64" />
      <div className="flex-1 flex">
        <div className="w-full flex-1 min-w-0 max-w-4xl mx-auto">
          {children}
        </div>
        <div className="min-w-72 w-72 max-w-72 hidden xl:block">
          {toc ? toc : null}
        </div>
      </div>
    </div>
  );
}
