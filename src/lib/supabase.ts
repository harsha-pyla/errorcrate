import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kyhjkiiqwqhbyabqdmlb.supabase.co";
const supabaseAnonKey = "sb_publishable_FjvLG7K5eQmHUTgtMkYJEw_g9QTj_Gn";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
