import { useMemo, useState } from 'react';
import type { PokeMoveListItem, MoveMethod } from '../types';

export default function useVersionGroup(moves: PokeMoveListItem[]) {
  const versionGroups = useMemo(() => {
    return moves
      .map(({ versionGroup, order }) => ({ versionGroup, order }))
      .sort((a, b) => a.order - b.order)
      .map(({ versionGroup }) => versionGroup);
  }, [moves]);

  const [targetVersionGroup, setTargetVersion] = useState(
    () => versionGroups[0],
  );

  const targetMoves = useMemo(() => {
    const foundMoves = moves.find(
      ({ versionGroup }) => versionGroup === targetVersionGroup,
    )?.moves;

    if (foundMoves) {
      return Object.entries(foundMoves).map(([method, foundPokeMoves]) => ({
        method: method as MoveMethod,
        moves: foundPokeMoves,
      }));
    }

    return [];
  }, [moves, targetVersionGroup]);

  const handleTargetVersion = (versionGroup: string) => {
    if (versionGroups.includes(versionGroup)) {
      setTargetVersion(versionGroup);
    }
  };

  return {
    versionGroups,
    targetVersionGroup,
    handleTargetVersion,
    targetMoves,
  };
}
