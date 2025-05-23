'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

interface VarietyProps {
  form: string;
  name: string;
  href: string;
  formText: string | null;
}

export default function Variety({ name, form, href, formText }: VarietyProps) {
  const params = useParams<{ form: string }>();

  const isActive = params.form === form;

  // if (isActive) {
  //   return (
  //     <div className="px-3 lg:px-3.5 py-1 border-b-2 h-9 border-blue-400 text-blue-600 text-nowrap c-text-base">
  //       {name}
  //       {formText && <span className="pl-0.5 text-blue-600">({formText})</span>}
  //     </div>
  //   );
  // }
  return (
    <Link
      href={href}
      className={`px-3.5 py-1 border-b-2 h-9 ring-offset-1 bg-white outline-none focus-visible:ring-2 ring-zinc-500 ${
        isActive ? 'border-zinc-900' : 'border-transparent'
      } text-nowrap font-medium`}
    >
      <span
        className={`${
          isActive ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'
        }`}
      >
        {name}
      </span>
      {formText && (
        <span className={`pl-0.5 ${isActive ? 'text-zinc-900' : ''}`}>
          ({formText})
        </span>
      )}
    </Link>
  );
}
