import { createClient } from '@/app/utils/supabase/client';
import { formatVersionMove } from '../utils/format';

export const getVersionMoves = async (versionGroupId: string) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('version_move')
    .select('*')
    .eq('version_group_id', Number(versionGroupId));

  if (error) {
    console.error(error);
    throw new Error('getVersionMoves error');
  }
  if (!data || data.length === 0) {
    return null;
  }

  return formatVersionMove(data);
};
