import ContactForm from "@/components/ContactForm";
import { getLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata() {
  const locale = await getLocale();
  const isKo = locale === "ko";
  return {
    title: isKo ? "문의하기 — Divetools" : "Contact — Divetools",
  };
}

export default async function ContactPage() {
  const locale = await getLocale();
  const t = await getTranslations("contact");

  return (
    <div className="min-h-screen bg-ocean-deep text-white">
      {/* Header */}
      <div className="border-b border-white/5 py-5 px-5">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link
            href={`/${locale}`}
            className="text-dive-inactive hover:text-white transition-colors text-sm flex items-center gap-1.5"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Divetools
          </Link>
        </div>
      </div>

      <main className="max-w-2xl mx-auto px-5 py-16">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-3">{t("title")}</h1>
          <p className="text-dive-inactive leading-relaxed">{t("description")}</p>
        </div>
        <ContactForm />
      </main>
    </div>
  );
}
