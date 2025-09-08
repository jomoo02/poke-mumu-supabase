import { createClient } from '@/app/utils/supabase/server';

export default async function fetchSupaBefore() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('version_move')
    .select('*')
    .eq('version_group_id', 18);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
