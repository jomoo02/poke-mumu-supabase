'use server';

import { createClient } from '@/app/utils/supabase/server';
import { checkTextLanguageKo, checkTextIntergerType } from '../lib';
import type { SearchPoke } from '../model';
import type { TypeDto } from '@/app/entities/type/model';
import { fetchTypeAll } from '@/app/entities/type/api';

const getSearchColumn = (inputValue: string) => {
  if (checkTextIntergerType(inputValue)) {
    return { column: 'no', value: inputValue };
  }

  if (checkTextLanguageKo(inputValue)) {
    return { column: 'name_ko', value: inputValue };
  }

  // 영어 이름 첫 글자를 대문자로 변환
  const nameEnValue = inputValue.replace(/\b\w/g, (char) => char.toUpperCase());

  return { column: 'name_en', value: nameEnValue };
};

interface SearchPokeDto {
  id: number;
  dexNumber: number;
  pokeKey: string;
  name: string;
  nameEn: string;
  sprite: string;
  form: string | null;
  type1: string;
  type2: string | null;
}

const adaptSearchPokeDtoWithTypeDto = (
  dtos: SearchPokeDto[],
  typeDtos: TypeDto[],
) => {
  const typeDtoMap = Object.fromEntries(
    typeDtos.map((typeDto) => [typeDto.identifier, typeDto]),
  );

  return dtos.map(({ ...dto }) => {
    const typeDto1 = typeDtoMap[dto.type1];
    const typeDto2 = dto.type2 ? typeDtoMap[dto.type2] : null;
    return {
      ...dto,
      typeDto1,
      typeDto2,
    };
  });
};

const getSearchPokeDtos = async (inputValue: string) => {
  const supabase = await createClient();

  const { column, value } = getSearchColumn(inputValue);

  const query = supabase
    .from('poke')
    .select(
      `
      id,
      dexNumber:no,
      pokeKey:poke_key,
      name:name_ko,
      nameEn:name_en,
      sprite,
      form,
      type1:type_1,
      type2:type_2`,
    )
    .order('id', { ascending: true });

  return column === 'no'
    ? ((await query.eq('no', Number(value))).data ?? [])
    : ((await query.like(column, `%${value}%`)).data ?? []);
};

export const getSearchPokes = async (
  inputValue: string,
): Promise<SearchPoke[]> => {
  const [serachPokeDtos, typeDtos] = await Promise.all([
    getSearchPokeDtos(inputValue),
    fetchTypeAll(),
  ]);

  return adaptSearchPokeDtoWithTypeDto(serachPokeDtos, typeDtos);
};
