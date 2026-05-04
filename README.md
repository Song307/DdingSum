# 띵썸 (DdingSum)

🎓 **명지대학교 재학생 전용 캠퍼스 소개팅 플랫폼**

- **기술 스택**: Next.js, TypeScript, Tailwind CSS, Supabase
- **상태**: 개발 중 (🚀 AI 구현 준비 완료)

---

## 🚀 빠른 시작

### 프로젝트 설정

```bash
# 1. 의존성 설치
npm install

# 2. 환경 변수 설정
cp .env.example .env.local
# .env.local 파일 편집 후 Supabase 정보 입력

# 3. 개발 서버 실행
npm run dev
```

### 브라우저에서 확인
```
http://localhost:3000
```

---

## 📖 문서

- [**프로젝트 구조**](./docs/STRUCTURE.md) - 디렉토리 및 페이지 설명
- [**협업 가이드**](./.github/README.md) - Git, 커밋, PR 규칙
- [**PRD**](./.github/PRD.md) - 프로젝트 요구사항
- [**기능 목록**](./.github/features.md) - 구현할 기능들

---

## 🗂️ 프로젝트 구조

```
ddingsum/
├── app/                 # Next.js 페이지 (라우팅)
├── components/          # React 컴포넌트 (기능별)
├── lib/                 # 유틸리티 및 API
├── types/               # TypeScript 타입
├── constants/           # 상수
├── styles/              # 글로벌 스타일
├── .github/             # 협업 가이드
├── docs/                # 문서
└── public/              # 정적 파일
```

---

## 📝 개발 흐름

### 1️⃣ 브랜치 생성
```bash
git checkout -b [태그]/#[이슈번호]
# 예: feat/#1, fix/#5
```

### 2️⃣ 커밋 메시지
```bash
git commit -m "[태그] 설명"
# 예: [feat] 로그인 페이지 구현
```

### 3️⃣ PR 생성 및 병합
- `.github/README.md` 참고

---

## 🤖 AI 구현 순서

1. **인증** - 로그인, 회원가입, 이메일 인증
2. **프로필** - 프로필 조회, 수정
3. **매칭** - 랜덤 매칭 시스템
4. **채팅** - 1:1 채팅
5. **AI 분석** - 썸 측정기

---

## 📚 유용한 명령어

```bash
# 코드 포맷팅
npm run format

# ESLint 검사 및 자동 수정
npm run lint

# TypeScript 타입 체크
npm run type-check

# 프로젝트 빌드
npm run build

# 프로덕션 실행
npm start
```

---

## 📞 문의

프로젝트 리더: **Song307**  
팀: 띵썸 개발팀 (3인)

**마지막 업데이트**: 2026년 5월
