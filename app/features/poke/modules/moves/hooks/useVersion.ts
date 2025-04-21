import { useMemo, useState } from 'react';
import type { VersionGroup } from '@/app/data/version-group/version-group';
import type { PokeMoveListItem, MoveMethod } from '../types';
import {
  groupMachineMovesByMachineType,
  sortMoveMethodOrder,
  sortMachineMoves,
} from '../lib/version-moves';
import { MACHINE_MOVE_SORT_ORDER, MOVE_SORT_ORDER } from '../data/sort-method';

export default function useVersion(moves: PokeMoveListItem[]) {
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

  const machineMoves = useMemo(() => {
    const machineMethodMoves =
      targetMoves.find(({ method }) => method === 'machine')?.moves ?? [];

    return sortMachineMoves(
      groupMachineMovesByMachineType(machineMethodMoves),
      MACHINE_MOVE_SORT_ORDER,
    );
  }, [targetMoves]);

  const restMoves = sortMoveMethodOrder(
    targetMoves.filter(({ method }) => method !== 'machine'),
    MOVE_SORT_ORDER,
  );

  const handleTargetVersion = (versionGroup: VersionGroup) => {
    if (versionGroups.includes(versionGroup)) {
      setTargetVersion(versionGroup);
    }
  };

  return {
    versionGroups,
    targetVersionGroup,
    setTargetVersion,
    handleTargetVersion,
    targetMachineMoves: machineMoves,
    targetMoves: restMoves,
  };
}
