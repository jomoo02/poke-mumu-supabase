import { PokeMove } from '../types';
import useTargetMoves from '../hooks/useTargetMoves';
import MoveTable from './move-table';

interface TargetMovesProps {
  targetMoves: {
    method: string;
    moves: PokeMove[];
  }[];
}

export default function TatgetMoves({ targetMoves }: TargetMovesProps) {
  const { moves, machineMoves } = useTargetMoves(targetMoves);

  return (
    <div className="my-10 px-1 sm:px-2 lg:px-7 flex flex-wrap justify-around gap-y-10 w-full">
      <div className="flex flex-col gap-y-10 overflow-auto">
        {moves.map(({ method, moves }) => (
          <MoveTable key={method} method={method} moves={moves} />
        ))}
      </div>

      <div className="flex flex-col gap-y-10 overflow-auto">
        {machineMoves.map(({ method, moves, machineType }) => (
          <MoveTable
            key={machineType}
            method={method}
            moves={moves}
            machineType={machineType}
          />
        ))}
      </div>
    </div>
  );
}
