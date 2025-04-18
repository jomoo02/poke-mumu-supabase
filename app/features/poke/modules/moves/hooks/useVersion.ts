import { useMemo, useState } from 'react';
import type { PokeMoveListItem } from '../types';

export default function useVersion(moves: PokeMoveListItem[]) {
  const versions = moves
    .sort((a, b) => a.order - b.order)
    .map(({ versionGroup }) => versionGroup);

  const initVersion = versions[0];

  const [targetVersion, setTargetVersion] = useState(initVersion);

  const targetMoves = useMemo(
    () =>
      moves.find(({ versionGroup }) => versionGroup === targetVersion)?.moves,
    [targetVersion],
  );

  const handleTargetVersion = (version: string) => {
    if (versions.includes(version)) {
      setTargetVersion(version);
    }
  };

  return {
    versions,
    targetVersion,
    targetMoves,
    setTargetVersion,
    handleTargetVersion,
  };
}
