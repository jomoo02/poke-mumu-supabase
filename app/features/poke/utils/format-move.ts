import type { Tables } from '@/types_db';

type SupaPokeMove = Pick<Tables<'poke_move'>, 'moves'>;

export type RawMove = {
  level_up: { move_id: number; level: number }[];
  pre?: number[];
  machine?: number[];
  egg?: number[];
  tutor?: number[];
  reminder?: number[];
  evolution?: number[];
  form?: number[];
};

export type RawPokeMove = {
  id: number;
  version_group: {
    id: number;
    generation: number;
    identifier: string;
    order: number;
  };
};

// export type RawPokeMoveList = RawPokeMove[];

export type PokeMove = {
  id: number;
  versionGroupId: number;
  versionGroup: string;
  order: number;
  moves: RawMove;
  gen: string;
};

export const formatPokeMove = (
  pokeMove: (SupaPokeMove & RawPokeMove)[],
): PokeMove[] => {
  return pokeMove
    .map(({ version_group, moves, id }) => ({
      id,
      gen: String(version_group.generation),
      versionGroupId: version_group.id,
      versionGroup: version_group.identifier,
      order: version_group.order,
      moves: moves as RawMove,
    }))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
};
