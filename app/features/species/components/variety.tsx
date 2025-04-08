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

  if (isActive) {
    return (
      <div className="px-3 lg:px-3.5 py-1 border-b-2 h-9 border-blue-400 text-blue-600 text-nowrap text-[15px] font-medium">
        {name}
        {formText && <span className="pl-0.5">({formText})</span>}
      </div>
    );
  }
  return (
    <Link
      href={href}
      className="px-3 lg:px-3.5 py-1 border-b-2 border-transparent h-9 bg-white hover:border-b-2 hover:border-slate-400 text-nowrap text-[15px] text-slate-800  font-medium"
    >
      {name}
      {formText && <span className="pl-0.5">({formText})</span>}
    </Link>
  );
}
