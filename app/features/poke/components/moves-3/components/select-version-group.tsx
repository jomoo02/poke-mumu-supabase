import {
  OptionBar,
  OptionBarItem,
  OptionBarContent,
} from '@/app/components/option-bar';

interface SelectVersionGroupProps {
  versionGroups: string[];
  selectedVersionGroup: string;
  onSelect: (versionGroup: string) => void;
}

export default function SelectionVersionGroup({
  versionGroups,
  selectedVersionGroup,
  onSelect,
}: SelectVersionGroupProps) {
  const handleValueSelect = (versionGroup: string) => {
    onSelect(versionGroup);
  };

  return (
    <div className="flex">
      <OptionBar
        initialValue={selectedVersionGroup}
        onValueSelect={handleValueSelect}
      >
        <OptionBarContent>
          {versionGroups.map((versionGroup) => (
            <OptionBarItem key={versionGroup} value={versionGroup}>
              {versionGroup}
            </OptionBarItem>
          ))}
        </OptionBarContent>
      </OptionBar>
    </div>
  );
}
