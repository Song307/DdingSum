# Git Commit 컨벤션

## 형식
```
[태그] 간단한 설명
```

## 커밋 태그

| 태그 | 설명 | 예시 |
|------|------|------|
| feat | 새로운 기능 추가 | `feat: 로그인 기능 추가` |
| fix | 버그 수정 | `fix: 채팅 중복 버그 수정` |
| refactor | 코드 리팩토링 | `refactor: 인증 로직 분리` |
| docs | 문서 수정 | `docs: API 명세 업데이트` |
| style | 코드 스타일 변경 | `style: 포맷팅 개선` |
| test | 테스트 코드 작성 | `test: 인증 테스트 추가` |
| chore | 패키지 관리 | `chore: 의존성 업데이트` |
| comment | 주석 추가/수정 | `comment: 불필요한 주석 제거` |
| hotfix | 배포 버전 긴급 수정 | `hotfix: 서버 설정 변경` |
| rename | 파일/클래스 이름 변경 | `rename: AuthController 변경` |
| remove | 파일/클래스 삭제 | `remove: 사용 안 하는 DTO 제거` |
| cicd | CI/CD 설정 | `cicd: Github Actions 추가` |

## 규칙
- 태그는 소문자만 사용
- 설명은 현재형으로 작성 (예: "추가" O, "추가됨" X)
- 한 줄로 최대 50자 이내
- 구체적이고 명확한 설명
