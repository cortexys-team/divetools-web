"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SCREENSHOTS = ["/screenshots/watch_main.png", "/screenshots/watch_dive.png"];

export default function Screenshots() {
  const t = useTranslations("screenshots");
  const labels = t.raw("labels") as string[];
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + SCREENSHOTS.length) % SCREENSHOTS.length);
  const next = () => setCurrent((c) => (c + 1) % SCREENSHOTS.length);

  return (
    <section className="py-24 px-5 overflow-hidden">
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

        {/* Watch mockup */}
        <div className="flex flex-col items-center gap-8">
          {/* Bezel + screen */}
          <div className="relative" style={{ width: 220, height: 260 }}>
            {/* Watch Ultra bezel SVG */}
            <svg
              viewBox="0 0 220 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full z-10 pointer-events-none"
            >
              {/* Outer case */}
              <rect x="8" y="8" width="204" height="244" rx="52" fill="#1C1C1E" stroke="#3A3A3C" strokeWidth="1.5"/>
              {/* Screen area */}
              <rect x="18" y="18" width="184" height="224" rx="44" fill="#010D23"/>
              {/* Crown / button */}
              <rect x="210" y="60" width="10" height="36" rx="5" fill="#2C2C2E" stroke="#3A3A3C" strokeWidth="1"/>
              {/* Action button */}
              <rect x="210" y="110" width="10" height="24" rx="4" fill="#FF4245" stroke="#3A3A3C" strokeWidth="1"/>
              {/* Titanium texture lines */}
              <rect x="8" y="8" width="204" height="244" rx="52" fill="url(#titanium)" opacity="0.15"/>
              <defs>
                <linearGradient id="titanium" x1="0" y1="0" x2="220" y2="260">
                  <stop offset="0%" stopColor="white" stopOpacity="0.4"/>
                  <stop offset="50%" stopColor="white" stopOpacity="0"/>
                  <stop offset="100%" stopColor="white" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
            </svg>

            {/* Screenshot inside bezel */}
            <div
              className="absolute z-0 overflow-hidden"
              style={{ left: 18, top: 18, width: 184, height: 224, borderRadius: 44 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <Image
                    src={SCREENSHOTS[current]}
                    alt={labels[current] ?? `Screenshot ${current + 1}`}
                    width={410}
                    height={502}
                    className="w-full h-full object-cover"
                    priority={current === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Label */}
          <p className="text-sm font-medium text-dive-aqua">
            {labels[current] ?? `${current + 1} / ${SCREENSHOTS.length}`}
          </p>

          {/* Controls */}
          <div className="flex items-center gap-5">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-dive-inactive hover:text-white hover:border-white/30 transition-all"
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {SCREENSHOTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all ${
                    i === current
                      ? "bg-dive-aqua w-5 h-2"
                      : "bg-white/20 w-2 h-2 hover:bg-white/40"
                  }`}
                  aria-label={`Go to screenshot ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-dive-inactive hover:text-white hover:border-white/30 transition-all"
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
