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
          <div className=" foreground font-medium items-center px-4 ml-4 hidden sm:flex">
            <Link href="/pokedex">도감</Link>
          </div>
          <div className="text-foreground bg-mut font-medium items-center px-4 hidden sm:flex">
            <Link href="/move">기술</Link>
          </div>
          {/* <div className="text-muted font-medium items-center h-full rounded px-3 hidden sm:flex"> */}
          <Link
            href="/natures"
            className="hover:bg-secondary text-foreground font-medium items-center py-1 rounded-md px-4 hidden sm:flex"
          >
            성격
          </Link>
          {/* </div> */}
          <div className="text-[#0a0a0a] font-medium items-center px-4 hidden sm:flex">
            <Link href="/evolution">진화</Link>
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

// export default function AppHeader() {
//   return (
//     <header className="z-[100] top-0 h-14 border-b border-slate-300 sticky bg-white">
//       <div className="mx-auto xl:max-w-screen-xl flex justify-between items-center h-full px-5 ">
//         <nav className="flex h-full items-center gap-6">
//           <HomeButton />
//           <div className="text-slate-800 font-medium items-center px-4 ml-4 hidden sm:flex">
//             <Link href="/pokedex">도감</Link>
//           </div>
//           <div className="text-slate-800 font-medium items-center px-4 hidden sm:flex">
//             <Link href="/move">기술</Link>
//           </div>
//           <div className="text-slate-800 font-medium items-center px-4 hidden sm:flex">
//             <Link href="/natures">성격</Link>
//           </div>
//           <div className="text-slate-800 font-medium items-center px-4 hidden sm:flex">
//             <Link href="/evolution">진화</Link>
//           </div>
//         </nav>
//         <div className="flex gap-x-4 items-center">
//           <Link href="/search" scroll={false}>
//             <SearchIcon size={20} />
//           </Link>
//           <MenuMobile />
//         </div>
//       </div>
//     </header>
//   );
// }
