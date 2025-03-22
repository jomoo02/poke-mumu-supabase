import TableHeaderCell from './table-header-cell';
import type { SortState } from '../hooks/usePokedexSort';

interface TableHeaderProps {
  sortState: SortState;
  setSortState: (column: string) => void;
}

export default function TableHeader({
  sortState,
  setSortState,
}: TableHeaderProps) {
  const headerData = [
    { id: 'no', content: '번호' },
    { id: 'name', content: '이름' },
    { id: 'type', content: '타입' },
    { id: 'total', content: '종족값' },
    { id: 'hp', content: '체력' },
    { id: 'attack', content: '공격' },
    { id: 'defense', content: '방어' },
    { id: 'special_attack', content: '특수공격' },
    { id: 'special_defense', content: '특수방어' },
    { id: 'speed', content: '스피드' },
  ];

  return (
    <tr className="h-10 text-nowrap text-sm text-slate-600 bg-slate-200">
      {headerData.map(({ id, content }) => (
        <TableHeaderCell
          key={id}
          id={id}
          content={content}
          selectedId={sortState.column}
          direction={sortState.direction}
          onClick={setSortState}
        />
      ))}
    </tr>
  );
}
