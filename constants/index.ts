// 프로젝트 전체 상수
export const APP_NAME = '띵썸';
export const APP_DESCRIPTION = '캠퍼스 전용 신뢰 기반 소개팅 플랫폼';

// 학교 관련
export const UNIVERSITY_EMAIL_DOMAIN = '@mju.ac.kr';
export const UNIVERSITY_NAME = '명지대학교';

// 매칭 관련
export const CHAT_ROOM_DURATION_HOURS = 24;
export const MAX_INTERESTS = 5;
export const MAX_PHOTOS = 5;

// 분석 관련
export const SOM_STAGE = {
  STRANGER: 'stranger',
  FRIEND: 'friend',
  EARLY_SOM: 'early-som',
  RIPENED_SOM: 'ripened-som',
  DATING_READY: 'dating-ready',
} as const;

// API 설정
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
export const API_TIMEOUT = 30000; // 30초
