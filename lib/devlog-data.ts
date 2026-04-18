export type BuildTag = "watchOS" | "iOS" | "Algorithm" | "Fix" | "UI/UX" | "Settings";

export interface BuildEntry {
  build: string;
  date: string;
  titleKo: string;
  titleEn: string;
  tags: BuildTag[];
  changesKo: { title: string; desc: string }[];
  changesEn: { title: string; desc: string }[];
  testsKo: { name: string; desc: string; pass: boolean }[];
  testsEn: { name: string; desc: string; pass: boolean }[];
  noteKo?: string;
  noteEn?: string;
}

export const builds: BuildEntry[] = [
  {
    build: "33",
    date: "2026-04-18",
    titleKo: "앱 로고 통일 · 프리다이빙 폰트 스케일 · 나침반+스톱워치",
    titleEn: "App Logo Unification · FreeDive Font Scale · Compass+Stopwatch",
    tags: ["watchOS", "UI/UX", "Settings"],
    changesKo: [
      {
        title: "앱 로고 통일",
        desc: "Predive 화면(스쿠버/프리)의 AppLogoMark를 SF Symbol water.waves에서 실제 앱 아이콘(3D 파란 토러스)으로 교체. AppLogoIcon.imageset 신규 생성.",
      },
      {
        title: "프리다이빙 폰트 스케일 반영",
        desc: "설정 → 글자크기(작게 0.85× / 중간 1.0× / 크게 1.2×)가 FreeDiveView 전체에 반영. DiveScreen, SurfaceScreen, SessionView, LapRow, DepthRulerView 레이블 모두 fs 계수 적용.",
      },
      {
        title: "화면표시항목 신규 옵션",
        desc: "Zone 4 필드에 나침반, 나침반+스톱워치, 스톱워치 세 가지 옵션 추가. SwitchField enum에 .headingStopwatch (rawValue 16) 추가.",
      },
      {
        title: "나침반 → 자동 전환",
        desc: "나침반 모드에서 Long-press 시 스톱워치 시작 + onChange(of: swRunning)이 자동으로 나침반+스톱워치 모드로 전환. StopwatchOnlyRow 신규 struct 추가.",
      },
    ],
    changesEn: [
      {
        title: "App logo unified",
        desc: "AppLogoMark on Predive screens (scuba & freedive) replaced: SF Symbol water.waves → actual app icon (3D blue torus). New AppLogoIcon.imageset created.",
      },
      {
        title: "FreeDive font scaling",
        desc: "Settings → Font Size (Small 0.85× / Medium 1.0× / Large 1.2×) now applies across all FreeDiveView subviews: DiveScreen, SurfaceScreen, SessionView, LapRow, DepthRulerView.",
      },
      {
        title: "New display field options",
        desc: "Zone 4 field now includes: Compass, Compass+Stopwatch, Stopwatch. SwitchField enum extended with .headingStopwatch (rawValue 16).",
      },
      {
        title: "Compass → auto-switch",
        desc: "Long-press in Compass mode starts stopwatch; onChange(of: swRunning) auto-switches bottomField4 to .headingStopwatch. New StopwatchOnlyRow struct added.",
      },
    ],
    testsKo: [
      { name: "앱 로고 표시", desc: "스쿠버/프리 Predive 화면에서 앱 아이콘(토러스) 표시 확인", pass: true },
      { name: "폰트 크기 — 작게", desc: "설정 '작게' → 프리다이빙 화면 폰트 0.85× 축소", pass: true },
      { name: "폰트 크기 — 크게", desc: "설정 '크게' → 프리다이빙 화면 폰트 1.2× 확대", pass: true },
      { name: "화면표시항목 선택", desc: "나침반/나침반+스톱워치/스톱워치 선택 가능", pass: true },
      { name: "나침반 자동 전환", desc: "나침반 모드 Long-press → 스톱워치 시작 + 자동 전환", pass: true },
      { name: "빌드 컴파일", desc: "xcodebuild build DivetoolsWatch — BUILD SUCCEEDED", pass: true },
    ],
    testsEn: [
      { name: "App logo display", desc: "App icon (torus) shown on Predive screens for scuba & freedive", pass: true },
      { name: "Font size — Small", desc: "Settings 'Small' → FreeDive screen fonts scale to 0.85×", pass: true },
      { name: "Font size — Large", desc: "Settings 'Large' → FreeDive screen fonts scale to 1.2×", pass: true },
      { name: "Display field selection", desc: "Compass / Compass+Stopwatch / Stopwatch are selectable", pass: true },
      { name: "Compass auto-switch", desc: "Long-press in Compass mode → stopwatch starts → auto-switch to Compass+Stopwatch", pass: true },
      { name: "Build compile", desc: "xcodebuild build DivetoolsWatch — BUILD SUCCEEDED", pass: true },
    ],
  },
  {
    build: "32",
    date: "2026-04-17",
    titleKo: "프리다이빙 다이빙 중 화면 재설계 — 수심 눈금자 + 스와이프 잠금",
    titleEn: "FreeDive Screen Redesign — Depth Ruler + Swipe Lock",
    tags: ["watchOS", "UI/UX"],
    changesKo: [
      {
        title: "FreeDiveDiveScreen 전면 재작성",
        desc: "수심 눈금자(좌 40%) + 다이브 타이머(우 60%) 고정 레이아웃. ScrollView 제거, VStack fixed 구조.",
      },
      {
        title: "DepthRulerView (Canvas)",
        desc: "현재 수심 포인터 ● (DiveColor.aqua), 최대 수심 수평선 (빨강), 5m/10m 눈금 + 레이블. GeometryReader + Canvas 기반.",
      },
      {
        title: "스와이프 잠금",
        desc: "다이빙 중 TabView 페이지 전환 방지. ZStack에 Color.clear.gesture(DragGesture()) 오버레이, freeVM.isDiving 조건부 활성.",
      },
      {
        title: "폰트·디자인 통일",
        desc: "다이브 타이머 DiveFont.sd(42, Bold), DiveColor 토큰 — 스쿠버 모드와 동일 체계. SwitchPanel 제거, MetricStrip(TIME+MAX) 하단 고정.",
      },
    ],
    changesEn: [
      {
        title: "FreeDiveDiveScreen rewritten",
        desc: "New fixed layout: depth ruler (left 40%) + dive timer (right 60%). ScrollView removed; VStack with fixed geometry.",
      },
      {
        title: "DepthRulerView (Canvas)",
        desc: "Current depth pointer ● (DiveColor.aqua), max depth horizontal line (red), tick marks every 5m/10m with labels. Built with GeometryReader + Canvas.",
      },
      {
        title: "Swipe lock",
        desc: "Prevents TabView page swipe during a dive. Color.clear.gesture(DragGesture()) overlay on ZStack, conditionally active on freeVM.isDiving.",
      },
      {
        title: "Font & design consistency",
        desc: "Dive timer uses DiveFont.sd(42, Bold), DiveColor tokens — same system as scuba mode. SwitchPanel removed; MetricStrip (TIME + MAX) pinned to bottom.",
      },
    ],
    testsKo: [
      { name: "다이빙 중 스와이프 차단", desc: "다이빙 중 좌우 스와이프 → 탭 전환 불가. 수면 화면에서는 스와이프 가능", pass: true },
      { name: "수심 눈금자 — 포인터", desc: "현재 수심 위치에 Aqua 색 원(●) 표시, 실시간 이동", pass: true },
      { name: "수심 눈금자 — 최대수심", desc: "최대 수심 기록 위치에 빨간 수평선(━) 표시, 세션 최댓값 유지", pass: true },
      { name: "MetricStrip 고정", desc: "하단 TIME | MAX 스트립이 화면 하단에 항상 표시", pass: true },
      { name: "DiveFont 적용", desc: "다이브 타이머가 스쿠버 모드 히어로 숫자와 동일한 Pretendard Bold", pass: true },
    ],
    testsEn: [
      { name: "Swipe blocked during dive", desc: "Left/right swipe blocked during dive; swipe still works on surface screen", pass: true },
      { name: "Depth ruler — pointer", desc: "Aqua circle ● tracks current depth in real time", pass: true },
      { name: "Depth ruler — max depth", desc: "Red horizontal line marks session max depth and stays", pass: true },
      { name: "MetricStrip pinned", desc: "TIME | MAX strip always visible at bottom", pass: true },
      { name: "DiveFont applied", desc: "Timer uses same Pretendard Bold as scuba hero number", pass: true },
    ],
  },
  {
    build: "31",
    date: "2026-04-16",
    titleKo: "iOS 다이빙 플래너 분리 — Recreational · Decompression 탭",
    titleEn: "iOS Planner Split — Recreational & Decompression Tabs",
    tags: ["iOS", "Algorithm"],
    changesKo: [
      {
        title: "플래너 탭 분리",
        desc: "기존 단일 DivePlannerView를 컨테이너로 축소. 세그먼트 Picker로 Recreational / Decompression 선택.",
      },
      {
        title: "RecreationalPlannerView (신규)",
        desc: "수심 5–40m, Air/EAN32/EAN36, GF 100/100 (PADI RDP). 신호등 NDL 카드: 초록 >10분 / 노랑 5–10분 / 빨강 <5분 또는 감압. 10m+ 다이빙 시 안전 정지 알림.",
      },
      {
        title: "DecoPlannerView (신규)",
        desc: "감압 가스 최대 3개 (O₂%/He% 피커, MOD 자동 계산), CNS% 누적 (NOAA 테이블), 총 다이빙 시간 (TDT), 프로파일 요약 행.",
      },
      {
        title: "BuhlmannEngine 공개",
        desc: "DiveEngine 패키지 BuhlmannEngine struct를 public으로 노출. iOS 플래너에서 Task.detached로 직접 사용 (wall-clock 우회).",
      },
    ],
    changesEn: [
      {
        title: "Planner tab split",
        desc: "DivePlannerView reduced to a container. Segmented Picker switches between Recreational and Decompression modes.",
      },
      {
        title: "RecreationalPlannerView (new)",
        desc: "Depth 5–40m, Air/EAN32/EAN36, GF 100/100 (PADI RDP). Traffic-light NDL card: green >10min / yellow 5–10min / red <5min or deco. Safety stop note for dives ≥10m.",
      },
      {
        title: "DecoPlannerView (new)",
        desc: "Up to 3 deco gases (O₂%/He% pickers, auto MOD), cumulative CNS% (NOAA table), total dive time (TDT), profile summary row.",
      },
      {
        title: "BuhlmannEngine made public",
        desc: "BuhlmannEngine struct exposed as public in DiveEngine package. iOS planner uses it directly via Task.detached (bypasses wall-clock timing).",
      },
    ],
    testsKo: [
      { name: "Recreational — 40m 초과 경고", desc: "수심 41m 입력 → 빨간 카드 'Exceeds recreational limits' 표시", pass: true },
      { name: "Recreational — NDL 신호등", desc: "NDL >10분 초록 / 5–10분 노랑 / <5분 빨강 전환", pass: true },
      { name: "Decompression — EAN50 추가", desc: "감압 가스 EAN50 추가 시 TTS 단축 확인", pass: true },
      { name: "MOD 자동 계산", desc: "감압 가스 O₂% 변경 → MOD가 ppO₂ 1.6 기준으로 자동 업데이트", pass: true },
      { name: "CNS% 누적 표시", desc: "고 ppO₂ 프로파일 입력 시 CNS% 수치 표시", pass: true },
    ],
    testsEn: [
      { name: "Recreational — 40m+ warning", desc: "Depth 41m → red card 'Exceeds recreational limits'", pass: true },
      { name: "Recreational — NDL traffic light", desc: "NDL >10min green / 5–10min yellow / <5min red", pass: true },
      { name: "Decompression — EAN50 gas", desc: "Adding EAN50 deco gas reduces TTS", pass: true },
      { name: "Auto MOD calculation", desc: "Changing O₂% → MOD updates automatically at ppO₂ 1.6", pass: true },
      { name: "CNS% accumulation", desc: "High ppO₂ profile shows cumulative CNS%", pass: true },
    ],
  },
  {
    build: "30",
    date: "2026-04-15",
    titleKo: "알고리즘 감사 및 수정 — ppO₂ 반영 · 상승속도 기준 · 중력 상수",
    titleEn: "Algorithm Audit — ppO₂ Settings · Ascent Rate Threshold · Gravity Constant",
    tags: ["Algorithm", "Fix", "watchOS"],
    changesKo: [
      {
        title: "ppO₂ 임계값 설정 반영",
        desc: "DiveEngine.Config에 ppO2Warning / ppO2Critical 필드 추가. DiveViewModel.startDive()에서 설정값을 Config에 전달 — 하드코딩 1.4/1.6 제거.",
      },
      {
        title: "위험 상승속도 기준 수정",
        desc: "critical 임계값 maxRate × 2.0 → × 1.5. Suunto Nautic S 사양서 기준 준수.",
      },
      {
        title: "중력 상수 수정",
        desc: "9.81 → 9.80665 m/s² (EN 13319 표준값). 수심 계산 정밀도 향상.",
      },
      {
        title: "DECO 오탐 제거",
        desc: "감압 정거장을 실제 감압 상태일 때만 계산. 수면 상승 후에도 DECO가 표시되던 false positive 수정.",
      },
    ],
    changesEn: [
      {
        title: "ppO₂ thresholds from settings",
        desc: "DiveEngine.Config now has ppO2Warning / ppO2Critical fields. DiveViewModel.startDive() passes user settings to Config — hardcoded 1.4/1.6 removed.",
      },
      {
        title: "Critical ascent rate threshold fixed",
        desc: "Critical threshold changed from maxRate × 2.0 to × 1.5. Matches Suunto Nautic S specification.",
      },
      {
        title: "Gravity constant corrected",
        desc: "9.81 → 9.80665 m/s² (EN 13319 standard). Improved depth calculation accuracy.",
      },
      {
        title: "DECO false positive removed",
        desc: "Deco stops now only computed when actually in decompression. Fixed false DECO display after surfacing.",
      },
    ],
    testsKo: [
      { name: "ppO₂ 경고 설정 반영", desc: "ppO₂ Warning 1.4 → 30% O₂, 34m 초과 시 주의 알람 발동", pass: true },
      { name: "위험 상승속도 경보", desc: "설정 10m/min 기준 → 15m/min 초과 시 critical (1.5×)", pass: true },
      { name: "GF 40/85 vs 85/85 NDL 비교", desc: "GF 40/85가 85/85보다 NDL 더 짧음", pass: true },
      { name: "기체 교환 ceiling 변화", desc: "Air→EAN50 교환 후 ceiling 값 감소 확인", pass: true },
      { name: "DECO 오탐 없음", desc: "레크 다이빙 종료 후 수면에서 DECO 표시 없음", pass: true },
    ],
    testsEn: [
      { name: "ppO₂ warning from settings", desc: "Warning 1.4 → 30% O₂ mix, alert triggers above 34m", pass: true },
      { name: "Critical ascent rate", desc: "Max 10m/min setting → critical fires at 15m/min (1.5×)", pass: true },
      { name: "GF 40/85 vs 85/85 NDL", desc: "GF 40/85 NDL shorter than 85/85 (more conservative)", pass: true },
      { name: "Gas switch ceiling drop", desc: "Air→EAN50 switch reduces ceiling value", pass: true },
      { name: "No DECO false positive", desc: "No DECO shown at surface after recreational dive", pass: true },
    ],
    noteKo: "EN 13319 표준 중력 상수 9.80665 적용으로 염수 10m 압력 오차가 ±0.001 bar 이내로 감소.",
    noteEn: "Applying EN 13319 gravity constant 9.80665 reduces saltwater depth error to within ±0.001 bar at 10m.",
  },
  {
    build: "29",
    date: "2026-04-14",
    titleKo: "자체 Bühlmann ZHL-16C 알고리즘 — 외부 의존성 완전 제거",
    titleEn: "In-house Bühlmann ZHL-16C — External Dependency Removed",
    tags: ["Algorithm", "watchOS", "iOS"],
    changesKo: [
      {
        title: "libbuhlmann-swift 제거",
        desc: "외부 패키지 의존성 완전 제거. Package.swift dependencies: []. DiveEngine 내부 ZHL-16C 구현으로 교체.",
      },
      {
        title: "BuhlmannTissue (신규)",
        desc: "ZHL-16C 표준 16구획 테이블 (Bühlmann 1995). N₂/He 반감기, a/b 계수. Schreiner 방정식 적용 (선형 압력 변화).",
      },
      {
        title: "BuhlmannCore (신규)",
        desc: "BuhlmannGas (O₂/He/N₂), BuhlmannEngine struct. N₂·He 독립 추적. ambientPressure(depth:), addSegment(), addCCRSegment().",
      },
      {
        title: "DecoPlanner (신규)",
        desc: "GF slope ceiling (이진탐색 O(log n), 0.01m 정밀도). NDL (gfHigh 고정, 1분 스텝). calculateDecoStops() 다중가스 지원.",
      },
    ],
    changesEn: [
      {
        title: "libbuhlmann-swift removed",
        desc: "External package dependency fully removed. Package.swift dependencies: []. Replaced by in-house ZHL-16C implementation inside DiveEngine.",
      },
      {
        title: "BuhlmannTissue (new)",
        desc: "Standard 16-compartment ZHL-16C table (Bühlmann 1995). N₂/He half-times, a/b coefficients. Schreiner equation for linear pressure segments.",
      },
      {
        title: "BuhlmannCore (new)",
        desc: "BuhlmannGas (O₂/He/N₂), BuhlmannEngine struct. Independent N₂ and He tracking. ambientPressure(depth:), addSegment(), addCCRSegment().",
      },
      {
        title: "DecoPlanner (new)",
        desc: "GF slope ceiling via binary search O(log n), 0.01m precision. NDL via 1-min simulation steps. calculateDecoStops() with multi-gas support.",
      },
    ],
    testsKo: [
      { name: "Air 30m GF85 — NDL", desc: "Air 30m, GF 85/85 → NDL 25 ± 3분 범위 내", pass: true },
      { name: "Air 40m/30분 — 감압 필요", desc: "ceiling > 0, 3m 정거장 존재", pass: true },
      { name: "EAN32 vs Air NDL at 30m", desc: "EAN32가 Air보다 NDL 길다 (N₂ 분압 낮음)", pass: true },
      { name: "보수적 GF → NDL 단축", desc: "GF Low 낮을수록 NDL이 더 짧아짐", pass: true },
      { name: "Package.resolved 검증", desc: "libbuhlmann-swift 없음 확인", pass: true },
    ],
    testsEn: [
      { name: "Air 30m GF85 — NDL", desc: "Air 30m, GF 85/85 → NDL within 25 ± 3 min", pass: true },
      { name: "Air 40m/30min — requires deco", desc: "ceiling > 0, 3m stop present", pass: true },
      { name: "EAN32 vs Air NDL at 30m", desc: "EAN32 gives longer NDL (lower N₂ partial pressure)", pass: true },
      { name: "Conservative GF → shorter NDL", desc: "Lower GF Low = shorter NDL", pass: true },
      { name: "Package.resolved verified", desc: "libbuhlmann-swift absent", pass: true },
    ],
    noteKo: "Schreiner 방정식: P(t) = P_alv0 + R·(t − 1/k) − (P_alv0 − P_i0 − R/k)·exp(−k·t). GF Ceiling: P_tol = (P_i − GF·a)·b / ((1−GF)·b + GF)",
    noteEn: "Schreiner eq: P(t) = P_alv0 + R·(t − 1/k) − (P_alv0 − P_i0 − R/k)·exp(−k·t). GF Ceiling: P_tol = (P_i − GF·a)·b / ((1−GF)·b + GF)",
  },
  {
    build: "28",
    date: "2026-04-13",
    titleKo: "Watch 설정 개편 · WatchConnectivity · Action Button · 언어 설정",
    titleEn: "Watch Settings Revamp · WatchConnectivity Fix · Action Button · Language",
    tags: ["watchOS", "iOS", "Fix"],
    changesKo: [
      { title: "WatchSettings 재설계", desc: "가스·GF·ppO₂·알람·화면표시 항목을 그룹화한 새 설정 화면" },
      { title: "WatchConnectivity 안정화", desc: "iPhone ↔ Watch 설정 동기화 신뢰성 개선" },
      { title: "언어 설정", desc: "앱 내 언어 전환 지원 (한국어 / English)" },
      { title: "Action Button 지원", desc: "Apple Watch Ultra Action Button → 스톱워치 시작/정지, 다이브 시작/정지 매핑" },
      { title: "DECO 오탐 수정", desc: "수면 상승 후 DECO 표시 지속 버그 1차 수정 (Build 30에서 완전 해결)" },
    ],
    changesEn: [
      { title: "WatchSettings redesigned", desc: "New settings screen grouping gas, GF, ppO₂, alarms, and display fields" },
      { title: "WatchConnectivity stabilized", desc: "Improved iPhone ↔ Watch settings sync reliability" },
      { title: "Language setting", desc: "In-app language switching (Korean / English)" },
      { title: "Action Button support", desc: "Apple Watch Ultra Action Button maps to: start/stop stopwatch, start/stop dive" },
      { title: "DECO false positive (partial fix)", desc: "First fix for DECO persisting after surfacing (fully resolved in Build 30)" },
    ],
    testsKo: [
      { name: "Action Button — 스톱워치", desc: "다이빙 중 Action Button → 스톱워치 시작/정지", pass: true },
      { name: "언어 전환", desc: "설정에서 English ↔ 한국어 전환 → UI 즉시 반영", pass: true },
      { name: "설정 동기화", desc: "iPhone 앱 GF 변경 → Watch 앱 반영", pass: true },
    ],
    testsEn: [
      { name: "Action Button — stopwatch", desc: "Action Button during dive → starts/stops stopwatch", pass: true },
      { name: "Language switch", desc: "Toggle English ↔ Korean → UI updates immediately", pass: true },
      { name: "Settings sync", desc: "iPhone GF change reflected on Watch", pass: true },
    ],
  },
  {
    build: "9–27",
    date: "2026-03 ~ 2026-04",
    titleKo: "Phase A–D — watchOS 26 재설계 · CNS/OTU · 프리다이빙 · 커스터마이즈",
    titleEn: "Phase A–D — watchOS 26 Redesign · CNS/OTU · Freediving · Customizable Fields",
    tags: ["watchOS", "iOS", "Algorithm", "UI/UX"],
    changesKo: [
      { title: "Phase A — GF 표준화", desc: "Conservative 35/75 · Moderate 40/85 · Aggressive 45/95 (Suunto·Shearwater·Garmin 업계 기준). 법적 면책 화면 제거." },
      { title: "Phase B — watchOS 26 재설계", desc: "DiveColor 토큰 시스템 (Safe/Caution/Critical/Info/Aqua), GlassCard/GlassPill, MainDiveView 4-Zone 레이아웃, Pretendard 폰트 DiveFont.sd()" },
      { title: "Phase C — 알고리즘 확장", desc: "CNS/OTU 산소 독성 (NOAA 기준), GF99/SurfGF 실시간 추적, 안전 정지 상태 머신 (3–6m, 3분), TTS, ppO₂ 경보 체계" },
      { title: "Phase D — 센서·프리다이빙·커스터마이즈", desc: "미디언 필터·1Hz 버킷화 센서 파이프라인, 프리다이빙 모드 (자동 감지, 랩 기록, WatchBorderArc), Zone 3 패널 커스터마이즈, 나침반 서비스" },
    ],
    changesEn: [
      { title: "Phase A — GF standardization", desc: "Conservative 35/75 · Moderate 40/85 · Aggressive 45/95 (matches Suunto/Shearwater/Garmin). Safety disclaimer screen removed." },
      { title: "Phase B — watchOS 26 redesign", desc: "DiveColor token system (Safe/Caution/Critical/Info/Aqua), GlassCard/GlassPill, 4-Zone MainDiveView layout, Pretendard font via DiveFont.sd()" },
      { title: "Phase C — algorithm extension", desc: "CNS/OTU oxygen toxicity (NOAA), real-time GF99/SurfGF, safety stop state machine (3–6m, 3 min), TTS, ppO₂ alert system" },
      { title: "Phase D — sensors, freediving, customization", desc: "Median filter + 1Hz bucketed sensor pipeline, freediving mode (auto-detect, lap recording, WatchBorderArc), Zone 3 panel customization, compass service" },
    ],
    testsKo: [
      { name: "CNS/OTU 누적", desc: "고 ppO₂ 다이빙 후 CNS%/OTU 수치 증가", pass: true },
      { name: "안전 정지 트리거", desc: "10m+ 다이빙 → 4m 체류 시 3분 카운트다운", pass: true },
      { name: "프리다이빙 자동 감지", desc: "수심 1.5m 초과 → 다이브 타이머 자동 시작", pass: true },
      { name: "Zone 3 커스터마이즈", desc: "iOS 앱에서 패널 변경 → Watch에 즉시 반영", pass: true },
    ],
    testsEn: [
      { name: "CNS/OTU accumulation", desc: "High ppO₂ dive → CNS%/OTU values increase", pass: true },
      { name: "Safety stop trigger", desc: "10m+ dive → 3min countdown starts at 4m", pass: true },
      { name: "Freedive auto-detection", desc: "Depth >1.5m → dive timer starts automatically", pass: true },
      { name: "Zone 3 customization", desc: "Panel change in iPhone app → Watch reflects immediately", pass: true },
    ],
  },
  {
    build: "1–8",
    date: "2026-02 ~ 2026-03",
    titleKo: "초기 알파 — 감압 엔진 · 기본 UI · 센서 통합",
    titleEn: "Initial Alpha — Decompression Engine · Core UI · Sensor Integration",
    tags: ["Algorithm", "watchOS", "iOS"],
    changesKo: [
      { title: "Build 1 — 최초 TestFlight", desc: "Bühlmann ZHL-16C GF 엔진 (libbuhlmann-swift), watchOS 기본 UI, iOS 컴패니언 앱" },
      { title: "Build 2–4 — 센서 통합", desc: "CMWaterSubmersionManager 래퍼, SensorDataProcessor (미디언 필터), 시뮬레이터 폴백" },
      { title: "Build 5–7 — UI·경보", desc: "GlassCard/GlassPill 초기 구현, 다이브 로그 (SwiftData), 햅틱 경보 패턴" },
      { title: "Build 8 — 빌드 정합성", desc: "CURRENT_PROJECT_VERSION 정합성 수정" },
    ],
    changesEn: [
      { title: "Build 1 — First TestFlight", desc: "Bühlmann ZHL-16C GF engine (libbuhlmann-swift), basic watchOS UI, iOS companion app" },
      { title: "Build 2–4 — Sensor integration", desc: "CMWaterSubmersionManager wrapper, SensorDataProcessor (median filter), simulator fallback" },
      { title: "Build 5–7 — UI & alerts", desc: "Initial GlassCard/GlassPill, dive log (SwiftData), haptic alert patterns" },
      { title: "Build 8 — Build consistency", desc: "CURRENT_PROJECT_VERSION alignment fix" },
    ],
    testsKo: [
      { name: "Air 18m/30분 NDL > 0", desc: "기본 레크 다이빙 프로파일 NDL 정상 계산", pass: true },
      { name: "Air 40m/30분 감압 필요", desc: "ceiling > 0, 감압 정거장 존재 확인", pass: true },
      { name: "염수 압력↔수심 왕복", desc: "왕복 변환 오차 < 0.01m", pass: true },
      { name: "담수 vs 염수 수심 차이", desc: "담수 수심이 염수보다 큼 (밀도 차이)", pass: true },
    ],
    testsEn: [
      { name: "Air 18m/30min NDL > 0", desc: "Basic recreational profile — NDL computed correctly", pass: true },
      { name: "Air 40m/30min requires deco", desc: "ceiling > 0, deco stop present", pass: true },
      { name: "Saltwater depth round-trip", desc: "Conversion error < 0.01m", pass: true },
      { name: "Freshwater vs saltwater depth", desc: "Freshwater depth > saltwater (density difference)", pass: true },
    ],
  },
];
