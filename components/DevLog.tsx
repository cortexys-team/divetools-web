"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { builds, BuildTag } from "@/lib/devlog-data";

const TAG_STYLE: Record<BuildTag, string> = {
  watchOS:   "bg-dive-aqua/10 text-dive-aqua",
  iOS:       "bg-dive-info/10 text-dive-info",
  Algorithm: "bg-dive-safe/10 text-dive-safe",
  Fix:       "bg-dive-critical/10 text-dive-critical",
  "UI/UX":   "bg-dive-caution/10 text-dive-caution",
  Settings:  "bg-white/10 text-white/60",
};

interface Props {
  locale: string;
}

export default function DevLog({ locale }: Props) {
  const isKo = locale === "ko";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="max-w-3xl mx-auto px-5 pb-24 pt-10">
      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
        {[
          { num: "33", label: isKo ? "현재 빌드" : "Current Build", color: "text-dive-safe" },
          { num: "19", label: isKo ? "알고리즘 테스트" : "Algorithm Tests", color: "text-dive-info" },
          { num: "16", label: isKo ? "ZHL-16C 구획" : "ZHL-16C Compartments", color: "text-dive-aqua" },
          { num: "2",  label: isKo ? "플랫폼" : "Platforms", color: "text-dive-caution" },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="bg-white/[0.04] border border-white/[0.07] rounded-xl p-4 text-center"
          >
            <div className={`text-3xl font-bold ${s.color}`}>{s.num}</div>
            <div className="text-xs text-dive-inactive mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Build cards */}
      <div className="space-y-3">
        {builds.map((b, i) => {
          const isOpen = openIndex === i;
          const changes = isKo ? b.changesKo : b.changesEn;
          const tests   = isKo ? b.testsKo   : b.testsEn;
          const title   = isKo ? b.titleKo   : b.titleEn;
          const note    = isKo ? b.noteKo    : b.noteEn;

          return (
            <motion.div
              key={b.build}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className="bg-white/[0.04] border border-white/[0.07] rounded-2xl overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => toggle(i)}
                className="w-full text-left px-5 py-4 flex items-start gap-4 hover:bg-white/[0.03] transition-colors"
              >
                {/* Build number */}
                <span className="text-dive-info font-bold text-sm min-w-[64px] pt-0.5 font-mono">
                  Build {b.build}
                </span>

                {/* Title + tags */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-white leading-snug">{title}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {b.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${TAG_STYLE[tag]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Date + chevron */}
                <div className="flex items-center gap-2 flex-shrink-0 pt-0.5">
                  <span className="text-xs text-dive-inactive hidden sm:block">{b.date}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-dive-inactive text-xs"
                  >
                    ▶
                  </motion.span>
                </div>
              </button>

              {/* Body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/[0.07] px-5 pb-5 pt-4 space-y-5">
                      {/* Date (mobile) */}
                      <p className="text-xs text-dive-inactive sm:hidden">{b.date}</p>

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
