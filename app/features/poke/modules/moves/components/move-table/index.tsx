'use client';

import useMoveTable from '../../hooks/useMoveTable';
import type { PokeMove, MoveMethod, MachineType } from '../../types';
import TableHeader from './table-header';
import TableRow from './table-row';
import Title from './title';

interface MoveTableProps {
  moves: PokeMove[];
  method: MoveMethod;
  machineType?: MachineType;
}

export default function MoveTable({
  moves,
  method,
  machineType,
}: MoveTableProps) {
  const { pokeMoves, sortOrder, setSortOrder } = useMoveTable(moves, method);

  const { target, direction } = sortOrder;

  return (
    <div className="py-0.5 my-4 lg:mb-10 overflow-x-hidden">
      <Title moveMethod={method} machineType={machineType} />
      <table className="border border-slate-300 table-fixed">
        <TableHeader
          method={method}
          setSortOrder={setSortOrder}
          targetCell={target}
          direction={direction}
        />
        <tbody>
          {pokeMoves.map((move) => (
            <TableRow key={move.id} method={method} move={move} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
