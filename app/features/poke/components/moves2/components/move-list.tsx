import MoveTable from './move-table';
import type { FormattedVersionMove } from '../utils/format';
import { MachineType } from '../types';

interface MoveListProps {
  levelUpMoves: (FormattedVersionMove & {
    level: number;
  })[];
  restMoves: {
    method: string;
    moves: FormattedVersionMove[];
  }[];
  machineMoves: {
    machineType: MachineType;
    moves: FormattedVersionMove[];
  }[];
}

export default function MoveList({
  levelUpMoves,
  restMoves,
  machineMoves,
}: MoveListProps) {
  return (
    <div>
      <>
        <MoveTable method="level_up" moves={levelUpMoves} versionGroup={'a'} />

        {restMoves.map(({ method, moves }) => (
          <MoveTable
            key={method}
            method={method}
            moves={moves}
            versionGroup={'a'}
          />
        ))}
        {machineMoves.map(({ machineType, moves }) => (
          <MoveTable
            key={machineType}
            method="machine"
            machineType={machineType}
            moves={moves}
            versionGroup={'a'}
          />
        ))}
      </>
    </div>
  );
}
