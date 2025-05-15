import type { DamageClass } from '@/app/components/badge/damage-class';
import { VersionGroup } from '@/app/data/version-group/version-group';
import type { Tables, Json } from '@/types_db';
import type { TableRow } from '@/app/components/table/table.context';

export type MachineType = 'TM' | 'HM' | 'TR';

export interface PokeMove extends TableRow {
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
}

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
