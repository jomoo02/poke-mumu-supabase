import SearchIcon from '@/app/icon/search';
import Link from 'next/link';
import HomeButton from './home-button';

export default function AppHeader() {
  return (
    <header className="z-[100] top-0 h-14 border-b border-slate-300">
      <div className="mx-auto xl:max-w-screen-xl flex justify-between items-center h-full px-5">
        <HomeButton />
        <div>
          <SearchIcon size="1.5rem" />
          {/* <Link href="/search" scroll={false}>
            <SearchIcon size="1.5rem" />
          </Link> */}
        </div>
      </div>
    </header>
  );
}
