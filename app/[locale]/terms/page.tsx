import LegalPage from "@/components/LegalPage";
import { getLocale } from "next-intl/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const isKo = locale === "ko";
  return {
    title: isKo ? "이용약관 — Divetools" : "Terms of Service — Divetools",
  };
}

const KO = (
  <LegalPage
    title="이용약관"
    updated="최종 수정일: 2026년 4월"
    sections={[
      {
        heading: "서비스 개요",
        body: (
          <p>
            Divetools(&quot;앱&quot;)는 Cortexys Team이 Apple Watch Ultra 및 iPhone 사용자를 위해 제공하는
            다이빙 지원 소프트웨어입니다. 앱을 사용함으로써 본 약관에 동의하는 것으로 간주됩니다.
          </p>
        ),
      },
      {
        heading: "사용 조건",
        body: (
          <ul className="list-disc list-inside space-y-1.5">
            <li>본 앱은 만 18세 이상의 성인 다이버를 대상으로 합니다.</li>
            <li>사용자는 유효한 다이빙 자격증을 보유해야 합니다.</li>
            <li>앱은 Apple Watch Ultra(1·2·3세대)에서만 수심 센서 기능을 지원합니다.</li>
            <li>상업적 목적의 무단 복제·배포를 금지합니다.</li>
          </ul>
        ),
      },
      {
        heading: "안전 및 책임 한계",
        body: (
          <>
            <p className="mb-2">
              Divetools는 Bühlmann ZHL-16C 표준 알고리즘을 기반으로 감압 계산을 제공합니다.
              그러나 다음 사항에 유의하시기 바랍니다:
            </p>
            <ul className="list-disc list-inside space-y-1.5">
              <li>개인의 생리적 조건(피로도, 수화 상태, 나이, 건강 상태)은 실제 감압 요구량에 영향을 줄 수 있습니다.</li>
              <li>소프트웨어 오류, 하드웨어 결함 또는 수압 센서 이상으로 인한 부정확한 수치가 발생할 수 있습니다.</li>
              <li>Cortexys Team은 앱 사용으로 인한 부상, 사고, 사망에 대해 법적 책임을 지지 않습니다.</li>
            </ul>
          </>
        ),
      },
      {
        heading: "지적 재산권",
        body: (
          <p>
            앱의 소스 코드, 디자인, 알고리즘 구현물의 저작권은 Cortexys Team에 귀속됩니다.
            오픈소스로 공개된 부분은 각 라이선스를 따릅니다.
          </p>
        ),
      },
      {
        heading: "서비스 변경 및 종료",
        body: (
          <p>
            Cortexys Team은 사전 통지 없이 앱의 기능을 변경하거나 서비스를 종료할 권리를 보유합니다.
            중요한 변경 사항은 App Store 업데이트 노트를 통해 공지합니다.
          </p>
        ),
      },
      {
        heading: "준거법",
        body: <p>본 약관은 대한민국 법률을 준거법으로 합니다.</p>,
      },
      {
        heading: "문의",
        body: (
          <p>
            약관 관련 문의는{" "}
            <a href="/ko/contact" className="text-dive-aqua hover:underline">
              문의 페이지
            </a>
            를 이용해 주세요.
          </p>
        ),
      },
    ]}
  />
);

const EN = (
  <LegalPage
    title="Terms of Service"
    updated="Last updated: April 2026"
    sections={[
      {
        heading: "Overview",
        body: (
          <p>
            Divetools (&quot;the App&quot;) is diving support software provided by Cortexys Team for
            Apple Watch Ultra and iPhone users. By using the App, you agree to these terms.
          </p>
        ),
      },
      {
        heading: "Eligibility",
        body: (
          <ul className="list-disc list-inside space-y-1.5">
            <li>The App is intended for certified divers aged 18 and older.</li>
            <li>Users must hold a valid diving certification.</li>
            <li>Depth sensor features require Apple Watch Ultra (1st, 2nd, or 3rd generation).</li>
            <li>Unauthorized commercial reproduction or distribution is prohibited.</li>
          </ul>
        ),
      },
      {
        heading: "Safety & Limitation of Liability",
        body: (
          <>
            <p className="mb-2">
              Divetools provides decompression calculations based on the Bühlmann ZHL-16C algorithm.
              Please note:
            </p>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Individual physiology (fatigue, hydration, age, health) affects real decompression requirements.</li>
              <li>Software bugs, hardware faults, or sensor errors may produce inaccurate readings.</li>
              <li>Cortexys Team accepts no legal liability for injuries, accidents, or deaths arising from App use.</li>
            </ul>
          </>
        ),
      },
      {
        heading: "Intellectual Property",
        body: (
          <p>
            The App&apos;s source code, design, and algorithm implementations are owned by Cortexys Team.
            Open-source components are governed by their respective licenses.
          </p>
        ),
      },
      {
        heading: "Service Changes",
        body: (
          <p>
            Cortexys Team reserves the right to modify or discontinue the App without prior notice.
            Material changes will be announced via App Store update notes.
          </p>
        ),
      },
      {
        heading: "Governing Law",
        body: <p>These terms are governed by the laws of the Republic of Korea.</p>,
      },
      {
        heading: "Contact",
        body: (
          <p>
            For terms inquiries, please use the{" "}
            <a href="/en/contact" className="text-dive-aqua hover:underline">
              contact page
            </a>
            .
          </p>
        ),
      },
    ]}
  />
);

export default async function TermsPage() {
  const locale = await getLocale();
  return locale === "ko" ? KO : EN;
}
