import type { Tables } from '@/types_db';

export type MachineType = 'TM' | 'HM' | 'TR';

export type VersionMoveRow = Tables<'version_move'>;

export type MoveLearnMethod =
  | 'pre'
  | 'machine'
  | 'level_up'
  | 'egg'
  | 'tutor'
  | 'reminder'
  | 'evolution';

export type TableMoves = {
  pre?: number[];
  machine?: number[];
  level_up: { move_id: number; level: number }[];
  egg?: number[];
  tutor?: number[];
  reminder?: number[];
  evolution?: number[];
};

export type TableData = {
  id: number;
  version_group: {
    id: number;
    generation: number;
    identifier: string;
    order: number;
  };
  moves: TableMoves;
}[];
