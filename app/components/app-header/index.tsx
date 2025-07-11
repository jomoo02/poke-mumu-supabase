import SearchIcon from '@/app/components/icon/search';
import Link from 'next/link';
import HomeButton from './home-button';
import MenuMobile from './menu-mobile';

export default function AppHeader() {
  return (
    <header className="z-[100] top-0 h-14 border-b border-slate-300 sticky bg-white">
      <div className="mx-auto xl:max-w-screen-xl flex justify-between items-center h-full px-5 ">
        <nav className="flex h-full items-center gap-6">
          <HomeButton />
          <div className="text-slate-800 font-medium items-center px-4 ml-4 hidden sm:flex">
            <Link href="/pokedex">도감</Link>
          </div>
          <div className="text-slate-800 font-medium items-center px-4 hidden sm:flex">
            <Link href="/natures">성격</Link>
          </div>
        </nav>
        <div className="flex gap-x-4 items-center">
          <Link href="/search" scroll={false}>
            <SearchIcon size={20} />
          </Link>
          <MenuMobile />
        </div>
      </div>
    </header>
  );
}
