import type { LevelUpMove, MachineMove, RestMove } from '../hooks/useMoveData';
import RestMoveTable from './move-table/rest-move-table';
import LevelUpMoveTable from './move-table/level-up-move-table';
import MachineMoveTable from './move-table/machine-move-table';
import FormMoveTable from './move-table/form-move-table';

interface MoveListProps {
  levelUpMoves: LevelUpMove[];
  machineMoves: MachineMove[];
  restMoves: RestMove[];
  // formMoves: FormMove[];
  versionGroup: string;
}

export default function MoveList({
  levelUpMoves,
  machineMoves,
  restMoves,
  // formMoves,
  versionGroup,
}: MoveListProps) {
  return (
    <div className="grid gap-y-4 sm:gap-y-8">
      {/* {JSON.stringify(levelUpMoves)} */}
      <LevelUpMoveTable moves={levelUpMoves} versionGroup={versionGroup} />
      {restMoves.map(({ method, moves }) => (
        <RestMoveTable
          key={method}
          method={method}
          moves={moves}
          versionGroup={versionGroup}
        />
      ))}
      {machineMoves.map(({ machineType, moves }) => (
        <MachineMoveTable
          key={machineType}
          machineType={machineType}
          moves={moves}
          versionGroup={versionGroup}
        />
      ))}
      {/* {formMoves.length > 0 && (
        <FormMoveTable moves={formMoves} versionGroup={versionGroup} />
      )} */}
    </div>
  );
}
