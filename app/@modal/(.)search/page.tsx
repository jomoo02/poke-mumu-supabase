import Search from '@/app/search/components/search';

export default function Page() {
  return (
    <div className="backdrop-blur-sm z-[5000] top-0 left-0 fixed w-screen h-screen flex justify-center lg:items-center text-slate-800 font-pretendard text-sm lg:text-[15px] font-medium">
      <div className="w-full h-full lg:w-[650px] lg:h-[500px]">
        <Search />
      </div>
    </div>
  );
}
