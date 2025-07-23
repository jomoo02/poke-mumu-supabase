import { PokeMove } from '../types';
import useTargetMoves from '../hooks/useTargetMoves';
import MoveTable from './move-table';

interface TargetMovesProps {
  targetMoves: {
    method: string;
    moves: PokeMove[];
  }[];
  versionGroup: string;
}

export default function TargetMoves({
  targetMoves,
  versionGroup,
}: TargetMovesProps) {
  const { moves, machineMoves } = useTargetMoves(targetMoves);

  console.log(moves);
  return (
    <div className="flex flex-col gap-y-10 w-full my-10">
      <div className="flex flex-col gap-y-10 ">
        {moves.map(({ method, moves }) => (
          <MoveTable
            key={method}
            method={method}
            moves={moves}
            versionGroup={versionGroup}
          />
        ))}
      </div>

      <div className="flex flex-col gap-y-10 overflow-auto">
        {machineMoves.map(({ method, moves, machineType }) => (
          <MoveTable
            key={machineType}
            method={method}
            moves={moves}
            machineType={machineType}
            versionGroup={versionGroup}
          />
        ))}
      </div>
    </div>
  );
}
