"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { builds, BuildTag } from "@/lib/devlog-data";

const TAG_STYLE: Record<BuildTag, string> = {
  watchOS:   "bg-dive-aqua/10 text-dive-aqua border border-dive-aqua/20",
  iOS:       "bg-dive-info/10 text-dive-info border border-dive-info/20",
  Algorithm: "bg-dive-safe/10 text-dive-safe border border-dive-safe/20",
  Fix:       "bg-dive-critical/10 text-dive-critical border border-dive-critical/20",
  "UI/UX":   "bg-dive-caution/10 text-dive-caution border border-dive-caution/20",
  Settings:  "bg-white/5 text-white/50 border border-white/10",
};

interface Props {
  locale: string;
}

export default function DevLog({ locale }: Props) {
  const isKo = locale === "ko";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="max-w-3xl mx-auto px-5 pb-24 pt-6">

      {/* ── Board table ── */}
      <div className="border border-white/[0.08] rounded-2xl overflow-hidden">

        {/* Table header */}
        <div className="grid grid-cols-[56px_1fr_auto] sm:grid-cols-[64px_1fr_auto_120px] items-center gap-x-4 px-5 py-2.5 bg-white/[0.03] border-b border-white/[0.07]">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-dive-inactive">
            {isKo ? "빌드" : "Build"}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-dive-inactive">
            {isKo ? "제목" : "Title"}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-dive-inactive text-right sm:hidden">
            {isKo ? "날짜" : "Date"}
          </span>
          <span className="hidden sm:block text-[11px] font-semibold uppercase tracking-widest text-dive-inactive text-right">
            {isKo ? "날짜" : "Date"}
          </span>
        </div>

        {/* Rows */}
        {builds.map((b, i) => {
          const isOpen = openIndex === i;
          const title  = isKo ? b.titleKo : b.titleEn;
          const changes = isKo ? b.changesKo : b.changesEn;
          const tests   = isKo ? b.testsKo   : b.testsEn;
          const note    = isKo ? b.noteKo    : b.noteEn;

          return (
            <motion.div
              key={b.build}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              className={`border-b border-white/[0.06] last:border-b-0 ${isOpen ? "bg-white/[0.04]" : ""}`}
            >
              {/* Row button */}
              <button
                onClick={() => toggle(i)}
                className="w-full text-left grid grid-cols-[56px_1fr_auto] sm:grid-cols-[64px_1fr_auto_120px] items-start gap-x-4 px-5 py-3.5 hover:bg-white/[0.03] transition-colors"
              >
                {/* Build number */}
                <span className="font-mono text-sm font-bold text-dive-info pt-0.5">
                  {b.build}
                </span>

                {/* Title + tags */}
                <div className="min-w-0">
                  <p className={`text-sm font-medium leading-snug truncate ${isOpen ? "text-white" : "text-white/80"}`}>
                    {title}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {b.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-medium px-1.5 py-0.5 rounded-md ${TAG_STYLE[tag]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Chevron (mobile) */}
                <div className="flex flex-col items-end gap-1 pt-0.5 sm:hidden">
                  <span className="text-[11px] text-dive-inactive">{b.date}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.18 }}
                    className="text-dive-inactive text-[10px]"
                  >
                    ▶
                  </motion.span>
                </div>

                {/* Date + chevron (desktop) */}
                <div className="hidden sm:flex items-center justify-end gap-2">
                  <span className="text-xs text-dive-inactive tabular-nums">{b.date}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.18 }}
                    className="text-dive-inactive text-[10px]"
                  >
                    ▶
                  </motion.span>
                </div>
              </button>

              {/* Expanded body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mx-5 mb-5 mt-1 space-y-5 border-t border-white/[0.07] pt-4">

                      {/* Changes */}
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-dive-inactive mb-3">
                          {isKo ? "변경 사항" : "Changes"}
                        </p>
                        <ul className="space-y-2.5">
                          {changes.map((c, ci) => (
                            <li key={ci} className="flex gap-3">
                              <span className="text-dive-aqua mt-0.5 flex-shrink-0 text-xs">●</span>
                              <div>
                                <span className="font-semibold text-sm text-white">{c.title}</span>
                                <span className="text-dive-inactive text-sm"> — {c.desc}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tests */}
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-dive-inactive mb-3">
                          {isKo ? "테스트 항목" : "Test Cases"}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {tests.map((t, ti) => (
                            <div
                              key={ti}
                              className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3"
                            >
                              <div className="flex items-center justify-between gap-2 mb-1">
                                <span className="font-semibold text-xs text-white">{t.name}</span>
                                <span className={`text-[11px] font-bold flex-shrink-0 ${t.pass ? "text-dive-safe" : "text-dive-critical"}`}>
                                  {t.pass ? "✓ PASS" : "✗ FAIL"}
                                </span>
                              </div>
                              <p className="text-xs text-dive-inactive leading-snug">{t.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Note */}
                      {note && (
                        <div className="bg-dive-info/[0.08] border-l-2 border-dive-info rounded-r-xl px-4 py-3">
                          <p className="text-xs text-dive-inactive/80 font-mono leading-relaxed">{note}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
