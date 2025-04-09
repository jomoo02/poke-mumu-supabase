import Link from 'next/link';
import { formatPokedexNumber } from '@/app/utils/format-pokdex-number';
import ArrowLeftIcon from '@/app/components/icon/arrow-left';
import ArrowRightIcon from '@/app/components/icon/arrow-right';
import type { SpeciesPoke } from '../types';

interface NavButtonProps {
  poke: SpeciesPoke;
}

function Prev({ poke }: NavButtonProps) {
  const { no, name_ko: name } = poke;

  return (
    <Link
      href={`/pokedex/${no}`}
      className="flex rounded-lg h-[52px] md:h-14 lg:h-16 c-border-outer bg-white hover:bg-blue-50"
      prefetch
    >
      <div className="flex justify-center items-center c-border-outer border-y-0 border-l-0 px-3 sm:px-4">
        <ArrowLeftIcon size="1.6rem" />
      </div>
      <div className="flex-1 flex w-full h-full gap-x-1.5 justify-center items-center font-medium">
        <span>{`#${formatPokedexNumber(no)}`}</span>
        <span>{name}</span>
      </div>
    </Link>
  );
}

function Next({ poke }: NavButtonProps) {
  const { no, name_ko: name } = poke;

  return (
    <Link
      href={`/pokedex/${no}`}
      className="flex flex-row-reverse c-border-outer rounded-lg h-[52px] md:h-14 lg:h-16 bg-white hover:bg-blue-50"
      prefetch
    >
      <div className="flex justify-center items-center c-border-outer border-y-0 border-r-0 px-3 sm:px-4">
        <ArrowRightIcon size="1.6rem" />
      </div>
      <div className="flex-1 flex w-full h-full gap-x-1.5 justify-center items-center font-medium">
        <span>{`#${formatPokedexNumber(no)}`}</span>
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
