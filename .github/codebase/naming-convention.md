# 코드 네이밍 규칙 (Naming Convention)

## 파일 네이밍

### 컴포넌트
- 형식: `PascalCase`
- 확장자: `.tsx`
- 예: `UserCard.tsx`, `LoginForm.tsx`

### 함수/유틸
- 형식: `camelCase`
- 확장자: `.ts`
- 예: `getUserProfile.ts`, `validateEmail.ts`

### 상수
- 형식: `UPPER_SNAKE_CASE`
- 확장자: `.ts`
- 예: `API_BASE_URL.ts`, `ERROR_MESSAGES.ts`

### 타입
- 형식: `PascalCase`
- 확장자: `.ts`
- 예: `User.ts`, `UserProfile.ts`

## 변수 네이밍

### 일반 변수
```typescript
const userName = "John";           // camelCase
const userEmail = "john@example.com";
const matchCount = 5;
```

### 상수
```typescript
const MAX_LENGTH = 100;            // UPPER_SNAKE_CASE
const API_TIMEOUT = 5000;
```

### Boolean
```typescript
const isLoading = true;            // is/has 접두사
const hasError = false;
const canSubmit = true;
```

### 배열
```typescript
const userList = [];               // 복수형 또는 List 접미사
const users = [];
```

## 함수 네이밍

### 일반 함수
```typescript
function getUserProfile(id: string) {}    // 동사 + 명사
function validateEmail(email: string) {}
```

### 이벤트 핸들러
```typescript
const handleSubmit = () => {};     // handle + 이벤트명
const handleClick = () => {};
```

### API 함수
```typescript
async function fetchUserProfile(id: string) {}    // fetch + 명사
async function postLogin(email: string) {}
```

## 폴더 네이밍

```
app/                    # 소문자
├── auth/
├── profile/
components/
├── common/
lib/
types/
constants/
```
