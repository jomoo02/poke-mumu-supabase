import useVersionGroup from '../hooks/useVersionGroup';
import type { PokeMoveListItem } from '../types';
import OptionVersionGroup from './option-version-group';
import TatgetMoves from './target-moves';

interface VersionGroupProps {
  moves: PokeMoveListItem[];
}

export default function VersionGroup({ moves }: VersionGroupProps) {
  const {
    versionGroups,
    targetMoves,
    targetVersionGroup,
    handleTargetVersion,
  } = useVersionGroup(moves);

  return (
    <>
      <div className="my-4">
        <h3 className="text-slate-900 text-lg font-semibold my-2">버전</h3>
        <OptionVersionGroup
          versionGroups={versionGroups}
          targetVersionGroup={targetVersionGroup}
          handleTargetVersion={handleTargetVersion}
        />
      </div>

      {targetMoves && (
        <TatgetMoves
          targetMoves={targetMoves}
          versionGroup={targetVersionGroup}
        />
      )}
    </>
  );
}
