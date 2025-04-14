import Link from 'next/link';
import { getPokedexPokeHref } from '@/app/utils/poke-link';

interface ChainPokeLinkProps {
  pokeKey: string;
  no: number;
  name: string;
  form: string | null;
}

export default function ChainPokeLink({
  pokeKey,
  no,
  name,
  form,
}: ChainPokeLinkProps) {
  const href = getPokedexPokeHref({ no, pokeKey });
  return (
    <Link
      href={href}
      className="text-center min-h-10 max-h-20 flex flex-col underline underline-offset-2 hover:text-blue-600"
    >
      {name}
      {form && <span className="c-text-xs">{form}</span>}
    </Link>
  );
}
