"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const APP_STORE_URL = "https://apps.apple.com/app/id6762140303";

export default function Navigation() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  const locale = pathname.startsWith("/en") ? "en" : "ko";
  const otherLocale = locale === "ko" ? "en" : "ko";
  const otherPath = pathname.replace(`/${locale}`, `/${otherLocale}`) || `/${otherLocale}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ocean-deep/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
        {/* Logo */}
        <span className="text-white font-semibold text-base tracking-tight">
          Divetools
        </span>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* Dev Log link */}
          <a
            href={`/${locale}/devlog`}
            className="text-xs font-medium text-dive-inactive hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-white/5 hidden sm:block"
          >
            {t("devlog")}
          </a>

          {/* Language toggle */}
          <button
            onClick={() => router.push(otherPath)}
            className="text-xs font-medium text-dive-inactive hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-white/5"
          >
            {otherLocale.toUpperCase()}
          </button>

          {/* App Store button */}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold bg-dive-info/90 hover:bg-dive-info text-white px-4 py-1.5 rounded-full transition-colors"
          >
            {t("appStore")}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
