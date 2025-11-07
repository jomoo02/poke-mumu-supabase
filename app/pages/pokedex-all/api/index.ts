import { createClient } from '@/app/utils/supabase/client';
import { fetchTypeAll } from '@/app/entities/type/api';
import { TypeDto } from '@/app/entities/type/model';
import { getStatTotal } from '@/app/entities/stat/model';

import { NationalPoke } from '../model';

interface NationalPokeDto {
  id: number;
  pokeKey: string;
  dexNumber: number;
  name: string;
  sprite: string;
  form: string | null;
  type1: string;
  type2: string | null;
  stat: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
}

const adaptNationalPokedexDtoWithTypeDto = (
  dtos: NationalPokeDto[],
  typeDtos: TypeDto[],
) => {
  const typeDtoMap = Object.fromEntries(
    typeDtos.map((typeDto) => [typeDto.identifier, typeDto]),
  );

  return dtos.map(({ stat, ...dto }) => {
    const typeDto1 = typeDtoMap[dto.type1];
    const typeDto2 = dto.type2 ? typeDtoMap[dto.type2] : null;
    return {
      ...dto,
      ...stat,
      total: getStatTotal(stat),
      typeDto1,
      typeDto2,
    };
  });
};

export const fetchNationalPokedexDto = async (): Promise<NationalPokeDto[]> => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('poke')
    .select(
      `
      id,
      pokeKey:poke_key,
      dexNumber:no,
      name:name_ko,
      sprite,
      form,
      type1:type_1,
      type2:type_2,
      stat:poke_stat (
        hp,
        attack,
        defense,
        specialAttack:special_attack,
        specialDefense:special_defense,
        speed
      )
    `,
    )
    .order('id', { ascending: true });

  if (error) {
    console.error('Supabase error:', error);
    throw new Error(
      `Failed to fetch pokedex for national pokedex: ${error.message}`,
    );
  }

  if (!data) {
    return [];
  }

  return data.map(({ stat, ...rest }) => {
    if (!stat) {
      return {
        ...rest,
        stat: {
          hp: 0,
          attack: 0,
          defense: 0,
          specialAttack: 0,
          specialDefense: 0,
          speed: 0,
        },
      };
    }
    return { stat, ...rest };
  });
};

export const fetchNationalPokedex = async (): Promise<{
  pokes: NationalPoke[];
  types: TypeDto[];
}> => {
  const [nationPokedexDto, typeDtos] = await Promise.all([
    fetchNationalPokedexDto(),
    fetchTypeAll(),
  ]);

  const pokes = adaptNationalPokedexDtoWithTypeDto(nationPokedexDto, typeDtos);

  console.log(pokes[0]);
  const types = typeDtos;
  return { pokes, types };
};
