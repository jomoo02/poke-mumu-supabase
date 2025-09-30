import { Tabs, TabsItem, TabsContent } from '@/app/components/ui/tabs';

interface VersionGroupTabsProps {
  versionGroup: string;
  versionGroups: string[];
  onVersionGroupChange: (versionGroup: string) => void;
}

export default function VersionGroupTabs({
  versionGroup,
  versionGroups,
  onVersionGroupChange,
}: VersionGroupTabsProps) {
  const handleVersionGroupChange = (versionGroup: string | null) => {
    if (versionGroup) {
      onVersionGroupChange(versionGroup);
    }
  };

  return (
    <div className="flex p-1">
      <Tabs value={versionGroup} onValueChange={handleVersionGroupChange}>
        <TabsContent>
          {versionGroups.map((item) => (
            <TabsItem key={item} value={item}>
              {item}
            </TabsItem>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
