import type { LevelUpMove, MachineMove, RestMove } from '../hooks/useMoveData';
import LevelUpTable from './move-table/level-up';
import MachineTable from './move-table/machine';
import RestTable from './move-table/rest';

interface MoveListProps {
  levelUpMoves: LevelUpMove[];
  machineMoves: MachineMove[];
  restMoves: RestMove[];
  // formMoves: FormMove[];
  versionGroup: string;
}

export default function MoveList({
  levelUpMoves,
  restMoves,
  machineMoves,
  versionGroup,
}: MoveListProps) {
  return (
    <div className="flex flex-col gap-6">
      <LevelUpTable key={versionGroup} moves={levelUpMoves} />
      {restMoves.map(({ method, moves }) => (
        <RestTable
          key={`${method}-${versionGroup}`}
          method={method}
          moves={moves}
        />
      ))}

      {machineMoves.map(({ machineType, moves }) => (
        <MachineTable
          key={`${machineType}-${versionGroup}`}
          moves={moves}
          machineType={machineType}
        />
      ))}
    </div>
  );
}
