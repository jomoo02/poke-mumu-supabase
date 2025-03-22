import CaretDownIcon from '@/app/icon/caret-down';
import CaretUpIcon from '@/app/icon/caret-up';
import CaretUpDownIcon from '@/app/icon/caret-up-down';

interface TableHeaderCellProps {
  id: string;
  selectedId: string;
  direction: 'asc' | 'desc';
  content: string;
  onClick: (id: string) => void;
}

export default function TableHeaderCell({
  id,
  selectedId,
  direction,
  content,
  onClick,
}: TableHeaderCellProps) {
  const widthVariants: Record<string, string> = {
    no: 'min-w-[4.25rem] w-[4.25rem] xl:min-w-[4.7rem]',
    name: 'w-full',
    types: 'min-w-20 w-20 sm:min-w-24 sm:w-24',
    default: 'min-w-[5.5rem] w-[5.5rem]',
  };

  const displayVariants: Record<string, string> = {
    total: 'hidden md:table-cell',
    hp: 'hidden lg:table-cell',
    attack: 'hidden lg:table-cell',
    defense: 'hidden lg:table-cell',
    special_attack: 'hidden lg:table-cell',
    special_defense: 'hidden lg:table-cell',
    speed: 'hidden lg:table-cell',
  };

  const buttonClassName = `flex items-center w-full h-10 hover:bg-blue-300 cursor-pointer transition-colors duration-200
    ${id === 'name' ? 'px-4 justify-between' : 'justify-around'} ${selectedId === id ? 'bg-blue-200' : 'bg-slate-200'}`;

  return (
    <th
      className={`border-r-2 border-white ${widthVariants[id] || widthVariants.default} ${displayVariants[id]} `}
    >
      {id !== 'type' ? (
        <button
          type="button"
          onClick={() => onClick(id)}
          className={buttonClassName}
        >
          <span>{content}</span>
          {selectedId !== id ? (
            <CaretUpDownIcon />
          ) : direction === 'asc' ? (
            <CaretDownIcon />
          ) : (
            <CaretUpIcon />
          )}
        </button>
      ) : (
        <span>{content}</span>
      )}
    </th>
  );
}
