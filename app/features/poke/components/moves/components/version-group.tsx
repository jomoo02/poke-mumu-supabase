import useVersionGroup from '../hooks/useVersionGroup';
import type { PokeMoveListItem } from '../types';
import VersionList from './version-list';
import TatgetMoves from './target-moves';

interface VersionGroupProps {
  moves: PokeMoveListItem[];
}

export default function VersionGroup({ moves }: VersionGroupProps) {
  const { versionGroups, targetMoves, targetVersionGroup, setTargetVersion } =
    useVersionGroup(moves);

  return (
    <>
      <div className="px-1 sm:px-2 lg:px-7 border-b sm:pt-3 border-slate-300">
        <VersionList
          versionGroups={versionGroups}
          targetVersionGroup={targetVersionGroup}
          setTargetVersion={setTargetVersion}
        />
      </div>
      {targetMoves && (
        <TatgetMoves key={targetVersionGroup} targetMoves={targetMoves} />
      )}
    </>
  );
}
