import { useState, useEffect, useMemo } from 'react';

export type VersionGroupItem = {
  versionGroupId: number;
  versionGroup: string;
};

export default function useMoveSelection(
  gens: string[],
  getVersionGroups: (gen: string) => VersionGroupItem[],
) {
  const [targetGen, setTargetGen] = useState(gens.at(-1) || gens[0]);

  const versionGroups = useMemo(
    () => getVersionGroups(targetGen),
    [targetGen, getVersionGroups],
  );

  const [targetVersionGroup, setTargetVersionGroup] =
    useState<VersionGroupItem>(versionGroups[0]);

  useEffect(() => {
    // targetGen이 바뀌면 항상 첫 번째 versionGroup으로 설정
    if (versionGroups.length > 0) {
      setTargetVersionGroup(versionGroups[0]);
    }
  }, [versionGroups]);

  const handleGenClick = (gen: string) => {
    if (gens.includes(gen)) {
      setTargetGen(gen);
    }
  };

  const handleVersionGroupClick = (taret: VersionGroupItem) => {
    if (
      versionGroups.find(
        ({ versionGroupId }) => versionGroupId === taret.versionGroupId,
      )
    ) {
      setTargetVersionGroup(taret);
    }
  };

  return {
    targetGen,
    targetVersionGroup,
    versionGroups,
    handleGenClick,
    handleVersionGroupClick,
  };
}
