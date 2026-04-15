import LegalPage from "@/components/LegalPage";
import { getLocale } from "next-intl/server";

export async function generateMetadata() {
  const locale = await getLocale();
  const isKo = locale === "ko";
  return {
    title: isKo ? "개인정보처리방침 — Divetools" : "Privacy Policy — Divetools",
  };
}

const KO = (
  <LegalPage
    title="개인정보처리방침"
    updated="최종 수정일: 2026년 4월"
    sections={[
      {
        heading: "개요",
        body: (
          <p>
            Divetools(이하 &quot;앱&quot;)는 Cortexys Team이 개발합니다. 본 방침은 앱이 수집하는 데이터,
            사용 방식 및 저장 방법을 설명합니다.
          </p>
        ),
      },
      {
        heading: "수집하는 데이터",
        body: (
          <ul className="list-disc list-inside space-y-1.5">
            <li>다이브 로그: 수심, 시간, 수온, GPS 좌표, 감압 데이터 (기기 내 저장, 외부 미전송)</li>
            <li>건강 데이터: Apple Health에 기록되는 다이브 운동 (사용자 허가 필요)</li>
            <li>위치 데이터: 다이브 세션 중 기록되는 GPS 좌표 (사용자 허가 필요)</li>
            <li>Apple 로그인: Apple이 제공하는 이름·이메일 (iCloud KV Store에 로컬 저장)</li>
            <li>설정: 그레이디언트 팩터, 가스 프로파일, 단위 설정 (UserDefaults / iCloud KV)</li>
          </ul>
        ),
      },
      {
        heading: "수집하지 않는 데이터",
        body: (
          <ul className="list-disc list-inside space-y-1.5">
            <li>분석·추적 데이터 없음</li>
            <li>외부 서버로 개인정보 전송 없음</li>
            <li>광고 식별자 사용 없음</li>
          </ul>
        ),
      },
      {
        heading: "iCloud Key-Value Store",
        body: (
          <p>
            설정 및 계정 정보는 iCloud KV Store를 통해 본인 기기 간 동기화될 수 있습니다.
            해당 데이터는 사용자 본인만 접근 가능하며 Apple의 iCloud 약관을 따릅니다.
          </p>
        ),
      },
      {
        heading: "Apple Health",
        body: (
          <p>
            사용자 허가 시 다이브 운동이 Apple Health에 기록됩니다. 이 데이터는 기기에 로컬 저장되며
            Apple의 Health 데이터 정책을 따릅니다.
          </p>
        ),
      },
      {
        heading: "위치 서비스",
        body: (
          <p>
            GPS 위치는 다이브 로그 목적으로 다이브별 선택적으로 기록됩니다. 위치 데이터는 앱의
            SwiftData 데이터베이스에 로컬 저장되며 외부 서버로 전송되지 않습니다.
          </p>
        ),
      },
      {
        heading: "데이터 삭제",
        body: (
          <p>
            모든 다이브 로그와 설정은 기기에 로컬 저장됩니다. 앱을 삭제하면 모든 앱 데이터가 삭제됩니다.
          </p>
        ),
      },
      {
        heading: "아동 개인정보",
        body: <p>본 앱은 만 13세 미만 아동을 대상으로 하지 않습니다.</p>,
      },
      {
        heading: "문의",
        body: (
          <p>
            개인정보 관련 문의:{" "}
            <a
              href="https://github.com/cortexys-team/dive-computer-watch/issues"
              className="text-dive-aqua hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Issues
            </a>
          </p>
        ),
      },
    ]}
  />
);

const EN = (
  <LegalPage
    title="Privacy Policy"
    updated="Last updated: April 2026"
    sections={[
      {
        heading: "Overview",
        body: (
          <p>
            Divetools (&quot;the App&quot;) is developed by Cortexys Team. This policy describes what data
            the App collects, how it is used, and how it is stored.
          </p>
        ),
      },
      {
        heading: "Data Collected (on-device only)",
        body: (
          <ul className="list-disc list-inside space-y-1.5">
            <li>Dive logs: depth, time, temperature, GPS, decompression data (local only)</li>
            <li>Health data: dive workouts written to Apple Health (requires permission)</li>
            <li>Location: GPS coordinates per dive session (requires permission)</li>
            <li>Apple Sign In: name and email stored locally via iCloud KV Store</li>
            <li>Settings: gradient factors, gas profiles, unit preferences</li>
          </ul>
        ),
      },
      {
        heading: "Data NOT Collected",
        body: (
          <ul className="list-disc list-inside space-y-1.5">
            <li>No analytics or tracking data</li>
            <li>No personal data sent to external servers</li>
            <li>No advertising identifiers</li>
          </ul>
        ),
      },
      {
        heading: "iCloud Key-Value Store",
        body: (
          <p>
            Settings may sync across your own devices via iCloud KV Store. This data is accessible
            only to you and governed by Apple&apos;s iCloud terms.
          </p>
        ),
      },
      {
        heading: "Apple Health",
        body: (
          <p>
            With your permission, dive workouts are written to Apple Health. Stored locally on your
            device, governed by Apple&apos;s Health data policies.
          </p>
        ),
      },
      {
        heading: "Data Deletion",
        body: (
          <p>All data is stored locally. Deleting the App removes all app data.</p>
        ),
      },
      {
        heading: "Children&apos;s Privacy",
        body: <p>The App is not intended for children under 13.</p>,
      },
      {
        heading: "Contact",
        body: (
          <p>
            Privacy inquiries:{" "}
            <a
              href="https://github.com/cortexys-team/dive-computer-watch/issues"
              className="text-dive-aqua hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Issues
            </a>
          </p>
        ),
      },
    ]}
  />
);

export default async function PrivacyPage() {
  const locale = await getLocale();
  return locale === "ko" ? KO : EN;
}
