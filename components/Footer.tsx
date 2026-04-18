"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const APP_STORE_URL = "https://apps.apple.com/app/id6762140303";

export default function Footer() {
  const t = useTranslations("footer");
  const params = useParams();
  const locale = params?.locale ?? "ko";

  return (
    <footer className="border-t border-white/5 py-12 px-5">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-5">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-dive-inactive">
          <Link href={`/${locale}/devlog`} className="hover:text-white transition-colors">
            {t("devlog")}
          </Link>
          <Link href={`/${locale}/contact`} className="hover:text-white transition-colors">
            {t("contact")}
          </Link>
          <Link href={`/${locale}/privacy`} className="hover:text-white transition-colors">
            {t("privacy")}
          </Link>
          <Link href={`/${locale}/terms`} className="hover:text-white transition-colors">
            {t("terms")}
          </Link>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            {t("appStore")}
          </a>
        </div>
        <p className="text-xs text-white/20">{t("copyright")}</p>
      </div>
    </footer>
  );
}
