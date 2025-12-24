개발자에게 전달하여 즉시 작업에 착수할 수 있도록, **Next.js(App Router) + Tailwind CSS** 기반의 웹사이트 구축을 위한 **제품 요구사항 정의서(PRD)**를 작성해 드립니다.

이 문서는 **단일 페이지(One-page Scroll)** 형식을 권장하며, 모바일 방문자(인스타그램 유입)를 최우선으로 고려했습니다.

---

# [PRD] 공연 <새, 나뭇잎, 고양이, 그리고 강> 공식 웹사이트 구축

## 1. 프로젝트 개요 (Project Overview)
*   **프로젝트명:** 2026 수원 d.o.t 공연 <새, 나뭇잎, 고양이, 그리고 강> 공식 웹사이트
*   **목적:** 공연 정보 전달, 아티스트 소개, **네이버 예약 페이지로의 트래픽 유도 (Conversion)**
*   **배포 목표일:** 2025년 12월 25일 (D-2)
*   **타겟 디바이스:** Mobile First (인스타그램 프로필 링크 유입 주력), Desktop 대응

## 2. 기술 스택 및 개발 환경 (Tech Stack)
*   **Framework:** Next.js 15 (Latest Stable) - **App Router** 필수 사용
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Animation:** Framer Motion (스크롤 인터랙션 및 페이드인 효과)
*   **Deployment:** Vercel (GitHub 연동 자동 배포)
*   **Package Manager:** npm or pnpm
*   **Icons:** Lucide-react or React-icons

## 3. 정보 구조 (Information Architecture)
**Type:** One-Page Scroll Landing Page

1.  **Hero Section (메인)**: 타이틀, 일시, 장소, **예매하기(CTA)**
2.  **Introduction (소개)**: 공연 컨셉(4가지 키워드) 스토리텔링
3.  **Line-up (아티스트)**: 남수(새) → 여울(나뭇잎) → 하루살이(고양이) → 강가(강) 순서
4.  **Timetable (타임테이블)**: 18:00 ~ 20:00 상세 일정
5.  **Location (오시는 길)**: 지도, 주소, 주차 안내
6.  **Footer**: 주최/주관, 문의처, SNS 링크

## 4. 상세 기능 및 UI 요구사항 (Functional Specs)

### 4.1. 공통 디자인 가이드 (Design System)
*   **Color Palette:**
    *   **Background:** `#0f0f0f` (지하 공간 d.o.t의 어두운 분위기)
    *   **Text:** `#f5f5f5` (Off-white)
    *   **Accent:**
        *   Bird(남수): Sky Blue / White
        *   Leaf(여울): Forest Green
        *   Cat(하루살이): Vivid Orange or Neon Purple
        *   River(강가): Deep Ocean Blue
*   **Typography:** `Pretendard` (Web font CDN or Local)
*   **Layout:** `max-w-md` (모바일 최적화 레이아웃을 데스크탑에서도 중앙 정렬로 보여줌 - 인스타그램 감성)

### 4.2. 섹션별 상세 명세

#### **1) Hero Section**
*   **배경:** 포스터 이미지 혹은 어두운 그라디언트 + 노이즈 텍스처.
*   **내용:**
    *   Title: *새, 나뭇잎, 고양이, 그리고 강* (Serif 폰트 권장)
    *   Date: 2026. 01. 17 Sat 18:00
    *   Venue: Suwon d.o.t
*   **Action:** 고정형(Sticky) 혹은 중앙 배치된 **[예매하러 가기]** 버튼 (네이버 예약 링크 연결).

#### **2) Introduction**
*   **내용:** "수원 화서문로의 지하 공간 Dot..." 로 시작하는 소개글 (테마형).
*   **연출:** 스크롤 시 텍스트가 서서히 떠오르는(Fade-in) 효과.

#### **3) Artist Line-up (Card UI)**
*   각 아티스트별 카드 섹션 구성.
*   **구성:** 아티스트 사진(상단) + 이름 + 키워드(Bird/Leaf/Cat/River) + 소개글.
*   **데이터:**
    *   **남수:** *Theme: Bird* | "감각을 깨우는 자유로운 비상"
    *   **여울:** *Theme: Leaf* | "도시의 소음 속에서 흔들리는 순수"
    *   **하루살이프로젝트:** *Theme: Cat* | "완벽하지 않아서 더 완벽한, 예측불허의 비트"
    *   **강가히말라야:** *Theme: River* | "히말라야에서 시작되어 바다로 흐르는 영혼"
*   **기능:** 인스타그램 아이콘 클릭 시 해당 아티스트 인스타로 이동.

#### **4) Timetable**
*   심플한 타임라인 디자인.
*   18:00 Opening / 18:05 남수 / 18:35 여울 / 19:05 하루살이 / 19:35 강가히말라야 / 20:00 Closing

#### **5) Location & Footer**
*   **지도:** 네이버 지도 혹은 카카오맵 버튼 링크.
*   **주소:** 경기 수원시 팔달구 화서문로 32번길 4, B1
*   **Copyright:** © 2026 Dot Concert. All rights reserved.

### 4.3. SEO 및 메타데이터 (Next.js Metadata)
*   **Title:** 새, 나뭇잎, 고양이, 그리고 강 | 수원 d.o.t 공연
*   **Description:** 1월 17일, 서로 다른 네 가지 감각이 공명하는 지하의 밤. 남수, 여울, 하루살이프로젝트, 강가히말라야.
*   **OG Image:** 포스터 이미지 반드시 설정 (카카오톡/인스타그램 공유 시 썸네일 노출).

---

## 5. 개발 워크플로우 (Development Workflow)

개발자는 아래 명령어를 순차적으로 실행하여 초기 세팅 및 배포를 진행합니다.

### Step 1. 프로젝트 생성 (Local)
```bash
# Next.js 최신버전 설치 (TypeScript, Tailwind, App Router 선택)
npx create-next-app@latest dot-concert --typescript --tailwind --eslint

# 필요 라이브러리 설치
cd dot-concert
npm install framer-motion lucide-react clsx tailwind-merge
```

### Step 2. Git 초기화 및 커밋
```bash
git init
git add .
git commit -m "Initial commit: Setup Next.js with Tailwind"
```

### Step 3. GitHub 리포지토리 생성 및 푸시 (GitHub CLI 활용)
```bash
# GitHub 리포지토리 생성 (Public 권장)
gh repo create dot-concert --public --source=. --remote=origin

# 푸시
git push -u origin main
```

### Step 4. Vercel 배포 (Vercel CLI 활용)
```bash
# Vercel 로그인 (최초 1회)
vercel login

# 프로젝트 배포 (설정 질문에 모두 Enter/Yes)
vercel
```

### Step 5. Production 배포 설정
```bash
# 이후 코드 수정 후 배포 시
git add .
git commit -m "Update: Add artist section"
git push origin main
# Vercel이 GitHub Push를 감지하여 자동으로 Production 배포를 진행합니다.
```

---

## 6. 개발자 전달 사항 (To-Do List)

1.  **이미지 에셋 요청:** 포스터 파일(고화질), 각 아티스트 프로필 사진 4장을 `public/images` 폴더에 넣어주세요.
2.  **링크 연결:** '예매하기' 버튼의 `href` 속성에 네이버 예약 링크를 아직 모른다면 임시로 `#` 처리하고 주석 달아주세요.
3.  **폰트 적용:** `layout.tsx`에 Pretendard 폰트 적용 확인해주세요.

---

이 문서를 개발자에게 전달하시면, 추가적인 설명 없이도 바로 작업이 가능합니다. 멋진 웹사이트가 완성되길 바랍니다!