import useVersion from '../hooks/useVersion';
import type { PokeMoveListItem } from '../types';
import MoveTable from './move-table';
import VersionList from './version-list';

interface VersionGroupProps {
  moves: PokeMoveListItem[];
}

export default function VersionGroup({ moves }: VersionGroupProps) {
  const {
    versionGroups,
    targetMachineMoves,
    targetMoves,
    targetVersionGroup,
    setTargetVersion,
  } = useVersion(moves);

  return (
    <>
      <div className="px-1 sm:px-2 lg:px-7 border-b-2 sm:pt-3 border-slate-500">
        <VersionList
          versionGroups={versionGroups}
          targetVersionGroup={targetVersionGroup}
          setTargetVersion={setTargetVersion}
        />
      </div>
      <div
        key={targetVersionGroup}
        className="px-1 xs:px-2 md:px-3 xl:px-7 pb-2 "
      >
        <div className="grid xl:grid-cols-2">
          {targetMoves && (
            <div className="overflow-x-hidden">
              {targetMoves.map(({ method, moves }) => (
                <MoveTable method={method} moves={moves} key={method} />
              ))}
            </div>
          )}
          {targetMachineMoves && (
            <div className="overflow-x-hidden xl:grid xl:justify-end">
              {targetMachineMoves.map(({ machineType, moves }) => (
                <MoveTable
                  key={machineType}
                  moves={moves}
                  method="machine"
                  machineType={machineType}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
