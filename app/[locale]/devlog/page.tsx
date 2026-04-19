import Navigation from "@/components/Navigation";
import DevLog from "@/components/DevLog";
import Footer from "@/components/Footer";
import { getLocale } from "next-intl/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const isKo = locale === "ko";
  return {
    title: isKo ? "개발 로그 — Divetools" : "Dev Log — Divetools",
    description: isKo
      ? "Divetools 앱 빌드 히스토리 및 알고리즘 개발 기록. Build 1부터 Build 33까지."
      : "Divetools app build history and algorithm development log. Build 1 through Build 33.",
  };
}

export default async function DevLogPage() {
  const locale = await getLocale();

  return (
    <main className="bg-ocean-deep min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Page hero */}
      <section className="max-w-3xl mx-auto px-5 pt-32 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
          {locale === "ko" ? "개발 로그" : "Development Log"}
        </h1>
        <p className="text-dive-inactive text-base max-w-xl leading-relaxed">
          {locale === "ko"
            ? "Divetools 빌드 히스토리, 알고리즘 개발 기록, 테스트 커버리지. Bühlmann ZHL-16C GF 자체 구현부터 UI 재설계까지."
            : "Build history, algorithm development notes, and test coverage for Divetools. From in-house Bühlmann ZHL-16C implementation to UI redesigns."}
        </p>
      </section>

      <DevLog locale={locale} />

      <Footer />
    </main>
  );
}
