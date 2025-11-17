import { unstable_cache } from 'next/cache';

import { createClient } from '@/app/utils/supabase/client';
import { Tables } from '@/types_db';
import { fetchTypeAll } from '@/app/entities/type/api';

import type { NationalPoke, SearchParams } from '../model';
// import type { SearchParams } from '..';

type NationalPokeDto = Tables<'national_pokedex_with_stat'>;

const SORT_BY_MAP: Record<string, string> = {
  dexNumber: 'dex_number',
  name: 'name',
  hp: 'hp',
  attack: 'attack',
  defense: 'defense',
  specialAttack: 'special_attack',
  specialDefense: 'special_defense',
  speed: 'speed',
  total: 'total',
};

const ALLOWED_SORT_KEYS = Object.keys(SORT_BY_MAP);

const ALLOWED_DIRECTIONS = ['asc', 'desc'] as const;

type Direction = (typeof ALLOWED_DIRECTIONS)[number];

const validateParams = async ({
  sortBy = 'dexNumber',
  type = 'all',
  direction = 'asc',
}: SearchParams) => {
  const supabase = createClient();

  const sortKey = ALLOWED_SORT_KEYS.includes(sortBy) ? sortBy : 'dexNumber';
  const sortColumn = SORT_BY_MAP[sortKey];

  const dir = (direction || 'asc').toLowerCase();
  const directionSafe: Direction = ALLOWED_DIRECTIONS.includes(dir as Direction)
    ? (dir as Direction)
    : 'asc';

  let typeSafe = 'all';
  if (type && type !== 'all') {
    const { data, error } = await supabase
      .from('type')
      .select('identifier')
      .eq('identifier', type)
      .limit(1);

    if (!error && data && data.length === 1) {
      typeSafe = type;
    }
  }

  return { sortColumn, direction: directionSafe, type: typeSafe };
};

const adaptNationalPoke = (dto: NationalPokeDto): NationalPoke => {
  const type1 =
    dto.type1_identifier && dto.type1_typeko
      ? { identifier: dto.type1_identifier, typeKo: dto.type1_typeko }
      : null;

  const type2 =
    dto.type2_identifier && dto.type2_typeko
      ? { identifier: dto.type2_identifier, typeKo: dto.type2_typeko }
      : null;

  return {
    type1,
    type2,
    hp: dto.hp || 0,
    attack: dto.attack || 0,
    defense: dto.defense || 0,
    specialAttack: dto.special_attack || 0,
    specialDefense: dto.special_defense || 0,
    speed: dto.speed || 0,
    total: dto.total || 0,
    id: dto.id!,
    sprite: dto.sprite!,
    pokeKey: dto.poke_key!,
    dexNumber: dto.dex_number!,
    name: dto.name!,
    form: dto.form,
  };
};

const fetchNationalPokedex = async (
  searchParams: SearchParams,
): Promise<NationalPoke[]> => {
  const supabase = createClient();

  const { sortColumn, direction, type } = await validateParams(searchParams);

  let query = supabase.from('national_pokedex_with_stat').select('*');

  if (type !== 'all') {
    query = query.or(`type1_identifier.eq.${type},type2_identifier.eq.${type}`);
  }

  query = query.order(sortColumn, { ascending: direction === 'asc' });

  const { data, error } = await query;

  if (error) {
    console.error('Supabase error:', error);
    throw new Error(
      `Failed to fetch pokedex for national pokedex: ${error.message}`,
    );
  }

  if (!data) {
    return [];
  }

  return data.map(adaptNationalPoke);
};

export const getNationPokedexData = unstable_cache(
  async (searchParams: SearchParams) => {
    const [pokes, types] = await Promise.all([
      fetchNationalPokedex(searchParams),
      fetchTypeAll(),
    ]);

    return {
      pokes,
      types: [
        { id: 123, typeKo: '모든 타입', identifier: 'all' },
        ...types.filter((t) => t.identifier !== 'unknown'),
      ],
    };
  },
);
