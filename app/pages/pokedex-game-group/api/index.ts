import { createClient } from '@/app/shared/api/supabase/client';
import { Poke } from '@/app/entities/poke/model';

import { RegionalPoke } from '../model';
import { fetchTypeAll } from '@/app/entities/type/api';
import { TypeDto } from '@/app/entities/type/model';

interface RegionalDexDTO {
  gameGroup: string;
  description: string;
  dexRegion: {
    id: number;
    region: string;
    regionKo: string | null;
    entries: {
      id: number;
      regionalDexNumber: number;
      poke: Poke;
    }[];
  }[];
}

interface RegionalDex {
  gameGroup: string;
  description: string;
  dexRegion: {
    id: number;
    region: string;
    regionKo: string | null;
    entries: RegionalPoke[];
  }[];
}

export const fetchRegionalDexDto = async (gameGroup: string) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('dex_group')
    .select(
      `
        gameGroup:game_group_ko,
        description,
        dexRegion:dex_region (
          id,
          region,
          regionKo:region_ko,
          entries:dex_entry (
            id,
            regionalDexNumber:dex_number,
            poke (
              id,
              dexNumber:no,
              sprite,
              name:name_ko,
              type1:type_1,
              type2:type_2,
              pokeKey:poke_key
            )
          )
        )
      `,
    )
    .eq('game_group', gameGroup)
    .order('order_index', {
      referencedTable: 'dex_region',
      ascending: true,
    })
    .order('dex_number', {
      referencedTable: 'dex_region.dex_entry',
      ascending: true,
    })
    .maybeSingle();

  if (error) {
    console.error('Supabase error:', error);
    throw new Error(
      `Failed to fetch pokedex for ${gameGroup}: ${error.message}`,
    );
  }

  if (!data) {
    throw new Error(`No data found for game group: ${gameGroup}`);
  }

  return data;
};

const adaptRegionalDexDtoWithTypeDto = (
  regionalDexDto: RegionalDexDTO,
  typeDtos: TypeDto[],
): RegionalDex => {
  const typeDtoMap = Object.fromEntries(
    typeDtos.map((typeDto) => [typeDto.identifier, typeDto]),
  );

  const dexRegion = regionalDexDto.dexRegion.map(({ entries, ...rest }) => {
    const dexEntries = entries.map(({ poke, ...rest }) => ({
      ...rest,
      ...poke,
      typeDto1: typeDtoMap[poke.type1],
      typeDto2: poke.type2 ? typeDtoMap[poke.type2] : null,
    }));

    return {
      ...rest,
      entries: dexEntries,
    };
  });

  return {
    ...regionalDexDto,
    dexRegion,
  };
};

export const fetchRegionalPokedex = async (gameGroup: string) => {
  const [regionalDexDto, typeDtoAll] = await Promise.all([
    fetchRegionalDexDto(gameGroup),
    fetchTypeAll(),
  ]);

  const regionalPokedex = adaptRegionalDexDtoWithTypeDto(
    regionalDexDto,
    typeDtoAll,
  );
  return regionalPokedex;
};

export const getGameGroupAll = async () => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('dex_group')
    .select('group:game_group');

  if (error) {
    throw new Error(`Error getGameGroupAll: ${error}`);
  }
  return data;
};
