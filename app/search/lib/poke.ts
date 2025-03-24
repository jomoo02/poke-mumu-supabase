'use server';

import { createClient } from '@/app/utils/supabase/server';
import { Tables } from '@/types_db';
import {
  checkTextLanguageKo,
  checkTextIntergerType,
} from '@/app/utils/check-type';

type Poke = Tables<'poke'>;
export type SearchPoke = Omit<Poke, 'created_at' | 'evolution_id' | 'name_ja'>;

function getSearchColumn(inputValue: string) {
  if (checkTextIntergerType(inputValue)) {
    return { column: 'no', value: inputValue };
  }

  if (checkTextLanguageKo(inputValue)) {
    return { column: 'name_ko', value: inputValue };
  }

  // 영어 이름 첫 글자를 대문자로 변환
  const nameEnValue = inputValue.replace(/\b\w/g, (char) => char.toUpperCase());

  return { column: 'name_en', value: nameEnValue };
}

export async function fetchSearchPoke(
  inputValue: string,
): Promise<SearchPoke[]> {
  const supabase = await createClient();
  const { column, value } = getSearchColumn(inputValue);

  const query = supabase
    .from('poke')
    .select(
      `
      id,
      no,
      poke_key,
      name_ko,
      name_en,
      sprite,
      form,
      type_1,
      type_2`,
    )
    .order('id', { ascending: true });

  return column === 'no'
    ? ((await query.eq(column, Number(value))).data ?? [])
    : ((await query.like(column, `%${value}%`)).data ?? []);
}
