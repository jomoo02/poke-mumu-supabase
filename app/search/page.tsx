import Search from '../features/search/containers/search';

export default function Page() {
  return (
    <div className="backdrop-blur-sm bg-zinc-900/30 z-[5000] top-0 left-0 fixed w-screen min-h-svh max-h-lvh flex justify-center lg:items-center">
      <div className="w-full max-h-lvh lg:w-[650px] lg:h-[500px]">
        <Search />
      </div>
    </div>
  );
}
