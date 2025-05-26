import {
  getVersionGroupKo,
  isVersionGroup,
} from '@/app/lib/version/version-group';
import {
  OptionBar,
  OptionBarItem,
  OptionBarContent,
} from '@/app/components/option-bar';

interface OptionVersionGroupProps {
  versionGroups: string[];
  targetVersionGroup: string;
  handleTargetVersion: (version: string) => void;
}

export default function OptionVersionGroup({
  versionGroups,
  targetVersionGroup,
  handleTargetVersion,
}: OptionVersionGroupProps) {
  const versionList = versionGroups.map((versionGroup) => {
    return {
      versionGroup,
      content: getVersionGroupKo(versionGroup),
    };
  });

  const handleOnSelect = (version: string) => {
    if (isVersionGroup(version)) {
      handleTargetVersion(version);
    }
  };

  return (
    <OptionBar
      initialValue={targetVersionGroup}
      onSelect={handleOnSelect}
      layoutId="version-group-indicator"
    >
      <OptionBarContent>
        {versionList.map(({ versionGroup, content }) => (
          <OptionBarItem key={versionGroup} value={versionGroup}>
            {content}
          </OptionBarItem>
        ))}
      </OptionBarContent>
    </OptionBar>
  );
}
