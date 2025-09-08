import type { Tables } from '@/types_db';
import type { FormattedVersionMove, MachineType, Move } from '../types/move';

export type RawVersionMove = Tables<'version_move'>;

export const formatVersionMove = (
  versionMoves: RawVersionMove[],
): Map<number, FormattedVersionMove> => {
  return new Map(
    versionMoves.map(
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
      }) => [
        move_id,
        {
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
        },
      ],
    ),
  );
};

export const formatMachineMove = (moves: Move[]) => {
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
