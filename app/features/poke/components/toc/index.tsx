'use client';

import Link from 'next/link';
import useActiveHeading from './useActiveHeading';
import useToc from './useToc';

export default function Toc() {
  const { tocs } = useToc();
  const activeId = useActiveHeading(tocs);

  return (
    <div className="sticky top-20 h-60 min-w-36 w-36 xl:min-w-44 xl:w-44 hidden lg:block px-1.5">
      {tocs.map(({ id, content }) => (
        <div
          key={id}
          className={`text-[15px] py-px ${
            activeId === id
              ? 'text-slate-900 font-semibold'
              : 'text-slate-500 font-medium hover:text-slate-800 transition hover:-translate-y-0.5'
          }`}
        >
          <Link href={`#${id}`}>{content}</Link>
        </div>
      ))}
    </div>
  );
}
