import Link from 'next/link';
import { formatPokedexNumber } from '@/app/utils/format-pokdex-number';
import ArrowLeftIcon from '@/app/components/icon/arrow-left';
import ArrowRightIcon from '@/app/components/icon/arrow-right';
import type { SpeciesPoke } from '../lib/poke';

interface NavButtonProps {
  poke: SpeciesPoke;
}

function Before({ poke }: NavButtonProps) {
  const { species, no, name_ko: name } = poke;

  return (
    <Link
      href={`/pokedex/${species}`}
      className="flex border-2 rounded-lg h-[52px] md:h-14 lg:h-16 border-slate-500 bg-white hover:bg-blue-50"
      prefetch
    >
      <div className="flex justify-center items-center border-r-2 border-slate-500 px-3 sm:px-4">
        <ArrowLeftIcon size="1.6rem" />
      </div>
      <div className="flex-1 flex w-full h-full gap-x-1.5 justify-center items-center font-medium">
        <span className="text-slate-600 text-sm lg:text-[15px] ">{`#${formatPokedexNumber(no)}`}</span>
        <span className="text-slate-800 text-sm lg:text-[15px] ">{name}</span>
      </div>
    </Link>
  );
}

function Next({ poke }: NavButtonProps) {
  const { species, no, name_ko: name } = poke;

  return (
    <Link
      href={`/pokedex/${species}`}
      className="flex flex-row-reverse border-2 rounded-lg h-[52px] md:h-14 lg:h-16 border-slate-500 bg-white hover:bg-blue-50"
      prefetch
    >
      <div className="flex justify-center items-center border-l-2 border-slate-500 px-3 sm:px-4">
        <ArrowRightIcon size="1.6rem" />
      </div>
      <div className="flex-1 flex w-full h-full gap-x-1.5 justify-center items-center font-medium">
        <span className="text-slate-600 text-sm lg:text-[15px]">{`#${formatPokedexNumber(no)}`}</span>
        <span className="text-slate-800 text-sm lg:text-[15px]">{name}</span>
      </div>
    </Link>
  );
}

const NavButton = {
  Before,
  Next,
};

export default NavButton;
