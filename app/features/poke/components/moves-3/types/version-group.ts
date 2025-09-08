import type { PokeMove } from '../../../utils/format-move';

export type VersionGroup = Omit<PokeMove, 'moves'>;
