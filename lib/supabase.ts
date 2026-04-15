import { createClient } from "@supabase/supabase-js";

export type Contact = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  message: string;
  is_read: boolean;
};

/** Server-only client using service role key (bypasses RLS). Never import in client components. */
export function createServiceClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  return createClient<{ public: { Tables: { contacts: { Row: Contact } } } }>(url, key, {
    auth: { persistSession: false },
  });
}
