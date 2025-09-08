import { useEffect, useMemo, useState } from 'react';
import { getVersionGroupKo } from '@/app/lib/version/version-group';
import type { VersionGroup } from '../types/version-group';

type VersionGroupOption = {
  id: number;
  name: string;
};

export default function useSelectVersionGroup(
  allVersionGroups: VersionGroup[],
  selectedGen: string,
) {
  const availableVersionGroups = useMemo<VersionGroupOption[]>(
    () =>
      allVersionGroups
        .filter(({ gen }) => gen === selectedGen)
        .sort((a, b) => a.order - b.order)
        .map(({ versionGroup, versionGroupId }) => ({
          name: getVersionGroupKo(versionGroup),
          id: versionGroupId,
        })),
    [allVersionGroups, selectedGen],
  );

  const [selectedVersionGroup, setSelectedVersionGroup] =
    useState<VersionGroupOption>(availableVersionGroups[0]);

  useEffect(() => {
    const targetVersionGroup = availableVersionGroups[0];

    setSelectedVersionGroup((prev) =>
      prev.name !== targetVersionGroup.name ? targetVersionGroup : prev,
    );
  }, [availableVersionGroups]);

  const selectVersionGroup = (versionGroup: string) => {
    const foundVersionGroup = availableVersionGroups.find(
      (v) => v.name === versionGroup,
    );
    if (foundVersionGroup) {
      setSelectedVersionGroup(foundVersionGroup);
    }
  };

  return {
    selectedVersionGroup: selectedVersionGroup.name,
    selectedVersionGroupId: selectedVersionGroup.id,
    versionGroups: availableVersionGroups.map(({ name }) => name),
    selectVersionGroup,
  };
}
