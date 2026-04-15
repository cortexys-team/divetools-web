"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ICONS = [
  // Apple Watch Ultra icon
  <svg key="watch" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
    <rect x="7" y="2" width="10" height="20" rx="4"/>
    <path d="M7 8h10M7 16h10"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>
  </svg>,
  // watchOS icon
  <svg key="wos" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5l3 3"/>
  </svg>,
  // iPhone icon
  <svg key="iphone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
    <rect x="5" y="2" width="14" height="20" rx="3"/>
    <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none"/>
  </svg>,
];

const COLORS = ["text-dive-aqua", "text-dive-safe", "text-white/60"];

export default function Requirements() {
  const t = useTranslations("requirements");
  const items = t.raw("items") as Array<{ title: string; desc: string; note?: string }>;

  return (
    <section className="py-24 px-5">
      <div className="max-w-5xl mx-auto">
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
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/8 bg-ocean-base/60 backdrop-blur-sm"
            >
              <div className={`mb-4 ${COLORS[i]}`}>{ICONS[i]}</div>
              <h3 className="text-white font-semibold text-base mb-1">{item.title}</h3>
              <p className="text-dive-inactive text-sm">{item.desc}</p>
              {item.note && (
                <span className="mt-3 text-xs font-medium text-dive-aqua border border-dive-aqua/20 bg-dive-aqua/5 px-3 py-1 rounded-full">
                  {item.note}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
