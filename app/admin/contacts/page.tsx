import { cookies } from "next/headers";
import { createServiceClient, type Contact } from "@/lib/supabase";
import ContactsTable from "./ContactsTable";

export const dynamic = "force-dynamic";

export default async function ContactsPage() {
  const cookieStore = await cookies();
  if (cookieStore.get("admin-auth")?.value !== process.env.ADMIN_SECRET) return null;

  const supabase = createServiceClient();
  const { data } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });

  const contacts = (data ?? []) as Contact[];
  const unreadCount = contacts.filter((c) => !c.is_read).length;

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">문의</h1>
          <p className="text-sm text-white/40 mt-1">
            총 {contacts.length}건{unreadCount > 0 && ` · 미확인 `}
            {unreadCount > 0 && (
              <span className="inline-flex items-center justify-center bg-dive-aqua/20 text-dive-aqua text-xs font-semibold px-2 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </p>
        </div>
      </div>

      {contacts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-white/20">
              <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
            </svg>
          </div>
          <p className="text-white/30 text-sm">아직 문의가 없습니다.</p>
        </div>
      ) : (
        <ContactsTable contacts={contacts} />
      )}
    </div>
  );
}
