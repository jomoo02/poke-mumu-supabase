import type { DamageClass } from '@/app/components/badge/damage-class';
import { VersionGroup } from '@/app/data/version-group/version-group';
import type { Tables, Json } from '@/types_db';

export type MachineType = 'TM' | 'HM' | 'TR';

export type PokeMove = {
  id: number;
  pp: number;
  name: string;
  type: string;
  level: number;
  power: number | null;
  move_id: number;
  accuracy: number | null;
  identifier: string;
  damage_class: DamageClass;
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
  moves: Json;
};

export type PokeMoveListItem = {
  gen: number;
  versionGroupId: number;
  versionGroup: VersionGroup;
  order: number;
  id: number;
  moves: PokeMoveJsonByMethod;
};
