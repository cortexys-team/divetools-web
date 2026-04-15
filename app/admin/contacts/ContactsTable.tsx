"use client";

import { useState } from "react";
import type { Contact } from "@/lib/supabase";

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("ko-KR", {
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit",
  });
}

export default function ContactsTable({ contacts: initial }: { contacts: Contact[] }) {
  const [contacts, setContacts] = useState(initial);
  const [expanded, setExpanded] = useState<string | null>(null);

  async function toggleRead(id: string, is_read: boolean) {
    await fetch("/api/admin/contacts", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, is_read }),
    });
    setContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, is_read } : c))
    );
  }

  function toggleExpand(id: string) {
    const next = expanded === id ? null : id;
    setExpanded(next);
    // Auto-mark as read when expanded
    const contact = contacts.find((c) => c.id === id);
    if (next && contact && !contact.is_read) toggleRead(id, true);
  }

  return (
    <div className="space-y-2">
      {contacts.map((c) => (
        <div
          key={c.id}
          className={`rounded-2xl border transition-all ${
            c.is_read
              ? "border-white/5 bg-white/2"
              : "border-dive-aqua/15 bg-dive-aqua/3"
          }`}
        >
          {/* Row header */}
          <button
            onClick={() => toggleExpand(c.id)}
            className="w-full text-left px-5 py-4 flex items-center gap-4"
          >
            {/* Unread dot */}
            <div className={`shrink-0 w-2 h-2 rounded-full ${c.is_read ? "bg-transparent" : "bg-dive-aqua"}`} />

            <div className="flex-1 min-w-0 grid grid-cols-[1fr_1fr_auto] gap-4 items-center">
              <div className="min-w-0">
                <p className="text-sm font-medium text-white truncate">{c.name}</p>
                <p className="text-xs text-white/40 truncate">{c.email}</p>
              </div>
              <p className="text-sm text-white/60 truncate hidden sm:block">
                {c.message.length > 60 ? c.message.slice(0, 60) + "…" : c.message}
              </p>
              <p className="text-xs text-white/30 shrink-0">{formatDate(c.created_at)}</p>
            </div>

            <svg
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              className={`w-4 h-4 text-white/30 shrink-0 transition-transform ${expanded === c.id ? "rotate-180" : ""}`}
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          {/* Expanded content */}
          {expanded === c.id && (
            <div className="px-5 pb-5 pt-1 border-t border-white/5">
              <div className="grid sm:grid-cols-2 gap-3 mb-4 text-xs text-white/50">
                <div>
                  <span className="text-white/30">이름</span>
                  <span className="ml-2 text-white/70">{c.name}</span>
                </div>
                <div>
                  <span className="text-white/30">이메일</span>
                  <a
                    href={`mailto:${c.email}`}
                    className="ml-2 text-dive-aqua hover:underline"
                  >
                    {c.email}
                  </a>
                </div>
              </div>
              <div className="bg-white/4 rounded-xl px-4 py-3 text-sm text-white/80 leading-relaxed whitespace-pre-wrap mb-4">
                {c.message}
              </div>
              <div className="flex items-center gap-3">
                {c.is_read ? (
                  <button
                    onClick={() => toggleRead(c.id, false)}
                    className="text-xs text-white/40 hover:text-white/60 transition-colors flex items-center gap-1.5"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                    </svg>
                    미확인으로 표시
                  </button>
                ) : (
                  <button
                    onClick={() => toggleRead(c.id, true)}
                    className="text-xs text-dive-aqua/70 hover:text-dive-aqua transition-colors flex items-center gap-1.5"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    확인됨으로 표시
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
