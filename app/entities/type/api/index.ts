import { unstable_cache } from 'next/cache';
import { createClient } from '@/app/utils/supabase/client';

import { type TypeDto } from '../model';

export const fetchTypeAll = unstable_cache(async (): Promise<TypeDto[]> => {
  const supabase = createClient();

  const { data, error } = await supabase.from('type').select(
    `
      id,
      identifier,
      generation,
      damageClassId:damage_class_id,
      typeKo:type_ko
    `,
  );

  if (error) {
    throw new Error(`error fetchTypeAll ${error.message}`);
  }

  if (!data) {
    throw new Error(`fetchTypeAll not data`);
  }

  return data;
}, ['type-all']);

export const fetchType = unstable_cache(
  async (type: string): Promise<TypeDto> => {
    const supabase = createClient();

    const { data, error } = await supabase
      .from('type')
      .select(
        `
      id,
      identifier,
      generation,
      damageClassId:damage_class_id,
      typeKo:type_ko
    `,
      )
      .eq('identifier', type)
      .maybeSingle();

    if (error) {
      throw new Error(`error fetchType ${error.message}`);
    }

    if (!data) {
      throw new Error(`fetchType not data`);
    }

    return data;
  },
  ['type'],
);
