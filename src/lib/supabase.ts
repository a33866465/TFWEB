import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your .env file or environment.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContactSubmission = {
  id?: string; // Optional: Supabase usually auto-generates IDs
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status?: string; // Optional: You might want a status for tracking
  created_at?: string; // Optional: Supabase can auto-generate this
};
