import { useEffect, useMemo, useState } from 'react';
import { getVersionGroupKo } from '@/app/lib/version/version-group';

export type VersionGroupItem = {
  versionGroupId: number;
  versionGroup: string;
  versionGroupKo: string;
};

type RawVersionGroup = {
  versionGroupId: number;
  versionGroup: string;
  gen: string;
  order: number;
};

export default function useVersionGroup(
  rawVersionGroups: RawVersionGroup[],
  selectedGen: string,
) {
  const versionGroups = useMemo(
    () =>
      rawVersionGroups
        .filter(({ gen }) => gen === selectedGen)
        .map(({ versionGroup, versionGroupId }) => ({
          versionGroup,
          versionGroupId,
          versionGroupKo: getVersionGroupKo(versionGroup),
        })),
    [rawVersionGroups, selectedGen],
  );

  const [selectedVersionGroup, setSelectedVersionGroup] =
    useState<VersionGroupItem>(versionGroups[0]);

  useEffect(() => {
    setSelectedVersionGroup(versionGroups[0]);
  }, [versionGroups]);

  const handleVersionGroupSelect = (versionGroup: VersionGroupItem) => {
    setSelectedVersionGroup(versionGroup);
  };

  return {
    selectedVersionGroup,
    versionGroups,
    handleVersionGroupSelect,
  };
}
