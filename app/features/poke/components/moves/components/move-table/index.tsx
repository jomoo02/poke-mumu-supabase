import Level from './level';
import NormalMoveTable from './normal-move-table';
import type { PokeMove } from '../../types';

interface MoveTableProps {
  method: string;
  moves: PokeMove[];
}

export default function MoveTable({ method, moves }: MoveTableProps) {
  if (method === 'level_up') {
    return <NormalMoveTable method={method} moves={moves} />;
  }
  return <div>{method}</div>;
}
