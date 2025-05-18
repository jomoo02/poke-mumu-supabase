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
        <div className="text-lg font-semibold my-1">버전</div>
        <div className="flex">
          <OptionVersionGroup
            versionGroups={versionGroups}
            targetVersionGroup={targetVersionGroup}
            handleTargetVersion={handleTargetVersion}
          />
        </div>
      </div>

      {targetMoves && (
        <TatgetMoves key={targetVersionGroup} targetMoves={targetMoves} />
      )}
    </>
  );
}
