import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

export const metadata = { title: "Admin — Divetools" };

export default async function AdminLayout({ children }: { children: ReactNode }) {
  // All /admin/* routes (except /admin/login) require auth
  const cookieStore = await cookies();
  const isAuthed = cookieStore.get("admin-auth")?.value === process.env.ADMIN_SECRET;

  if (!isAuthed) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <header className="border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-md bg-dive-aqua/20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="#3CD3FE" strokeWidth="2" className="w-3.5 h-3.5">
              <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
          </div>
          <span className="font-semibold text-sm text-white/80">Divetools Admin</span>
        </div>
        <form action="/api/admin/logout" method="POST">
          <button
            type="submit"
            className="text-xs text-white/40 hover:text-white/70 transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
          >
            로그아웃
          </button>
        </form>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
    </div>
  );
}
