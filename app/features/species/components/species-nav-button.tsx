import Link from 'next/link';
import { formatPokedexNumber } from '@/app/utils/format-pokdex-number';
import CaretRightIcon from '@/app/components/icon/caret-right';
import CaretLeftIcon from '@/app/components/icon/caret-left';

import type { SpeciesPoke } from '../types';

interface NavButtonProps {
  poke: SpeciesPoke;
}

function Prev({ poke }: NavButtonProps) {
  const { no, species, name_ko: name } = poke;

  return (
    <Link
      href={`/pokedex/${no}/${species}`}
      className="flex items-center rounded-lg bg-transparent hover:bg-neutral-300/40 start-1 transition-colors duration-200 p-1 sm:p-2"
      prefetch
    >
      <CaretLeftIcon size="1.2rem" color="#1d293d" />
      <p className="text-base font-medium text-slate-800 px-1">
        {`${formatPokedexNumber(no)} ${name}`}
      </p>
    </Link>
  );
}

function Next({ poke }: NavButtonProps) {
  const { no, species, name_ko: name } = poke;

  return (
    <Link
      href={`/pokedex/${no}/${species}`}
      className="flex items-center flex-row-reverse rounded-lg  bg-transparent hover:bg-neutral-300/40 transition-colors duration-200 p-1 sm:p-2"
      prefetch
    >
      <CaretRightIcon size="1.2rem" color="#1d293d" />
      <p className="text-base font-medium text-slate-800 px-1 ">
        {`${formatPokedexNumber(no)} ${name}`}
      </p>
    </Link>
  );
}

const NavButton = {
  Prev,
  Next,
};

export default NavButton;
