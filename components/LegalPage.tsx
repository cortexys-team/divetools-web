"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

interface Section {
  heading: string;
  body: React.ReactNode;
}

interface Props {
  title: string;
  updated: string;
  sections: Section[];
}

export default function LegalPage({ title, updated, sections }: Props) {
  const params = useParams();
  const locale = params?.locale ?? "ko";

  return (
    <div className="min-h-screen bg-ocean-deep text-white">
      {/* Header */}
      <div className="border-b border-white/5 py-5 px-5">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href={`/${locale}`}
            className="text-dive-inactive hover:text-white transition-colors text-sm flex items-center gap-1.5"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Divetools
          </Link>
          <span className="text-xs text-dive-inactive">{updated}</span>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-5 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl font-bold mb-12">{title}</h1>

          <div className="space-y-10">
            {sections.map((s, i) => (
              <section key={i}>
                <h2 className="text-lg font-semibold text-dive-aqua mb-3">{s.heading}</h2>
                <div className="text-dive-inactive leading-relaxed text-sm space-y-2">{s.body}</div>
              </section>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
