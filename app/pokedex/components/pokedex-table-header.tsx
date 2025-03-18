import CaretDownIcon from '@/app/icon/caret-down';
import CaretUpIcon from '@/app/icon/caret-up';
import CaretUpDownIcon from '@/app/icon/caret-up-down';

interface PokedexTableHeaderProps {
  toggleSort: (column: string) => void;
  sortState: {
    column: string | null;
    direction: 'asc' | 'desc';
  };
}

export default function PokedexTableHeader({
  toggleSort,
  sortState,
}: PokedexTableHeaderProps) {
  return (
    <tr className="h-10 text-nowrap text-sm text-slate-600 bg-slate-200">
      <th className="min-w-[4.25rem] w-[4.25rem] xl:min-w-[4.7rem] h-full xl:w-[4.7rem] border-r-2 border-white md:rounded-tl-md">
        <button
          onClick={() => toggleSort('no')}
          type="button"
          className={`flex justify-around items-center w-full h-10 hover:bg-blue-200 cursor-pointer md:rounded-tl-md ${sortState.column === 'no' ? 'bg-blue-100' : 'bg-slate-200'}`}
        >
          <span>번호</span>
          {sortState.column !== 'no' ? (
            <CaretUpDownIcon />
          ) : sortState.direction === 'asc' ? (
            <CaretDownIcon />
          ) : (
            <CaretUpIcon />
          )}
        </button>
      </th>
      <th className="border-x-2 border-white w-full">
        <button
          onClick={() => toggleSort('name')}
          type="button"
          className={`flex px-4 justify-between items-center w-full h-10 hover:bg-blue-200 cursor-pointer ${sortState.column === 'name' ? 'bg-blue-100' : 'bg-slate-200'}`}
        >
          <span>이름</span>
          {sortState.column !== 'name' ? (
            <CaretUpDownIcon />
          ) : sortState.direction === 'asc' ? (
            <CaretDownIcon />
          ) : (
            <CaretUpIcon />
          )}
        </button>
      </th>
      <th className="min-w-20 w-20 sm:min-w-24 sm:w-24 border-x-2 border-white">
        타입
      </th>
      <th className="min-w-[5.5rem] w-[5.5rem] border-x-2 border-white hidden md:table-cell">
        <button
          onClick={() => toggleSort('total')}
          type="button"
          className={`flex justify-around items-center w-full h-10 hover:bg-blue-200 cursor-pointer ${sortState.column === 'total' ? 'bg-blue-100' : 'bg-slate-200'}`}
        >
          <span>종족값</span>
          {sortState.column !== 'total' ? (
            <CaretUpDownIcon />
          ) : sortState.direction === 'asc' ? (
            <CaretDownIcon />
          ) : (
            <CaretUpIcon />
          )}
        </button>
      </th>
      <th className="min-w-[5.5rem] w-[5.5rem] border-x-2 border-white hidden lg:table-cell">
        <button
          onClick={() => toggleSort('hp')}
          type="button"
          className={`flex justify-around items-center w-full h-10 hover:bg-blue-200 cursor-pointer ${sortState.column === 'hp' ? 'bg-blue-100' : 'bg-slate-200'}`}
        >
          <span>체력</span>
          {sortState.column !== 'hp' ? (
            <CaretUpDownIcon />
          ) : sortState.direction === 'asc' ? (
            <CaretDownIcon />
          ) : (
            <CaretUpIcon />
          )}
        </button>
      </th>
      <th className="min-w-[5.5rem] w-[5.5rem] border-x-2 border-white hidden lg:table-cell">
        <button
          onClick={() => toggleSort('attack')}
          type="button"
          className={`flex justify-around items-center w-full h-10 hover:bg-blue-200 cursor-pointer ${sortState.column === 'attack' ? 'bg-blue-100' : 'bg-slate-200'}`}
        >
          <span>공격</span>
          {sortState.column !== 'attack' ? (
            <CaretUpDownIcon />
          ) : sortState.direction === 'asc' ? (
            <CaretDownIcon />
          ) : (
            <CaretUpIcon />
          )}
        </button>
      </th>
      <th className="min-w-[5.5rem] w-[5.5rem] border-x-2 border-white hidden lg:table-cell">
        <button
          onClick={() => toggleSort('defense')}
          type="button"
          className={`flex justify-around items-center w-full h-10 hover:bg-blue-200 cursor-pointer ${sortState.column === 'defense' ? 'bg-blue-100' : 'bg-slate-200'}`}
        >
          <span>방어</span>
          {sortState.column !== 'defense' ? (
            <CaretUpDownIcon />
          ) : sortState.direction === 'asc' ? (
            <CaretDownIcon />
          ) : (
            <CaretUpIcon />
          )}
        </button>
      </th>
      <th className="min-w-[5.5rem] w-[5.5rem] border-x-2 border-white hidden lg:table-cell">
        <button
          onClick={() => toggleSort('special_attack')}
          type="button"
          className={`flex justify-around items-center w-full h-10 hover:bg-blue-200 cursor-pointer ${sortState.column === 'special_attack' ? 'bg-blue-100' : 'bg-slate-200'}`}
        >
          <span>특수공격</span>
          {sortState.column !== 'special_attack' ? (
            <CaretUpDownIcon />
          ) : sortState.direction === 'asc' ? (
            <CaretDownIcon />
          ) : (
            <CaretUpIcon />
          )}
        </button>
      </th>
      <th className="min-w-[5.5rem] w-[5.5rem] border-x-2 border-white hidden lg:table-cell">
        <button
          onClick={() => toggleSort('special_defense')}
          type="button"
          className={`flex justify-around items-center w-full h-10 hover:bg-blue-200 cursor-pointer ${sortState.column === 'special_defense' ? 'bg-blue-100' : 'bg-slate-200'}`}
        >
          <span>특수방어</span>
          {sortState.column !== 'special_defense' ? (
            <CaretUpDownIcon />
          ) : sortState.direction === 'asc' ? (
            <CaretDownIcon />
          ) : (
            <CaretUpIcon />
          )}
        </button>
      </th>
      <th className="min-w-[5.5rem] w-[5.5rem] border-l-2 border-white md:rounded-tr-md hidden lg:table-cell">
        <button
          onClick={() => toggleSort('speed')}
          type="button"
          className={`flex justify-around items-center w-full h-10 hover:bg-blue-200 cursor-pointer md:rounded-tr-md ${sortState.column === 'speed' ? 'bg-blue-100' : 'bg-slate-200'}`}
        >
          <span>스피드</span>
          {sortState.column !== 'speed' ? (
            <CaretUpDownIcon />
          ) : sortState.direction === 'asc' ? (
            <CaretDownIcon />
          ) : (
            <CaretUpIcon />
          )}
        </button>
      </th>
    </tr>
  );
}
