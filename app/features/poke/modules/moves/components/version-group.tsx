import useVersion from '../hooks/useVersion';
import type { PokeMoveListItem } from '../types';
import MoveTable from './move-table';
import VersionList from './version-list';

interface VersionGroupProps {
  moves: PokeMoveListItem[];
}

export default function VersionGroup({ moves }: VersionGroupProps) {
  const { versions, targetMoves, targetVersion, setTargetVersion } =
    useVersion(moves);

  console.log(versions, targetMoves, targetVersion);

  return (
    <>
      <div className="px-1 sm:px-2 lg:px-7 border-b-2 sm:pt-3 border-slate-500">
        <VersionList
          versions={versions}
          targetVersion={targetVersion}
          setTargetVersion={setTargetVersion}
        />
      </div>
      <div className="px-1 xs:px-2 md:px-3 xl:px-7 pb-2">
        <MoveTable
          method="level_up"
          moves={targetMoves.level_up}
          key={targetVersion}
        />
      </div>
    </>
  );
}
