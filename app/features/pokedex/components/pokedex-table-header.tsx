import PokedexTableHeaderCell from './pokedex-table-header-cell';
import type { SortState } from '../hooks/usePokedexTableSort';

interface PokedexTableHeaderProps {
  sortState: SortState;
  setSortState: (column: string) => void;
}

export default function PokedexTableHeader({
  sortState,
  setSortState,
}: PokedexTableHeaderProps) {
  const headerData = [
    { id: 'no', content: '번호', isSortAble: true },
    { id: 'name', content: '이름', isSortAble: true },
    { id: 'type', content: '타입', isSortAble: false },
    { id: 'total', content: '종족값', isSortAble: true },
    { id: 'hp', content: '체력', isSortAble: true },
    { id: 'attack', content: '공격', isSortAble: true },
    { id: 'defense', content: '방어', isSortAble: true },
    { id: 'special_attack', content: '특수공격', isSortAble: true },
    { id: 'special_defense', content: '특수방어', isSortAble: true },
    { id: 'speed', content: '스피드', isSortAble: true },
  ];

  return (
    <tr className="h-10 text-nowrap text-sm text-slate-600 bg-slate-200">
      {headerData.map(({ id, content, isSortAble }) => (
        <PokedexTableHeaderCell
          key={id}
          id={id}
          content={content}
          selectedId={sortState.column}
          direction={sortState.direction}
          isSortAble={isSortAble}
          onClick={setSortState}
        />
      ))}
    </tr>
  );
}
