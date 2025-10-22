'use server';

import { createClient } from '@/app/utils/supabase/client';

export type VersionGroupPoke = {
  id: number;
  no: number;
  sprite: string;
  name: string;
  type1: string;
  type2: string | null;
  regionalDexNumber: number;
  subdexCode: string;
  pokeKey: string;
};

const VERSION_GORUP_MAP: Record<string, number> = {
  'red-blue-yellow': 1,
};

export const fetchVersionGroupPokedex = async (
  versionGroup: string,
): Promise<VersionGroupPoke[]> => {
  const supabase = createClient();

  const versionGroupId = VERSION_GORUP_MAP[versionGroup] ?? 1;

  const { data, error } = await supabase
    .from('regional_pokedex')
    .select(
      `
        id,
        regionalDexNumber:regional_dex_number,
        subdexCode:subdex_code,
        poke (
          id,
          no,
          sprite,
          name:name_ko,
          type1:type_1,
          type2:type_2,
          pokeKey:poke_key
        )
      `,
    )
    .eq('version_group_id', versionGroupId);

  if (error || !data) {
    console.error(error);
    throw new Error('fetchVersionGroupPokedex error');
  }

  return data.map(({ poke, ...rest }) => ({ ...rest, ...poke }));
};
