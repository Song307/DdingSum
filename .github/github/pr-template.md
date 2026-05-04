# GitHub Pull Request 작성 양식

## 기본 구조

```markdown
# [태그] 제목

## Issue
#[이슈번호]

## 변경 내용
- 변경 내용 요약

## 구현 사항
- 변경된 파일 목록
- 변경 이유

## 참고 사항
- 검토가 필요한 부분
```

## 태그 종류

| 태그 | 설명 | 예시 |
|------|------|------|
| feat | 새로운 기능 | `[feat] 로그인 페이지 추가` |
| fix | 버그 수정 | `[fix] 채팅 중복 버그` |
| refactor | 코드 리팩토링 | `[refactor] 인증 로직 분리` |
| docs | 문서 작성 | `[docs] API 명세 작성` |
| test | 테스트 작성 | `[test] 인증 로직 테스트` |

## 규칙

- Reviewers: 모든 팀원 지정
- Assignees: 자신 설정
- Labels: Issue와 동일하게 설정
- 승인 조건: 팀원 절반 이상 승인
- 병합 방식: Squash and Merge
