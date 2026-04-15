"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

const watchFeatures = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v5l3 2"/>
      </svg>
    ),
    color: "text-dive-aqua",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M3 12h4l3-9 4 18 3-9h4"/>
      </svg>
    ),
    color: "text-dive-safe",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
    color: "text-dive-caution",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2.5"/>
      </svg>
    ),
    color: "text-dive-critical",
  },
];

const phoneFeatures = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    color: "text-dive-aqua",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    color: "text-dive-safe",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/>
      </svg>
    ),
    color: "text-dive-info",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    color: "text-white/50",
  },
];

export default function AppShowcase() {
  const t = useTranslations("showcase");
  const watchItems = t.raw("watch.features") as Array<{ title: string; desc: string }>;
  const phoneItems = t.raw("phone.features") as Array<{ title: string; desc: string }>;

  return (
    <section className="py-24 px-5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {t("title")}
          </h2>
          <p className="text-dive-inactive text-base">{t("subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Watch App Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-white/8 bg-ocean-base/60 backdrop-blur-sm overflow-hidden"
          >
            {/* Watch mockup preview */}
            <div className="flex items-center justify-center py-10 bg-gradient-to-b from-[#051A4A]/60 to-transparent relative">
              {/* Subtle glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-dive-aqua/10 blur-2xl pointer-events-none" />
              {/* Watch SVG bezel */}
              <div className="relative" style={{ width: 140, height: 166 }}>
                <svg
                  viewBox="0 0 220 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                >
                  <rect x="8" y="8" width="204" height="244" rx="52" fill="#1C1C1E" stroke="#3A3A3C" strokeWidth="1.5"/>
                  <rect x="18" y="18" width="184" height="224" rx="44" fill="#010D23"/>
                  <rect x="210" y="60" width="10" height="36" rx="5" fill="#2C2C2E" stroke="#3A3A3C" strokeWidth="1"/>
                  <rect x="210" y="110" width="10" height="24" rx="4" fill="#FF4245" stroke="#3A3A3C" strokeWidth="1"/>
                  <rect x="8" y="8" width="204" height="244" rx="52" fill="url(#ti2)" opacity="0.15"/>
                  <defs>
                    <linearGradient id="ti2" x1="0" y1="0" x2="220" y2="260">
                      <stop offset="0%" stopColor="white" stopOpacity="0.4"/>
                      <stop offset="50%" stopColor="white" stopOpacity="0"/>
                      <stop offset="100%" stopColor="white" stopOpacity="0.1"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div
                  className="absolute z-0 overflow-hidden"
                  style={{ left: "calc(18/220*100%)", top: "calc(18/260*100%)", width: "calc(184/220*100%)", height: "calc(224/260*100%)", borderRadius: "calc(44/220*100%)" }}
                >
                  <Image
                    src="/screenshots/watch_main.png"
                    alt="Divetools watch app"
                    width={410}
                    height={502}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Watch app info */}
            <div className="p-7">
              <div className="flex items-center gap-2 mb-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-dive-aqua">
                  <rect x="7" y="2" width="10" height="20" rx="4"/>
                  <path d="M7 8h10M7 16h10"/>
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
                <span className="text-xs font-medium text-dive-aqua uppercase tracking-widest">{t("watch.label")}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-5">{t("watch.title")}</h3>

              <div className="space-y-3.5">
                {watchItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`mt-0.5 shrink-0 ${watchFeatures[i]?.color ?? "text-dive-inactive"}`}>
                      {watchFeatures[i]?.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/90">{item.title}</p>
                      <p className="text-xs text-dive-inactive mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* iPhone App Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-3xl border border-white/8 bg-ocean-base/60 backdrop-blur-sm overflow-hidden"
          >
            {/* iPhone mockup placeholder */}
            <div className="flex items-center justify-center py-10 bg-gradient-to-b from-[#071030]/60 to-transparent relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-dive-info/8 blur-2xl pointer-events-none" />
              {/* iPhone SVG shape */}
              <div className="relative" style={{ width: 90, height: 166 }}>
                <svg
                  viewBox="0 0 90 166"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                >
                  <rect x="2" y="2" width="86" height="162" rx="20" fill="#1C1C1E" stroke="#3A3A3C" strokeWidth="1.5"/>
                  <rect x="9" y="9" width="72" height="148" rx="16" fill="#010D23"/>
                  {/* Dynamic Island */}
                  <rect x="30" y="13" width="30" height="8" rx="4" fill="#0A0A0A"/>
                  {/* Side button */}
                  <rect x="86" y="50" width="4" height="30" rx="2" fill="#2C2C2E"/>
                  {/* Volume buttons */}
                  <rect x="0" y="45" width="3" height="20" rx="1.5" fill="#2C2C2E"/>
                  <rect x="0" y="70" width="3" height="20" rx="1.5" fill="#2C2C2E"/>
                  <rect x="2" y="2" width="86" height="162" rx="20" fill="url(#iphoneGrad)" opacity="0.1"/>
                  <defs>
                    <linearGradient id="iphoneGrad" x1="0" y1="0" x2="90" y2="166">
                      <stop offset="0%" stopColor="white" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
                {/* Phone screen content placeholder — dive log icon */}
                <div
                  className="absolute z-0 overflow-hidden flex flex-col items-center justify-center gap-2"
                  style={{ left: 9, top: 9, width: 72, height: 148, borderRadius: 16, background: "#010D23" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#3CD3FE" strokeWidth="1.2" className="w-8 h-8 opacity-60">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                  <div className="w-8 h-0.5 rounded bg-dive-aqua/20"/>
                  <div className="w-6 h-0.5 rounded bg-white/10"/>
                  <div className="w-7 h-0.5 rounded bg-white/10"/>
                </div>
              </div>
            </div>

            {/* iPhone app info */}
            <div className="p-7">
              <div className="flex items-center gap-2 mb-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-dive-info">
                  <rect x="5" y="2" width="14" height="20" rx="3"/>
                  <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none"/>
                </svg>
                <span className="text-xs font-medium text-dive-info uppercase tracking-widest">{t("phone.label")}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-5">{t("phone.title")}</h3>

              <div className="space-y-3.5">
                {phoneItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`mt-0.5 shrink-0 ${phoneFeatures[i]?.color ?? "text-dive-inactive"}`}>
                      {phoneFeatures[i]?.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/90">{item.title}</p>
                      <p className="text-xs text-dive-inactive mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
