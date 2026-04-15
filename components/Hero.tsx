"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

const APP_STORE_URL = "https://apps.apple.com/app/id6762140303";

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } },
  item: { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } },
};

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #051A4A 0%, #010D23 70%)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#3CD3FE 1px, transparent 1px), linear-gradient(90deg, #3CD3FE 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-dive-aqua/5 blur-3xl -z-10 pointer-events-none" />

      <motion.div
        variants={stagger.container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center gap-5 max-w-xl"
      >
        {/* App Icon */}
        <motion.div variants={stagger.item}>
          <div className="w-24 h-24 rounded-[22px] overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10">
            <Image
              src="/icon_1024.png"
              alt="Divetools app icon"
              width={96}
              height={96}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={stagger.item}
          className="text-5xl sm:text-6xl font-bold text-white tracking-tight"
        >
          {t("title")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={stagger.item}
          className="text-lg sm:text-xl font-medium text-dive-aqua"
        >
          {t("subtitle")}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={stagger.item}
          className="text-sm text-dive-inactive leading-relaxed"
        >
          {t("tagline")}
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={stagger.item}
          className="flex flex-col sm:flex-row items-center gap-3 mt-2"
        >
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 bg-white text-black font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/90 transition-all shadow-lg shadow-black/30 active:scale-95"
          >
            {/* Apple logo */}
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-black" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            {t("cta")}
          </a>

          <span className="flex items-center gap-1.5 text-xs text-dive-inactive border border-white/10 px-4 py-2.5 rounded-full">
            <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 stroke-dive-aqua stroke-2">
              <rect x="5" y="2" width="14" height="20" rx="3"/>
              <circle cx="12" cy="17" r="1"/>
            </svg>
            {t("badge")}
          </span>
        </motion.div>

        {/* Free badge */}
        <motion.p variants={stagger.item} className="text-xs text-dive-inactive">
          {t("free")} · Apple Watch Ultra 1 / 2 / 3
        </motion.p>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-ocean-deep pointer-events-none" />
    </section>
  );
}
