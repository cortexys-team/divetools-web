"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ICONS: Record<string, React.ReactNode> = {
  bubble: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <circle cx="12" cy="12" r="9"/>
      <path d="M8 12c0-2.2 1.8-4 4-4M9 16.5c.9.3 1.9.5 3 .5"/>
    </svg>
  ),
  sensor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  gas: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
  ),
  wave: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M2 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/>
      <path d="M2 17c2-4 4-4 6 0s4 4 6 0 4-4 6 0" opacity="0.4"/>
    </svg>
  ),
  alert: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
      <line x1="12" y1="9" x2="12" y2="13"/>
      <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

const ICON_COLORS = [
  "text-dive-aqua",
  "text-dive-safe",
  "text-dive-caution",
  "text-dive-info",
  "text-dive-critical",
  "text-white/70",
];

export default function Features() {
  const t = useTranslations("features");
  const items = t.raw("items") as Array<{ icon: string; title: string; desc: string }>;

  return (
    <section className="py-24 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {t("title")}
          </h2>
          <p className="text-dive-inactive text-base">{t("subtitle")}</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="relative group p-6 rounded-2xl border border-white/8 bg-ocean-base/60 backdrop-blur-sm hover:border-white/15 hover:bg-ocean-surface/40 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`mb-4 ${ICON_COLORS[i % ICON_COLORS.length]}`}>
                {ICONS[item.icon] ?? ICONS.bubble}
              </div>

              <h3 className="text-white font-semibold text-base mb-2">
                {item.title}
              </h3>
              <p className="text-dive-inactive text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
