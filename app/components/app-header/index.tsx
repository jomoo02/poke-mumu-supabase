import SearchIcon from '@/app/components/icon/search';
import Link from 'next/link';
import HomeButton from './home-button';

export default function AppHeader() {
  return (
    <header className="z-[100] top-0 h-14 border-b border-slate-300 sticky bg-white">
      <div className="mx-auto xl:max-w-screen-xl flex justify-between items-center h-full px-5">
        <nav className="flex h-full items-center">
          <HomeButton />
          <div className="text-slate-600 c-text-base font-bold flex items-center px-4 sm:px-14">
            <Link href="/pokedex">포켓몬 도감</Link>
          </div>
        </nav>

        <div>
          <Link href="/search" scroll={false}>
            <SearchIcon size="1.5rem" />
          </Link>
        </div>
      </div>
    </header>
  );
}
