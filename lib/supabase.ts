import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// We export a single instance of the client
// It will gracefully fall back to empty strings if the user hasn't set env vars yet
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
