import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ggaquqhhgnzkodwkfcnu.supabase.co';
const supabaseAnonKey = 'your_anon_key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
