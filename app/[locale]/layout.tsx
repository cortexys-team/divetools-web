import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  return {
    title: isKo
      ? "Divetools — Apple Watch Ultra 전용 다이브 컴퓨터"
      : "Divetools — Apple Watch Ultra Dive Computer",
    description: isKo
      ? "Apple Watch Ultra 전용 프로 다이브 컴퓨터. Bühlmann ZHL-16C 감압 알고리즘, 실시간 수심 센서, 가스 관리, 안전 알림."
      : "Professional dive computer for Apple Watch Ultra. Bühlmann ZHL-16C decompression, real-time depth sensor, gas management.",
    alternates: {
      canonical: `/${locale}`,
      languages: { ko: "/ko", en: "/en" },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div lang={locale}>{children}</div>
    </NextIntlClientProvider>
  );
}
