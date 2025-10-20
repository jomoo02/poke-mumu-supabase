'use client';

import Link from 'next/link';
import useActiveHeading from './useActiveHeading';
import useToc from './useToc';

export default function Toc() {
  const { tocs } = useToc();
  const activeId = useActiveHeading(tocs);

  return (
    <div className="sticky top-20 h-60 min-w-36 w-36 xl:min-w-40 xl:w-40 hidden xl:block pl-10">
      {tocs.map(({ id, content }) => (
        <div
          key={id}
          className={`text-[15px] py-px ${
            activeId === id
              ? 'text-slate-800 font-semibold'
              : 'text-slate-500 font-medium hover:text-slate-800 transition hover:-translate-y-0.5'
          }`}
        >
          <Link href={`#${id}`}>{content}</Link>
        </div>
      ))}
    </div>
  );
}
