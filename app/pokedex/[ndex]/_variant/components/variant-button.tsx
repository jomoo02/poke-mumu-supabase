'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

interface VariantButtonProps {
  form: string;
  name: string;
  formText: string | null;
  ndex: number;
}

export default function VariantButton({
  name,
  form,
  formText,
  ndex,
}: VariantButtonProps) {
  const params = useParams<{ ndex: string; form: string }>();

  const isActive = params.form === form;

  if (isActive) {
    return (
      <div className="px-3 lg:px-3.5 py-1 border-b-2 border-blue-400 text-blue-600 text-nowrap text-[15px] font-medium">
        {name}
        {formText && <span className="pl-0.5">({formText})</span>}
      </div>
    );
  }
  return (
    <Link
      href={`/pokedex/${ndex}/${form}`}
      className="px-3 lg:px-3.5 py-1 border-b-2 border-transparent bg-white hover:border-b-2 hover:border-slate-400 text-nowrap text-[15px] text-slate-800  font-medium"
    >
      {name}
      {formText && <span className="pl-0.5">({formText})</span>}
    </Link>
  );
}
