export type MoveMethod =
  | 'level_up'
  | 'egg'
  | 'tutor'
  | 'reminder'
  | 'machine'
  | 'pre'
  | 'evolution'
  | 'form';

export type MachineType = 'TM' | 'HM' | 'TR';

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

export type Move = FormattedVersionMove & { level?: number } & {
  detail?: string;
};
