import type {
  TableMoves,
  TableData,
  VersionMoveRow,
  MachineType,
} from '../types';

export type FormattedTableData = {
  gen: string;
  versionGroupId: number;
  versionGroup: string;
  order: number;
  moves: TableMoves;
  id: number;
}[];

export const formatDataFromTableData = (tableData: TableData) => {
  return tableData
    .map(({ version_group, moves, ...rest }) => ({
      ...rest,
      gen: String(version_group.generation),
      versionGroupId: version_group.id,
      versionGroup: version_group.identifier,
      order: version_group.order,
      moves: moves as TableMoves,
    }))
    .sort((a, b) => a.order - b.order);
};

export type FormattedVersionMove = {
  accuracy: number | null;
  description: string;
  id: number;
  identifier: string;
  power: number | null;
  pp: number | null;
  type: string;
  versionGroupId: number;
  damageClass: string;
  machineNumber: number | null;
  machineType: string | null;
  moveId: number;
  moveNumber: number;
  name: string;
  nameEn: string;
  nameJa: string;
};

export const formatVersionMove = (
  versionMoves: VersionMoveRow[],
): FormattedVersionMove[] => {
  return versionMoves.map(
    ({
      version_group_id,
      damage_class,
      machine_number,
      machine_type,
      move_id,
      move_number,
      name_ko,
      name_en,
      name_ja,
      ...rest
    }) => ({
      ...rest,
      versionGroupId: version_group_id,
      damageClass: damage_class,
      machineNumber: machine_number,
      machineType: machine_type,
      moveId: move_id,
      moveNumber: move_number,
      name: name_ko,
      nameEn: name_en,
      nameJa: name_ja,
    }),
  );
};

export const formatMachineMove = (moves: FormattedVersionMove[]) => {
  const MACHINE_TYPE: MachineType[] = ['TM', 'TR', 'HM'];

  return MACHINE_TYPE.map((machineType) => {
    const targetMachineTypeMoves = moves.filter(
      (move) => move.machineType === machineType,
    );
    return {
      machineType,
      moves: targetMachineTypeMoves,
    };
  }).filter(({ moves }) => moves.length > 0);
};
