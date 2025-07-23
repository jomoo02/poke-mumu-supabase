// import Toc from '@/app/features/poke/components/toc';

interface LayoutV1Props {
  children: React.ReactNode;
  toc?: React.ReactNode;
}

export default function LayoutV1({ children, toc }: LayoutV1Props) {
  return (
    <div className="max-w-screen mx-auto lg:flex relative my-8">
      <div className="hidden xl:block min-w-40 w-40" />
      <div className="w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-3 sm:px-6 lg:px-10">
        {children}
      </div>
      <div className="min-w-36 w-36 xl:min-w-40 xl:w-40">
        {toc ? toc : null}
      </div>
    </div>
  );
}
