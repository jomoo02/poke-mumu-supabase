import Search from './components/search';

export default function Page() {
  return (
    <div className="text-sm lg:text-[15px] text-slate-800 font-medium backdrop-blur-sm bg-gray-200/30 z-[5000] top-0 left-0 fixed w-screen h-screen flex justify-center lg:items-center">
      <div className="w-full h-full lg:w-[650px] lg:h-[500px]">
        <Search />
      </div>
    </div>
  );
}
