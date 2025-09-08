import { useMemo } from 'react';
import type { TableData } from '../types';
import { formatDataFromTableData } from '../utils/format';
import useGen from './useGen';
import useVersionGroup from './useVersionGroup';
import useMoveListData from './useMoveListData';

export default function useTotal(tableData: TableData) {
  const moves = useMemo(() => formatDataFromTableData(tableData), [tableData]);

  const moveGens = useMemo(() => moves.map(({ gen }) => gen), [moves]);
  const { gens, selectedGen, handleGenSelect } = useGen(moveGens);

  const moveVersionGroups = useMemo(
    () =>
      moves.map(({ versionGroup, versionGroupId, gen, order }) => ({
        versionGroup,
        versionGroupId,
        gen,
        order,
      })),
    [moves],
  );

  const { selectedVersionGroup, versionGroups, handleVersionGroupSelect } =
    useVersionGroup(moveVersionGroups, selectedGen);

  const { data, error, isLoading, levelUp, machine, rest } = useMoveListData(
    moves,
    selectedVersionGroup.versionGroupId,
  );

  return {
    gens,
    selectedGen,
    handleGenSelect,
    selectedVersionGroup,
    versionGroups,
    handleVersionGroupSelect,
    data,
    error,
    isLoading,
    levelUp,
    machine,
    rest,
  };
}
