import Search from '../features/search/containers/search';

export default function Page() {
  return (
    <div className="backdrop-blur-sm bg-zinc-900/30 z-[5000] top-0 left-0 fixed w-screen h-full flex justify-center lg:items-center">
      <div className="w-full h-full lg:w-[650px] lg:h-[500px]">
        <Search />
      </div>
    </div>
  );
}
