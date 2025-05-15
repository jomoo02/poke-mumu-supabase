import useVersionGroup from '../hooks/useVersionGroup';
import type { PokeMoveListItem } from '../types';
import VersionList from './version-list';
import MoveTable from './move-table';

interface VersionGroupProps {
  moves: PokeMoveListItem[];
}

export default function VersionGroup({ moves }: VersionGroupProps) {
  const {
    versionGroups,
    // targetMachineMoves,
    targetMoves,
    targetVersionGroup,
    setTargetVersion,
  } = useVersionGroup(moves);

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
          <div className="overflow-x-auto">
            {targetMoves.map(({ method, moves }) => (
              <MoveTable key={method} method={method} moves={moves} />
            ))}
          </div>
          {/* <div>
            <Level
              moves={
                targetMoves.find(({ method }) => method === 'level_up')?.moves
              }
            />
          </div> */}

          {/* {targetMoves && (
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
          )} */}
        </div>
      </div>
    </>
  );
}
