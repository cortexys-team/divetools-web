"use client";

import { useTranslations } from "next-intl";

const GITHUB_URL = "https://github.com/cortexys-team/dive-computer-watch";
const PRIVACY_URL = "https://github.com/cortexys-team/dive-computer-watch/blob/main/PRIVACY.md";
const APP_STORE_URL = "https://apps.apple.com/app/id6762140303";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-white/5 py-12 px-5">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-5">
        {/* Disclaimer */}
        <p className="text-xs text-dive-inactive text-center max-w-md leading-relaxed">
          {t("disclaimer")}
        </p>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-dive-inactive">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            {t("github")}
          </a>
          <a
            href={PRIVACY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            {t("privacy")}
          </a>
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
