'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

interface VariantButtonProps {
  variant: string;
  name: string;
  form: string | null;
  species: string;
}

export default function VariantButton({
  name,
  form,
  variant,
  species,
}: VariantButtonProps) {
  const params = useParams<{ species: string; variant: string }>();

  const isActive = params.variant === variant;

  if (isActive) {
    return (
      <div className="px-3 lg:px-3.5 py-1 border-b-2 border-blue-400 text-blue-600 text-nowrap text-[15px] font-medium">
        {name}
        {form && <span className="pl-0.5">({form})</span>}
      </div>
    );
  }
  return (
    <Link
      href={`/pokedex/${species}/${variant}`}
      className="px-3 lg:px-3.5 py-1 border-b-2 border-transparent bg-white hover:border-b-2 hover:border-slate-400 text-nowrap text-[15px] text-slate-800  font-medium"
    >
      {name}
      {form && <span className="pl-0.5">({form})</span>}
    </Link>
  );
}
