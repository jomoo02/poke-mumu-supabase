import Link from 'next/link';
import { formatPokedexNumber } from '@/app/utils/format-pokdex-number';
import ArrowLeftIcon from '@/app/components/icon/arrow-left';
import ArrowRightIcon from '@/app/components/icon/arrow-right';
import type { SpeciesPoke } from '../types';

interface NavButtonProps {
  poke: SpeciesPoke;
}

function Prev({ poke }: NavButtonProps) {
  const { no, species, name_ko: name } = poke;

  return (
    <Link
      href={`/pokedex/${no}/${species}`}
      className="flex items-center rounded-lg bg-transparent hover:bg-neutral-300/40 active:bg-neutral-300/40 transition-colors duration-200 p-1 pr-2 sm:p-2"
      prefetch
    >
      <div className="flex justify-center items-center pr-1 sm:pr-2">
        <ArrowLeftIcon size="1.2rem" color="#1d293d" />
      </div>
      <p className="text-base font-medium text-slate-800">
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
      className="flex items-center flex-row-reverse rounded-lg  bg-transparent hover:bg-neutral-300/40 active:bg-neutral-300/40 transition-colors duration-200 p-1 pl-2 sm:p-2"
      prefetch
    >
      <div className="flex justify-center items-center pl-1 sm:pl-2">
        <ArrowRightIcon size="1.2rem" color="#1d293d" />
      </div>
      <p className="text-base font-medium text-slate-800">
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
