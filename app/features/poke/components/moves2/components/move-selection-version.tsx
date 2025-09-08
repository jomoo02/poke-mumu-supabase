import { getVersionGroupKo } from '@/app/lib/version/version-group';
import {
  OptionBar,
  OptionBarItem,
  OptionBarContent,
} from '@/app/components/option-bar';
// import type { VersionGroupItem } from '../hooks/useMoveSelection';
import type { VersionGroupItem } from '../hooks/useVersionGroup';

// interface MoveSelectionVersionGroupProps {
//   versionGroups: VersionGroupItem[];
//   targetVersionGroup: VersionGroupItem;
//   onSelect: (version: VersionGroupItem) => void;
// }

interface MoveSelectionVersionGroupProps {
  versionGroups: VersionGroupItem[];
  targetVersionGroup: VersionGroupItem;
  onSelect: (versionGroup: VersionGroupItem) => void;
}

export default function MoveSelectionVersionGroup({
  versionGroups,
  targetVersionGroup,
  onSelect,
}: MoveSelectionVersionGroupProps) {
  const handldSelect = (versionGroup: string) => {
    const targetVersionGroup = versionGroups.find(
      (target) => target.versionGroup === versionGroup,
    );
    if (targetVersionGroup) {
      onSelect(targetVersionGroup);
    }
  };

  return (
    <div className="flex">
      <OptionBar
        initialValue={targetVersionGroup.versionGroup}
        onValueSelect={handldSelect}
      >
        <OptionBarContent>
          {versionGroups.map(
            ({ versionGroupKo, versionGroupId, versionGroup }) => (
              <OptionBarItem key={versionGroupId} value={versionGroup}>
                {versionGroupKo}
              </OptionBarItem>
            ),
          )}
        </OptionBarContent>
      </OptionBar>
    </div>
  );
}
