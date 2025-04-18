import { PokeType } from '@/app/data/type/type';
import { Tables } from '@/types_db';

export type MachineType = 'TM' | 'HM' | 'TR';

export type PokeMove = {
  id: number;
  pp: number;
  name: string;
  type: PokeType;
  level: number;
  power: number | null;
  move_id: number;
  accuracy: number | null;
  identifier: string;
  damage_class: string;
  machine_type?: MachineType;
  machine_number?: number;
};

export type MoveMethod =
  | 'level_up'
  | 'egg'
  | 'tutor'
  | 'reminder'
  | 'machine'
  | 'pre';

export type PokeMoveJsonByMethod = {
  pre?: PokeMove[];
  machine?: PokeMove[];
  level_up: PokeMove[];
  egg?: PokeMove[];
  tutor?: PokeMove[];
  reminder?: PokeMove[];
};

// export type PokeMoveTableWithVersion = Pick<Tables<'poke_moves_2'>, 'id'> & {
//   version_group: Pick<
//     Tables<'version_group'>,
//     'identifier' | 'order' | 'id' | 'generation'
//   > & {
//     moves: PokeMoveJsonByMethod;
//   };
// };

export type PokeMoveTableWithVersion = {
  id: number;
  version_group: Pick<
    Tables<'version_group'>,
    'identifier' | 'order' | 'id' | 'generation'
  >;
  moves: PokeMoveJsonByMethod;
};

export type PokeMoveListItem = {
  gen: number;
  versionGroupId: number;
  versionGroup: string;
  order: number;
  id: number;
  moves: PokeMoveJsonByMethod;
};
