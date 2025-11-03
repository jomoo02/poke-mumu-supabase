import { createClient as createClientPrimitive } from '@supabase/supabase-js';
import { Database } from '@/types_db';

export function createClient() {
  const supabase = createClientPrimitive<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );

  return supabase;
}
