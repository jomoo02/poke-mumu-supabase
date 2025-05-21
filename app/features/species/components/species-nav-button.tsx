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
      className="flex rounded-lg bg-transparent hover:bg-neutral-300/40 transition-colors duration-200 py-2 sm:px-2"
      prefetch
    >
      <div className="flex justify-center items-center pr-1 sm:pr-2">
        <ArrowLeftIcon size="1.2rem" />
      </div>
      <div className="flex  h-full gap-x-1.5 justify-center text-base items-center font-medium text-slate-800">
        <span>{`${formatPokedexNumber(no)}`}</span>
        <span>{name}</span>
      </div>
    </Link>
  );
}

function Next({ poke }: NavButtonProps) {
  const { no, species, name_ko: name } = poke;

  return (
    <Link
      href={`/pokedex/${no}/${species}`}
      className="flex flex-row-reverse rounded-lg hover:bg-neutral-300/40 transition-colors duration-200 py-2 sm:px-2"
      prefetch
    >
      <div className="flex justify-center items-center pl-1 sm:pl-2">
        <ArrowRightIcon size="1.2rem" />
      </div>
      <div className="flex h-full gap-x-1.5 justify-center items-center font-medium text-[15px] text-slate-800">
        <span>{`${formatPokedexNumber(no)}`}</span>
        <span>{name}</span>
      </div>
    </Link>
  );
}

const NavButton = {
  Prev,
  Next,
};

export default NavButton;
