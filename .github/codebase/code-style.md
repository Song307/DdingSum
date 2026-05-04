# 코드 스타일 규칙 (Code Style)

## TypeScript 타입 정의

### 명확한 타입 정의
```typescript
// Good
interface User {
  id: string;
  email: string;
  isActive: boolean;
}

// Bad
const user: any = getUser();
```

### 함수 반환 타입
```typescript
// Good
function getAge(birthDate: Date): number {
  return new Date().getFullYear() - birthDate.getFullYear();
}

// Bad
function getAge(birthDate) {
  return new Date().getFullYear() - birthDate.getFullYear();
}
```

## 함수 설계

### 단일 책임 원칙
```typescript
// Good
function getUserProfile(id: string): Promise<User> {
  return supabase.getUserProfile(id);
}

// Bad - 너무 많은 책임
function getUserData(id: string) {
  const user = getUser(id);
  const matches = getMatches(id);
  const notifications = getNotifications(id);
}
```

### 매개변수 수 제한
```typescript
// Good - 매개변수 3개 이하
function updateUser(id: string, data: UpdateUserData): void {}

// Bad - 너무 많은 매개변수
function updateUser(id, name, email, phone, address, city) {}
```

## 포맷팅

### 들여쓰기
- 2 space 들여쓰기

### 조건문
```typescript
// Good - 조기 return
function getUser(id: string): User | null {
  if (!id) return null;
  return database.find(id);
}

// Bad - 깊은 중첩
if (id) {
  const user = database.find(id);
  if (user) {
    return user;
  }
}
```

### 삼항 연산자
```typescript
// Good - 간단한 조건
const status = isActive ? 'active' : 'inactive';

// Bad - 복잡한 삼항
const status = isActive ? (isPremium ? 'premium' : 'active') : 'inactive';
```

## 문자열

### 템플릿 리터럴
```typescript
// Good
const msg = `Hello, ${name}! You are ${age}.`;

// Bad
const msg = 'Hello, ' + name + '! You are ' + age + '.';
```

## 배열 메서드
