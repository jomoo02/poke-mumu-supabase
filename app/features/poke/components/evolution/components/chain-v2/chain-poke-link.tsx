import Link from 'next/link';
import { getPokedexPokeHref } from '@/app/utils/poke-link';

interface PokeLinkProps {
  pokeKey: string;
  no: number;
  name: string;
  form: string | null;
}

export default function PokeLink({ pokeKey, no, name, form }: PokeLinkProps) {
  const href = getPokedexPokeHref({ no, pokeKey });

  return (
    <Link
      href={href}
      className="text-center flex flex-col outline-zinc-500 py-px my-1"
    >
      <span className="text-zinc-900  hover:underline ">{name}</span>
      {form && <span className="">{form}</span>}
    </Link>
  );
}
