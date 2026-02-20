# dadum-front

React 프론트엔드 프로젝트

## 기술 스택

| 항목 | 내용 |
|---|---|
| 프레임워크 | React 19 + TypeScript 5 |
| 번들러 | Vite 6 |
| 스타일 | TailwindCSS v4 |
| 서버 상태 | TanStack Query v5 |
| 패키지 매니저 | pnpm (Node >= 22) |
| 컨테이너 | Docker (dev/prod) |

## 프로덕션 서버: nginx 선택 이유

`vite preview`는 프로덕션 용도가 아닌 빌드 결과 확인용.
nginx는 정적 파일 캐시 헤더, gzip 압축, SPA fallback(`try_files`)을 기본 지원하며 프로덕션 검증된 안정성을 제공.

## 포트

| 환경 | 포트 |
|---|---|
| 개발 (Vite dev server) | 5173 |
| 프로덕션 (nginx in Docker) | 4173 (host) → 80 (container) |

## 사전 요구사항

- Node.js >= 22 LTS
- pnpm >= 9
- Docker + Docker Compose

## 로컬 개발 (Docker 없이)

```bash
pnpm install
pnpm dev        # http://localhost:5173
```

## Make 명령어

```bash
make install    # 의존성 설치 (pnpm)
make dev        # 개발 서버 실행 (Docker, port 5173)
make build      # 프로덕션 Docker 이미지 빌드
make prod       # 프로덕션 서버 실행 (Docker, port 4173)
make stop       # 모든 컨테이너 중지
make logs       # 컨테이너 로그 확인
make clean      # 사용하지 않는 도커 자원 정리
```

## 최초 실행 순서

```bash
# 1. 의존성 설치 (pnpm-lock.yaml 생성)
pnpm install

# 2-a. 로컬 개발
pnpm dev

# 2-b. Docker 개발
make dev

# 3. 프로덕션 빌드 + 실행
make build
make prod
```

## Tailwind v4 커스터마이징

v4는 CSS-first 설정 방식. `tailwind.config.ts` 대신 `src/index.css`에서:

```css
@import "tailwindcss";

@theme {
  --color-brand: #3b82f6;
  --font-sans: 'Pretendard', sans-serif;
}
```

## 폴더 구조

```
dadum-front/
├── docker/             # docker-compose 파일
├── scripts/            # run_dev.sh, run_prod.sh
├── src/
│   ├── hooks/          # useHealth.ts (TanStack Query 예시)
│   ├── App.tsx
│   ├── main.tsx        # QueryClientProvider 진입점
│   └── index.css       # Tailwind import
├── Dockerfile.dev
├── Dockerfile.prod     # 멀티스테이지 (builder + nginx)
├── nginx.conf
├── Makefile
└── vite.config.ts
```
