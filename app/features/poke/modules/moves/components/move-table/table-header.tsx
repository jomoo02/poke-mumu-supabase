import SortIcon from '@/app/components/icon/sort-icon';
import type { HeaderKey } from '../../types/move-table';
import type { MoveMethod } from '../../types';

interface HeaderCellProps {
  content: string;
  id: HeaderKey;
  targetCell: HeaderKey;
  direction: 'asc' | 'desc';
  setSortOrder: (id: HeaderKey) => void;
}

interface TableHeaderProps {
  method: MoveMethod;
  setSortOrder: (id: HeaderKey) => void;
  targetCell: HeaderKey;
  direction: 'asc' | 'desc';
}

function HeaderCell({
  content,
  id,
  targetCell,
  direction,
  setSortOrder,
}: HeaderCellProps) {
  const minWidthVariants: Record<HeaderKey, string> = {
    name: 'min-w-[10.2rem]',
    type: 'min-w-[5.25rem]',
    damageClass: 'min-w-[5.25rem]',
    power: 'min-w-[5.25rem]',
    accuracy: 'min-w-[5.25rem]',
    level: 'min-w-[3.35rem]',
    hm: 'min-w-[3.35rem]',
    tr: 'min-w-[3.35rem]',
    tm: 'min-w-[3.35rem]',
  } as const;

  const handleSortOrder = (heaerId: HeaderKey) => {
    setSortOrder(heaerId);
  };

  const isSelect = targetCell === id;

  return (
    <th
      className={`c-text-base h-[2.4rem] border p-0 border-slate-300 ${minWidthVariants[id]}`}
    >
      <button
        type="button"
        className={`flex w-full h-full items-center justify-between px-1.5 ${isSelect ? 'bg-blue-100' : 'bg-slate-100'}`}
        onClick={() => handleSortOrder(id)}
      >
        {content}
        <SortIcon isSelect={isSelect} direction={direction} />
      </button>
    </th>
  );
}

export default function TableHeader({
  method,
  setSortOrder,
  targetCell,
  direction,
}: TableHeaderProps) {
  return (
    <thead>
      <tr className="text-nowrap">
        <HeaderCell
          id="name"
          content="기술"
          targetCell={targetCell}
          direction={direction}
          setSortOrder={setSortOrder}
        />
        <HeaderCell
          id="type"
          content="타입"
          targetCell={targetCell}
          direction={direction}
          setSortOrder={setSortOrder}
        />
        <HeaderCell
          id="damageClass"
          content="분류"
          targetCell={targetCell}
          direction={direction}
          setSortOrder={setSortOrder}
        />
        <HeaderCell
          id="power"
          content="위력"
          targetCell={targetCell}
          direction={direction}
          setSortOrder={setSortOrder}
        />
        <HeaderCell
          id="accuracy"
          content="명중률"
          targetCell={targetCell}
          direction={direction}
          setSortOrder={setSortOrder}
        />
      </tr>
    </thead>
  );
}
