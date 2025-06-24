import Search from '../features/search/containers/search';

export default function Page() {
  return (
    <div className="backdrop-blur-sm bg-slate-700/60  z-[5000] inset-0 fixed w-screen h-dvh flex justify-center items-center">
      <div className="w-full h-[550px] p-3 lg:w-[650px] lg:h-[500px]">
        <Search />
      </div>
    </div>
  );
}
