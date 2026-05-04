# 띵썸 프로젝트 구조

## 폴더 설명

- **app/** - Next.js 라우트 (페이지 구조)
- **components/** - React 컴포넌트 (기능별 분류)
- **lib/** - 유틸리티 함수 및 API 호출
- **types/** - TypeScript 타입 정의
- **constants/** - 상수 모음
- **styles/** - 글로벌 스타일

## 각 페이지 설명

| 경로 | 설명 |
|------|------|
| `/` | 홈페이지 |
| `/auth/login` | 로그인 |
| `/auth/signup` | 회원가입 |
| `/auth/email-verify` | 이메일 인증 |
| `/profile` | 프로필 조회 |
| `/profile/edit` | 프로필 수정 |
| `/matching` | 매칭 페이지 |
| `/chat` | 채팅 목록 |
| `/chat/[matchId]` | 1:1 채팅 |
| `/ai-analysis` | AI 썸 측정기 |

## AI 작업 순서

1. **인증** - `/auth/*` 페이지 구현
2. **프로필** - `/profile/*` 페이지 구현
3. **매칭** - `/matching` 페이지 구현
4. **채팅** - `/chat/*` 페이지 구현
5. **AI 분석** - `/ai-analysis` 페이지 구현
