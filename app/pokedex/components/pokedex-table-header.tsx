export default function PokedexTableHeader() {
  return (
    <tr className="h-10 text-nowrap text-sm text-slate-600 bg-slate-200 ">
      <th className="min-w-[4rem] w-[4rem] xl:min-w-[4.5rem] xl:w-[4.5rem] border-r-2 border-white md:rounded-tl-md">
        번호
      </th>
      <th className="border-x-2 border-white w-full">이름</th>
      <th className="min-w-20 w-20 sm:min-w-24 sm:w-24 border-x-2 border-white">
        타입
      </th>
      <th className="min-w-[5.5rem] w-[5.5rem] border-x-2 border-white hidden md:table-cell">
        종족값
      </th>
      <th className="min-w-[5.5rem] w-[5.5rem] border-x-2 border-white hidden lg:table-cell">
        체력
      </th>
      <th className="min-w-[5.5rem] w-[5.5rem] border-x-2 border-white hidden lg:table-cell">
        공격
      </th>
      <th className="min-w-[5.5rem] w-[5.5rem] border-x-2 border-white hidden lg:table-cell">
        방어
      </th>
      <th className="min-w-[5.5rem] w-[5.5rem] border-x-2 border-white hidden lg:table-cell">
        특수공격
      </th>
      <th className="min-w-[5.5rem] w-[5.5rem] border-x-2 border-white hidden lg:table-cell">
        특수방어
      </th>
      <th className="min-w-[5.5rem] w-[5.5rem] border-l-2 border-white md:rounded-tr-md hidden lg:table-cell">
        스피드
      </th>
    </tr>
  );
}
